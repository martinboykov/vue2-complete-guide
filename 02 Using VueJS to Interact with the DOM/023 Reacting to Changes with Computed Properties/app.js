// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter: 0,
		counterTwo: 0,
	},
	methods: {
		result: function() {
			console.log('result');
			return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
		}
		// increase: function() {
		// 	this.counter++;
		// },
		// decrease: function() {
		// 	this.counter--;
		// }
	},
	computed: {
		output: function() {
			console.log('output');
			return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
		}
	},
})
