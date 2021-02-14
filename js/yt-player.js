Vue.component("youtube-player-frame", {
	props: ["wrapper"],

	data: function() {
		return {
			id: "yt-player-" + this._uid,
			player: null
		}
	},

	methods: {
		checkDataPlay: function(newState) {
			switch(newState) {
				case 0:
					this.player.stopVideo();
					break;
				case 1:
					this.player.playVideo();
					break;
				case 2:
					this.player.pauseVideo();
					break;
			}
		},

		onPlayerReady: function() {
			this.checkDataPlay(this.watchDataPlay);
			this.player.setVolume(this.watchDataVolume);
		}
	},

	mounted: function() {
		this.player = new this.wrapper.api.Player(this.id, {
			width: this.wrapper.dataWidth,
			height: this.wrapper.dataHeight,
			videoId: this.wrapper.dataVideoId,
			events: {
				"onReady": this.onPlayerReady,
			}
		});
	},

	computed: {
		watchDataPlay: function() {
			return Number(this.wrapper.dataPlay);
		},
		watchDataVideoId: function() {
			return this.wrapper.dataVideoId;
		},
		watchDataVolume: function() {
			return Number(this.wrapper.dataVolume);
		},
		watchDataMute: function() {
			return this.wrapper.dataMute === "true";
		}
	},

	watch: {
		watchDataPlay: function(state) {
			this.checkDataPlay(state);
		},
		watchDataVideoId: function(newId) {
			this.player.loadVideoById(newId);
			this.checkDataPlay(this.watchDataPlay);		// Enforce video play state
		},
		watchDataVolume: function(volume) {
			this.player.setVolume(volume);
		},
		watchDataMute: function(mute) {
			if(mute) {
				this.player.mute();
			} else {
				this.player.unMute();
			}
		}
	},

	template: `<div v-bind:id="id"></div>`
});

Vue.component("youtube-player", {
	props: [
		"data-video-id",
		"data-width",
		"data-height",
		"data-play",
		"data-volume",
		"data-mute"
	],

	data: function() {
		return {
			wrapper: this,
			api: window.YT
		}
	},

	template: `
		<youtube-player-frame
			v-if="api.loaded === 1"
			v-bind:wrapper="wrapper"
		></youtube-player-frame>
	`
});
