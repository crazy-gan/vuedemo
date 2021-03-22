<template>
  <div class="hello" style="background-color: #e6e6e6;">
    hellow world
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      备忘录 <input type="text" class="form-control" v-model="newlist" @keyup.enter="add_things" />
      <li v-for="item of todoList" :key='item.name' :class="{finshied:item.isFinshied}"
        @click="item.isFinshied=!item.isFinshied">{{item.name}}</li>
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
    <div class="lookbtn" @click='changefather'>向父组件传值</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['good'],//父组件传来的值
    data() {
      return {
        newlist: '',
        msg: 'Welcome to Your Vue.js Apppp',
        todoList: [
          { name: '洗衣服', isFinshied: true },
          { name: '做  饭', isFinshied: false },
          { name: '吃  饭', isFinshied: false },
          { name: '洗  碗', isFinshied: false },
          { name: '睡  觉', isFinshied: false },
        ],
        test: [
          { name: 'urse1', age: '18' },
          { name: 'urse2', age: '19' },
          { name: 'urse3', age: '20' },
          { name: 'urse4', age: '21' },
          { name: 'urse5', age: '22' },
          { name: 'urse6', age: '23' },
        ]
      }
    },
    methods: {
      add_things() {
        this.todoList.push({ name: this.newlist, isFinshied: false })
        this.newlist = ''
      },
      changefather(){
        this.$emit('soncomm','我尼玛')
      },

    },
    mounted() {
      console.log(this.good)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
    color: #00FA9A;
  }

  ul {
    width: 600px;
    height: 200px;
    border: 1px solid mediumspringgreen;
    margin: 0 auto;
    text-align: left;
    user-select: none;

  }

  .finshied {
    text-decoration: line-through;
  }

  .ll {
    width: 100px;
    height: 60px;
    background: red;
  }
  .lookbtn{
    border: 1px solid red;
    padding: 0 10px;
    border-radius: 10px;
    margin: 0 auto;
    width: 80px;
  }
</style>