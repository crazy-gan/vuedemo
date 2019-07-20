<template>
    <div class="banner">
       <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" 
            v-for="list of lists"
            :key='list.name'
            >
                <img :src='list.src' alt="钢铁侠">
            </div>
             
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
          <div class="swiper-button-prev swiper-button-white"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next swiper-button-white"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
    </div>
</template>

<script>
    //引入swiper文件
    import Swiper from 'swiper';
    import swiperCss from 'swiper/dist/css/swiper.css';
    
    export default {
        name:'banner',
        data(){
            return {
                lists:[
                    {name:'钢铁侠1',src:'./static/img/bg-04.jpg'},
                    {name:'钢铁侠2',src:'./static/img/bg-22.jpg'},
                    {name:'钢铁侠3',src:'./static/img/bg-26.jpg'},
                    {name:'钢铁侠4',src:'./static/img/bg-55.jpg'}
                ]
            }
        },
        mounted() {
            
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
                loop:true,
                pagination: {
                  el: '.swiper-pagination',
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
            })
        }
    }
</script>

<style scoped="scoped">
    .banner{
        width: 600px;
        height: 300px;
        border: 1px solid red;
        margin: 20px auto;
    }
    .swiper-container{
        width: 100%;
        height: 100%;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }
</style>
