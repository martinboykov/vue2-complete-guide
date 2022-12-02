// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increase: function(step,event) {
			console.log(event);
			this.counter += step;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		// dummy: function(event) {
		// 	event.stopPropagation();
		// }
		alertMe: function(event) {
			console.log("🚀 ~ file: app.js:27 ~ event", event)
			alert(event.target.value);
		}

	}
})
