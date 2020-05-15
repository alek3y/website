
// Get the informations about the videos from the listing file and put them in the variable INFO
eval("var INFO = " + get_file("/lists/videos.txt"));

// Get and setup the elements needed for the video player
const VIDEO = document.getElementById("videoplayer");
const SOURCE = document.createElement("source");
VIDEO.appendChild(SOURCE);
VIDEO.play();

// ---
// Function to change the video to the one corresponding with the given index
// ---
function change_background(index) {
	VIDEO.pause();
	SOURCE.setAttribute("src", INFO["PARENT_URL"] + INFO["ITEMS"][index]);
	VIDEO.load();
	VIDEO.play();
}

generate_background();		// Run the function from main.js once to replace the background instantaneously
var update_timer = setInterval(generate_background, INFO["DELAY"]);		// Start the counter for the next update