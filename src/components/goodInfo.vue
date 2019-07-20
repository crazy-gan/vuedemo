<template>
    <div>
        <img :src="src" alt="">
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name: "goodInfo",
        data (){
            return{
                src:'',
                name:'',
            }
        },
        mounted(){
            this.name = this.$route.query.name;
            this.src = this.$route.query.src;
        }
    }
</script>

<style scoped>
img{
    width: 200px;
    height: 200px;
}
</style>