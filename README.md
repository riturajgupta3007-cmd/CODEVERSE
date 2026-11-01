# CODEVERSE – BUILD BEYOND LIMITS
### 3D Interactive Hackathon Discovery & Event Platform

> **GDG MMMUT Prompt 2 Pixel Round 2 Competition Submission**  
> **Selected Problem Statement:** **PS 02 – Tech Event / Hackathon Landing Page**  
> Developed as a comprehensive, full-featured web platform combining a premium tech event landing page with a robust Hackathon Discovery & Management system.

---

## 🌟 1. Vision & Purpose

**CODEVERSE** is a futuristic, interactive web platform where developers, students, innovators, and technology enthusiasts can:
1. **Discover Upcoming Hackathons**: Filter by tracks, prize pools, and registration deadlines.
2. **Explore Ongoing Competitions**: Monitor live sprints currently in progress.
3. **Inspect Completed Hackathons**: Study past winners, winning project repositories, and technical postmortems.
4. **View Complete Event Details**: Explore dynamic, bespoke detail pages with timelines, rules, tracks, prizes, and organizers.
5. **Register for Hackathons**: Frictionless registration with instant holographic ticket generation and validation.
6. **Create Developer Accounts**: Authentication supporting both Supabase and zero-friction Demo Mode.
7. **Bookmark & Save Hackathons**: Sync interesting events directly with your user profile.
8. **Track Registrations**: Access verified digital passes in a dedicated "My Registrations" portal.
9. **Admin Event Management**: Complete CRUD operations, statistics dashboard, and JSON database export.

---

## 🚀 2. Technology Stack

- **Frontend Core**: Semantic HTML5, Modular CSS3, Vanilla JavaScript (ES6+)
- **3D Graphics Engine**: Three.js (r128) rendering an interactive celestial wireframe tech sphere with mouse parallax and performance optimization for 60fps
- **Iconography**: Lucide Icons
- **Celebration FX**: Canvas-Confetti
- **Backend / Database**: Supabase Client integration with automatic offline fallback (Demo Mode via LocalStorage)
- **Deployment Compatibility**: Static hosting ready (GitHub Pages, Vercel, Netlify, Apache, Nginx)

---

## 📋 3. Problem Statement PS 02 Compliance Matrix

| Mandatory Requirement | Status | Implementation Details |
| :--- | :---: | :--- |
| **A. Navbar** | ✅ Implemented | Fixed glassmorphic header, brand identity, navigation links, "Explore Hackathons" CTA, user profile menu, responsive mobile hamburger drawer. |
| **B. Hero Section** | ✅ Implemented | Strong headline (*DISCOVER. BUILD. COMPETE. INNOVATE.*), supporting copy, dual CTAs, live platform metrics, and 3D interactive Three.js sphere with mouse parallax. |
| **C. About Platform** | ✅ Implemented | Mission, vision, and 3 distinct benefit cards: *1. Discover Opportunities*, *2. Connect with Innovators*, *3. Build Your Future*. |
| **D. Tracks / Challenges** | ✅ Implemented | 3 core cards with descriptions, icons, and tech tags: *AI & Machine Learning*, *Next-Gen Web Development*, *Cybersecurity & Defense*. |
| **E. Schedule Timeline** | ✅ Implemented | Interactive tabbed 48-hour timeline covering Day 1 Kickoff, Day 2 Mid-Review, and Day 3 Code Freeze & Demos with timestamps and activity badges. |
| **F. Prizes & Rewards** | ✅ Implemented | 3 prize tiers (*1st Grand Champion ₹10L*, *2nd Runner-Up ₹6L*, *3rd Place ₹4L*) + special category bounties with transparent details. |
| **G. Sponsors & Partners** | ✅ Implemented | Sample sponsor cards featuring Title, Platinum, Gold, and Community partner tiers (*Apex Cloud, NeuralCore, Fortress Cyber, DevStream*). |
| **H. Call to Action** | ✅ Implemented | High-conversion invitation box with direct routes to explore hackathons and sign up. |
| **I. Footer** | ✅ Implemented | Community identity, quick links, category navigation, social links, legal notices, and contact info. |
| **Bonus 1: Live Countdown Timer** | ✅ Implemented | Real-time live countdown timer (Days, Hours, Minutes, Seconds) targeting CODEVERSE Genesis 2026. |
| **Bonus 2: Registration Validation** | ✅ Implemented | Full applicant form with email, phone, college, department, team size, track selection, duplicate check, and instant pass issuance. |
| **Bonus 3: Interactive Schedule** | ✅ Implemented | Interactive tabbed timeline with day filtering. |
| **Bonus 4: Interactive FAQ** | ✅ Implemented | Working accordion with 8 comprehensive answers addressing user discovery, registration, and participation. |

---

## 🔮 4. Platform Architecture & Multi-Page Structure

