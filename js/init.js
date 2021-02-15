let app = new Vue({
	el: "#root",

	data: {
		music: {
			video: "l7TxwBhtTUY",
			volume: "30",
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
			smartBackspace: false
		},

		links: [
			{
				content: "Change me!: #href-link-here",
				editing: false
			}
		],
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

	watch: {
		links: {
			immediate: true,
			deep: true,
			handler: function() {
				for(let i = 0; i < this.links.length; i++) {
					let link = this.links[i];
					if(link.content.length == 0 && ! link.editing) {
						this.links.splice(i, 1);		// Remove link when content is empty
					}
				}
			}
		}
	},

	methods: {
		arrayChoice: function(array) {
			return array[Math.floor(Math.random() * array.length)];
		},
		linkGetInfo: function(linkContent) {
			let linkParts = linkContent.split(": ");
			return {
				text: linkParts.slice(0, linkParts.length-1).join(": "),
				href: linkParts[linkParts.length-1],
			}
		},
		linkAddEmpty: function() {
			this.links = this.links.concat({
				content: "",
				editing: true
			});
		},
		playingToggle: function() {
			this.music.playing = Number(! Boolean(this.music.playing));
		}
	}
});
