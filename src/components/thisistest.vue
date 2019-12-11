<template>
	<div class="area">
		<div>
			<p>这只是有个单独的组件 </p>
			<div style="color: red;">
				<slot name="red" >我是子组件里的</slot>
			</div>
			<div style="color: blue;">
				<slot name="blue" >我是子组件里的</slot>
			</div>
		</div>
		<span>这是vuex里的值:{{count}}</span>
		<div id="dynamic-fade-demo" class="demo">
		  Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
		  Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">
		  <transition
		    v-bind:css="false"
		    v-on:before-enter="beforeEnter"
		    v-on:enter="enter"
		    v-on:leave="leave"
		  >
		    <p v-if="show">hello</p>
		  </transition>
		  <button
		    v-if="stop"
		    v-on:click="stop = false; show = false"
		  >Start animating</button>
		  <button
		    v-else
		    v-on:click="stop = true"
		  >Stop it!</button>
		</div>
		<!-- <input type="text" v-focus > -->
	</div>
</template>

<script>
 import Vue from 'vue'
export default{
	name:'thisistest',
	data(){
		return{
			vuex_value:'',
			show: true,
			fadeInDuration: 1000,
			fadeOutDuration: 1000,
			maxFadeDuration: 1500,
			stop: true
		}
	},
	render: function (createElement) {
	  return createElement('div',
	    Array.apply(null, { length: 20 }).map(function () {
	      return createElement('p', 'hi')
	    })
	  )
	},
	//自定义指令
	directives:{
		demo:{
			function(el, binding){
				console.log(binding.value.color) // => "white"
				console.log(binding.value.text)  // => "hello!"
			}
		}
	},
	// directives:{
	// 	focus:{
	// 		inserted:function(el){
	// 			el.focus()
	// 		}
	// 	}
	// },
	mounted() {
		this.vuex_value = this.$store.state.count
		console.log(this.$store.state.count)
		this.show = false
	},
	computed:{
		count(){
			return this.$store.state.count
		}
	},
	methods: {
	    beforeEnter: function (el) {
	      el.style.opacity = 0
	    },
	    enter: function (el, done) {
	      var vm = this
	      Velocity(el,
	        { opacity: 1 },
	        {
	          duration: this.fadeInDuration,
	          complete: function () {
	            done()
	            if (!vm.stop) vm.show = false
	          }
	        }
	      )
	    },
	    leave: function (el, done) {
	      var vm = this
	      Velocity(el,
	        { opacity: 0 },
	        {
	          duration: this.fadeOutDuration,
	          complete: function () {
	            done()
	            vm.show = true
	          }
	        }
	      )
	    }
	}
}
</script>
<style>
	.area{
		width: 500px;
		height: 500px;
		border: 1px solid aqua;
		margin: 10px auto;
	}
</style>
