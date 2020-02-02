var app = new Vue({
	el : "#vue-app",
	data : {
		name : "Sid",
		job : 'Software Engineer',
		website : "http://www.google.com",
		time : "Morning",
		show : true,
		age : 22
	},
	methods : {
		greet : function(time)
		{
			this.time = time;
			return "GOOD "+this.time+" "+this.name;
		},
		increase : function(inc)
		{
			this.age += inc;
		},
		decrease : function(dec)
		{
			this.age -= dec
		}
	}
})