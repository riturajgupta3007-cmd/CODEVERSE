/**
 * CODEVERSE - Hackathon Data Store & Realistic Seed Dataset
 * Contains comprehensive structured data for upcoming, ongoing, and completed hackathons.
 * Marked clearly as VERIFIED DEMO DATA for GDG MMMUT Prompt 2 Pixel Round 2 (PS 02).
 */

const SEED_HACKATHONS = [
  {
    id: "cv-001",
    slug: "codeverse-genesis-2026",
    name: "CODEVERSE Genesis 2026",
    organizer: "CODEVERSE & Tech Innovators Alliance",
    badge: "Flagship Event",
    featured: true,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "The premier global flagship hackathon empowering developers to build cutting-edge solutions across AI, Web3, and Cyber Defense.",
    fullDescription: "CODEVERSE Genesis 2026 is our flagship competitive innovation sprint designed to bring together student builders, industry developers, and creative visionaries from across the globe. Over 48 intense hours, participants will ideate, prototype, and pitch transformative software solutions tackling real-world industry and humanitarian bottlenecks. Featuring world-class tech mentorship, dedicated API credits, and hands-on guidance from leading engineering mentors.",
    category: "AI & Machine Learning",
    technologies: ["Artificial Intelligence", "Full Stack Web", "Cloud Native", "Cybersecurity", "Three.js"],
    format: "Hybrid",
    location: "Bangalore Tech Hub & Online Globally",
    registrationDeadline: "2026-11-20T23:59:59",
    startDate: "2026-11-28T09:00:00",
    endDate: "2026-11-30T18:00:00",
    resultsDate: "2026-12-02T16:00:00",
    status: "upcoming",
    prizePool: "₹25,00,000 ($30,000 USD)",
    teamSize: "2 - 4 Members",
    eligibility: "Open to university students, recent graduates, and early-stage developer teams worldwide.",
    registrationFee: "100% Free",
    contactEmail: "genesis@codeverse.dev",
    officialWebsite: "https://codeverse.dev/genesis-2026",
    tracks: [
      {
        id: "tr-1",
        title: "Autonomous AI & Intelligent Agents",
        description: "Build next-generation multi-agent systems, multimodal generative tools, and self-improving workflows that solve complex domain challenges.",
        tags: ["LLMs", "RAG", "Agentic Workflows", "Python", "LangChain"]
      },
      {
        id: "tr-2",
        title: "Next-Gen Web & Spatial Computing",
        description: "Craft ultra-performant 3D immersive web platforms, interactive real-time applications, and progressive spatial web experiences.",
        tags: ["WebGPU", "Three.js", "WebSockets", "WASM", "Tailwind"]
      },
      {
        id: "tr-3",
        title: "Cyber Defense & Threat Intelligence",
        description: "Architect zero-trust models, automated vulnerability scanning platforms, and cryptographically verified privacy layers.",
        tags: ["Zero-Trust", "CTF Tools", "SIEM", "Rust", "Network Security"]
      },
      {
        id: "tr-4",
        title: "Sustainable Smart Cities & IoT",
        description: "Develop energy-optimized edge sensor frameworks, smart urban mobility algorithms, and carbon footprint reduction monitoring systems.",
        tags: ["IoT", "Edge AI", "MQTT", "Embedded C++", "GIS"]
      }
    ],
    schedule: [
      { day: "Day 1 - Nov 28", time: "09:00 AM", title: "Opening Keynote & Track Reveal", description: "Grand opening address by visionary mentors, announcement of problem statements, and kick-off." },
      { day: "Day 1 - Nov 28", time: "11:00 AM", title: "Hacking Starts & Mentor Matching", description: "Hacking sprint officially opens. Connect with assigned domain mentors for architecture reviews." },
      { day: "Day 1 - Nov 28", time: "05:00 PM", title: "Hands-on Workshop: Scaling AI Systems", description: "Technical deep-dive on low-latency inference and real-time distributed state." },
      { day: "Day 2 - Nov 29", time: "10:00 AM", title: "Checkpoint Evaluation 1", description: "Midway review of prototypes, wireframes, and GitHub progress with review panel." },
      { day: "Day 2 - Nov 29", time: "08:00 PM", title: "Late Night Gaming & Chill Lounge", description: "Trivia, online arcade games, and fun networking break for tired hackers." },
      { day: "Day 3 - Nov 30", time: "02:00 PM", title: "Code Freeze & Final Submissions", description: "Hard deadline for all code commits, video demos, and deck submissions." },
      { day: "Day 3 - Nov 30", time: "04:30 PM", title: "Live Grand Finale & Pitch Demos", description: "Top 10 shortlisted teams pitch live before the executive jury panel." }
    ],
    prizes: [
      { rank: "1st Place", title: "Grand Champion", amount: "₹10,00,000", perks: "Winner Trophy + Cloud Credits + Direct Fast-Track VC Pitch + Exclusive Swag Pack" },
      { rank: "2nd Place", title: "First Runner-Up", amount: "₹6,00,000", perks: "Silver Plaque + Premium Tech Gadgets + 1-Year Pro Software Subscriptions" },
      { rank: "3rd Place", title: "Second Runner-Up", amount: "₹4,00,000", perks: "Bronze Plaque + Mentorship Cohort Access + Hacker Hardware Kits" },
      { rank: "Special", title: "Best AI Innovation Track", amount: "₹2,50,000", perks: "Sponsored by AI Alliance + GPU Compute Grants" },
      { rank: "Special", title: "Best All-Women Team", amount: "₹2,50,000", perks: "EmpowerHER Tech Trophy + Dedicated Mentorship Fellowship" }
    ],
    sponsors: [
      { name: "Apex Cloud Services", tier: "Title Sponsor", logo: "APEX" },
      { name: "NeuralCore AI", tier: "Platinum Sponsor", logo: "NEURAL" },
      { name: "Fortress Cyber Security", tier: "Gold Sponsor", logo: "FORTRESS" },
      { name: "DevStream Interactive", tier: "Community Partner", logo: "DEVSTREAM" }
    ],
    faqs: [
      { q: "Is there any registration fee for CODEVERSE Genesis?", a: "No! CODEVERSE Genesis 2026 is completely free for all qualified participants, thanks to our generous sponsors." },
      { q: "Can I participate individually without a team?", a: "While team collaboration (2-4 members) is highly recommended, solo participants can register and leverage our pre-event matchmaking discord channel to form a team." },
      { q: "Will travel reimbursement be provided for the offline hub?", a: "Shortlisted finalist teams attending the offline Bangalore hub will receive travel stipends and complimentary meal passes during the 48-hour event." }
    ]
  },
  {
    id: "cv-002",
    slug: "ai-nexus-summit-2026",
    name: "AI Nexus Global Challenge",
    organizer: "NeuralCore Labs & Stanford AI Club",
    badge: "Trending",
    featured: true,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Push the boundaries of Generative AI, multimodal foundation models, and autonomous multi-agent swarms.",
    fullDescription: "AI Nexus Global Challenge gathers 3,000+ AI practitioners and machine learning researchers to solve real-world problems in cognitive reasoning, autonomous code generation, ethical AI alignment, and automated workflow synthesis. High-throughput GPU clusters will be made available to all verified participants.",
    category: "AI & Machine Learning",
    technologies: ["Generative AI", "PyTorch", "Transformers", "Vector Databases", "FastAPI"],
    format: "Online",
    location: "Global Virtual",
    registrationDeadline: "2026-11-25T18:00:00",
    startDate: "2026-12-05T10:00:00",
    endDate: "2026-12-07T20:00:00",
    resultsDate: "2026-12-10T12:00:00",
    status: "upcoming",
    prizePool: "$20,000 USD",
    teamSize: "1 - 3 Members",
    eligibility: "Open to developers and students globally with an interest in applied machine learning.",
    registrationFee: "Free",
    contactEmail: "hack@ainexus.io",
    officialWebsite: "https://ainexus.io/global-2026",
    tracks: [
      { id: "an-1", title: "Multimodal Voice & Vision Assistants", description: "Create real-time multimodal assistants capable of zero-latency perception.", tags: ["Voice AI", "Computer Vision", "Whisper"] },
      { id: "an-2", title: "Autonomous Knowledge Workflows", description: "Design agent chains that synthesize research, extract insights, and execute actions autonomously.", tags: ["Autonomous Agents", "RAG", "Embeddings"] }
    ],
    schedule: [
      { day: "Dec 05", time: "10:00 AM", title: "Virtual Kickoff", description: "Welcome address and keynote by Chief AI Scientist." },
      { day: "Dec 06", time: "02:00 PM", title: "Mid-Hack Feedback", description: "Live code walkthrough and office hours." },
      { day: "Dec 07", time: "08:00 PM", title: "Final Repository Push", description: "GitHub submission deadline." }
    ],
    prizes: [
      { rank: "1st Place", title: "First Prize Winner", amount: "$10,000", perks: "H100 GPU compute grant + YC Interview recommendation" },
      { rank: "2nd Place", title: "Second Prize Winner", amount: "$6,000", perks: "Cloud Credits + AI Workstation" },
      { rank: "3rd Place", title: "Third Prize Winner", amount: "$4,000", perks: "Developer Toolkits" }
    ],
    sponsors: [
      { name: "NeuralCore", tier: "Host Sponsor", logo: "NEURAL" },
      { name: "QuantVector", tier: "Infrastructure Partner", logo: "QUANT" }
    ],
    faqs: [
      { q: "Are compute credits provided?", a: "Yes, $200 in GPU compute vouchers will be sent to confirmed registered teams 24h before kick-off." }
    ]
  },
  {
    id: "cv-003",
    slug: "cybershield-ctf-2026",
    name: "CyberShield Defense & CTF 2026",
    organizer: "Fortress Security Council",
    badge: "High Stakes",
    featured: true,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Battle in high-octane red team vs. blue team defense scenarios and develop cryptographic security tools.",
    fullDescription: "CyberShield 2026 challenges cybersecurity researchers and ethical hackers with realistic adversarial simulations. Build real-time intrusion mitigation microservices, decrypt zero-day attack payloads, and propose automated security compliance engines that defend critical cloud infrastructure.",
    category: "Cybersecurity",
    technologies: ["Cryptography", "Network Forensics", "Reverse Engineering", "Linux Kernel", "Go"],
    format: "Hybrid",
    location: "IIT Delhi & Virtual Live",
    registrationDeadline: "2026-11-15T23:59:00",
    startDate: "2026-11-22T08:00:00",
    endDate: "2026-11-23T20:00:00",
    resultsDate: "2026-11-24T18:00:00",
    status: "upcoming",
    prizePool: "₹12,00,000",
    teamSize: "2 - 4 Members",
    eligibility: "Open to university students and certified security analysts.",
    registrationFee: "Free",
    contactEmail: "contact@cybershield.org",
    officialWebsite: "https://cybershield.org",
    tracks: [
      { id: "cs-1", title: "Active Threat Hunting & SIEM", description: "Detect anomaly signatures across enterprise telemetry.", tags: ["SIEM", "Snort", "Telemetry"] },
      { id: "cs-2", title: "Zero-Knowledge & Applied Cryptography", description: "Design tamper-proof audit trails using ZK proofs.", tags: ["ZK-Snarks", "Rust", "Hashing"] }
    ],
    schedule: [
      { day: "Nov 22", time: "08:00 AM", title: "Arena Opening", description: "CTF environment access granted." },
      { day: "Nov 23", time: "08:00 PM", title: "Leaderboard Freeze", description: "CTF concludes and scoring verified." }
    ],
    prizes: [
      { rank: "1st Place", title: "Champion Team", amount: "₹6,00,000", perks: "DefCon tickets support + Certified Ethical Hacker Exam vouchers" },
      { rank: "2nd Place", title: "Runner Up", amount: "₹4,00,000", perks: "Hardware Hacking Badges & Cash" },
      { rank: "3rd Place", title: "Third Place", amount: "₹2,00,000", perks: "Security books & subscriptions" }
    ],
    sponsors: [
      { name: "Fortress Cyber", tier: "Principal Sponsor", logo: "FORTRESS" },
      { name: "SecOps Global", tier: "Badge Sponsor", logo: "SECOPS" }
    ],
    faqs: [
      { q: "Is hardware hacking included?", a: "Yes, on-site participants receive an IoT microcontroller challenge badge." }
    ]
  },
  {
    id: "cv-004",
    slug: "web3-surge-defi-2026",
    name: "Web3 Surge & DeFi Sprint",
    organizer: "Decentralized Foundation",
    badge: "Web3",
    featured: false,
    isExternal: true,
    banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Construct resilient decentralized finance protocols, sovereign identity systems, and cross-chain dApps.",
    fullDescription: "Web3 Surge brings together smart contract engineers, cryptographers, and decentralization advocates. Build decentralized applications that focus on scalability, UX abstraction, zero-knowledge proofs, and secure cross-chain state bridges.",
    category: "Blockchain",
    technologies: ["Solidity", "Ethereum", "Rust", "EVM", "Web3.js"],
    format: "Online",
    location: "Global Remote",
    registrationDeadline: "2026-11-18T18:00:00",
    startDate: "2026-11-26T12:00:00",
    endDate: "2026-11-29T12:00:00",
    resultsDate: "2026-12-01T15:00:00",
    status: "upcoming",
    prizePool: "$35,000 USDC",
    teamSize: "1 - 4 Members",
    eligibility: "Global blockchain builders and developers.",
    registrationFee: "Free",
    contactEmail: "info@web3surge.io",
    officialWebsite: "https://web3surge.io",
    tracks: [
      { id: "w3-1", title: "Account Abstraction (ERC-4337)", description: "Seamless Web2-like onboarding UX for decentralized applications.", tags: ["ERC4337", "Smart Wallets"] },
      { id: "w3-2", title: "DeFi Micro-Lending & Oracles", description: "Novel automated market makers and collateralized liquidity pools.", tags: ["AMM", "Oracles", "Solidity"] }
    ],
    schedule: [
      { day: "Nov 26", time: "12:00 PM", title: "Smart Contract Workshop", description: "Security audits and best practices." },
      { day: "Nov 29", time: "12:00 PM", title: "Mainnet/Testnet Deployments Due", description: "Contract verification check." }
    ],
    prizes: [
      { rank: "1st Place", title: "Grand Protocol Award", amount: "$15,000 USDC", perks: "Ecosystem Grant + Audit Credits" },
      { rank: "2nd Place", title: "2nd Award", amount: "$10,000 USDC", perks: "Ecosystem Grant" },
      { rank: "3rd Place", title: "3rd Award", amount: "$5,000 USDC", perks: "Swag & Grants" }
    ],
    sponsors: [
      { name: "EthAlliance", tier: "Ecosystem Partner", logo: "ETH" },
      { name: "ChainGuard", tier: "Security Sponsor", logo: "CHAINGUARD" }
    ],
    faqs: [
      { q: "Is gas sponsored?", a: "Testnet faucets and sponsored relayer gas keys are provided to all registered hackers." }
    ]
  },
  {
    id: "cv-005",
    slug: "cloudscale-devops-grandprix",
    name: "CloudScale & DevOps Grand Prix",
    organizer: "Kubernetes User Group & CloudFoundry",
    badge: "Ongoing Now",
    featured: true,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Live hackathon in progress: Engineer self-healing Kubernetes clusters and automated CI/CD observability pipelines.",
    fullDescription: "Currently underway! CloudScale Grand Prix tests your cloud architecture mettle. Teams are actively building resilient distributed systems, dynamic autoscalers, serverless microservices, and eBPF observability pipelines that maintain uptime under rigorous chaos engineering drills.",
    category: "Cloud Computing",
    technologies: ["Kubernetes", "Docker", "Terraform", "eBPF", "Prometheus", "Go"],
    format: "Online",
    location: "Global Remote",
    registrationDeadline: "2026-10-28T23:59:00",
    startDate: "2026-10-31T09:00:00",
    endDate: "2026-11-04T18:00:00",
    resultsDate: "2026-11-06T14:00:00",
    status: "ongoing",
    prizePool: "$18,000 USD",
    teamSize: "2 - 4 Members",
    eligibility: "DevOps engineers, cloud architects, and backend students.",
    registrationFee: "Free",
    contactEmail: "devops@cloudscale.net",
    officialWebsite: "https://cloudscale.net/grandprix",
    tracks: [
      { id: "cs-k8s", title: "Zero-Downtime Chaos Engineering", description: "Survive synthetic node blackouts with autonomous healing.", tags: ["Chaos Mesh", "K8s", "Go"] },
      { id: "cs-obs", title: "Deep Telemetry via eBPF", description: "Kernel-level observability and real-time security alerting.", tags: ["eBPF", "Grafana", "Prometheus"] }
    ],
    schedule: [
      { day: "Day 1 (Oct 31)", time: "09:00 AM", title: "Chaos Injection Phase 1", description: "Live cluster assault drills begin." },
      { day: "Day 3 (Nov 02)", time: "06:00 PM", title: "Mid-Sprint Leaderboard", description: "Resilience score updates." },
      { day: "Day 5 (Nov 04)", time: "06:00 PM", title: "Final Evaluation & Teardown", description: "Final benchmark runs." }
    ],
    prizes: [
      { rank: "1st Place", title: "Cloud Champion", amount: "$8,000", perks: "CNCF Exam Vouchers + Multi-Cloud Credits" },
      { rank: "2nd Place", title: "Resilience Master", amount: "$6,000", perks: "Cloud credits" },
      { rank: "3rd Place", title: "Ops Specialist", amount: "$4,000", perks: "Tech hardware pack" }
    ],
    sponsors: [
      { name: "KubeStream", tier: "Cloud Host", logo: "KUBESTREAM" },
      { name: "MetricLens", tier: "Monitoring Partner", logo: "METRIC" }
    ],
    faqs: [
      { q: "Can we submit if we registered before deadline?", a: "Yes, teams that successfully registered are currently hacking until Nov 04!" }
    ]
  },
  {
    id: "cv-006",
    slug: "mobilecraft-app-sprint",
    name: "MobileCraft App Innovators 2026",
    organizer: "Mobile Dev Collective",
    badge: "Ongoing Now",
    featured: false,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Live hackathon in progress: Craft lightning-fast, accessible mobile experiences for Android, iOS, and cross-platform.",
    fullDescription: "Underway right now! 500 mobile teams are pushing the frontier of consumer mobile software. From local-first offline syncing, on-device ML vision, to ultra-smooth 120 FPS micro-interactions, participants are reimagining the everyday smartphone experience.",
    category: "App Development",
    technologies: ["Flutter", "Kotlin", "Swift", "React Native", "Firebase"],
    format: "Hybrid",
    location: "New Delhi & Virtual",
    registrationDeadline: "2026-10-25T23:59:00",
    startDate: "2026-10-30T10:00:00",
    endDate: "2026-11-03T20:00:00",
    resultsDate: "2026-11-05T17:00:00",
    status: "ongoing",
    prizePool: "₹8,00,000",
    teamSize: "1 - 3 Members",
    eligibility: "Open to all mobile developers and UI/UX designers.",
    registrationFee: "Free",
    contactEmail: "sprint@mobilecraft.dev",
    officialWebsite: "https://mobilecraft.dev",
    tracks: [
      { id: "mc-1", title: "On-Device Offline-First AI", description: "Privacy-centric on-device intelligence without external API calls.", tags: ["TensorFlow Lite", "CoreML"] },
      { id: "mc-2", title: "Fluid Gesture Interaction", description: "Breakthrough accessibility and tactile gesture experiences.", tags: ["Animations", "Flutter", "SwiftUI"] }
    ],
    schedule: [
      { day: "Oct 30", time: "10:00 AM", title: "Hack Kickoff", description: "Design sprint begins." },
      { day: "Nov 03", time: "08:00 PM", title: "APK / TestFlight Submissions", description: "Build artifacts submitted for jury review." }
    ],
    prizes: [
      { rank: "1st Place", title: "Best Mobile Experience", amount: "₹4,00,000", perks: "Flagship Smartphones + App Store Feature Pitch" },
      { rank: "2nd Place", title: "Design Excellence", amount: "₹2,50,000", perks: "Design Tablets" },
      { rank: "3rd Place", title: "Utility Award", amount: "₹1,50,000", perks: "Developer gear" }
    ],
    sponsors: [
      { name: "AppVeloce", tier: "Gold Sponsor", logo: "APVELOCE" },
      { name: "PixelCraft UI", tier: "Design Partner", logo: "PIXELCRAFT" }
    ],
    faqs: [
      { q: "Is emulator testing accepted?", a: "Yes, video screen recordings and APK/TestFlight links are both accepted." }
    ]
  },
  {
    id: "cv-007",
    slug: "ecosphere-cleantech-2026",
    name: "EcoSphere CleanTech Hackathon",
    organizer: "Green Earth Technologies & IEEE",
    badge: "Ongoing Now",
    featured: false,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Live hackathon in progress: Building IoT sensor networks and algorithmic power grid conservation engines.",
    fullDescription: "Teams are right now deploying smart climate intelligence solutions! Focusing on renewable energy arbitrage, circular economy recycling systems, and carbon accounting APIs for enterprises.",
    category: "Open Source",
    technologies: ["IoT", "Python", "LoRaWAN", "Raspberry Pi", "Data Science"],
    format: "Online",
    location: "Global Remote",
    registrationDeadline: "2026-10-26T23:59:00",
    startDate: "2026-10-29T09:00:00",
    endDate: "2026-11-02T22:00:00",
    resultsDate: "2026-11-04T12:00:00",
    status: "ongoing",
    prizePool: "$12,000 USD",
    teamSize: "2 - 4 Members",
    eligibility: "Open to researchers, hardware hackers, and environmental activists.",
    registrationFee: "Free",
    contactEmail: "info@ecosphere.earth",
    officialWebsite: "https://ecosphere.earth",
    tracks: [
      { id: "eco-1", title: "Grid Energy Arbitrage", description: "Smart battery charging algorithms based on renewable excess periods.", tags: ["CleanTech", "Python"] }
    ],
    schedule: [
      { day: "Oct 29", time: "09:00 AM", title: "Opening", description: "Climate dataset distribution." },
      { day: "Nov 02", time: "10:00 PM", title: "Submission", description: "Final submission." }
    ],
    prizes: [
      { rank: "1st Place", title: "Clean Planet Award", amount: "$6,000", perks: "Incubation Fellowship" }
    ],
    sponsors: [
      { name: "Solaris Power", tier: "Green Sponsor", logo: "SOLARIS" }
    ],
    faqs: [
      { q: "Is hardware required?", a: "Simulated hardware data or actual physical sensor prototypes are both eligible." }
    ]
  },
  {
    id: "cv-008",
    slug: "algoverse-olympiad-2025",
    name: "Algoverse Global Championship 2025",
    organizer: "Competitive Algorithmic Society",
    badge: "Completed",
    featured: false,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Completed event: High-performance algorithmic optimization and competitive computational challenge.",
    fullDescription: "Successfully concluded on Oct 12, 2025. Over 1,200 teams competed in solving NP-hard logistics optimization, ultra-low latency memory allocators, and graph partition problems.",
    category: "Web Development",
    technologies: ["C++20", "Rust", "Algorithms", "Graph Theory", "SIMD"],
    format: "Online",
    location: "Global Virtual",
    registrationDeadline: "2025-10-05T23:59:00",
    startDate: "2025-10-10T09:00:00",
    endDate: "2025-10-12T18:00:00",
    resultsDate: "2025-10-14T12:00:00",
    status: "completed",
    prizePool: "$15,000 USD",
    teamSize: "1 - 2 Members",
    eligibility: "Competitive programmers and algorithms enthusiasts.",
    registrationFee: "Free",
    contactEmail: "olympiad@algoverse.org",
    officialWebsite: "https://algoverse.org/2025",
    tracks: [
      { id: "algo-1", title: "Sub-Millisecond Graph Routing", description: "Shortest path under dynamic time-varying weights.", tags: ["C++", "SIMD", "Graphs"] }
    ],
    schedule: [
      { day: "Oct 10", time: "09:00 AM", title: "Round 1 Benchmark", description: "Speed benchmarking on hidden datasets." }
    ],
    prizes: [
      { rank: "1st Place", title: "Turing Champion", amount: "$7,500", perks: "Trophy + Silicon Valley Tech Visit" },
      { rank: "2nd Place", title: "Silver Algorist", amount: "$4,500", perks: "Cash Prize" },
      { rank: "3rd Place", title: "Bronze Algorist", amount: "$3,000", perks: "Cash Prize" }
    ],
    sponsors: [
      { name: "HyperScale Compute", tier: "Lead Sponsor", logo: "HYPERSCALE" }
    ],
    winners: [
      { rank: "1st Place", team: "Team QuantumPoly", members: "Aarav Sharma, Elena Rostova", project: "HyperGraph C++ Engine", description: "Achieved 14x faster path-routing using AVX-512 vectorization and lock-free cache-conscious ring buffers." },
      { rank: "2nd Place", team: "Rustacean Force", members: "Lucas Meyer", project: "SafeAlloc SIMD Allocator", description: "Custom arena allocator reducing fragmentation by 62% in high-frequency trading simulations." }
    ],
    faqs: [
      { q: "Where can we view the winning code?", a: "Winning code repositories have been open-sourced on GitHub with permission from authors." }
    ]
  },
  {
    id: "cv-009",
    slug: "biomed-revolution-2025",
    name: "BioMed Innovations Hack 2025",
    organizer: "Healthcare Innovation Council",
    badge: "Completed",
    featured: false,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Completed event: Revolutionary AI-assisted diagnostic tools and hospital resource optimization.",
    fullDescription: "Concluded successfully on Sep 18, 2025 at Mumbai Medical Tech Park. 75 shortlisted medical technology teams built assistive computer vision for radiogram anomaly detection and rural triage telehealth.",
    category: "AI & Machine Learning",
    technologies: ["Medical Imaging", "PyTorch", "FHIR", "Mobile App", "React Native"],
    format: "Offline",
    location: "Mumbai Medical Tech Park, India",
    registrationDeadline: "2025-09-01T23:59:00",
    startDate: "2025-09-15T09:00:00",
    endDate: "2025-09-17T18:00:00",
    resultsDate: "2025-09-18T16:00:00",
    status: "completed",
    prizePool: "₹10,00,000",
    teamSize: "2 - 4 Members",
    eligibility: "Engineering and medical biotechnology scholars.",
    registrationFee: "Free",
    contactEmail: "contact@biomedhack.in",
    officialWebsite: "https://biomedhack.in/2025",
    tracks: [
      { id: "bio-1", title: "Radiological Anomaly Detection", description: "Assistive AI heatmaps for low-resource clinics.", tags: ["DICOM", "Vision AI"] }
    ],
    schedule: [
      { day: "Sep 15", time: "09:00 AM", title: "Clinician Briefing", description: "Anonymized radiology datasets provided." }
    ],
    prizes: [
      { rank: "1st Place", title: "HealthTech Vanguard", amount: "₹5,00,000", perks: "Clinical Pilot Trial Opportunity" }
    ],
    sponsors: [
      { name: "MediTech Global", tier: "Healthcare Partner", logo: "MEDITECH" }
    ],
    winners: [
      { rank: "1st Place", team: "PulseVision AI", members: "Dr. Rohan Verma, Ananya Sen, Kabir Das", project: "TriageScan Mobile", description: "Real-time edge ML model screening chest X-rays for pneumonia within 3 seconds on offline mobile devices." }
    ],
    faqs: [
      { q: "Is the project entering clinical validation?", a: "Yes, the 1st place solution is currently conducting clinical safety observation studies." }
    ]
  },
  {
    id: "cv-010",
    slug: "oss-carnival-2025",
    name: "Global Open Source Carnival 2025",
    organizer: "Open Source Collective & GitHub Campus Experts",
    badge: "Completed",
    featured: false,
    isExternal: false,
    banner: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Completed event: 3-day sprint contributing to major open-source tools, developer CLI packages, and documentation.",
    fullDescription: "Celebrated worldwide from Aug 22 - Aug 25, 2025. Over 3,400 pull requests merged into public open-source libraries, frameworks, and developer tooling packages.",
    category: "Open Source",
    technologies: ["Git", "Rust", "TypeScript", "Python", "CLI"],
    format: "Online",
    location: "Global Decentralized",
    registrationDeadline: "2025-08-15T23:59:00",
    startDate: "2025-08-22T00:00:00",
    endDate: "2025-08-25T23:59:00",
    resultsDate: "2025-08-28T12:00:00",
    status: "completed",
    prizePool: "$10,000 in Grants",
    teamSize: "1 - 4 Members",
    eligibility: "Open to developers of all skill levels.",
    registrationFee: "Free",
    contactEmail: "carnival@osscollective.org",
    officialWebsite: "https://osscollective.org/carnival-2025",
    tracks: [
      { id: "oss-1", title: "Developer Experience & Tooling", description: "Speeding up build tools, linters, and testing suites.", tags: ["CLI", "Tooling"] }
    ],
    schedule: [
      { day: "Aug 22", time: "12:00 AM", title: "Carnival Opening", description: "Issue bounty board unlocked." }
    ],
    prizes: [
      { rank: "Top Contributor", title: "Open Source Champion", amount: "$3,000", perks: "GitHub Sponsor Grant + Golden Octocat Trophy" }
    ],
    sponsors: [
      { name: "DevOpen Guild", tier: "Grant Sponsor", logo: "DEVOPEN" }
    ],
    winners: [
      { rank: "Top Contributor", team: "Priyansh Mehta", members: "Priyansh Mehta", project: "FastLinter CLI", description: "Created an ultra-fast incremental Markdown and YAML linter written in Rust with 40x speedup." }
    ],
    faqs: [
      { q: "Will there be a 2026 edition?", a: "Yes! The 2026 edition will be announced in CODEVERSE soon." }
    ]
  }
];

