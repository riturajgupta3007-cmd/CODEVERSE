/**
 * CODEVERSE - Authentication & User State Controller
 * Manages user authentication, session, profile syncing, and UI updates.
 */

const Auth = {
  getCurrentUser() {
    return window.MockDB.getCurrentUser();
  },

  isLoggedIn() {
    return Boolean(this.getCurrentUser());
  },

  async login(email, password, rememberMe = true) {
    // If Supabase is connected
    if (window.SUPABASE_CONFIG.isConfigured() && window._supabaseClientInstance) {
      try {
        const { data, error } = await window._supabaseClientInstance.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        const userObj = {
          id: data.user.id,
          email: data.user.email,
          fullName: data.user.user_metadata?.full_name || email.split("@")[0],
          avatar: data.user.user_metadata?.avatar_url || window.DEFAULT_AVATAR,
          role: "Developer",
          isSupabase: true
        };
        window.MockDB.setCurrentUser(userObj);
        return { success: true, user: userObj };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }

    // Demo Mode Auth
    const users = window.MockDB.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    // In demo mode, accept registered email or the default demo account
    if (user) {
      window.MockDB.setCurrentUser(user);
      return { success: true, user: user };
    } else {
      // Auto-provision demo account with consistent default neutral avatar
      const newUser = {
        id: "usr_" + Date.now().toString(36),
        email: email,
        fullName: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        role: "Developer",
        college: "Tech Institute / University",
        phone: "+91 98000 12345",
        avatar: window.DEFAULT_AVATAR,
        bio: "Explorer and builder on CODEVERSE.",
        skills: ["Web", "AI", "Cloud"],
        github: "https://github.com",
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      window.MockDB.saveUsers(users);
      window.MockDB.setCurrentUser(newUser);
      return { success: true, user: newUser, isNewDemo: true };
    }
  },

  async signup(fullName, email, password) {
    if (window.SUPABASE_CONFIG.isConfigured() && window._supabaseClientInstance) {
      try {
        const { data, error } = await window._supabaseClientInstance.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, avatar_url: window.DEFAULT_AVATAR }
          }
        });
        if (error) throw error;
        const userObj = {
          id: data.user?.id || "usr_" + Date.now(),
          email: email,
          fullName: fullName,
          avatar: window.DEFAULT_AVATAR,
          role: "Developer",
          isSupabase: true
        };
        window.MockDB.setCurrentUser(userObj);
        return { success: true, user: userObj };
      } catch (err) {
        return { success: false, error: err.message };
      }
    }

    // Demo Mode Sign up
    const users = window.MockDB.getUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: "An account with this email already exists." };
    }

    const newUser = {
      id: "usr_" + Date.now().toString(36),
      fullName: fullName,
      email: email,
      role: "Developer",
      college: "University / Engineering College",
      phone: "+91 99999 00000",
      avatar: window.DEFAULT_AVATAR,
      bio: "Aspiring developer passionate about building next-gen hackathon prototypes.",
      skills: ["JavaScript", "Python", "Problem Solving"],
      github: "https://github.com",
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    window.MockDB.saveUsers(users);
    window.MockDB.setCurrentUser(newUser);
    return { success: true, user: newUser };
  },

  async logout() {
    if (window.SUPABASE_CONFIG.isConfigured() && window._supabaseClientInstance) {
      try {
        await window._supabaseClientInstance.auth.signOut();
      } catch (e) {
        console.warn("Supabase signout notice:", e);
      }
    }
    window.MockDB.setCurrentUser(null);
    window.location.reload();
  },

  updateProfile(updatedFields) {
    const current = this.getCurrentUser();
    if (!current) return false;
    const users = window.MockDB.getUsers();
    const idx = users.findIndex(u => u.id === current.id || u.email === current.email);
    const updated = { ...current, ...updatedFields };
    if (idx !== -1) {
      users[idx] = updated;
      window.MockDB.saveUsers(users);
    }
    window.MockDB.setCurrentUser(updated);
    this.updateNavbarAuthUI();
    return updated;
  },

  // Updates Navbar UI across any page depending on auth status
  updateNavbarAuthUI() {
    const authContainer = document.getElementById("navbar-auth-container");
    if (!authContainer) return;

    const user = this.getCurrentUser();
    if (user) {
      const savedCount = window.MockDB.getSavedHackathons(user.id).length;
      const regCount = window.MockDB.getRegistrations(user.id).length;
      const avatarSrc = user.avatar || window.DEFAULT_AVATAR;

      authContainer.innerHTML = `
        <div class="user-profile-menu">
          <button class="user-menu-btn" id="userMenuBtn" aria-expanded="false" aria-label="User Menu">
            <img src="${avatarSrc}" alt="${user.fullName}" class="user-avatar" />
            <span class="user-name">${user.fullName.split(' ')[0]}</span>
            <i data-lucide="chevron-down" class="menu-arrow"></i>
          </button>

          <div class="user-dropdown-menu" id="userDropdown">
            <div class="dropdown-header">
              <p class="dropdown-user-name">${user.fullName}</p>
              <p class="dropdown-user-email">${user.email}</p>
              <span class="demo-badge-pill">${user.isSupabase ? 'Supabase Live' : 'Demo Account'}</span>
            </div>
            <div class="dropdown-divider"></div>
            <a href="profile.html" class="dropdown-item">
              <i data-lucide="user"></i>
              <span>My Profile</span>
            </a>
            <a href="my-registrations.html" class="dropdown-item">
              <i data-lucide="ticket"></i>
              <span>My Registrations</span>
              <span class="count-badge">${regCount}</span>
            </a>
            <a href="profile.html#saved" class="dropdown-item">
              <i data-lucide="bookmark"></i>
              <span>Saved Hackathons</span>
              <span class="count-badge">${savedCount}</span>
            </a>
            <a href="admin.html" class="dropdown-item admin-link">
              <i data-lucide="shield-check"></i>
              <span>Admin Portal</span>
            </a>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item logout-btn" id="logoutBtn">
              <i data-lucide="log-out"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>
      `;

      // Attach menu toggle
      const btn = document.getElementById("userMenuBtn");
      const dropdown = document.getElementById("userDropdown");
      if (btn && dropdown) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const isExpanded = dropdown.classList.toggle("active");
          btn.setAttribute("aria-expanded", isExpanded);
        });

        document.addEventListener("click", (e) => {
          if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
          }
        });
      }

      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          Auth.logout();
        });
      }
    } else {
      authContainer.innerHTML = `
        <a href="login.html" class="btn-text">Log In</a>
        <a href="signup.html" class="btn-primary-sm">Sign Up</a>
      `;
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

window.Auth = Auth;
