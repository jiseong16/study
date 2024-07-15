import * as THREE from "three";
// import WebGL from "../../node_modules/three/examples/jsm/capabilities/WebGL.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import printIsland from "../mesh/island.js";
import printTree from "../mesh/tree.js";
import printTangerine from "../mesh/tangerine.js";
import printWatermelon from "../mesh/watermelon.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x79edff);

// Camera 
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 22, 22); // 카메라 위치 변경 
camera.lookAt(0, 0, 0) // 카메라 방향 변경

// Renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 사이즈 설정
document.body.appendChild(renderer.domElement); // canvas 엘리먼트 추가 
renderer.shadowMap.enabled = true;

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight(0xffffff, 2.5);
directionLight.position.set(-10, 10, 5);
scene.add(directionLight);
directionLight.castShadow = true;

//OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

const island = printIsland();
scene.add(island);

const Tangerine1 = printTangerine();
Tangerine1.position.set(-8, 2, -1);
Tangerine1.scale.set(1.3, 1.3, 1.3);
scene.add(Tangerine1); 

const Tangerine2 = printTangerine();
Tangerine2.position.set(-9, 1.5, 3);
scene.add(Tangerine2);

const tree1 = printTree();
tree1.position.set(0, 1.5, -3);
tree1.scale.set(1.5, 1.5, 1.5);
scene.add(tree1);

const tree2 = printTree();
tree2.position.set(5, 1, 0)
tree2.scale.set(0.9, 0.9, 0.9);
scene.add(tree2);

const watermelon = printWatermelon();
watermelon.position.set(-3, 2.3, 5);
scene.add(watermelon);

// const axes = new THREE.AxesHelper(10);
// scene.add(axes)

//외부 모델 불러오기 
const loader = new GLTFLoader();

loader.load('../src/models/penguin/scene.gltf',(gltf) => {
    const model = gltf.scene;
    model.position.set(3, 0.5, 5);
    model.scale.set(2, 2, 2);
    scene.add(model);

    for (const mesh of model.children) {
        mesh.castShadow = true;
    }

})

// //애니메이션 
function animate() {
    renderer.render(scene, camera);
    controls.update();
   requestAnimationFrame(animate);

}
animate();

// 반응형 시 
// window.addEventListener('resize',() => {
//     // 1. 카메라 종횡비 
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix(); // 카메라 업데이트
    
//     // 2. 렌더러의 크기 
//     renderer.setSize(window.innerWidth, window.innerHeight);
// })