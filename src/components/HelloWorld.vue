<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      备忘录  <input type="text" class="form-control" v-model="newlist" @keyup.enter="add_things"/>
      <li 
      v-for="item of todoList"
      :key='item.name'
      :class="{finshied:item.isFinshied}"
      @click="item.isFinshied=!item.isFinshied"
      >{{item.name}}</li>
      <div class="animated fadeInUpBig ll">
        6666
      </div>
    </ul>
    <ul>
		<li v-for="(goods,index) of good" :key='index'>
      {{goods}}
      <!-- 将数据传到父组件里 ，父组件控制slot里显示的内容-->
			<slot :data="goods">  
				fgfgfgfgfg
			</slot>
		</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	props:['good'],//父组件传来的值
  data () {
    return {
      newlist:'',
      msg: 'Welcome to Your Vue.js App',
      todoList:[
        {name:'洗衣服',isFinshied:true},
        {name:'做饭',isFinshied:false},
        {name:'吃饭',isFinshied:false},
        {name:'洗碗',isFinshied:false},
        {name:'睡觉',isFinshied:false},
      ],
	  test:[
		  {name:'urse1',age:'18'},
		  {name:'urse2',age:'19'},
		  {name:'urse3',age:'20'},
		  {name:'urse4',age:'21'},
		  {name:'urse5',age:'22'},
		  {name:'urse6',age:'23'},
	  ]
    }
  },
  methods:{
    add_things(){
      this.todoList.push({name:this.newlist,isFinshied:false})
      this.newlist=''
    }
	
  },
  mounted() {
    console.log(this.good)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #00FA9A;
}
ul {
  width: 600px;
  height: 400px;
  border: 1px solid mediumspringgreen;
  margin: 0 auto;
  text-align: left;
  user-select:none;
  
}
.finshied{
  text-decoration: line-through;
}
.ll{
  width: 100px;
  height: 100px;
  background: red;
}

</style>
