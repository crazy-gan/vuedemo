<template>
<!--    toute路由传参-->
    <div class="div">
        <p>{{info}}</p>
        <ul>
          <li v-for="good of goods" :key='good.name'>
            <a href="javascript:;" @click="toInfo(good)">
              <img :src="good.src" >
              <p>{{good.name}}</p>
            </a>
          </li>
        </ul>
		<HellowWorld :good='goods' v-slot='my_slot'>
			<button @click="testBtn(my_slot)">测试</button>
		</HellowWorld> <!-- 父组件向子组件传值，子组件用prop接受 -->
		<button @click="btn_click">修改vuex值的按钮</button>
		<!-- <button @click="btn_change">改变值的按钮</button> -->
		<thisistest >
			<template #red>
				<p >{{info1}}</p>
			</template>
			<template #blue>
				<p>{{info2}}</p>
			</template>
		
		</thisistest>
		<axiosDome></axiosDome>
    </div>
</template>

<script>
	import HellowWorld from './HelloWorld'
	import thisistest from './thisistest'
	import axiosDome from './axiosDome'
    export default{
		
		components:{
			HellowWorld,
			thisistest,
			axiosDome
		},
          data(){
              return{
                  info:'这是注册页',
				  info1:'这是父组件里的(红色的)',
				  info2:'这是父组件里的(蓝色的)',
                  goods:[
                    {name:'商品1',src:'static/img/bg-04.jpg'},
                    {name:'商品2',src:'static/img/bg-22.jpg'},
                    {name:'商品3',src:'static/img/bg-26.jpg'},
                    {name:'商品4',src:'static/img/bg-55.jpg'}
                  ]
              }
          },
          methods:{
			  btn_click:function(){
				  this.$store.commit('increment')
				  // console.log(this.$store.state.count)
			  },
              toInfo:function (good) {
                  this.$router.push({
                      name:'goodInfo',
                      query:{
                          name:good.name,
                          src:good.src
                      }
                  })
              },
			  testBtn(my_slot){
				  console.log(my_slot.data)
			  }
        }
          
    }
</script>

<style scoped="scoped">
    .div{
        text-align: center;
    }
    ul{
        width: 75%;
        height: 300px;
        border: 1px solid red;
        margin: 0 auto;
    }
    ul>li{
        float: left;
        width: 23%;
        height: 100%;
        margin-left: 2%;
    }
    ul>li>a{
        width: 100%;
        height: 100%;
        display: block;
    }
    ul>li>a>img{
        width: 100%;
        height: 270px;
    }
    ul>li>a>p{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #000;
    }
</style>
