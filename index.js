<script>

import assets.js

// Global arrays for preload
images = [];
var img = new Image();   // Create new img element
img.src = './'; // Set source path

function load() {
	release old.data;
	initialise new.data;
	// strings are not memory efficient, potentially same with array references
	// releasing memory good practice
}

function preload() {
	images basically;
}

function startGame() {
	load(); // constructs game objects including player.lives
	while(True) {
		updateFrame();
		timeout(interval);
	}
}

function updateFrame() {
	position = position * deltatime;
	speed = speed * deltatime;
	draw();
}

function draw(props) {

}

function props => draw() {
	
}

</script>