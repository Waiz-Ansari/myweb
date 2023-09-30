import * as THREE from 'three'
// import { Texture } from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";//three/examples/jsm/controls/OrbitControls
// import { mapLinear } from 'three/src/math/MathUtils';

const scene = new THREE.Scene();//creat scene
scene.background = new THREE.Color(0.2,0.2,0.2)

const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,15,1000);//creat camera and put the camera (close/far)
camera.position.y = 50; //creat camera positiion
// const cameraa = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,15,100);//creat camera and put the camera (close/far)
// cameraa.position.y = 30; //creat camera positiion

const renderer = new THREE.WebGLRenderer();// render the graphics library
renderer.setSize(window.innerWidth , window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);
// ====Adding light
// ambientLight has 2 perameters(color,intensity)
const ambientLight = new THREE.AmbientLight(0xffffff , 0.3)
scene.add(ambientLight)

// pointLight has 3 perameters(color, intensity, light-distance)
const pointLight = new THREE.PointLight(0xffffff , 1 , 1000)
pointLight.position.set(5,0,1)
scene.add(pointLight)

// =====creat the box cube
// const geometry = new THREE.BoxGeometry(4,4,4,5,1);//creat a shape
// const material = new THREE.MeshStandardMaterial({color:"green"})
// const cube = new THREE.Mesh(geometry,material)
// scene.add(cube)


// =====creat a Texture
const geometry = new THREE.SphereGeometry(7,999,14);//creat a shape
const texture = new THREE.TextureLoader().load('./public/2.png')//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eMb_OoXD1rnpGw6yihycQr5AP2XYRfCN3qpwKgfjT1DvM_L5fmTF0zE02HZGymQXCdc&usqp=CAU 
const material = new THREE.MeshStandardMaterial({
  // color:"green",
  map:texture,
  bumpMap:texture,
  bumpScale:0.1,
  // normalMap:texture
  // roughness:1,
  metalness:1
})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube)




// ====lightSphere is a point light hardwere
const lightGeometry = new THREE.SphereGeometry(1,9,14);
const textureMoon = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AvMP7bSVT7bTyfX4Ny4vuThiMNxe62nd8CHLw_E&s')//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eMb_OoXD1rnpGw6yihycQr5AP2XYRfCN3qpwKgfjT1DvM_L5fmTF0zE02HZGymQXCdc&usqp=CAU 
const lightMaterial = new THREE.MeshBasicMaterial({color:"white",map:textureMoon});
const lightSphere = new THREE.Mesh(lightGeometry,lightMaterial)
lightSphere.position.set(5,0,1)
scene.add(lightSphere)
//=====sun
const sunGeometry = new THREE.SphereGeometry(5,22,19);
const sunMaterial = new THREE.MeshBasicMaterial({color:"yellow",wireframe:false});
const sunSphere = new THREE.Line(sunGeometry,sunMaterial)
sunSphere.position.set(-22,-22,-22)//15,15,-17
scene.add(sunSphere)
// sun pointer
const sunLight = new THREE.PointLight('#FFFF00', 1 , 10000)
sunLight.position.set(-22,-22,-22)
scene.add(sunLight)

const controls = new OrbitControls(camera,renderer.domElement)//,domElement



let q = 0
animate()

function animate(){

  controls.update

    q += 0.01
    let qsin = Math.sin(q)
    let qcos = Math.cos(q)
    let qten = Math.tan(q)

    // cube.position.x=9*qsin
    
    let scaledcos = 10 * qcos
    let scaledsin = 10 * qsin
    // let scaledten = 10 / qten

    
    // moving light
    pointLight.position.set( scaledsin ,0 ,scaledcos);
    lightSphere.position.set( scaledsin ,0,scaledcos)
    


//moving cube
    // cube.rotation.x += -0.01
    cube.rotation.y += 0.001
    // cube.rotation.z += 0.01
    renderer.render(scene,camera);
    requestAnimationFrame(animate)
}