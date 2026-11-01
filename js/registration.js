/**
 * CODEVERSE - Hackathon Event Registration Controller
 * Handles frontend validation, duplicate check, unique ticket generation,
 * confetti celebration, and registration storage.
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const hackathonSlug = urlParams.get("id") || urlParams.get("slug") || "codeverse-genesis-2026";

  const event = window.HackathonData.getByIdOrSlug(hackathonSlug);
  const form = document.getElementById("eventRegistrationForm");

  // Populate Event Info on Form
  if (event) {
    const eventNameEl = document.getElementById("regEventName");
    const eventBannerEl = document.getElementById("regEventBanner");
    const eventOrgEl = document.getElementById("regEventOrganizer");
    const eventDeadlineEl = document.getElementById("regEventDeadline");

    if (eventNameEl) eventNameEl.textContent = event.name;
    if (eventBannerEl) eventBannerEl.src = event.banner;
    if (eventOrgEl) eventOrgEl.textContent = event.organizer;
    if (eventDeadlineEl) {
      eventDeadlineEl.textContent = new Date(event.registrationDeadline).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }

    // Populate track options
    const trackSelect = document.getElementById("regTrackSelect");
    if (trackSelect && event.tracks) {
      trackSelect.innerHTML = `<option value="">Select a Challenge Track...</option>` +
        event.tracks.map(t => `<option value="${t.title}">${t.title}</option>`).join("");
    }
  }

  // Autofill user details if logged in
  const currentUser = window.Auth ? window.Auth.getCurrentUser() : null;
  if (currentUser) {
    const nameInput = document.getElementById("regFullName");
    const emailInput = document.getElementById("regEmail");
    const phoneInput = document.getElementById("regPhone");
    const collegeInput = document.getElementById("regCollege");
    const githubInput = document.getElementById("regGithub");

    if (nameInput && !nameInput.value) nameInput.value = currentUser.fullName || "";
    if (emailInput && !emailInput.value) emailInput.value = currentUser.email || "";
    if (phoneInput && !phoneInput.value) phoneInput.value = currentUser.phone || "";
    if (collegeInput && !collegeInput.value) collegeInput.value = currentUser.college || "";
    if (githubInput && !githubInput.value) githubInput.value = currentUser.github || "";
  }

  // Handle Form Submission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fullName = document.getElementById("regFullName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const phone = document.getElementById("regPhone").value.trim();
      const college = document.getElementById("regCollege").value.trim();
      const department = document.getElementById("regDepartment").value.trim();
      const year = document.getElementById("regYear").value;
      const teamName = document.getElementById("regTeamName").value.trim();
      const teamSize = document.getElementById("regTeamSize").value;
      const track = document.getElementById("regTrackSelect") ? document.getElementById("regTrackSelect").value : "General Track";
      const github = document.getElementById("regGithub").value.trim();
      const portfolio = document.getElementById("regPortfolio") ? document.getElementById("regPortfolio").value.trim() : "";
      const termsAccepted = document.getElementById("regTermsCheckbox").checked;

      // Validation
      if (!fullName || !email || !phone || !college || !department || !year || !teamName || !teamSize) {
        window.showToast("Please fill in all mandatory fields.", "error");
        return;
      }

      if (!validateEmail(email)) {
        window.showToast("Please enter a valid email address.", "error");
        return;
      }

      if (phone.replace(/\D/g, "").length < 10) {
        window.showToast("Please enter a valid phone number (at least 10 digits).", "error");
        return;
      }

      if (!termsAccepted) {
        window.showToast("You must agree to the Hackathon Rules and Code of Conduct.", "error");
        return;
      }

      const submitBtn = document.getElementById("btnSubmitReg");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader" class="spin"></i> <span>Confirming Registration...</span>`;
      if (window.lucide) window.lucide.createIcons();

      try {
        const registrationData = {
          hackathonId: event ? event.id : "cv-001",
          hackathonSlug: event ? event.slug : "genesis-2026",
          hackathonName: event ? event.name : "CODEVERSE Genesis 2026",
          hackathonBanner: event ? event.banner : "",
          userId: currentUser ? currentUser.id : "usr_guest_" + Date.now().toString(36),
          fullName,
          email,
          phone,
          college,
          department,
          year,
          teamName,
          teamSize,
          track,
          github,
          portfolio
        };

        // Add to persistent storage / MockDB
        const savedRecord = window.MockDB.addRegistration(registrationData);

        // Confetti Celebration
        if (typeof confetti === "function") {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }

        // Show Holographic Success Ticket Modal
        showRegistrationSuccessModal(savedRecord);
        window.showToast("Registration Confirmed! Welcome aboard.", "success");

      } catch (err) {
        window.showToast(err.message || "Registration failed. Please try again.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showRegistrationSuccessModal(record) {
  let modalOverlay = document.getElementById("ticketSuccessModal");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "ticketSuccessModal";
    modalOverlay.className = "ticket-modal-overlay";
    document.body.appendChild(modalOverlay);
  }

  modalOverlay.innerHTML = `
    <div class="ticket-pass card-3d-tilt">
      <div class="ticket-header">
        <span class="ticket-brand">CODEVERSE // TICKET PASS</span>
        <span class="ticket-badge">CONFIRMED</span>
      </div>
      <div class="ticket-body">
        <h2 class="ticket-event-name">${record.hackathonName}</h2>
        
        <div class="ticket-grid">
          <div class="ticket-field">
            <span class="ticket-lbl">Registration ID</span>
            <span class="ticket-val" style="color:var(--electric-blue); font-family:monospace; font-size:1.1rem;">${record.id}</span>
          </div>
          <div class="ticket-field">
            <span class="ticket-lbl">Attendee Name</span>
            <span class="ticket-val">${record.fullName}</span>
          </div>
          <div class="ticket-field">
            <span class="ticket-lbl">Team Name</span>
            <span class="ticket-val">${record.teamName} (${record.teamSize} Members)</span>
          </div>
          <div class="ticket-field">
            <span class="ticket-lbl">Selected Track</span>
            <span class="ticket-val">${record.track}</span>
          </div>
          <div class="ticket-field">
            <span class="ticket-lbl">Organization</span>
            <span class="ticket-val">${record.college}</span>
          </div>
          <div class="ticket-field">
            <span class="ticket-lbl">Issue Date</span>
            <span class="ticket-val">${new Date(record.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div class="ticket-barcode-wrap">
          <span class="ticket-barcode">||| | || |||| | | ||||| ||</span>
          <span style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase;">OFFICIAL VERIFIED BADGE</span>
        </div>
      </div>

      <div class="ticket-footer-actions">
        <a href="my-registrations.html" class="btn-primary-sm">
          <i data-lucide="ticket"></i>
          <span>View My Registrations</span>
        </a>
        <button class="btn-secondary-sm" id="closeTicketModalBtn">
          <span>Close</span>
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  if (window.lucide) window.lucide.createIcons();

  const closeBtn = document.getElementById("closeTicketModalBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      window.location.href = "my-registrations.html";
    });
  }
}
