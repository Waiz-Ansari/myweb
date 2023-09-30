const scene = new THREE.Scene();//creat scene
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);//creat camera and put the camera (close/far)
camera.position.z = 30; //creat camera positiion
const renderer = new THREE.WebGLRenderer();// render the graphics library
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);
// ====Adding light
// ambientLight has 2 perameters(color,intensity)
const ambientLight = new THREE.AmbientLight(0xffffff , 0.1)
scene.add(ambientLight)

// pointLight has 3 perameters(color, intensity, light-distance)
const pointLight = new THREE.PointLight(0xffffff , 1 , 100)
pointLight.position.set(5,0,1)
scene.add(pointLight)

// =====creat the box cube
const geometry = new THREE.BoxGeometry(4,4,4,9,12);//creat a shape
const material = new THREE.MeshStandardMaterial({color:"red"})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube)


// ====lightSphere is a point light hardwere
const lightGeometry = new THREE.SphereGeometry(1,999,14);
const lightMaterial = new THREE.MeshBasicMaterial({color:"yellow"});
const lightSphere = new THREE.Line(lightGeometry,lightMaterial)
lightSphere.position.set(5,0,1)
scene.add(lightSphere)



let q = 0
animate()

function animate(){

    q += 0.01
    let qsin = Math.sin(q)
    let qcos = Math.cos(q*2)
    let qten = Math.tan(q)

    // cube.position.x=9*qsin
    
    let scaledcos = 3.2 / qcos
    let scaledsin = 10 * qsin
    let scaledten = 10 / qten

    pointLight.position.set( scaledcos ,0 );
    lightSphere.position.set( scaledcos ,0)



    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene,camera);
    requestAnimationFrame(animate)
}