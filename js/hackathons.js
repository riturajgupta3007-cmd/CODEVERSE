/**
 * CODEVERSE - Hackathons Directory Controller
 * Handles Directory listing, Filtering (Status, Format, Categories),
 * Searching, Sorting, and Bookmarking interactions.
 */

let currentFilters = {
  status: "all",
  format: "all",
  category: "all",
  search: "",
  sort: "starting-soon"
};

function renderHackathonCard(h) {
  const currentUser = window.Auth ? window.Auth.getCurrentUser() : null;
  const isSaved = currentUser ? window.MockDB.isSaved(currentUser.id, h.id) : false;

  // Format date display
  const startDate = new Date(h.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const deadlineDate = new Date(h.registrationDeadline).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  let statusClass = "upcoming";
  let statusText = "Upcoming";
  if (h.status === "ongoing") {
    statusClass = "ongoing";
    statusText = "Ongoing";
  } else if (h.status === "completed") {
    statusClass = "completed";
    statusText = "Completed";
  }

  const techBadges = (h.technologies || []).slice(0, 3).map(t => `<span class="mini-tech-tag">${t}</span>`).join("");

  return `
    <article class="hackathon-card card-3d-tilt" data-id="${h.id}">
      <div class="card-banner-wrap">
        <img src="${h.banner}" alt="${h.name}" class="card-banner" loading="lazy" />
        <div class="card-banner-overlay"></div>
        <div class="card-top-badges">
          <span class="status-badge ${statusClass}">
            <span class="pulse-dot" style="width:6px;height:6px;border-radius:50%;background:#fff;"></span>
            ${statusText}
          </span>
          <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-id="${h.id}" title="${isSaved ? 'Remove from Saved' : 'Save Hackathon'}" aria-label="Save Hackathon">
            <i data-lucide="bookmark"></i>
          </button>
        </div>
      </div>

      <div class="card-body">
        <div class="card-meta-row">
          <span class="card-organizer">${h.organizer}</span>
          <span class="card-format"><i data-lucide="map-pin" style="width:14px;height:14px;"></i> ${h.format}</span>
        </div>

        <h3 class="card-title">
          <a href="hackathon-details.html?id=${h.slug}">${h.name}</a>
        </h3>

        <p class="card-desc">${h.shortDescription}</p>

        <div class="card-tech-tags">
          ${techBadges}
        </div>

        <div class="card-details-box">
          <div class="detail-col">
            <span class="detail-lbl">${h.status === 'completed' ? 'Event Held' : 'Starts'}</span>
            <span class="detail-val">${startDate}</span>
          </div>
          <div class="detail-col">
            <span class="detail-lbl">Prize Pool</span>
            <span class="detail-val" style="color:var(--electric-blue);">${h.prizePool || 'Swag & Certs'}</span>
          </div>
        </div>

        <div class="card-footer">
          <a href="hackathon-details.html?id=${h.slug}" class="btn-secondary btn-view-details">
            <span>View Details</span>
            <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
          </a>
          ${h.status !== 'completed' ? `
            <a href="register-event.html?id=${h.slug}" class="btn-primary-sm" title="Register">
              <span>Register</span>
            </a>
          ` : `
            <span class="btn-secondary-sm" style="opacity:0.6; cursor:default;">Results Out</span>
          `}
        </div>
      </div>
    </article>
  `;
}

function applyFiltersAndRender() {
  const container = document.getElementById("hackathonsGrid");
  const countEl = document.getElementById("resultsCount");
  if (!container) return;

  let list = window.HackathonData.getAll();

  // 1. Status Filter (Tab)
  if (currentFilters.status !== "all") {
    list = list.filter(h => h.status === currentFilters.status);
  }

  // 2. Format Filter
  if (currentFilters.format !== "all") {
    list = list.filter(h => h.format.toLowerCase() === currentFilters.format.toLowerCase());
  }

  // 3. Category Filter
  if (currentFilters.category !== "all") {
    list = list.filter(h => h.category.toLowerCase() === currentFilters.category.toLowerCase());
  }

  // 4. Search Filter
  if (currentFilters.search.trim()) {
    const q = currentFilters.search.toLowerCase().trim();
    list = list.filter(h => {
      const matchName = h.name.toLowerCase().includes(q);
      const matchOrg = h.organizer.toLowerCase().includes(q);
      const matchDesc = h.shortDescription.toLowerCase().includes(q);
      const matchLoc = (h.location || "").toLowerCase().includes(q);
      const matchTech = (h.technologies || []).some(t => t.toLowerCase().includes(q));
      return matchName || matchOrg || matchDesc || matchLoc || matchTech;
    });
  }

  // 5. Sorting
  if (currentFilters.sort === "starting-soon") {
    list.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  } else if (currentFilters.sort === "deadline") {
    list.sort((a, b) => new Date(a.registrationDeadline) - new Date(b.registrationDeadline));
  } else if (currentFilters.sort === "recently-added") {
    list.sort((a, b) => b.id.localeCompare(a.id));
  } else if (currentFilters.sort === "popular") {
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  // Update Count
  if (countEl) {
    countEl.innerHTML = `Showing <span>${list.length}</span> hackathons`;
  }

  // Render cards or empty state
  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results-state">
        <div class="no-results-icon">
          <i data-lucide="search-x" style="width:32px;height:32px;"></i>
        </div>
        <h3>No Hackathons Found</h3>
        <p>No events matched your current filters or search terms. Try loosening your criteria.</p>
        <button class="btn-primary-sm" id="resetFiltersBtn">
          <i data-lucide="rotate-ccw" style="width:16px;height:16px;"></i>
          <span>Clear All Filters</span>
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", clearAllFilters);
    }
  } else {
    container.innerHTML = list.map(renderHackathonCard).join("");
    attachBookmarkHandlers();
  }

  if (window.lucide) window.lucide.createIcons();
}

