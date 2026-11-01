/**
 * CODEVERSE - Main Application Controller
 * Handles Navigation, Countdown, FAQ accordion, Schedule switching,
 * 3D Card Tilt effects, Toast notifications, and general interactions.
 */

// Toast notification helper
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconName = "info";
  if (type === "success") iconName = "check-circle";
  if (type === "error") iconName = "alert-circle";

  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  // Trigger show
  setTimeout(() => toast.classList.add("show"), 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}
window.showToast = showToast;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Initialize Supabase if configured
  if (window.initSupabase) {
    window.initSupabase();
  }

  // 3. Update Navbar Auth UI
  if (window.Auth && window.Auth.updateNavbarAuthUI) {
    window.Auth.updateNavbarAuthUI();
  }

  // 4. Sticky Header on Scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // 5. Mobile Navigation Toggle
  const mobileToggleBtn = document.getElementById("mobileNavToggle");
  const mobileMenu = document.getElementById("mobileNavMenu");
  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileToggleBtn.setAttribute("aria-expanded", isOpen);
      const icon = mobileToggleBtn.querySelector("i");
      if (icon) {
        icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
        if (window.lucide) window.lucide.createIcons();
      }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileToggleBtn.setAttribute("aria-expanded", "false");
        const icon = mobileToggleBtn.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          if (window.lucide) window.lucide.createIcons();
        }
      });
    });
  }

  // 6. Live Countdown Timer (Flagship Event: Nov 28, 2026)
  const timerDays = document.getElementById("timerDays");
  const timerHours = document.getElementById("timerHours");
  const timerMinutes = document.getElementById("timerMinutes");
  const timerSeconds = document.getElementById("timerSeconds");

  if (timerDays && timerHours && timerMinutes && timerSeconds) {
    const targetDate = new Date("2026-11-28T09:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        timerDays.textContent = "00";
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerDays.textContent = String(days).padStart(2, "0");
      timerHours.textContent = String(hours).padStart(2, "0");
      timerMinutes.textContent = String(minutes).padStart(2, "0");
      timerSeconds.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 7. Interactive Schedule Tabs Switching
  const scheduleTabBtns = document.querySelectorAll(".schedule-tab-btn");
  const scheduleDayContents = document.querySelectorAll(".schedule-day-content");

  if (scheduleTabBtns.length > 0) {
    scheduleTabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        scheduleTabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const targetDay = btn.getAttribute("data-day");
        scheduleDayContents.forEach(content => {
          if (content.getAttribute("data-day") === targetDay) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });
  }

  // 8. Working FAQ Accordion (Section 18)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        // Close other items
        faqItems.forEach(other => other.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // 9. 3D Card Hover Tilt Effect for Desktop
  const tiltCards = document.querySelectorAll(".card-3d-tilt");
  if (window.innerWidth > 992) {
    tiltCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  }

  // 10. Scroll Reveal Animations
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add("is-visible"));
  }
});
