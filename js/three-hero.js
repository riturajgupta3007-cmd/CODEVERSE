/**
 * CODEVERSE - 3D Interactive Hero Experience
 * Renders an abstract glowing technological sphere & particle halo using Three.js.
 * Optimized for 60fps performance, responsive, respects reduced-motion.
 */

(function initThreeJSHero() {
  const container = document.getElementById("threejsHeroCanvas");
  if (!container) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    container.style.background = "radial-gradient(circle, rgba(118, 87, 255, 0.25) 0%, rgba(8, 11, 24, 0) 70%)";
    return;
  }

  // Check if THREE is loaded
  if (typeof THREE === "undefined") {
    console.warn("Three.js not loaded, skipping 3D canvas.");
    return;
  }

  let scene, camera, renderer;
  let coreSphere, outerWireframe, ringMesh, particleSystem;
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let isMobile = window.innerWidth < 768;

  function init() {
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 240;

    // 2. Renderer with Antialias and Alpha
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Central Glowing Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(55, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x7657FF,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    coreSphere = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreSphere);

    // 4. Outer Cyan Geodesic Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(78, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    outerWireframe = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerWireframe);

    // 5. Tech Orbital Ring
    const ringGeo = new THREE.TorusGeometry(95, 1.2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      transparent: true,
      opacity: 0.55
    });
    ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    scene.add(ringMesh);

    // 6. Floating Ambient Particles (reduced on mobile for buttery smooth performance)
    const particleCount = isMobile ? 80 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x7657FF);
    const c2 = new THREE.Color(0x00D9FF);

    for (let i = 0; i < particleCount; i++) {
      const radius = 110 + Math.random() * 80;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? c1 : c2;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 2.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });
    particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 7. Event Listeners
    window.addEventListener("resize", onWindowResize);
    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }
  }

  function onMouseMove(e) {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    mouseX = (e.clientX - halfW) / halfW;
    mouseY = (e.clientY - halfH) / halfH;
  }

  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    requestAnimationFrame(animate);

    // Smooth mouse parallax damping
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    // Continuous celestial rotation
    if (coreSphere) {
      coreSphere.rotation.y += 0.005;
      coreSphere.rotation.x += 0.003;
      coreSphere.rotation.x += targetY * 0.01;
      coreSphere.rotation.y += targetX * 0.01;
    }

    if (outerWireframe) {
      outerWireframe.rotation.y -= 0.003;
      outerWireframe.rotation.z += 0.002;
    }

    if (ringMesh) {
      ringMesh.rotation.z += 0.004;
      ringMesh.rotation.x = Math.PI / 3 + targetY * 0.2;
      ringMesh.rotation.y = Math.PI / 6 + targetX * 0.2;
    }

    if (particleSystem) {
      particleSystem.rotation.y += 0.0015;
    }

    renderer.render(scene, camera);
  }

  // Initialize
  init();
  animate();
})();
