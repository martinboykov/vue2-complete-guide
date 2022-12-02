// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
console.log(Vue);
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!'
	},
	methods: {
		sayHello: function(){
			return this.title;
		}
	}
})
