
// Get the informations about the gifs from the listing file and put them in the variable INFO
eval("var INFO = " + get_file("/lists/gifs.txt"));

const PAGE = document.documentElement;

// ---
// Function to change the gif to the one corresponding with the given index
// ---
function change_background(index) {
	PAGE.style.backgroundImage = "url(\"" + INFO["PARENT_URL"] + INFO["ITEMS"][index] + "\")";
	PAGE.style.backgroundPosition = "center center";
}

generate_background();		// Run the function from main.js once to replace the background instantaneously
var update_timer = setInterval(generate_background, INFO["DELAY"]);		// Start the counter for the next update