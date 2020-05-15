
// Get the binaries list and put it into the variable BINARIES
eval("var BINARIES = " + get_file("/lists/binaries.txt"));
var WRITING_DELAY = 200;

// ---
// This function will animate the clearing of the text leaving a zero width space that allows the height to be equal
// and will animate the writing of the text
// ---
function replace_text(node, text, speed) {
	
	var cursor = node.textContent.length;

	var backspacing = setInterval(function() {
		var to_write = node.textContent.substr(0, cursor)		// Remove one character at the end
		
		// Set the text to a zero width space and stop the interval if the text is empty
		if(! to_write) {
			clearInterval(backspacing);
			backspacing = null;
			cursor = 1;		// Setup cursor position for the next interval
		}

		node.textContent = to_write;
		cursor--;		// Moves the cursor left

	}, speed);

	var writing = setInterval(function() {
		
		// Check whether the backspacing has ended (is null) or not
		if(backspacing) {
			return;
		}

		var to_write = text.substr(0, cursor)
		
		// If the replace has ended stop the interval
		if(to_write == text) {
			clearInterval(writing);
			writing = null;
		}

		node.textContent = to_write;
		cursor++;

	}, speed);
}

var random_bin_index = Math.floor(Math.random() * BINARIES.length);		// Generate random index
replace_text(document.getElementById("title"), "> " + BINARIES[random_bin_index], WRITING_DELAY);