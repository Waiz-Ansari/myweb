const scene = new THREE.Scene();//creat scene
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);//creat camera and put the camera (close/far)
// camera.position.x = 1;
// camera.position.y = 5;
camera.position.z = 15; //creat camera positiion
const renderer = new THREE.WebGLRenderer();// render the graphics library
renderer.setSize(window.innerWidth, window.innerHeight);// render the window size(width, height)
document.body.appendChild(renderer.domElement);
// ====geometry type
// geometry has many perameters (width , height , height_line_fill ,width _line_fill  )
// const geometry = new THREE.CapsuleGeometry(3,3,180,90);//creat a shape
const geometry = new THREE.BoxGeometry(3,3,3,33,33);//creat a shape
// const geometry = new THREE.CircleGeometry(5,182,4477,9999);//creat a shape
// const geometry = new THREE.ConeGeometry(10,8,9,9);//creat a shape
// const geometry = new THREE.CylinderGeometry(1,4,3,9);//creat a shape
const material = new THREE.MeshBasicMaterial({color:"red"}); //craet shape color
const cube = new THREE.Mesh(geometry,material); //marge geometry and material means(shape and color)

scene.add(cube);// add the code in scene
// renderer.render(scene,camera);//render the scene and camera

// =======first code start
// let box = true
// animate()

//  function animate(){
    
    
    //      if(cube.position.x > 9)
    //         box = false
    //      else if(cube.position.x < -9)
    //         box = true
    
    //      if(box) cube.position.x += 0.1
//         else cube.position.x -= 0.1

//         cube.rotation.x += 0.05
//         // cube.rotation.y += 0.05
//         // cube.rotation.z += 0.05


//         renderer.render(scene,camera);

//         requestAnimationFrame(animate)
//         // setInterval(animate, 1000)

// }


// //animate()
// =======first code close

let q = 0
animate()

function animate(){

    cube.position.x=9*Math.sin(q += 0.01)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene,camera);
    requestAnimationFrame(animate)
}