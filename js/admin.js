/**
 * CODEVERSE - Admin Portal Management Controller
 * Handles CRUD operations, dashboard stats, search, editing,
 * reset demo database, and verification toggles.
 */

let editingHackathonId = null;

document.addEventListener("DOMContentLoaded", () => {
  renderAdminStats();
  renderAdminTable();

  // Search input in admin
  const adminSearch = document.getElementById("adminSearchInput");
  if (adminSearch) {
    adminSearch.addEventListener("input", (e) => {
      renderAdminTable(e.target.value.trim().toLowerCase());
    });
  }

  // Filter by category or status
  const adminStatusFilter = document.getElementById("adminStatusFilter");
  if (adminStatusFilter) {
    adminStatusFilter.addEventListener("change", () => {
      renderAdminTable();
    });
  }

  // Add Hackathon Button
  const btnOpenAddModal = document.getElementById("btnOpenAddHackathon");
  if (btnOpenAddModal) {
    btnOpenAddModal.addEventListener("click", () => {
      openHackathonModal(null);
    });
  }

  // Reset to Seed Dataset Button
  const btnResetSeed = document.getElementById("btnResetSeedData");
  if (btnResetSeed) {
    btnResetSeed.addEventListener("click", () => {
      if (confirm("Are you sure you want to restore the default sample dataset? Any unsaved edits will be refreshed.")) {
        window.HackathonData.resetToSeed();
        renderAdminStats();
        renderAdminTable();
        window.showToast("Dataset restored to verified demo seeds.", "success");
      }
    });
  }

  // Export JSON Button
  const btnExport = document.getElementById("btnExportJSON");
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.HackathonData.getAll(), null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `codeverse_hackathons_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      window.showToast("Hackathon database exported successfully.", "info");
    });
  }

  // Add/Edit Form Submit
  const hackathonForm = document.getElementById("hackathonAdminForm");
  if (hackathonForm) {
    hackathonForm.addEventListener("submit", handleFormSubmit);
  }

  // Modal Close buttons
  const closeModalBtns = document.querySelectorAll(".close-modal-btn");
  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("hackathonModal").classList.remove("active");
    });
  });
});

function renderAdminStats() {
  const all = window.HackathonData.getAll();
  const regs = window.MockDB.getRegistrations();
  const saved = window.MockDB.getSavedHackathons();

  const totalEl = document.getElementById("statTotalHackathons");
  const upcomingEl = document.getElementById("statUpcomingHackathons");
  const regsEl = document.getElementById("statTotalRegistrations");
  const savedEl = document.getElementById("statTotalSaved");

  if (totalEl) totalEl.textContent = all.length;
  if (upcomingEl) upcomingEl.textContent = all.filter(h => h.status === "upcoming").length;
  if (regsEl) regsEl.textContent = regs.length;
  if (savedEl) savedEl.textContent = saved.length;
}

function renderAdminTable(searchQuery = "") {
  const tbody = document.getElementById("adminHackathonsTbody");
  if (!tbody) return;

  let list = window.HackathonData.getAll();

  const statusFilter = document.getElementById("adminStatusFilter") ? document.getElementById("adminStatusFilter").value : "all";
  if (statusFilter !== "all") {
    list = list.filter(h => h.status === statusFilter);
  }

  if (searchQuery) {
    list = list.filter(h =>
      h.name.toLowerCase().includes(searchQuery) ||
      h.organizer.toLowerCase().includes(searchQuery) ||
      h.category.toLowerCase().includes(searchQuery)
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;">No hackathons found matching your criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(h => {
    const startDate = new Date(h.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    return `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:12px;">
            <img src="${h.banner}" alt="${h.name}" style="width:48px;height:48px;border-radius:8px;object-fit:cover;" />
            <div>
              <div style="font-weight:700;color:var(--text-white);">${h.name}</div>
              <div style="font-size:0.75rem;color:var(--text-dim);">${h.organizer}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="status-badge ${h.status}">${h.status}</span>
        </td>
        <td>${h.category}</td>
        <td>${h.format}</td>
        <td>${startDate}</td>
        <td>
          <div class="admin-table-actions">
            <a href="hackathon-details.html?id=${h.slug}" target="_blank" class="btn-icon-action" title="View Public Page">
              <i data-lucide="external-link" style="width:16px;height:16px;"></i>
            </a>
            <button class="btn-icon-action" onclick="openHackathonModal('${h.id}')" title="Edit Hackathon">
              <i data-lucide="edit-3" style="width:16px;height:16px;"></i>
            </button>
            <button class="btn-icon-action delete" onclick="deleteHackathonItem('${h.id}')" title="Delete Hackathon">
              <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  if (window.lucide) window.lucide.createIcons();
}

function openHackathonModal(id) {
  editingHackathonId = id;
  const modal = document.getElementById("hackathonModal");
  const modalTitle = document.getElementById("modalTitle");
  const form = document.getElementById("hackathonAdminForm");

  if (!modal || !form) return;

  if (id) {
    modalTitle.textContent = "Edit Hackathon";
    const item = window.HackathonData.getByIdOrSlug(id);
    if (item) {
      document.getElementById("modalHackathonName").value = item.name || "";
      document.getElementById("modalOrganizer").value = item.organizer || "";
      document.getElementById("modalCategory").value = item.category || "AI & Machine Learning";
      document.getElementById("modalFormat").value = item.format || "Online";
      document.getElementById("modalLocation").value = item.location || "";
      document.getElementById("modalStartDate").value = item.startDate ? item.startDate.split("T")[0] : "";
      document.getElementById("modalEndDate").value = item.endDate ? item.endDate.split("T")[0] : "";
      document.getElementById("modalDeadline").value = item.registrationDeadline ? item.registrationDeadline.split("T")[0] : "";
      document.getElementById("modalPrizePool").value = item.prizePool || "";
      document.getElementById("modalBannerUrl").value = item.banner || "";
      document.getElementById("modalShortDesc").value = item.shortDescription || "";
      document.getElementById("modalFullDesc").value = item.fullDescription || "";
      document.getElementById("modalFeatured").checked = Boolean(item.featured);
      document.getElementById("modalExternal").checked = Boolean(item.isExternal);
    }
  } else {
    modalTitle.textContent = "Add New Hackathon";
    form.reset();
  }

  modal.classList.add("active");
}

function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("modalHackathonName").value.trim();
  const organizer = document.getElementById("modalOrganizer").value.trim();
  const category = document.getElementById("modalCategory").value;
  const format = document.getElementById("modalFormat").value;
  const location = document.getElementById("modalLocation").value.trim() || (format === "Online" ? "Global Virtual" : "Tech Campus");
  const startDate = document.getElementById("modalStartDate").value;
  const endDate = document.getElementById("modalEndDate").value;
  const deadline = document.getElementById("modalDeadline").value;
  const prizePool = document.getElementById("modalPrizePool").value.trim() || "TBA";
  const banner = document.getElementById("modalBannerUrl").value.trim() || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80";
  const shortDescription = document.getElementById("modalShortDesc").value.trim();
  const fullDescription = document.getElementById("modalFullDesc").value.trim() || shortDescription;
  const featured = document.getElementById("modalFeatured").checked;
  const isExternal = document.getElementById("modalExternal").checked;

  if (!name || !organizer || !startDate || !endDate || !deadline || !shortDescription) {
    window.showToast("Please fill in all required fields.", "error");
    return;
  }

  const payload = {
    name,
    organizer,
    category,
    format,
    location,
    startDate: startDate + "T09:00:00",
    endDate: endDate + "T18:00:00",
    registrationDeadline: deadline + "T23:59:00",
    prizePool,
    banner,
    shortDescription,
    fullDescription,
    featured,
    isExternal,
    technologies: [category, "Full Stack", "APIs"],
    tracks: [
      { id: "tr-custom-1", title: "Open Innovation Track", description: "Solve core challenges in the designated domain.", tags: ["Innovation", "FullStack"] }
    ],
    prizes: [
      { rank: "1st Place", title: "Winner Trophy & Cash", amount: prizePool, perks: "Mentorship & Swag" }
    ],
    sponsors: [
      { name: organizer, tier: "Host Partner", logo: "ORG" }
    ]
  };

  if (editingHackathonId) {
    window.HackathonData.updateHackathon(editingHackathonId, payload);
    window.showToast("Hackathon updated successfully!", "success");
  } else {
    window.HackathonData.addHackathon(payload);
    window.showToast("New hackathon published successfully!", "success");
  }

  document.getElementById("hackathonModal").classList.remove("active");
  renderAdminStats();
  renderAdminTable();
}

function deleteHackathonItem(id) {
  if (confirm("Are you sure you want to delete this hackathon? This action cannot be undone.")) {
    window.HackathonData.deleteHackathon(id);
    renderAdminStats();
    renderAdminTable();
    window.showToast("Hackathon deleted.", "info");
  }
}

window.openHackathonModal = openHackathonModal;
window.deleteHackathonItem = deleteHackathonItem;
