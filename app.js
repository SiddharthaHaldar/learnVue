var myComponent1 = Vue.component("button-counter",{
	data:function(){
		return{
			count : 0
		}
	},
	template: '<div>'+
					'<button v-on:click="$emit('+"'fire-event'"+')">Increase Font</button>'+
			  		'<button v-on:click="count++">{{count}}</button>'+
			  '</div>'
})

var myComponent2 = Vue.component("blog-post",{
	props : ["post"],
	template : '<div>'+
					'<h3>{{post.title}}</h3>'+
					'<div v-html="post.content"></div>'+
				'</div>'
})

var app = new Vue({
	el : "#vue-app",
	data : {
		name : "Sid",
		job : 'Software Engineer',
		website : "http://www.google.com",
		time : "Morning",
		show : true,
		age : 22,
		postFontSize : 1,
		posts:[{
			id:"post1",
			title:"post1",
			content:"this is post1"
		},{
			id:"post2",
			title:"post2",
			content:"this is post2"
		},{
			id:"post3",
			title:"post3",
			content:"this is post3"
		}]
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
	},
	components: {
	  myTask: myComponent1,
	  blogpost: myComponent2
	 }
})
