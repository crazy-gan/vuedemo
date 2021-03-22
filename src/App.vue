<template>
	<div id="app">
		<header v-show="headershow">
			<div class="header_center">
				<ul class="left_ul">
					<li class="da_lu"><a href="javascript:;" style="color: black;">中国大陆 <i
								class="fa fa-angle-down"></i></a>
						<div>
							<ul class="country">
								<li><a href="javascript:;">全球</a></li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="/tab" style="color:#f22e00 ;">亲，请登录</router-link>
					</li>
					<li class="hover">
						<router-link to="/about" style="color:#6C6C6C ;">免费注册</router-link>
					</li>
					<li class="hover"><a href="javascript:;" style="color:#6C6C6C ;">手机逛淘宝</a></li>
				</ul>
				<ul class="right_ul">
					<li class="hover da_lu"><a href="javascript:;">我的淘宝 <i class="fa fa-angle-down"></i></a>
						<div>
							<ul class="hua ">
								<li><a href="javascript:;">已买到的宝贝</a></li>
								<li><a href="javascript:;">我的足迹</a></li>
							</ul>
						</div>
					</li>
					<li class="hover"><a href="javascript:;"><span><img src="static/taobao/购物车空.png"></span>购物车 <i
								class="fa fa-angle-down"></i></a></li>
					<li class="hover da_lu like"><a href="javascript:;"><span><img class="like_img"
									src="static/taobao/xx_gray.png"></span>收藏夹 <i class="fa fa-angle-down"></i></a>
						<div>
							<ul class="hua ">
								<li><a href="javascript:;">收藏的店铺</a></li>
								<li><a href="javascript:;">收藏的宝贝</a></li>
							</ul>
						</div>
					</li>
					<li class="hover"><a href="javascript:;">商品分类</a></li>
					<li class="hover da_lu"><a href="javascript:;">千牛卖家中心 <i class="fa fa-angle-down"></i></a>
						<div>
							<ul class="hua ">
								<li><a href="javascript:;">免费开店</a></li>
								<li><a href="javascript:;">已卖出的宝贝</a></li>
								<li><a href="javascript:;">出售中的宝贝</a></li>
								<li><a href="javascript:;">卖家服饰市场</a></li>
								<li><a href="javascript:;">卖家培训中心</a></li>
								<li><a href="javascript:;">体验中心</a></li>
								<li><a href="javascript:;">问商友</a></li>
							</ul>
						</div>
					</li>
					<li class="hover da_lu"><a href="javascript:;">联系客服 <i class="fa fa-angle-down"></i></a>
						<div>
							<ul class="hua ">
								<li><a href="javascript:;">消费者客服</a></li>
								<li><a href="javascript:;">卖家客服</a></li>
							</ul>
						</div>
					</li>
					<li class="hover da_lu"><a href="javascript:;"><span><img
									src="static/taobao/daohang.png"></span>网站导航 <i class="fa fa-angle-down"></i></a>
						<div class="nav_div" style="z-index: 666;">
							<ul>
								<li>
									<div class="li_top">
										<p style="color: #F40;">主题市场</p>
									</div>
									<ul class="li_ul li_ul1">
										<li><a href="javascript:;">女装 <i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">男装<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装</a></li>
										<li><a href="javascript:;">内衣<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">数码</a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">数码</a></li>
									</ul>
								</li>
								<li>
									<div class="li_top top1">
										<p style="color: #9fb838;">特色市场</p>
									</div>
									<ul class="li_ul li_ul2">
										<li><a href="javascript:;">阿里云</a></li>
										<li><a href="javascript:;">阿里翻译</a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">数码</a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">男装</a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
									</ul>
								</li>
								<li>
									<div class="li_top top2">
										<p style="color: #d75696;">阿里APP</p>
									</div>
									<ul class="li_ul li_ul3">
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">内衣</a></li>
										<li><a href="javascript:;">鞋靴<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">手机<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">手机</a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装</a></li>
										<li><a href="javascript:;">内衣<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包</a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
									</ul>
								</li>
								<li>
									<div class="li_top top3">
										<p style="color: #2e9fdb;">精彩推荐集</p>
									</div>
									<ul class="li_ul li_ul4">
										<li><a href="javascript:;">余额宝</a></li>
										<li><a href="javascript:;">大牌捡宝</a></li>
										<li><a href="javascript:;">淘公仔</a></li>
										<li><a href="javascript:;">浏览器<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">淘宝全球</a></li>
										<li><a href="javascript:;">数码<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">手机<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">女装</a></li>
										<li><a href="javascript:;">男装</a></li>
										<li><a href="javascript:;">内衣<i><img
														src="static/taobao/T1lni5XhXXXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">鞋靴</a></li>
										<li><a href="javascript:;">箱包<i><img
														src="static/taobao/T1hOy5XhNnXXXXXXXX-9-14.gif"></i></a></li>
										<li><a href="javascript:;">家电</a></li>
										<li><a href="javascript:;">数码</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</header>
		<div class="show_area">
			<!-- 路由过度效果 -->
			<transition name="fade">
				<router-view v-wechat-title='$route.meta.title'></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld'
	// import banner from './components/banner'

	export default {
		name: 'App',
		data() {
			return {
				headershow: true
			}
		},
		mounted() {
			if (this.$route.path == '/about') {
				this.headershow = false
			}
		},
		watch: {
			$route(to, from) {
				if (to.path == '/tab' || to.path == '/about') {
					this.headershow = false
					this.transitionName = 'slide-left'
				} else {
					this.headershow = true
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#app {
		/* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
		/* -webkit-font-smoothing: antialiased; */
		/* -moz-osx-font-smoothing: grayscale; */
		background: #f4f4f4;
		color: #2c3e50;

		/* margin-top: 60px; */
	}

	.show_area {
		width: 100%;
		/* height: 120px; */
		/* font-weight: bold; */
		/* background: #0069D9; */
	}

	.show_area>div>p {
		text-align: center;
	}

	header {
		width: 100%;
		height: 2.1875rem;
		background: #f5f5f5;
	}

	.header_center {
		width: 83%;
		height: 100%;
		margin: 0 auto;
	}

	.header_center>ul>li>a {
		color: #6c6c6c;
		display: block;
		width: 100%;
		height: 100%;
	}

	.left_ul {
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		float: left;
		margin-bottom: 0;
		/* position: relative; */
	}

	.left_ul>li,
	.right_ul>li {
		width: auto;
		padding: 0 7px 0;
		line-height: 35px;
		font-size: 12px;
		position: relative;
	}

	.hover>a:hover {
		color: #f22e00 !important;
	}

	.right_ul {
		width: 55%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		float: right;
	}

	.right_ul>li {
		margin-left: 10px;
	}

	.country {
		width: 16.875rem;
		height: 18rem;
		position: absolute;
		top: 33px;
		left: 0;
		overflow-y: scroll;
		background: white;
		z-index: 56;
	}

	.country>li {
		width: 100%;
		padding: 0 10px;
	}

	.country>li>a {
		color: black;
		width: 100%;
		height: 100%;
		display: block;
	}

	.country>li:hover {
		background: #f4f4f4;
	}

	.hua>li:hover {
		background: #f4f4f4;
	}

	.header_center>ul>li:hover div {
		display: block;
	}

	.da_lu>div {
		display: none;
	}

	.da_lu:hover {
		background: white;
	}

	.hua {
		width: 118%;
		height: auto;
		position: absolute;
		top: 33px;
		left: 0;
		background: white;
		z-index: 66;
	}

	.hua>li>a {
		padding: 0 5px;
	}

	.hover>a>span>img {
		vertical-align: text-bottom;
	}

	.hover>a>span {
		margin: 0 3px 0 0;
	}

	.hua>li>a {
		color: #6C6C6C;
	}

	.nav_div>ul {
		width: 1274px;
		height: auto;
		display: flex;
		justify-content: space-around;
		position: absolute;
		top: 33px;
		right: 0px;
		background: #FFFFFF;
		z-index: 55;
	}

	.nav_div>ul>li {
		width: 24%;
		height: auto;
		padding: 10px;
	}

	.nav_div>ul>li:last-child>ul {
		border: none !important;
	}

	.li_ul {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		border-right: 1px solid #eee;
	}

	.li_ul>li>a>i {
		position: absolute;
		top: -2px;
		right: -3px;
	}

	.li_ul2>li,
	.li_ul3>li {
		width: 33% !important;
	}

	.li_ul4>li {
		width: 45% !important;
	}

	.li_ul>li {
		width: 23%;
		/* height: 30px; */
		text-align: center;

	}

	.li_ul>li>a {
		color: #3c3c3c;
		line-height: 30px;
		border-radius: 3px;
		padding: 6px;
		position: relative;
	}

	.li_ul1>li>a:hover {
		color: white;
		background: #F40;
	}

	.li_ul2>li>a:hover {
		color: white;
		background: #9fb838;
	}

	.li_ul3>li>a:hover {
		color: white;
		background: #d75696;
	}

	.li_ul4>li>a:hover {
		color: white;
		background: #2e9fdb;
	}

	.li_top {
		width: 100%;
		height: 1.875rem;
		line-height: 30px;
	}

	.li_top>p {
		font-size: 16px;
		font-weight: 600;
		padding-left: 10px;
	}

	.top1>p {
		padding-left: 18px !important;
	}

	.top2>p {
		padding-left: 23px !important;
	}

	.top3>p {
		padding-left: 34px !important;
	}

	.fade-enter-active
	 {
		/* transition: all .8s linear; */
		animation: bounce-in .6s reverse;
	}
	.fade-leave-active{
		animation: bounce-in .6s ;
	}

	/* .fade-enter,
	.fade-leave-to
		{
		transform: rotate(360deg);
		opacity: 0;
	} */

	@keyframes bounce-in {
		0% {
			transform: scale(0);
			/* transform: translate(0,0); */
		}

		50% {
			transform: scale(1.5);
			/* transform: translate(50%,0); */
		}

		100% {
			transform: scale(1);
			/* transform: translate(100%,0); */
		}
	}
</style>