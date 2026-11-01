/**
 * CODEVERSE - Predefined Profile Avatars & Management
 * Provides 16 brand-aligned vector avatars (Male, Female, Developer, Abstract)
 * plus a consistent default neutral avatar. 100% self-contained, no external network needed.
 */

// Consistent Default Neutral Avatar
const DEFAULT_AVATAR = "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10162B"/>
      <stop offset="100%" stop-color="#080B18"/>
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7657FF"/>
      <stop offset="100%" stop-color="#00D9FF"/>
    </linearGradient>
  </defs>
  <rect width="120" height="120" rx="60" fill="url(#bgGrad)"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="url(#glowGrad)" stroke-width="2.5" opacity="0.8"/>
  <!-- Head -->
  <circle cx="60" cy="46" r="18" fill="#A4AEC6"/>
  <!-- Body -->
  <path d="M32 94 C32 75 44 68 60 68 C76 68 88 75 88 94 Z" fill="#A4AEC6" opacity="0.9"/>
  <!-- Tech Collar Accent -->
  <path d="M52 68 L60 77 L68 68 Z" fill="url(#glowGrad)"/>
</svg>`);

const PREDEFINED_AVATARS = [
  // --- Male Illustrated (4) ---
  {
    id: "avatar_m1",
    name: "Cyber Spartan",
    category: "Male",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#10162B"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Hair / Hoodie -->
  <path d="M36 48 C36 28 84 28 84 48 C84 56 82 62 82 62 L38 62 Z" fill="#1C2442"/>
  <!-- Face -->
  <rect x="42" y="40" width="36" height="34" rx="10" fill="#F0C6A5"/>
  <!-- Glowing Cyber Visor -->
  <rect x="40" y="47" width="40" height="10" rx="5" fill="#00D9FF"/>
  <rect x="44" y="49" width="12" height="6" rx="3" fill="#FFFFFF" opacity="0.8"/>
  <!-- Hoodie Body -->
  <path d="M30 96 C30 76 42 70 60 70 C78 70 90 76 90 96 Z" fill="#7657FF"/>
  <!-- Neon Zip -->
  <line x1="60" y1="70" x2="60" y2="96" stroke="#00D9FF" stroke-width="3"/>
</svg>`)
  },
  {
    id: "avatar_m2",
    name: "Code Architect",
    category: "Male",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#0E1428"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Short Dark Hair -->
  <path d="M38 42 C38 26 82 26 82 42 L82 48 L38 48 Z" fill="#2D3748"/>
  <!-- Face -->
  <rect x="42" y="40" width="36" height="34" rx="8" fill="#E2B18A"/>
  <!-- Glasses -->
  <rect x="44" y="47" width="13" height="10" rx="2" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <rect x="63" y="47" width="13" height="10" rx="2" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <line x1="57" y1="52" x2="63" y2="52" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Smile -->
  <path d="M54 64 Q60 68 66 64" fill="none" stroke="#2D3748" stroke-width="2"/>
  <!-- Tech Shirt -->
  <path d="M32 96 C32 78 44 72 60 72 C76 72 88 78 88 96 Z" fill="#1A2035"/>
  <polygon points="60,72 54,82 66,82" fill="#7657FF"/>
</svg>`)
  },
  {
    id: "avatar_m3",
    name: "Neo Hacker",
    category: "Male",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#120E26"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Headset -->
  <path d="M36 50 C36 30 84 30 84 50" fill="none" stroke="#00D9FF" stroke-width="4"/>
  <rect x="33" y="46" width="6" height="14" rx="3" fill="#00D9FF"/>
  <rect x="81" y="46" width="6" height="14" rx="3" fill="#00D9FF"/>
  <!-- Face -->
  <rect x="43" y="38" width="34" height="36" rx="9" fill="#D4A373"/>
  <!-- Beanie -->
  <path d="M39 38 C39 24 81 24 81 38 Z" fill="#7657FF"/>
  <!-- Eyes -->
  <circle cx="51" cy="50" r="2.5" fill="#10162B"/>
  <circle cx="69" cy="50" r="2.5" fill="#10162B"/>
  <!-- Cyber Jacket -->
  <path d="M30 96 C30 76 43 70 60 70 C77 70 90 76 90 96 Z" fill="#1E1B38"/>
  <path d="M48 70 L60 84 L72 70" fill="none" stroke="#00D9FF" stroke-width="2"/>
</svg>`)
  },
  {
    id: "avatar_m4",
    name: "System Engineer",
    category: "Male",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#0A1224"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Curly Dark Hair -->
  <circle cx="48" cy="34" r="9" fill="#1E293B"/>
  <circle cx="60" cy="31" r="10" fill="#1E293B"/>
  <circle cx="72" cy="34" r="9" fill="#1E293B"/>
  <!-- Face -->
  <rect x="42" y="39" width="36" height="34" rx="8" fill="#F5D0C5"/>
  <!-- Confident Eyes -->
  <line x1="49" y1="50" x2="55" y2="50" stroke="#10162B" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="65" y1="50" x2="71" y2="50" stroke="#10162B" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Minimal Beard -->
  <path d="M46 62 Q60 72 74 62" fill="none" stroke="#334155" stroke-width="2"/>
  <!-- Tech Vest -->
  <path d="M32 96 C32 78 44 71 60 71 C76 71 88 78 88 96 Z" fill="#0F172A"/>
  <rect x="52" y="74" width="16" height="22" fill="#7657FF" opacity="0.8"/>
</svg>`)
  },

  // --- Female Illustrated (4) ---
  {
    id: "avatar_f1",
    name: "Neural Scientist",
    category: "Female",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#140E2A"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Long Violet Hair -->
  <path d="M35 44 C35 24 85 24 85 44 L88 78 L78 82 L78 52 L42 52 L42 82 L32 78 Z" fill="#7657FF"/>
  <!-- Face -->
  <rect x="43" y="38" width="34" height="34" rx="10" fill="#F7D0B7"/>
  <!-- Sleek AR Eye Visor -->
  <path d="M44 48 L76 48 L73 55 L47 55 Z" fill="#00D9FF"/>
  <!-- Jacket -->
  <path d="M31 96 C31 76 43 70 60 70 C77 70 89 76 89 96 Z" fill="#1F1538"/>
  <line x1="60" y1="70" x2="60" y2="96" stroke="#7657FF" stroke-width="2.5"/>
</svg>`)
  },
  {
    id: "avatar_f2",
    name: "Cloud Architect",
    category: "Female",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#0B132B"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Sleek Bob Haircut -->
  <path d="M36 45 C36 26 84 26 84 45 L85 64 L79 66 L78 48 L42 48 L41 66 L35 64 Z" fill="#1E293B"/>
  <!-- Face -->
  <rect x="42" y="38" width="36" height="34" rx="9" fill="#E8B896"/>
  <!-- Glasses -->
  <circle cx="50" cy="50" r="6" fill="none" stroke="#7657FF" stroke-width="2"/>
  <circle cx="70" cy="50" r="6" fill="none" stroke="#7657FF" stroke-width="2"/>
  <line x1="56" y1="50" x2="64" y2="50" stroke="#7657FF" stroke-width="2"/>
  <!-- Professional Tech Blazer -->
  <path d="M32 96 C32 77 44 71 60 71 C76 71 88 77 88 96 Z" fill="#111B38"/>
  <polygon points="60,71 52,85 68,85" fill="#00D9FF"/>
</svg>`)
  },
  {
    id: "avatar_f3",
    name: "Matrix Hunter",
    category: "Female",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#15122B"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- High Ponytail Hair -->
  <circle cx="60" cy="28" r="9" fill="#00D9FF"/>
  <path d="M38 42 C38 27 82 27 82 42 L84 60 L78 60 L76 44 L44 44 L42 60 L36 60 Z" fill="#201C38"/>
  <!-- Face -->
  <rect x="43" y="38" width="34" height="34" rx="8" fill="#F4C2A1"/>
  <!-- Eyes -->
  <circle cx="51" cy="49" r="2.5" fill="#00D9FF"/>
  <circle cx="69" cy="49" r="2.5" fill="#00D9FF"/>
  <!-- Cyber Ear Piece -->
  <circle cx="78" cy="51" r="3.5" fill="#7657FF"/>
  <!-- Tech Turtleneck -->
  <path d="M31 96 C31 75 43 69 60 69 C77 69 89 75 89 96 Z" fill="#0C0F22"/>
  <rect x="52" y="69" width="16" height="9" fill="#7657FF"/>
</svg>`)
  },
  {
    id: "avatar_f4",
    name: "AI Innovator",
    category: "Female",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#09142A"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Cyan Highlight Hair -->
  <path d="M36 44 C36 25 84 25 84 44 L86 65 L78 65 L76 46 L44 46 L42 65 L34 65 Z" fill="#00D9FF"/>
  <!-- Face -->
  <rect x="42" y="38" width="36" height="34" rx="9" fill="#C9936E"/>
  <!-- Minimal Facial Nodes -->
  <circle cx="47" cy="43" r="1.5" fill="#7657FF"/>
  <circle cx="49" cy="40" r="1.5" fill="#7657FF"/>
  <!-- Eyes -->
  <line x1="49" y1="49" x2="55" y2="49" stroke="#10162B" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="65" y1="49" x2="71" y2="49" stroke="#10162B" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Cyber Jacket -->
  <path d="M32 96 C32 76 44 70 60 70 C76 70 88 76 88 96 Z" fill="#1C2745"/>
  <line x1="48" y1="78" x2="72" y2="78" stroke="#00D9FF" stroke-width="2"/>
</svg>`)
  },

  // --- Minimal Developer Theme (4) ---
  {
    id: "avatar_d1",
    name: "Terminal Coder",
    category: "Developer",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#080B18"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Terminal Window Box -->
  <rect x="28" y="28" width="64" height="64" rx="12" fill="#10162B" stroke="#00D9FF" stroke-width="2"/>
  <!-- Window Controls -->
  <circle cx="38" cy="38" r="2.5" fill="#EF4444"/>
  <circle cx="46" cy="38" r="2.5" fill="#FBBF24"/>
  <circle cx="54" cy="38" r="2.5" fill="#10B981"/>
  <!-- Prompt Symbol >_ -->
  <path d="M42 52 L52 60 L42 68" fill="none" stroke="#00D9FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="58" y1="68" x2="74" y2="68" stroke="#7657FF" stroke-width="3" stroke-linecap="round"/>
</svg>`)
  },
  {
    id: "avatar_d2",
    name: "Bot Sentinel",
    category: "Developer",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#0B1228"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Antenna -->
  <line x1="60" y1="24" x2="60" y2="34" stroke="#00D9FF" stroke-width="2.5"/>
  <circle cx="60" cy="22" r="4" fill="#7657FF"/>
  <!-- Bot Head -->
  <rect x="36" y="34" width="48" height="42" rx="10" fill="#172242" stroke="#7657FF" stroke-width="2"/>
  <!-- Screen Eyes -->
  <rect x="44" y="44" width="12" height="10" rx="3" fill="#00D9FF"/>
  <rect x="64" y="44" width="12" height="10" rx="3" fill="#00D9FF"/>
  <!-- Mouth Audio Wave -->
  <line x1="48" y1="64" x2="72" y2="64" stroke="#7657FF" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Neck & Shoulder -->
  <rect x="52" y="76" width="16" height="8" fill="#10162B"/>
  <path d="M34 96 C34 84 44 80 60 80 C76 80 86 84 86 96 Z" fill="#172242"/>
</svg>`)
  },
  {
    id: "avatar_d3",
    name: "Binary Phantom",
    category: "Developer",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#070914"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Cyber Hood -->
  <path d="M32 94 C32 46 42 28 60 28 C78 28 88 46 88 94 Z" fill="#141A33"/>
  <!-- Shadow Face -->
  <ellipse cx="60" cy="58" rx="18" ry="22" fill="#070914"/>
  <!-- Glowing Goggles -->
  <circle cx="52" cy="56" r="6" fill="#00D9FF"/>
  <circle cx="68" cy="56" r="6" fill="#00D9FF"/>
  <line x1="58" y1="56" x2="62" y2="56" stroke="#00D9FF" stroke-width="2"/>
  <text x="60" y="86" fill="#7657FF" font-family="monospace" font-size="9" text-anchor="middle" font-weight="bold">01000011</text>
</svg>`)
  },
  {
    id: "avatar_d4",
    name: "Code Wizard",
    category: "Developer",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#110B29"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Bracket Shield -->
  <text x="32" y="74" fill="#7657FF" font-family="monospace" font-size="44" font-weight="900">&lt;</text>
  <text x="74" y="74" fill="#00D9FF" font-family="monospace" font-size="44" font-weight="900">&gt;</text>
  <!-- Central Spark -->
  <polygon points="60,38 64,54 78,58 64,62 60,78 56,62 42,58 56,54" fill="#FFFFFF"/>
  <circle cx="60" cy="58" r="4" fill="#00D9FF"/>
</svg>`)
  },

  // --- Abstract Technology (4) ---
  {
    id: "avatar_a1",
    name: "Quantum Core",
    category: "Abstract",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <defs>
    <radialGradient id="qCore" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00D9FF"/>
      <stop offset="60%" stop-color="#7657FF"/>
      <stop offset="100%" stop-color="#10162B"/>
    </radialGradient>
  </defs>
  <rect width="120" height="120" rx="60" fill="#080B18"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Orbital Rings -->
  <ellipse cx="60" cy="60" rx="38" ry="14" fill="none" stroke="#7657FF" stroke-width="2.5" transform="rotate(-30 60 60)"/>
  <ellipse cx="60" cy="60" rx="38" ry="14" fill="none" stroke="#00D9FF" stroke-width="2.5" transform="rotate(30 60 60)"/>
  <ellipse cx="60" cy="60" rx="38" ry="14" fill="none" stroke="#FFFFFF" stroke-width="1.5" transform="rotate(90 60 60)"/>
  <!-- Central Plasma -->
  <circle cx="60" cy="60" r="16" fill="url(#qCore)"/>
</svg>`)
  },
  {
    id: "avatar_a2",
    name: "Cyber Shield",
    category: "Abstract",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#091024"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Outer Hexagon -->
  <polygon points="60,24 88,40 88,72 60,88 32,72 32,40" fill="#141F3D" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Inner Hexagon -->
  <polygon points="60,34 78,45 78,67 60,78 42,67 42,45" fill="#7657FF" opacity="0.3"/>
  <!-- Security Keyhole Node -->
  <circle cx="60" cy="52" r="7" fill="#00D9FF"/>
  <polygon points="56,54 64,54 62,66 58,66" fill="#00D9FF"/>
</svg>`)
  },
  {
    id: "avatar_a3",
    name: "Neural Nexus",
    category: "Abstract",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#070A18"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#00D9FF" stroke-width="2.5"/>
  <!-- Constellation Nodes & Edges -->
  <line x1="60" y1="32" x2="36" y2="52" stroke="#7657FF" stroke-width="2"/>
  <line x1="60" y1="32" x2="84" y2="52" stroke="#7657FF" stroke-width="2"/>
  <line x1="36" y1="52" x2="44" y2="82" stroke="#00D9FF" stroke-width="2"/>
  <line x1="84" y1="52" x2="76" y2="82" stroke="#00D9FF" stroke-width="2"/>
  <line x1="44" y1="82" x2="76" y2="82" stroke="#7657FF" stroke-width="2"/>
  <line x1="60" y1="32" x2="60" y2="60" stroke="#FFFFFF" stroke-width="1.5"/>
  <line x1="36" y1="52" x2="60" y2="60" stroke="#FFFFFF" stroke-width="1.5"/>
  <line x1="84" y1="52" x2="60" y2="60" stroke="#FFFFFF" stroke-width="1.5"/>
  <line x1="44" y1="82" x2="60" y2="60" stroke="#FFFFFF" stroke-width="1.5"/>
  <line x1="76" y1="82" x2="60" y2="60" stroke="#FFFFFF" stroke-width="1.5"/>
  <!-- Glowing Dots -->
  <circle cx="60" cy="32" r="5" fill="#00D9FF"/>
  <circle cx="36" cy="52" r="5" fill="#7657FF"/>
  <circle cx="84" cy="52" r="5" fill="#7657FF"/>
  <circle cx="44" cy="82" r="5" fill="#00D9FF"/>
  <circle cx="76" cy="82" r="5" fill="#00D9FF"/>
  <circle cx="60" cy="60" r="7" fill="#FFFFFF"/>
</svg>`)
  },
  {
    id: "avatar_a4",
    name: "Hyper Helix",
    category: "Abstract",
    url: "data:image/svg+xml;utf8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
  <rect width="120" height="120" rx="60" fill="#130D29"/>
  <circle cx="60" cy="60" r="57" fill="none" stroke="#7657FF" stroke-width="2.5"/>
  <!-- Concentric Digital Rings -->
  <circle cx="60" cy="60" r="36" fill="none" stroke="#00D9FF" stroke-width="2" stroke-dasharray="8 6"/>
  <circle cx="60" cy="60" r="26" fill="none" stroke="#7657FF" stroke-width="2.5" stroke-dasharray="14 8"/>
  <circle cx="60" cy="60" r="16" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4 4"/>
  <circle cx="60" cy="60" r="6" fill="#00D9FF"/>
</svg>`)
  }
];

window.DEFAULT_AVATAR = DEFAULT_AVATAR;
window.PREDEFINED_AVATARS = PREDEFINED_AVATARS;
