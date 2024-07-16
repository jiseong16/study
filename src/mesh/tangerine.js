import * as THREE from "three";

export default function printTangerine() {

    const loader = new THREE.TextureLoader();
    const baseColor = loader.load('../../src/textures/tangerine/Orange_001_COLOR.jpg');
    const normal = loader.load('../../src/textures/tangerine/Orange_001_NORM.jpg')
    const rough = loader.load('../../src/textures/tangerine/Orange_001_ROUGH.jpg')

    const tangerine = new THREE.Group();
    const body = new THREE.Group();

    const topGeometry = new THREE.TetrahedronGeometry(0.8, 3); 
    const bottomGeometry = new THREE.DodecahedronGeometry(2, 1); 
    const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.4);
    const leafGeometry = new THREE.SphereGeometry(0.5, 32, 16, 0, Math.PI / 3)
    
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xffb48c,
        map: baseColor,
        normalMap: normal,
        roughness: 0.2,
        roughnessMap: rough
    })

    const leaves = new THREE.Group();
    
    const leafMaterial = new THREE.MeshStandardMaterial({
        color: 0x6ca06e,
        side: THREE.DoubleSide
    })
    
    const top = new THREE.Mesh(topGeometry, bodyMaterial);
    const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
    const stem = new THREE.Mesh(stemGeometry, leafMaterial);
    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    
    top.position.y = 1.7
    stem.position.y = 2.5
    leaf.position.set(0.5, 2.6, 0)
    leaf.rotation.z = Math.PI / -2
    
    body.add(bottom);
    body.add(top);
    leaves.add(stem);
    leaves.add(leaf);

    tangerine.add(body);

    for (const mesh of body.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true
    }

    tangerine.add(leaves);

    for (const mesh of leaves.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true
    }

    return tangerine

}


