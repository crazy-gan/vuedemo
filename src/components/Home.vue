<template>
    <div class="ll">
       <!-- <div>{{msg}}</div> -->
        <v-logo></v-logo>
        <div class="main_center">
            <v-nav></v-nav>
            <v-mainleft></v-mainleft>
            <v-mainzhong></v-mainzhong>
        </div>
        <div class="ll"></div>
    </div>
</template>

<script>
   import Logo from './Logo'
   import nav from './nav'
   import mainleft from './mainleft'
   import mainzhong from './mainzhong'
export default{
    data(){
        return{
            
        }
    },
    components: {
      'v-logo':Logo,
      'v-nav':nav,
      'v-mainleft':mainleft,
      'v-mainzhong':mainzhong
    }
 }
</script>

<style scoped="scoped">
    .main_center{
    	width: 83%;
    	height: auto;
    	margin: 0 auto;
       /* overflow: hidden; */
    }
    .ll{
        overflow: hidden;
        clear: both;
    }
</style>