// Initialize and manage data storage with local persistence
const HackathonData = {
  STORAGE_KEY: "codeverse_hackathons_db",
  
  getAll() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Storage error, falling back to seed data:", e);
    }
    // Default to seed data
    this.saveAll(SEED_HACKATHONS);
    return SEED_HACKATHONS;
  },

  saveAll(hackathons) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(hackathons));
    } catch (e) {
      console.error("Failed to save hackathons to localStorage", e);
    }
  },

  getByIdOrSlug(idOrSlug) {
    const list = this.getAll();
    return list.find(h => h.id === idOrSlug || h.slug === idOrSlug) || null;
  },

  addHackathon(item) {
    const list = this.getAll();
    const newId = "cv-" + String(Date.now()).slice(-6);
    const slug = (item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")) + "-" + Math.floor(Math.random() * 1000);
    const newRecord = {
      ...item,
      id: newId,
      slug: slug,
      featured: Boolean(item.featured),
      isExternal: Boolean(item.isExternal),
      status: this.calculateStatus(item.startDate, item.endDate),
      tracks: item.tracks || [],
      schedule: item.schedule || [],
      prizes: item.prizes || [],
      sponsors: item.sponsors || [],
      faqs: item.faqs || []
    };
    list.unshift(newRecord);
    this.saveAll(list);
    return newRecord;
  },

  updateHackathon(id, updatedFields) {
    const list = this.getAll();
    const idx = list.findIndex(h => h.id === id || h.slug === id);
    if (idx !== -1) {
      list[idx] = {
        ...list[idx],
        ...updatedFields,
        status: this.calculateStatus(
          updatedFields.startDate || list[idx].startDate,
          updatedFields.endDate || list[idx].endDate
        )
      };
      this.saveAll(list);
      return list[idx];
    }
    return null;
  },

  deleteHackathon(id) {
    let list = this.getAll();
    list = list.filter(h => h.id !== id && h.slug !== id);
    this.saveAll(list);
    return true;
  },

  resetToSeed() {
    this.saveAll(SEED_HACKATHONS);
    return SEED_HACKATHONS;
  },

  calculateStatus(startDateStr, endDateStr) {
    if (!startDateStr || !endDateStr) return "upcoming";
    const now = new Date().getTime();
    const start = new Date(startDateStr).getTime();
    const end = new Date(endDateStr).getTime();
    if (now < start) return "upcoming";
    if (now >= start && now <= end) return "ongoing";
    return "completed";
  }
};

// Export to window
window.HackathonData = HackathonData;
window.SEED_HACKATHONS = SEED_HACKATHONS;