```
CODEVERSE/
│
├── index.html               # Flagship Homepage (Full PS 02 Experience + 3D Canvas)
├── hackathons.html          # Hackathons Discovery Arena (Category Tabs, Search, Filters)
├── hackathon-details.html   # Dynamic Hackathon Details Engine (Unique data for every event)
├── register-event.html      # Event Registration Form with Validation & Holographic Pass
├── login.html               # Developer Login (with 1-click Demo Account quick fill)
├── signup.html              # Free Account Creation with Terms acceptance
├── profile.html             # User Profile Dashboard & Bookmarked Hackathons
├── my-registrations.html    # Verified Ticket Passes & Registration Management
├── admin.html               # Event Organizer & Admin Portal (Full CRUD + JSON Export)
├── .env.example             # Supabase Environment Configuration Template
├── README.md                # Comprehensive Project Documentation
│
├── css/
│   ├── style.css            # Core Design System, Variables, Glassmorphism, Theme
│   ├── hackathons.css       # Directory Grid, Search Bars, Details Layout, Badges
│   ├── auth.css             # Auth Forms, Holographic Passes, Admin Tables
│   ├── animations.css       # 3D Card Hover Tilt, Pulsing Glows, Scroll Reveals
│   └── responsive.css       # Breakpoints: 360px, 375px, 390px, 430px, 768px, 1024px, 1366px, 1920px
│
└── js/
    ├── data.js              # Rich Seed Dataset (10+ Upcoming, Ongoing, & Completed Hackathons)
    ├── supabase.js          # Supabase Bridge + Resilient Offline LocalStorage Fallback
    ├── auth.js              # Auth Controller, User Session, Profile State & Navbar Sync
    ├── main.js              # Header Scroll, Countdown, FAQ Accordion, 3D Tilt, Toasts
    ├── three-hero.js        # Three.js 3D Interactive Celestial Sphere & Floating Particles
    ├── hackathons.js        # Search, Category Tabs, Multi-Domain Filters, Sorting, Bookmarking
    ├── hackathon-details.js # Dynamic URL Parser (?id=...), Section Renderer & Social Share
    ├── registration.js      # Form Validation, Duplicate Prevention & Confetti Ticket Pass
    └── admin.js             # Admin Table, Metric Counters, Add/Edit Modal, Seed Reset
```

---

## ⚡ 5. Local Quickstart Instructions

The platform is designed with zero-dependency static web standards. You can run it immediately using any local web server:

### Option A: Python HTTP Server (Recommended)
```bash
# Navigate to the project root
cd CODEVERSE

# Run local web server
python -m http.server 8000
```
Open your browser at `http://localhost:8000`.

### Option B: Node.js `npx serve`
```bash
npx serve .
```

### Option C: VS Code Live Server
Simply right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🗄️ 6. Supabase Backend Integration (Optional)

CODEVERSE operates seamlessly in **Demo Mode** out of the box with realistic seed records. To connect your live Supabase cloud database:

### 1. Create a Supabase Project
1. Visit [supabase.com](https://supabase.com) and create a new project.
2. Execute the following SQL snippet in the Supabase SQL Editor:

```sql
-- Hackathons Table
CREATE TABLE hackathons (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  organizer TEXT NOT NULL,
  banner TEXT,
  short_description TEXT,
  full_description TEXT,
  category TEXT,
  technologies TEXT[],
  format TEXT,
  location TEXT,
  registration_deadline TIMESTAMP WITH TIME ZONE,
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  status TEXT,
  prize_pool TEXT,
  team_size TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Registrations Table
CREATE TABLE registrations (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  hackathon_id TEXT REFERENCES hackathons(id),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  college TEXT,
  team_name TEXT,
  team_size TEXT,
  track TEXT,
  github TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Saved Hackathons Table
CREATE TABLE saved_hackathons (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  hackathon_id TEXT REFERENCES hackathons(id),
  saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Configure Credentials
In your browser console on CODEVERSE, execute:
```javascript
localStorage.setItem('codeverse_supabase_url', 'https://your-project.supabase.co');
localStorage.setItem('codeverse_supabase_anon_key', 'your-anon-public-key');
window.location.reload();
```

---

## 🌐 7. Deployment Instructions

### Deploy to GitHub Pages
1. Push this repository to GitHub.
2. In your repository settings, go to **Pages** > **Build and deployment**.
3. Select the `main` branch and root `/` folder, then click **Save**.
4. GitHub will deploy the site live within 1 minute.

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
Drag and drop the `CODEVERSE` folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 👥 8. Demo Reviewer Quick Tips

- **1-Click Reviewer Login**: Visit `/login.html` and click the **"Use Demo Account"** button to automatically populate test credentials (`alex.chen@codeverse.dev`).
- **Interactive Holographic Pass**: Complete any registration or visit `/my-registrations.html` and click **"View Event Pass"** to see the holographic digital entry ticket.
- **Admin Playground**: Visit `/admin.html` to publish new hackathons, edit dates/prizes, or restore the seed dataset using the **"Reset Demo Data"** button.
- **Dynamic Routing**: Visit `/hackathon-details.html?id=codeverse-genesis-2026` or `/hackathon-details.html?id=ai-nexus-summit-2026` to see how the platform renders completely distinct data for every hackathon.

---

*CODEVERSE – BUILD BEYOND LIMITS • GDG MMMUT Prompt 2 Pixel Round 2 (PS 02)*
