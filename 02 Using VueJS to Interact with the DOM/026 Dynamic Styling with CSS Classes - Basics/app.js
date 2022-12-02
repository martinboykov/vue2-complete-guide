new Vue({
	el: '#app',
	data: {
		attachRed: true
	},
	methods: {
		changeColor: function() {
			this.attachRed = !this.attachRed;
		}
	}
})
