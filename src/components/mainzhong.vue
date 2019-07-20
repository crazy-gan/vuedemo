<template>
    <div class="main_zhong">
    	<div class="zhong_up">
    		<div class="up_left">
    			<div class="swiper-container" id="swiper1">
    			  <div class="swiper-wrapper">
    				<div class="swiper-slide"><img src="static/taobao/02.webp" ></div>
    				<div class="swiper-slide"><img src="static/taobao/03.jpg" ></div>
    				<div class="swiper-slide"><img src="static/taobao/04.webp" ></div>
    				<div class="swiper-slide"><img src="static/taobao/02.webp" ></div>
    				<div class="swiper-slide"><img src="static/taobao/03.jpg" ></div>
    				<div class="swiper-slide"><img src="static/taobao/04.webp" ></div>
    			  </div>
    				<div class="swiper-pagination" id="pagination"></div>
    				<div class="swiper-button-prev swiper-button-white"></div>
    				<div class="swiper-button-next swiper-button-white"></div>
    			</div>
    		</div>
    		<div class="up_right">
    			<img src="static/taobao/01.webp" >
    		</div>
    	</div>
    	<div class="zhong_down">
            <div class='down_left'>
                <div class="down_head">
                    <div class="swiper-pagination" id="pagination1"></div>
                </div>
                <div class="down_banner">
                    <div class="swiper-container" id="swiper2">
                      <div class="swiper-wrapper">
                    	<div class="swiper-slide">
                            <div class="flex">
                               <div>
                                  <img src="static/taobao/11.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1H_WRaBCw3KVjSZFuSuwAOpXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                    	<div class="swiper-slide">
                            <div class="flex">
                               <div>
                                  <img src="static/taobao/TB1rrIgaA9E3KVjSZFGSuw19XXa.jpg_240x240q90.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1lKUoaqWs3KVjSZFxSuuWUXXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                    	<div class="swiper-slide">
                            <div class="flex">
                               <div>
                                  <img src="static/taobao/TB1aQVXaRaE3KVjSZLeSutsSFXa.jpg_240x240q90.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1tl5ocBCw3KVjSZFuSuwAOpXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                    	<div class="swiper-slide">
                            <div class="flex">
                               <div>
                                  <img src="static/taobao/11.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1H_WRaBCw3KVjSZFuSuwAOpXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                    	<div class="swiper-slide">
                            <div class="flex">
                               <div>
                                  <img src="static/taobao/TB1rrIgaA9E3KVjSZFGSuw19XXa.jpg_240x240q90.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1lKUoaqWs3KVjSZFxSuuWUXXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                    	<div class="swiper-slide">
                             <div class="flex">
                               <div>
                                  <img src="static/taobao/TB1aQVXaRaE3KVjSZLeSutsSFXa.jpg_240x240q90.jpg" > 
                               </div> 
                                <div>
                                   <img src="static/taobao/TB1tl5ocBCw3KVjSZFuSuwAOpXa.jpg_240x240q90.jpg" >
                               </div> 
                            </div>
                        </div>
                      </div>
                    	<div class="swiper-scrollbar"></div>
                    	<div class="swiper-button-prev swiper-button-white" id="button1"></div>
                    	<div class="swiper-button-next swiper-button-white" id="button2"></div>
                    </div>
                </div>
            </div>
            <div class="down_right">
                <a href="#">
                    <p>今日热卖</p>
                    <img src="static/taobao/05.jpg" >
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import swiperCss from 'swiper/dist/css/swiper.css';
    
    export default{
        mounted (){
            var mySwiper = new Swiper('#swiper1', {
            	autoplay: 3000,//可选选项，自动滑动
            	pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            })
            var mySwiper = new Swiper('#swiper2', {
            	autoplay: 3600,//可选选项，自动滑动
            	pagination : '#pagination1',
                paginationType : 'fraction',
                paginationClickable :true,
                prevButton:'#button1',
                nextButton:'#button2',
                scrollbar:'.swiper-scrollbar',
                scrollbarHide:false,
                scrollbarDraggable : true ,
                loop:true
            })
        }
    }
</script>

<style scoped="scoped">
    .main_zhong{
    	width: 58%;
    	height: 32rem;
    	float: left;
    	margin-left: 5px;
    	margin-top: 6px;
    }
    .zhong_up{
    	width: 100%;
    	height: 55%;
        margin-bottom: 1%;
    }
    .zhong_down{
        width: 100%;
        height: 44%;
    }
    .up_left,.down_left{
    	width: 77%;
    	height: 100%;
    	float: left;
    }
    .swiper-container{
    	width: 100%;
    	height: 100%;
    }
    .swiper-slide>img{
    	width: 100%;
    	height: 100%;
    }
    #pagination>.swiper-pagination-bullet{
    	background: white!important;
    	opacity: 1!important;
    	margin: 1.8px !important;
    }
    #pagination>.swiper-pagination-bullet-active{
    	background: #FF5000 !important;
    }
    #pagination{
    	width: auto !important;
    	height: 20px;
    	left: 50% !important;
    	transform: translate(-50%,0) !important;
    	background: rgba(255,255,255,0.6);
    	padding: 0 5px !important;
    	border-radius: 20px;
    }
    .swiper-button-prev,.swiper-button-next{
    	width: 40px !important;
    	height: 40px !important;
    	background-color: rgba(0,0,0,0.4);
    	background-size:60% 60% !important ;
        opacity: 0;
        transition: all 0.6s !important;
    }
    .swiper-button-next{
    	border-top-left-radius: 50%;
    	border-bottom-left-radius: 50%;
    	right: -8px !important;
    }
    .swiper-button-prev{
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        left: -8px !important;
    }
    .up_left:hover .swiper-button-next{
        opacity:1;
    }
    .up_left:hover .swiper-button-prev{
        opacity:1;
    }
    .up_right,.down_right{
    	width: 22%;
    	height: 100%;
    	float: right;
    }
    .up_right>img{
    	width: 100%;
    	height: 100%;
    }
    .down_right>a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .down_right>a>p{
        width: 100%;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: #a1a1a1;
    }
    .down_right>a>img{
        width: 100%;
        height: calc(100% - 22px);
    }
    .down_head{
        width: 100%;
        height: 10%;
        position: relative;
        background: url(../../static/taobao/tianmao.png) left center no-repeat;
    }
    .down_banner{
        width: 100%;
        height: 90%;
    }
    #button1,#button2{
       opacity: 0;
    }
    .down_banner:hover #button1{
         opacity: 1;
    }
    .down_banner:hover #button2{
         opacity: 1;
    }
    #swiper2{
        position: relative;
        background: white;
    }
    #swiper2>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
       right: 0 !important;
    }
    #pagination1{
        width: 50px !important;
        height: 20px;
        font-size: 14px;
        position: absolute;
        top: 0 !important;
        right: 0 !important;
    }
    .swiper-scrollbar-drag{
        background: #000000 !important;
    }
    .swiper-scrollbar{
        background: #ff1648 !important;
        top: 0 !important;
        width: 100% !important;
        height: 3px !important;
        border-radius: 0 !important;
        left: 0 !important;
    }
    .swiper-pagination-current{
        color: #FF5000;
    }
    .flex{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
    }
    .flex>div{
        width: 46%;
        height: 100%;
    }
    .flex>div>img{
        width: 100%;
        height: 100%;
    }
</style>
