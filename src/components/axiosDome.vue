<template>
  <div class="countent">
    {{message}}
    <input type="text" v-model="input_value" />
    {{input_value | capitalize}}
  </div>
</template>

<script>
import { login, memberslist } from "@/request/api"; // 导入我们的api接口
export default {
  name: "axiosDome",
  data() {
    return {
      message: "这是个demo",
      input_value: ""
    };
  },
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
    var map = new Map();
    map.set("first", "hello");
    map.set("second", "world");
    var map1 ={'name':'michael','age':'26'}
    for (let [key, value] of map) {
      console.log(key + " is " + value);
    }
    for(var i in map1){
      console.log(i)
      console.log(map1[i])
    }
  },
  methods: {
    login() {
      login({
        grant_type: "mch",
        // ticket:this.ticket,
        ticket: "NxDuEn0mNawfO0O0OuO0O0O_"
      }).then(res => {
        console.log(res.data);
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
        console.log(res.data);
      });
    }
  }
};
</script>

<style>
.countent {
  width: 100%;
  height: 300px;
  border: 1px solid greenyellow;
}
.countent > div {
  width: 90%;
  height: 100%;
}
</style>
