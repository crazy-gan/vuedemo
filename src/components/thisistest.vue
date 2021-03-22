<template>
	<div class="area">
		thisistest
		<div>
			<p>这只是有个单独的组件 </p>
			<div style="color: red;">
				<!-- 显示的是父组件里的内容和样式 ，，，，具名插槽 -->
				<slot name="red" >我是子组件里的(父组件没有时默认显示的)</slot>
			</div>
			<div style="color: blue;">
				<slot name="blue" >我是子组件里的(父组件没有时默认显示的)</slot>
			</div>
		</div>
		<span>这是vuex里的值:{{count}}</span>

		<!-- vue动画 -->
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
		<!-- 自定义指令 属于操作dom v-focus2是全局自定义指令-->
		<!-- <input type="text"  v-focus2 ='color' > -->

		<!-- eventbus兄弟组件传值 发送值 -->
		<button @click='sendBorder'>send border component</button>
	</div>
</template>

<script>
//  import Vue from 'vue'
import bus from '../assets/bus'
export default{
	name:'thisistest',
	data(){
		return{
			vuex_value:'',
			show: true,
			fadeInDuration: 1000,
			fadeOutDuration: 1000,
			maxFadeDuration: 1500,
			stop: true,
			color:'blue'
		}
	},
	// render: function (createElement) {
	//   return createElement('div',
	//     Array.apply(null, { length: 20 }).map(function () {
	//       return createElement('p', 'hi')
	//     })
	//   )
	// },
	//自定义指令
	directives:{
		demo:{
			//inserted 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
			inserted:function(el, binding){
				console.log(el,binding)
				el.style.borderColor='red'
				el.value='我是自定义指令的value'
			},
			//bind 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
			bind:(el)=>{
				console.log('只执行来一次')
			},
			//update 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
			update:(el)=>{
				console.log('更新才会调用')
			},
			//componentUpdated 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
			componentUpdated:()=>{

			},
			// 只调用一次，指令与元素解绑时调用。
			unbind:()=>{

			}
		},
		
		focus:{
			inserted:function(el){
				el.focus()
			}
		},
	},
	mounted() {
		this.vuex_value = this.$store.state.count
		console.log(this.$store.state.count)
		this.show = false
		console.log(this.$route )
	},
	computed:{
		count(){
			return this.$store.state.count
		}
	},
	methods: {
	    beforeEnter (el) {
	      el.style.opacity = 0
	    },
	    enter (el, done) {
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
	    leave(el, done) {
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
	    },
		sendBorder(){
			let color = this.color+=1
			bus.$emit('bordertoch',color)
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
