<template>
    <div class="nav">
    	<h2>主题市场</h2>
    	<ul>
    		<li><a href="javascript:;">天猫</a></li>
    		<li><a href="javascript:;">聚划算</a></li>
    		<li><a href="javascript:;">天猫超市</a></li>
    		<li><a href="javascript:;">淘抢购</a></li>
    		<li><a href="javascript:;">电器城</a></li>
    		<li><a href="javascript:;">司法拍卖</a></li>
    		<li><a href="javascript:;">淘宝心选</a></li>
    		<li><a href="javascript:;">新农扶贫</a></li>
    		<li><a href="javascript:;">飞猪旅行</a></li>
    		<li><a href="javascript:;">智能生活</a></li>
    		<li><a href="javascript:;">苏宁易购</a></li>
    		<img class="img_position" src="static/taobao/xiaoren.png" >
    	</ul>
    </div>
</template>

<script>
    export default{
        mounted (){
            function getClass(Classname){
            	return document.getElementsByClassName(Classname)[0]
            }
            var nav_ul = getClass("nav").getElementsByTagName('ul')[0]
            var nav_li = nav_ul.children;
            var img_position = getClass('img_position')
            for(var i=0;i<nav_li.length;i++){
            	nav_li[i].onmouseover=function(){
            		img_position.style.display='block'
            		var left = this.offsetLeft
            		var this_width = this.offsetWidth
            		var img_width = img_position.offsetWidth/2
            		
            		img_position.style.left = (left+this_width/2)-img_width+'px'
            	}
            	nav_li[i].onmouseout=function(){
            		img_position.style.display='none'
            	}
            	
            }
        }
    }
</script>

<style scoped="scoped">
    .nav{
    	width: 100%;
    	height: 1.875rem;
    	float: left;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	background: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    }
    .nav>ul{
    	width: 90%;
    	display: flex;
    	justify-content: flex-start;
    	align-items: center;
    	position: relative;
    }
    .nav>h2{
    	text-align: center;
    	color: white;
    	background: #ff5000;
    	width: 17%;
    	height: 30px;
    	font-size: 16px;
    	line-height: 30px;
    }
    .nav>ul>li{
    	position: relative;
    }
    .nav>ul>img{
    	position: absolute;
    	top: -18px;
    	width: 26px;
    	height: 13px;
    	display: none;
    }
    .nav>ul::after{
    	content: "";
    	width: 2px;
        height: 15px;
        background: white;
        position: absolute;
        top: 4px;
        left: 205px;
    }
    .nav>ul::before{
    	content: "";
    	width: 2px;
        height: 15px;
        background: white;
        position: absolute;
        top: 4px;
       left: 601px;
    }
    .nav>ul>li+li{
    	margin-left: 20px;
    }
    .nav>ul>li:nth-of-type(1){
    	margin-left: 10px;
    }
    .nav>ul>li:nth-of-type(4),.nav>ul>li:nth-of-type(9){
    	margin-left: 25px !important;
    }
    .nav>ul>li>a{
    	color: #EEEEEE;
    }
</style>
