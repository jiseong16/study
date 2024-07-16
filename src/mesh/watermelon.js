import * as THREE from "three";

export default function printWatermelon () {

    const loader = new THREE.TextureLoader();
    const baseColor = loader.load('https://jiseong16.github.io/study/src/textures/watermelon/Watermelon_001_basecolor.jpg');
    const normal = loader.load('https://jiseong16.github.io/study/src/textures/watermelon/Watermelon_001_normal.jpg');
    const rough = loader.load('https://jiseong16.github.io/study/src/textures/watermelon/Watermelon_001_roughness.jpg');

    const watermelon = new THREE.Group();
    const body = new THREE.Group();

    const bodyGeometry = new THREE.DodecahedronGeometry(2, 5); 
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: 0x008000,
        map: baseColor,
        normalMap: normal,
        roughness: 0.5,
        roughnessMap: rough,
    })

    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

    body.add(bodyMesh);
    
    const stem = new THREE.Group();


    class CustomSinCurve extends THREE.Curve {

        constructor( scale = 1 ) {
    
            super();
    
            this.scale = scale;
    
        }
    
        getPoint( t, optionalTarget = new THREE.Vector3() ) {
    
            const tx = t * 3 - 1.5;
            const ty = Math.sin( 2 * Math.PI * t );
            const tz = 0;
    
            return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );
    
        }
    
    }
    
    const path = new CustomSinCurve(0.5);
    const stemGeometry = new THREE.TubeGeometry( path, 100, 0.1, 10, false );
    const stemMaterial = new THREE.MeshStandardMaterial({
        color: 0x008000
    })

    const stemMesh = new THREE.Mesh(stemGeometry, stemMaterial);
    stemMesh.position.set(0.7, 2.2, 0);
    stemMesh.rotation.z = THREE.MathUtils.degToRad(20);

    stem.add(stemMesh);

    for (const mesh of stem.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
    }
    watermelon.add(body)

    for (const mesh of body.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
    }

    watermelon.add(stem)
    for (const mesh of stem.children) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
    }

    return watermelon;

}