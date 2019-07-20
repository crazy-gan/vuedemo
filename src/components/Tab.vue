<template>
    <div class="div">
        <p>
            {{message}}
            还有{{num}}s跳转回首页
        </p>
    </div>
</template>

<script>
    export default{
            data(){
                return{
                    message:'这是登录页',
                    num:5
                }
            },
            mounted (){
                let _this = this,timer
                timer = setInterval(function () {
                    if(_this.num ==0){
                        _this.$router.push({path:'/'})
                        clearInterval(timer)
                    }else {
                      _this.num--
                    }
                },1000)
            }
     }
</script>

<style scoped="scoped">
    .div{
        text-align: center;
    }
</style>
