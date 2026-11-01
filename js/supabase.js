/**
 * CODEVERSE - Supabase & Data Persistence Bridge
 * Supports real Supabase connectivity when configured, with robust zero-latency
 * LocalStorage fallback simulation (Demo Mode) for offline/static hosting.
 */

const SUPABASE_CONFIG = {
  // Can be populated via localStorage or environment settings
  url: localStorage.getItem("codeverse_supabase_url") || "",
  anonKey: localStorage.getItem("codeverse_supabase_anon_key") || "",
  isConfigured() {
    return Boolean(this.url && this.anonKey && this.url.startsWith("https://") && this.anonKey.length > 20);
  }
};

let _supabaseClientInstance = null;

function initSupabase() {
  if (SUPABASE_CONFIG.isConfigured() && window.supabase && window.supabase.createClient) {
    try {
      _supabaseClientInstance = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      console.log("⚡ Supabase Client initialized successfully.");
      return _supabaseClientInstance;
    } catch (e) {
      console.warn("Could not initialize Supabase, fallback to Demo Mode:", e);
    }
  }
  return null;
}

// Local mock tables for complete offline functionality
const MockDB = {
  USERS_KEY: "codeverse_mock_users",
  CURRENT_USER_KEY: "codeverse_current_user",
  REGISTRATIONS_KEY: "codeverse_registrations",
  SAVED_KEY: "codeverse_saved_hackathons",

  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || "[]");
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getCurrentUser() {
    try {
      const u = localStorage.getItem(this.CURRENT_USER_KEY);
      return u ? JSON.parse(u) : null;
    } catch (e) {
      return null;
    }
  },

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.CURRENT_USER_KEY);
    }
  },

  getRegistrations(userId) {
    const all = JSON.parse(localStorage.getItem(this.REGISTRATIONS_KEY) || "[]");
    if (!userId) return all;
    return all.filter(r => r.userId === userId || r.email === userId);
  },

  addRegistration(reg) {
    const all = JSON.parse(localStorage.getItem(this.REGISTRATIONS_KEY) || "[]");
    // Duplicate check
    const existing = all.find(r => r.hackathonId === reg.hackathonId && (r.email === reg.email || (reg.userId && r.userId === reg.userId)));
    if (existing) {
      throw new Error("You have already registered for this hackathon with this email/account.");
    }
    const record = {
      ...reg,
      id: "REG-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: "Confirmed"
    };
    all.unshift(record);
    localStorage.setItem(this.REGISTRATIONS_KEY, JSON.stringify(all));
    return record;
  },

  getSavedHackathons(userId) {
    const all = JSON.parse(localStorage.getItem(this.SAVED_KEY) || "[]");
    if (!userId) return all;
    return all.filter(s => s.userId === userId);
  },

  toggleSaveHackathon(userId, hackathonId) {
    if (!userId) throw new Error("Must be logged in to save hackathons.");
    let all = JSON.parse(localStorage.getItem(this.SAVED_KEY) || "[]");
    const existingIndex = all.findIndex(s => s.userId === userId && s.hackathonId === hackathonId);
    let isSaved = false;
    if (existingIndex > -1) {
      all.splice(existingIndex, 1);
      isSaved = false;
    } else {
      all.push({
        id: "save-" + Date.now(),
        userId: userId,
        hackathonId: hackathonId,
        savedAt: new Date().toISOString()
      });
      isSaved = true;
    }
    localStorage.setItem(this.SAVED_KEY, JSON.stringify(all));
    return isSaved;
  },

  isSaved(userId, hackathonId) {
    if (!userId) return false;
    const all = this.getSavedHackathons(userId);
    return all.some(s => s.hackathonId === hackathonId);
  }
};

// Seed a default demo user if none exists
(function initDefaultUser() {
  const users = MockDB.getUsers();
  if (users.length === 0) {
    const demoUser = {
      id: "usr_demo_01",
      email: "alex.chen@codeverse.dev",
      fullName: "Alex Chen",
      role: "Full Stack Developer",
      college: "Stanford University / Bangalore Campus",
      phone: "+91 98765 43210",
      avatar: window.DEFAULT_AVATAR || (window.PREDEFINED_AVATARS && window.PREDEFINED_AVATARS[0] ? window.PREDEFINED_AVATARS[0].url : ""),
      bio: "Passionate open-source builder, AI enthusiast, and hackathon veteran.",
      skills: ["React", "TypeScript", "Python", "Three.js", "Docker"],
      github: "https://github.com/alexchen-dev",
      linkedin: "https://linkedin.com/in/alexchen",
      createdAt: new Date().toISOString()
    };
    MockDB.saveUsers([demoUser]);

    // Also seed sample registration
    const regs = MockDB.getRegistrations();
    if (regs.length === 0) {
      regs.push({
        id: "REG-839214",
        userId: "usr_demo_01",
        hackathonId: "cv-001",
        hackathonName: "CODEVERSE Genesis 2026",
        hackathonBanner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        fullName: "Alex Chen",
        email: "alex.chen@codeverse.dev",
        phone: "+91 98765 43210",
        college: "Stanford University / Bangalore Campus",
        department: "Computer Science & Engineering",
        year: "3rd Year",
        teamName: "NeuralSynthetics",
        teamSize: "3",
        track: "Autonomous AI & Intelligent Agents",
        github: "https://github.com/alexchen-dev",
        portfolio: "https://alexchen.dev",
        createdAt: "2026-10-25T14:30:00Z",
        status: "Confirmed"
      });
      localStorage.setItem(MockDB.REGISTRATIONS_KEY, JSON.stringify(regs));
    }

    // Seed saved hackathons
    const saved = MockDB.getSavedHackathons();
    if (saved.length === 0) {
      saved.push(
        { id: "save-1", userId: "usr_demo_01", hackathonId: "cv-001", savedAt: new Date().toISOString() },
        { id: "save-2", userId: "usr_demo_01", hackathonId: "cv-002", savedAt: new Date().toISOString() }
      );
      localStorage.setItem(MockDB.SAVED_KEY, JSON.stringify(saved));
    }
  }
})();

window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.MockDB = MockDB;
window.initSupabase = initSupabase;
