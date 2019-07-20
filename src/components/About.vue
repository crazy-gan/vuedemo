<template>
<!--    toute路由传参-->
    <div class="div">
        <p>{{info}}</p>
        <ul>
          <li v-for="good of goods">
            <a href="javascript:;" @click="toInfo(good)">
              <img :src="good.src" >
              <p>{{good.name}}</p>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default{
          data(){
              return{
                  info:'这是注册页',
                  goods:[
                    {name:'商品1',src:'static/img/bg-04.jpg'},
                    {name:'商品2',src:'static/img/bg-22.jpg'},
                    {name:'商品3',src:'static/img/bg-26.jpg'},
                    {name:'商品4',src:'static/img/bg-55.jpg'}
                  ]
              }
          },
          methods:{
              toInfo:function (good) {
                  this.$router.push({
                      name:'goodInfo',
                      query:{
                          name:good.name,
                          src:good.src
                      }
                  })
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
