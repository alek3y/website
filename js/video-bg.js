Vue.component("video-background", {
	props: ["data-src", "data-type"],

	data: function() {
		return {
			style: {
				"position": "fixed",
				"right": "0px",
				"bottom": "0px",
				"left": "50%",
				"top": "50%",
				"min-width": "100%",
				"min-height": "100%",
				"overflow": "hidden",
				"transform": "translate(-50%,-50%)",
				"-moz-transform": "translate(-50%,-50%)",
				"-webkit-transform": "translate(-50%,-50%)",
				"-ms-transform": "translate(-50%,-50%)"
			},
			source: null
		}
	},

	methods: {
		loadUrl: function(url) {
			this.$el.pause();
			this.source = url;
			this.$el.load();
			this.$el.play();
		}
	},

	computed: {
		watchDataSrc: function() {
			return this.dataSrc;
		}
	},

	watch: {
		watchDataSrc: function(src) {
			this.loadUrl(src)
		}
	},

	mounted: function() {
		this.source = this.dataSrc;
	},

	template: `
		<video autoplay muted loop v-bind:style="style">
			<source v-bind:src="source" v-bind:type="dataType">
		</video>
	`
});
