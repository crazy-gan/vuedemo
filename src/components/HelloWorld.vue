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
      <div class="animated rollIn ll">
        6666
      </div>
      <button type="button" id="btn" class="btn btn-primary">按钮</button>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
    $(function(){
      $('#btn').click(function(){
      alert(666)
    })
    })
    
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
