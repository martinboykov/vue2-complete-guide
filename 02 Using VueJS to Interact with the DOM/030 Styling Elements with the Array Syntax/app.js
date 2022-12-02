new Vue({
	el: '#app',
	data: {
		width: 50,
		color: 'green'
	},
	computed: {
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			}
		}
	}
})
