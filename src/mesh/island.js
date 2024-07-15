import * as THREE from "three";

export default function printIsland() {

    const island = new THREE.Group();

    const topGeometry = new THREE.CylinderGeometry(9, 9, 1, 9);
    const topMaterial = new THREE.MeshStandardMaterial({
        color: 0x6ca06e
    })
    const top = new THREE.Mesh(topGeometry, topMaterial)
    top.scale.x = 1.5
    top.receiveShadow = true

    const bottomGeometry = new THREE.ConeGeometry(5, 6, 9);
    const bottomMaterial = new THREE.MeshStandardMaterial({
        color: 0xecd4b6
    })
    const bottom = new THREE.Mesh(bottomGeometry, bottomMaterial)
    bottom.scale.x = 3
    bottom.scale.z = 2
    bottom.rotation.z = THREE.MathUtils.degToRad(180)
    bottom.position.y = -3 

    island.add(top)
    island.add(bottom)
    return island

}