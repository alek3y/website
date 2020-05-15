var player;

// Initialize player
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '0',		// No size to hide it for music only
		width: '0',
		videoId: 'l7TxwBhtTUY',		// Change this ID to change the video to play
		events: {
			'onReady': onPlayerReady
		}
	});
}

// When ready, setup the clicks listener
function onPlayerReady(event) {
	setupListener();
}

function setupListener(){
	
	// When the play button is clicked the video starts and the button disappear showing the pause button
	document.getElementById("play").addEventListener('click', function() {
		player.playVideo();
		player.unMute();
		player.setVolume(document.getElementById("volumecontrol").value);		// Set the volume as the slider value
		
		document.getElementById('play').style.display = "none";
		document.getElementById('pause').style.display = "block";
	});

	// When the pause is clicked show the play button
	document.getElementById("pause").addEventListener('click', function() {
		player.stopVideo();		// Since it's a livestream completely stop the video instead of pauseVideo
		
		document.getElementById('play').style.display = "block";
		document.getElementById('pause').style.display = "none";
	});
}