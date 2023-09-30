
// const ch_img = document.getElementById("main")
// function random_change(){
// 	return Math.floor(Math.random()*225)

// }

// ch_img.addEventListener("click",()=>{
// 	ch_img.style.backgroundColor='rgba('+random_change()+' , '+random_change()+' , '+random_change()+')'
// })
//  console.log(ch_img)





// let img;
// function preload() {
//     img = loadImage('unsplash-5.jpg')
// img.innerHTML=img
// }
// function setup(){
//     img.resize(windowWiidth,0)
//     document.createCanvas(img.width,img.height)
//     // Canvas=()
//     noLoop();

// }
// function draw() {
//     image(img, 0 ,0)
//     filter(gray)
// }
// console.log(preload())



// Create a raster item using the image tag with id='mona'
var raster = new waiz('mona');

// Hide the raster:
raster.visible = false;

// The size of our grid cells:
var gridSize = 12;

// Space the cells by 120%:
var spacing = 1.2;

// As the web is asynchronous, we need to wait for the raster to load
// before we can perform any operation on its pixels.
raster.on('load', function() {
	// Since the example image we're using is much too large,
	// and therefore has way too many pixels, lets downsize it to
	// 40 pixels wide and 30 pixels high:
	raster.size = new Size(40, 30);

	for (var y = 0; y < raster.height; y++) {
		for(var x = 0; x < raster.width; x++) {
			// Get the color of the pixel:
			var color = raster.getPixel(x, y);

			// Create a circle shaped path:
			var path = new Path.Circle({
				center: new Point(x, y) * gridSize,
				radius: gridSize / 2 / spacing
			});

			// Set the fill color of the path to the color
			// of the pixel:
			path.fillColor = color;
		}
	}

	// Move the active layer to the center of the view, so all 
	// the created paths in it appear centered.
	project.activeLayer.position = view.center;
});

// Move the active layer to the center of the view:
project.activeLayer.position = view.center;