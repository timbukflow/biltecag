// Initialisierung
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Licht hinzufügen
const light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(0, 10, 10);
scene.add(light);

// Kamera Position
camera.position.z = 5;

// Modell laden
const loader = new THREE.GLTFLoader();
let mesh;
loader.load('meinModell.gltf', (gltf) => {
  mesh = gltf.scene;
  mesh.scale.set(0.1, 0.1, 0.1); // Skalierung des Modells
  scene.add(mesh);
});

// Animationsfunktion
function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
  }

  renderer.render(scene, camera);
}

animate();
