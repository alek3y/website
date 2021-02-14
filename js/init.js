let app = new Vue({
	el: "#root",

	data: {
		music: {
			video: "l7TxwBhtTUY",
			volume: "50",
			playing: 0
		},

		background: "https://github.com/alek3y/clips/raw/master/videos/raining.mp4",
	},

	methods: {
		togglePlaying: function() {
			this.music.playing = Number(! Boolean(this.music.playing));
		}
	}
});
