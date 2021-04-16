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
        <!-- 带着值的插槽  v-slot子组件传过来的值 作用域插槽-->
        <!-- 父组件向子组件传值，子组件用prop接受 -->
		<HellowWorld :good='goods' v-slot='my_slot' ref='hello' @soncomm='sonToFather'>
			<button @click="testBtn(my_slot)">测试（父组件的按钮）</button>
        </HellowWorld> 
        

		<button @click="btn_click">修改vuex值的按钮</button>
		<!-- <button @click="btn_change">改变值的按钮</button> -->
		<thisistest >
            <!-- 插槽 -->
			<template slot='red' >
				<p style="color: pink;">{{info1}}</p>
			</template>
			<template #blue>
				<!-- <p>{{info2}}</p> -->
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
				  info1:'这是父组件里的内容（颜色是父组件给的）',
				  info2:'',
                  goods:[
                    {name:'商品1',src:'static/img/bg-04.jpg'},
                    {name:'商品2',src:'static/img/bg-22.jpg'},
                    {name:'商品3',src:'static/img/bg-26.jpg'},
                    {name:'商品4',src:'static/img/bg-55.jpg'}
                  ]
              }
          },
          methods:{
			  btn_click(){
                  this.$store.commit('increment')
                  console.log(this.$refs.hello)
				  // console.log(this.$store.state.count)
			  },
              toInfo (good) {
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
			  },
            //   子传父
              sonToFather(res){
                this.goods[3].name = res
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