function attachBookmarkHandlers() {
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
  bookmarkButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const user = window.Auth ? window.Auth.getCurrentUser() : null;
      if (!user) {
        window.showToast("Please log in to bookmark hackathons.", "error");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1200);
        return;
      }

      const hackathonId = btn.getAttribute("data-id");
      const isSaved = window.MockDB.toggleSaveHackathon(user.id, hackathonId);
      btn.classList.toggle("saved", isSaved);
      btn.title = isSaved ? "Remove from Saved" : "Save Hackathon";

      if (window.showToast) {
        window.showToast(isSaved ? "Saved to your bookmarks!" : "Removed from bookmarks.", isSaved ? "success" : "info");
      }

      if (window.Auth && window.Auth.updateNavbarAuthUI) {
        window.Auth.updateNavbarAuthUI();
      }
    });
  });
}

function clearAllFilters() {
  currentFilters = {
    status: "all",
    format: "all",
    category: "all",
    search: "",
    sort: "starting-soon"
  };

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const formatSelect = document.getElementById("formatFilter");
  if (formatSelect) formatSelect.value = "all";

  const sortSelect = document.getElementById("sortFilter");
  if (sortSelect) sortSelect.value = "starting-soon";

  // Reset tab buttons
  document.querySelectorAll(".category-tabs-nav .tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-status") === "all");
  });

  // Reset category pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-category") === "all");
  });

  applyFiltersAndRender();
}

document.addEventListener("DOMContentLoaded", () => {
  // Check URL params for preselected tab (e.g., ?tab=upcoming or ?category=ai)
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get("tab");
  const catParam = urlParams.get("category");

  if (tabParam) {
    currentFilters.status = tabParam;
    document.querySelectorAll(".category-tabs-nav .tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-status") === tabParam);
    });
  }

  if (catParam) {
    currentFilters.category = catParam;
    document.querySelectorAll(".cat-pill").forEach(pill => {
      pill.classList.toggle("active", pill.getAttribute("data-category").toLowerCase() === catParam.toLowerCase());
    });
  }

  // 1. Tab Navigation Click Listeners
  document.querySelectorAll(".category-tabs-nav .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tabs-nav .tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilters.status = btn.getAttribute("data-status");
      applyFiltersAndRender();
    });
  });

  // 2. Search Input Listener (Debounced)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentFilters.search = e.target.value;
        applyFiltersAndRender();
      }, 250);
    });
  }

  // 3. Format Select Listener
  const formatSelect = document.getElementById("formatFilter");
  if (formatSelect) {
    formatSelect.addEventListener("change", (e) => {
      currentFilters.format = e.target.value;
      applyFiltersAndRender();
    });
  }

  // 4. Sort Select Listener
  const sortSelect = document.getElementById("sortFilter");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentFilters.sort = e.target.value;
      applyFiltersAndRender();
    });
  }

  // 5. Category Pills Listener
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilters.category = pill.getAttribute("data-category");
      applyFiltersAndRender();
    });
  });

  // 6. Clear Filters Button
  const clearBtn = document.getElementById("clearFiltersBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAllFilters);
  }

  // Initial render
  if (document.getElementById("hackathonsGrid")) {
    applyFiltersAndRender();
  }
});

// Export functions to window for cross-page reuse (profile, details)
window.renderHackathonCard = renderHackathonCard;
window.attachBookmarkHandlers = attachBookmarkHandlers;

