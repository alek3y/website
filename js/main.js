
// ---
// Function used to request a file content from the server
// ---
function get_file(file_url) {
	var request = new XMLHttpRequest();
	request.open("GET", file_url, false);
	request.send();

	// If the request was successful returns the text
	if(request.status == 200)
		return request.responseText;

	return null;
}

// ---
// Function to change the volume of the youtube player
// ---
function change_volume(new_value) {
	player.setVolume(new_value);
}

// ---
// Function to hide the items when clicking the title
// ---
var is_hidden = false;
var is_playing;
function hide_all() {

	// Show the items if already hidden
	if(is_hidden) {
		document.getElementById("links").style.display = "block";
		document.getElementById("volumecontrol").style.display = "block";
		
		// Show the pause button if the music is playing, otherwise the play button
		if(is_playing)
			document.getElementById("pause").style.display = "block";
		else
			document.getElementById("play").style.display = "block";

		is_hidden = false;
	
	// Hide the items if not hidden
	} else {
		is_playing = document.getElementById("play").style.display == "none";		// Save whether the music was playing or not

		document.getElementById("links").style.display = "none";
		document.getElementById("volumecontrol").style.display = "none";

		// Hide the pause button and the play button without having to check if it's playing or not
		document.getElementById("pause").style.display = "none";
		document.getElementById("play").style.display = "none";

		is_hidden = true;
	}
}

// ---
// Function that allows the background to be updated for both video and gif version
// ---
var previous_index;		// Keep track of the old video/gif to generate one that isn't the same
function generate_background() {
	var random_index;
	while(true) {
		random_index = Math.floor(Math.random() * INFO["ITEMS"].length);		// Generate an index for the new video/gif to be displayed

		// Stop trying to get a new index as it got a different one
		if(random_index != previous_index)
			break;
	}
	previous_index = random_index;		// Save the used index as previous to prevent repetitions

	change_background(random_index);
}

// ---
// Function that allows the user to manually change the background for both video and gif version
// ---
function custom_background(index) {
	change_background(index);

	// Restart the interval to prevent overlappings
	clearInterval(update_timer);
	update_timer = setInterval(generate_background, INFO["DELAY"]);
}