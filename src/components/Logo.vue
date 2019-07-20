<template>
    <div class="search_area">
    	<div class="search_area_center">
    		<div class="left_logo">
    			<a href="#"><img src="static/taobao/logo.png" ></a>
    		</div>
    		<div class="mindlle">
    			<div class="search">
    				<p class="p_span">
    					<span class="act"><a href="javascript:;">宝贝</a></span>
    					<span><a href="javascript:;">天猫</a></span>
    					<span><a href="javascript:;">店铺</a></span>
    				</p>
    				<div class="input">
    					<input type="text"  /><button type="button">搜索</button>
    					<input type="file" name="a" id="a" style="display: none;" /><label for="a"></label>
    				</div>
    				
    			</div>
    			<p class="search_bottom">
    				<a href="javascript:;">新款连衣裙</a>
    				<a href="javascript:;">四件套</a>
    				<a href="javascript:;">潮流T恤</a>
    				<a href="javascript:;">时尚女鞋</a>
    				<a href="javascript:;">短裤</a>
    				<a href="javascript:;">半身裙</a>
    				<a href="javascript:;" style="color: #FF5000;">男士外套</a>
    				<a href="javascript:;">墙纸</a>
    				<a href="javascript:;">行车记录仪</a>
    				<a href="javascript:;">新款男鞋</a>
    			</p>
    		</div>
    		<div class="ewm">
    			<p>手机淘宝</p>
    			<div>
    				<img src="static/taobao/下载.png" >
    			</div>
    			<a href="javascript:;" class="close">×</a>
    		</div>
    	</div>
    </div>
</template>

<script>
   export default {
       mounted (){
           function getClass(Classname){
           	return document.getElementsByClassName(Classname)[0]
           }
           var like =getClass("like")
           var like_img = getClass("like_img") 
           like.onmouseover=function(){
           	like_img.setAttribute("src","static/taobao/xx_red.png")
           }
           like.onmouseout=function(){
           	like_img.setAttribute("src","static/taobao/xx_gray.png")
           }
           var p_span = getClass("p_span").getElementsByTagName("span")
           for(var i=0;i<p_span.length;i++){
                p_span[i].onclick=function(){
                    for (var j = 0; j < p_span.length; j++) {
                        if( this == p_span[j]){
                            p_span[j].className = "act"
                        }else{
                            p_span[j].className = ""
                        }
                    }
                }
           }
           var close = getClass("close")
           var ewm = getClass("ewm")
           close.onclick = function(){
           	ewm.style.opacity = "0"
           }
       }
    }
    
</script>

<style scoped="scoped">
.search_area{
	width: 100%;
	height: 7.5rem;
	background: #FFFFFF;
}
.search_area_center{
	width: 83%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 60px 0 20px;
}
.left_logo{
	width: 8.875rem;
	height: 3.625rem;
}
.search_area_center>div>a{
	display: block;
	width: 100%;
	height: 100%;
}
.search_area_center>div>a>img{
	width: 100%;
	height: 100%;
}
.mindlle{
	width: 39.375rem;
	height:6rem;
	padding-top: 10px;
}
.ewm{
	width: 4.75rem;
	height: 5.625rem;
	border: 1px #eee solid;
	cursor: pointer;
	padding: 0 5px 5px 5px;
	position: relative;
}
.search{
	width: 100%;
	height:auto;
	
}
.input{
	width: 100%;
	height: 2.5rem;
	border-radius: 20px;
	border: 2px solid #ff5000;
	position: relative;
}
.input>input{
	width: 88%;
	height: 100%;
	padding:0 40px 0 28px;
	border: none;
	outline: none;
	background: transparent;
	float: left;
	background:url(../../static/taobao/放大镜.png) 12px center no-repeat ;
}
.input>button{
	float: left;
	width: 12%;
	height: 100%;
	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
	background: linear-gradient(to right,#ff9000 0,#ff5000 100%);
	border: none;
	outline: none;
	color: white;
	font-size: 18px;
}
.input>label{
	display: block;
	width: 25px;
	height: 25px;
	background: url(../../static/taobao/相机.png) no-repeat center;
	background-size: 100%;
	position: absolute;
	right: 82px;
	top: calc(50% - 12px);
}
.search>p{
	font-size: 12px;
	padding-left: 15px;
}
.search>p>span{
	display: inline-block;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	padding: 3px 5px 2px;
}
.search>p>span>a{
	color: #FF5000;
}
.act{
	background:  linear-gradient(to right,#ff9000 0,#ff5000 100%);
}
.act>a{
	color: white !important;
}
.search_bottom{
	font-size: 12px;
	padding-left: 10px;
	margin-top: 5px;
}
.search_bottom>a{
	color: #3C3C3C;
	margin-left: 3px;
}
.ewm>p{
	font-size: 12px;
	text-align: center;
	color: #FF5000;
	margin-bottom: 3px;
}
.ewm>div{
	width: 100%;
	height: auto;
}
.ewm>div>img{
	width: 100%;
	height: 100%;
}
.ewm>a{
	display: block;
	width: 20px !important;
	height: 20px !important;
	text-align: center;
	position: absolute;
	top: -1px;
	left: -20px;
	color: #eee;
	border: 1px solid #eee;
	line-height: 18px;
}
</style>
