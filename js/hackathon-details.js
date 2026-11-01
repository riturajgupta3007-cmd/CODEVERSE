/**
 * CODEVERSE - Individual Hackathon Details Controller
 * Loads rich unique details for any hackathon by ID/slug,
 * handles Social Sharing, Bookmarking, Dynamic Sections, and Related Hackathons.
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idOrSlug = urlParams.get("id") || urlParams.get("slug") || "codeverse-genesis-2026";

  const event = window.HackathonData.getByIdOrSlug(idOrSlug);

  if (!event) {
    renderNotFound();
    return;
  }

  // Update Page Title
  document.title = `${event.name} | CODEVERSE`;

  renderHackathonDetails(event);
  renderRelatedHackathons(event);
});

function renderNotFound() {
  const main = document.getElementById("detailsMainContent");
  if (!main) return;
  main.innerHTML = `
    <div class="container section-padding text-center" style="min-height: 60vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
      <i data-lucide="alert-octagon" style="width:64px;height:64px;color:#EF4444;margin-bottom:20px;"></i>
      <h1 style="font-size:2.5rem;margin-bottom:12px;">Hackathon Not Found</h1>
      <p style="margin-bottom:30px;max-width:500px;">The hackathon you are looking for does not exist in the CODEVERSE database or may have been removed.</p>
      <a href="hackathons.html" class="btn-primary">
        <i data-lucide="arrow-left"></i>
        <span>Back to Hackathons Directory</span>
      </a>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function renderHackathonDetails(event) {
  const currentUser = window.Auth ? window.Auth.getCurrentUser() : null;
  const isSaved = currentUser ? window.MockDB.isSaved(currentUser.id, event.id) : false;

  // Format Dates
  const startDateStr = new Date(event.startDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const endDateStr = new Date(event.endDate).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  const deadlineStr = new Date(event.registrationDeadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const resultsStr = event.resultsDate ? new Date(event.resultsDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "TBA";

  // Elements
  const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = event.name;

  const heroBanner = document.getElementById("detailsHeroBanner");
  if (heroBanner) heroBanner.src = event.banner;

  const eventTitle = document.getElementById("detailsTitle");
  if (eventTitle) eventTitle.textContent = event.name;

  const organizerEl = document.getElementById("detailsOrganizer");
  if (organizerEl) organizerEl.textContent = event.organizer;

  const statusBadge = document.getElementById("detailsStatusBadge");
  if (statusBadge) {
    statusBadge.className = `status-badge ${event.status}`;
    statusBadge.innerHTML = `<span class="pulse-dot" style="width:6px;height:6px;border-radius:50%;background:#fff;"></span> ${event.status.toUpperCase()}`;
  }

  const categoryBadge = document.getElementById("detailsCategoryBadge");
  if (categoryBadge) categoryBadge.textContent = event.category;

  // Render Overview Content
  const overviewText = document.getElementById("detailsOverviewText");
  if (overviewText) overviewText.textContent = event.fullDescription || event.shortDescription;

  // Render Tracks
  const tracksList = document.getElementById("detailsTracksList");
  if (tracksList && event.tracks) {
    tracksList.innerHTML = event.tracks.map(t => `
      <div class="detail-track-item">
        <h4>${t.title}</h4>
        <p style="margin-bottom:12px;font-size:0.92rem;color:var(--text-muted);">${t.description}</p>
        <div class="tech-tags">
          ${(t.tags || []).map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  // Render Prizes
  const prizesList = document.getElementById("detailsPrizesList");
  if (prizesList && event.prizes) {
    prizesList.innerHTML = event.prizes.map((p, idx) => {
      let pillClass = "silver";
      if (idx === 0) pillClass = "gold";
      if (idx === 2) pillClass = "bronze";
      return `
        <div class="detail-prize-item">
          <span class="prize-rank-pill ${pillClass}">${p.rank}</span>
          <div class="prize-amount" style="color:var(--electric-blue);">${p.amount}</div>
          <div style="font-weight:700;margin-bottom:6px;color:#fff;">${p.title}</div>
          <p style="font-size:0.85rem;color:var(--text-muted);">${p.perks || 'Official Trophy + Certificates'}</p>
        </div>
      `;
    }).join("");
  }

  // Render Schedule
  const scheduleList = document.getElementById("detailsScheduleList");
  if (scheduleList && event.schedule) {
    scheduleList.innerHTML = event.schedule.map(s => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span class="timeline-time"><i data-lucide="clock" style="width:14px;height:14px;"></i> ${s.day} • ${s.time}</span>
          </div>
          <h4 class="timeline-title">${s.title}</h4>
          <p class="timeline-desc">${s.description}</p>
        </div>
      </div>
    `).join("");
  }

  // Render Sponsors
  const sponsorsList = document.getElementById("detailsSponsorsList");
  if (sponsorsList && event.sponsors) {
    sponsorsList.innerHTML = event.sponsors.map(sp => `
      <div class="sponsor-card">
        <div class="sponsor-logo-box">${sp.name}</div>
        <span class="sponsor-tier">${sp.tier}</span>
      </div>
    `).join("");
  }

  // Render Winners (if completed)
  const winnersContainer = document.getElementById("detailsWinnersSection");
  if (winnersContainer) {
    if (event.status === "completed" && event.winners && event.winners.length > 0) {
      winnersContainer.style.display = "block";
      const winnersList = document.getElementById("detailsWinnersList");
      if (winnersList) {
        winnersList.innerHTML = event.winners.map(w => `
          <div class="winner-card">
            <h4><i data-lucide="trophy" style="width:18px;height:18px;display:inline-block;vertical-align:middle;margin-right:6px;"></i> ${w.rank} – ${w.team}</h4>
            <p style="font-weight:600;color:var(--text-white);margin-bottom:4px;">Project: ${w.project}</p>
            <p style="font-size:0.88rem;color:var(--text-muted);">${w.description}</p>
            <p style="font-size:0.8rem;color:var(--text-dim);margin-top:6px;">Team Members: ${w.members}</p>
          </div>
        `).join("");
      }
    } else {
      winnersContainer.style.display = "none";
    }
  }

  // Render Sidebar Facts
  const formatEl = document.getElementById("sidebarFormat");
  if (formatEl) formatEl.textContent = event.format;

  const locationEl = document.getElementById("sidebarLocation");
  if (locationEl) locationEl.textContent = event.location;

  const datesEl = document.getElementById("sidebarDates");
  if (datesEl) datesEl.textContent = `${startDateStr} - ${endDateStr}`;

  const deadlineEl = document.getElementById("sidebarDeadline");
  if (deadlineEl) deadlineEl.textContent = deadlineStr;

  const teamSizeEl = document.getElementById("sidebarTeamSize");
  if (teamSizeEl) teamSizeEl.textContent = event.teamSize || "1 - 4 Members";

  const eligibilityEl = document.getElementById("sidebarEligibility");
  if (eligibilityEl) eligibilityEl.textContent = event.eligibility || "Open to all developers";

  const prizePoolEl = document.getElementById("sidebarPrizePool");
  if (prizePoolEl) prizePoolEl.textContent = event.prizePool || "Swag & Recognition";

  const emailEl = document.getElementById("sidebarEmail");
  if (emailEl) emailEl.textContent = event.contactEmail || "support@codeverse.dev";

  // Action Buttons
  const registerBtn = document.getElementById("btnRegisterAction");
  if (registerBtn) {
    if (event.status === "completed") {
      registerBtn.textContent = "Event Concluded";
      registerBtn.classList.add("disabled");
      registerBtn.removeAttribute("href");
      registerBtn.style.opacity = "0.5";
      registerBtn.style.pointerEvents = "none";
    } else if (event.isExternal && event.officialWebsite) {
      registerBtn.innerHTML = `<span>Official Registration</span> <i data-lucide="external-link" style="width:16px;height:16px;"></i>`;
      registerBtn.href = event.officialWebsite;
      registerBtn.target = "_blank";
    } else {
      registerBtn.innerHTML = `<span>Register Now</span> <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>`;
      registerBtn.href = `register-event.html?id=${event.slug}`;
    }
  }

  // Bookmark Button in Details
  const bookmarkBtn = document.getElementById("btnBookmarkAction");
  if (bookmarkBtn) {
    bookmarkBtn.classList.toggle("saved", isSaved);
    bookmarkBtn.innerHTML = `<i data-lucide="bookmark" style="${isSaved ? 'fill:var(--electric-blue);' : ''}"></i> <span>${isSaved ? 'Saved' : 'Save'}</span>`;

    bookmarkBtn.addEventListener("click", () => {
      const user = window.Auth ? window.Auth.getCurrentUser() : null;
      if (!user) {
        window.showToast("Please log in to save this hackathon.", "error");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1200);
        return;
      }
      const savedNow = window.MockDB.toggleSaveHackathon(user.id, event.id);
      bookmarkBtn.classList.toggle("saved", savedNow);
      bookmarkBtn.innerHTML = `<i data-lucide="bookmark" style="${savedNow ? 'fill:var(--electric-blue);' : ''}"></i> <span>${savedNow ? 'Saved' : 'Save'}</span>`;
      window.showToast(savedNow ? "Saved to your bookmarks!" : "Removed from bookmarks.", savedNow ? "success" : "info");
      if (window.Auth && window.Auth.updateNavbarAuthUI) window.Auth.updateNavbarAuthUI();
      if (window.lucide) window.lucide.createIcons();
    });
  }

  // Share Button
  const shareBtn = document.getElementById("btnShareAction");
  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: `${event.name} - CODEVERSE`,
        text: `Check out ${event.name} on CODEVERSE - Build Beyond Limits!`,
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          window.showToast("Shared successfully!", "success");
        } catch (err) {
          // Ignore abort
        }
      } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
          window.showToast("Event link copied to clipboard!", "success");
        }).catch(() => {
          window.showToast("Link could not be copied automatically.", "error");
        });
      }
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

function renderRelatedHackathons(currentEvent) {
  const container = document.getElementById("relatedHackathonsGrid");
  if (!container) return;

  const all = window.HackathonData.getAll();
  const related = all.filter(h => h.id !== currentEvent.id && (h.category === currentEvent.category || h.status === "upcoming")).slice(0, 3);

  if (related.length === 0) {
    container.parentElement.style.display = "none";
    return;
  }

  container.innerHTML = related.map(h => window.renderHackathonCard ? window.renderHackathonCard(h) : "").join("");
  if (window.attachBookmarkHandlers) window.attachBookmarkHandlers();
  if (window.lucide) window.lucide.createIcons();
}
