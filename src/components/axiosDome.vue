<template>
  <div class="countent">
    axiosDemo
    {{message}}
    <input type="text" v-model="input_value" :dev="input_value | capitalize" />
    {{input_value | capitalize}}
    <!-- 兄弟组件传来的值 -->
    <p>test兄弟组件传来的值{{bordermsg}}</p>
    <!-- 二级路由 -->
    <div class="flex_div">
      <div class="memuArea">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
          <el-submenu v-for='(item,index) of routerList' :index='item.title' :key='index' v-if='item.name'>
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-if="item.children">
              <el-menu-item
                v-for="(itemY, index) in item.children"
                :key="index"
                :index="itemY.path"
              >{{itemY.title}}</el-menu-item>
            </template>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right_area">
        <div class="tab_area">
          <div v-for="tab of tab_list">
            <router-link :to="tab.path">{{tab.name}}</router-link>
          </div>
        </div>
        <div class="show_area">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { login, memberslist } from "@/request/api"; // 导入我们的api接口
  import bus from '../assets/bus'
  export default {
    name: "axiosDome",
    data() {
      return {
        message: "这是个demo",
        input_value: "",
        tab_list: [
          { name: '会员营销', path: '/about/Yxiao' },
          { name: '会员卡设置', path: '/about/Card' },
          { name: '会员卡管理', path: '/about/Menger' },
          { name: '积分管理', path: '/about/Jifen' },
        ],
        bordermsg: '默认值',
        routerList: [
          {
            title: "控制台",
            children: [
              { routerpath: "/2-1", name: "工作1" },
              { routerpath: "/2-2", name: "工作2" },
              { routerpath: "/2-3", name: "工作3" }
            ]
          },
          {
            title: "信息管理",
            children: [
              { routerpath: "/infoIndex", name: "信息列表" },
              { routerpath: "/infoCategory", name: "信息分类" },
              { routerpath: "/infoDetailed", name: "信息详情" }
            ]
          },
          {
            title: "用户管理",
            children: [{ routerpath: "/userIndex", name: "用户列表" }]
          }
        ]
      };
    },
    // 筛选器，只是改变展示的数据，并不改变原始数据   
    // filters:{
    // 	capitalize:(value)=>{
    // 		if(!value) return ''
    // 		value = value.toString()
    // 		return value.charAt(0).toUpperCase() + value.slice(1)
    // 	}
    // },
    created() {
      // this.login()
    },
    mounted() {
      // console.log(
      //   [1, 5, 10, 15].filter(function (value, index, arr) {
      //     return value > 9;
      //   })
      // );
      /*
        对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回 第二个操作数的值。 
        && 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一 个操作数的值。
        理解：||前面是false取第二个值，前面是true取前面true，&&前面是true取第二个值、前面是false返回false
      */
      // let a = 80
      // console.log(a > 10 && 10)

      let that = this
      bus.$on('bordertoch', (res) => {
        that.bordermsg = res
      })
      this.routerList = this.$router.options.routes
      console.log(this.$router.options,this.$route.path)
      
    },
    computed: {

    },
    methods: {
      login() {
        login({
          grant_type: "mch",
          // ticket:this.ticket,
          ticket: "NxDuEn0mNawfO0O0OuO0O0O_"
        }).then(res => {
          // console.log(res.data);
          var token = res.data.access_token;
          this.getmemberlist(token);
        });
      },
      getmemberlist(token) {
        memberslist({
          token: token,
          page: 1,
          num: "15",
          phone: ""
        }).then(res => {
          // console.log(res.data);
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    }
  };
</script>

<style>
  .countent {
    width: 90%;
    margin: 0 auto;
    height: 500px;
    border: 1px solid greenyellow;
    position: relative;
  }

  /* .countent > div {
  width: 90%;
  height: 100%;
} */
  .tab_area {
    width: 80%;
    margin: 20px auto;
    height: 50px !important;
    border: 1px solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .tab_area>div {
    width: 200px;
    height: 40px;
    background: rgba(0, 0, 0, 0.6);
    line-height: 40px;
    cursor: pointer;
    color: white;
  }

  .tab_area>div>a {
    display: block;
    width: 100%;
    height: 100%;
    color: whitesmoke;
  }

  .show_area {
    width: 80%;
    height: 300px;
    /* position: absolute;
    right: 0;
    top: 0; */
  }

  .memuArea {
    width: 20%;
    height: 100%;
    /* position: absolute;
    left: 0;
    top: 0; */
  }

  .flex_div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
  }

  .right_area {
    flex-grow: 1;
  }
</style>