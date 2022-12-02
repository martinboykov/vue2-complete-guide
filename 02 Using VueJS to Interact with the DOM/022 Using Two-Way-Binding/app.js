// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		name: "max",
		x: 0,
		y: 0
	},
	methods: {
		increase: function() {
			this.counter++;
		},
		decrease: function() {
			this.counter++;
		}
	}
})
