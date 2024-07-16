import * as THREE from "three";

export default function printTree() {
    
    // 나무 그룹 형성 
    const tree = new THREE.Group();

    // 뿌리 그룹 형성
    const trunk = new THREE.Group();

    const trunkMaterial = new THREE.MeshStandardMaterial({
        color: 0xa38049
    })
 
    const trunkGeometry = new THREE.CylinderGeometry(0.8, 1, 1.5);

    const trunk1 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.add(trunk1); 

    const trunk2 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk2.position.set(0.1, 1.3, 0);
    trunk2.scale.set(0.9, 0.9, 0.9);
    trunk2.rotation.z = THREE.MathUtils.degToRad(-4);
    trunk.add(trunk2);

    const trunk3 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk3.position.set(0.2, 2.5, 0);
    trunk3.scale.set(0.8, 0.8, 0.8);
    trunk3.rotation.z = THREE.MathUtils.degToRad(-4);
    trunk.add(trunk3);

    const trunk4 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk4.position.set(0.3, 3.6, 0);
    trunk4.scale.set(0.7, 0.7, 0.7);
    trunk4.rotation.z = THREE.MathUtils.degToRad(-5);
    trunk.add(trunk4);

    const trunk5 = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk5.position.set(0.4, 4.5, 0);
    trunk5.scale.set(0.6, 0.6, 0.6);
    trunk5.rotation.z = THREE.MathUtils.degToRad(-6);
    trunk.add(trunk5);
    tree.add(trunk);
    for (const mesh of trunk.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true
    }

    // 나뭇잎 그룹 형성 
    const treeLeaf = new THREE.Group();

    const treeLeafMaterial = new THREE.MeshStandardMaterial({
        color: 0x84ad88,
        side: THREE.DoubleSide
    })

    const treeLeafGeometry = new THREE.SphereGeometry(2, 32, 16, Math.PI / 3, Math.PI / 3);

    const treeLeaf1 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    treeLeaf1.rotation.x = Math.PI / - 2;
    treeLeaf1.position.set(0.5, 3.8, 1.8);
    treeLeaf.add(treeLeaf1);

    const treeLeaf2 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    treeLeaf2.rotation.x = Math.PI / -2;
    treeLeaf2.rotation.z = Math.PI / 2;
    treeLeaf2.position.set(2.5, 3.8, 0);
    treeLeaf.add(treeLeaf2);

    const treeLeaf3 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    treeLeaf3.rotation.x = Math.PI / -2;
    treeLeaf3.rotation.z = Math.PI;
    treeLeaf3.position.set(0.5, 3.8, -1.8);
    treeLeaf.add(treeLeaf3);

    const treeLeaf4 = new THREE.Mesh(treeLeafGeometry, treeLeafMaterial);
    treeLeaf4.rotation.x = Math.PI / -2;
    treeLeaf4.rotation.z = Math.PI / -2;
    treeLeaf4.position.set(-1.5, 3.8, 0);
    treeLeaf.add(treeLeaf4);

    tree.add(treeLeaf);

    for (const mesh of treeLeaf.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true
    }

    return tree
}