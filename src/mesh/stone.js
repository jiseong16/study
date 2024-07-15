import * as THREE from "three";

export default function printStone() {
  const stone = new THREE.Group();

  const stoneMaterial = new THREE.MeshStandardMaterial({
    color: 0x325928,
  })

//   const headGeometry = new THREE.CylinderGeometry(1, 1.5, 3, 4);
//   const head = new THREE.Mesh(headGeometry, stoneMaterial);
//   // head.rotation.y = THREE.MathUtils.degToRad(45);
//   head.rotation.y = Math.PI / 4;
//   head.position.y = 2.5;
//   stone.add(head);


  const bodyGeometry = new THREE.CapsuleGeometry(0.7, 3, 32, 64); 
  const body = new THREE.Mesh(bodyGeometry, stoneMaterial);
  body.rotation.y = Math.PI / 4;
  stone.add(body);

  const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5, 6);
  const armLeft = new THREE.Mesh(armGeometry, stoneMaterial);
  armLeft.position.set(-1, 1, 0);
  armLeft.rotation.z = THREE.MathUtils.degToRad(60);
  stone.add(armLeft);

  const armRight = new THREE.Mesh(armGeometry, stoneMaterial);
  armRight.position.set(1, 1, 0);
  armRight.rotation.z = Math.PI / -3;
  stone.add(armRight);

  const eyeGeometry = new THREE.CapsuleGeometry(0.4, 0.3);
  const eyeMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xfdfd96, 
    roughness: 0.4 
})
  const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eye.position.set(0, 1, 0.75);
  stone.add(eye);

  const pupilGeometry = new THREE.SphereGeometry(0.2);
  const pupilMaterial = new THREE.MeshStandardMaterial({
     color: 0xff00000
    })

  const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupil.position.set(0, 1, 1);
  stone.add(pupil);

  for (const mesh of stone.children) {
    mesh.castShadow = true;
  }


  return stone;
}