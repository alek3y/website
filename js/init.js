let app = new Vue({
	el: "#root",

	data: {
		music: {
			video: "l7TxwBhtTUY",
			volume: "50",
			playing: 0
		},

		video: {
			currentBackground: null,
			backgroundList: VIDEOS
		},

		title: {
			binaries: BINARIES,
			strings: ["hello"],
			startDelay: 1000,
			backspaceDelay: 2000,
			typeSpeed: 100,
			backspaceSpeed: 80,
			smartBackspace: false,
		}
	},

	created: function() {
		this.title.strings = this.title.strings.concat("> " + this.arrayChoice(this.title.binaries));
	},

	timers: {
		backgroundUpdate: {
			autostart: true,
			repeat: true,
			immediate: true,
			time: 3e4,
			callback: function() {
				let newVideo;
				do {
					newVideo = this.arrayChoice(this.video.backgroundList);
				} while(newVideo === this.video.currentBackground);

				this.video.currentBackground = newVideo;
			}
		}
	},

	methods: {
		arrayChoice: function(array) {
			return array[Math.floor(Math.random() * array.length)];
		},
		togglePlaying: function() {
			this.music.playing = Number(! Boolean(this.music.playing));
		}
	}
});
