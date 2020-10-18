<!-- 头部 -->
<template>
 <div class="common-header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in navs" :index="item.activeIndex" :key="item.activeIndex">{{item.name}}</el-menu-item>
    </el-menu>
    <el-button v-if="isBack" class="goto-back" @click="gotoBack()" type="text"><i class="el-icon-back">返回</i></el-button>
 </div>
</template>

<script>
 export default {
     props:['isBack'],
   data () {
     return {
        activeIndex: '1',
        navs: [
            {
                activeIndex: '1',
                name: '首页',
                path: '/home'
            },
            {
                activeIndex: '2',
                name: '热门',
                path: '/home'
            }
        ]
     }
   },
   components: {

   },
   methods: {
       handleSelect(val){
           console.log(val)
       },
       gotoBack() {
        this.$router.back()
      }
   },
   beforeRouteLeave(to, from, next){
       debugger
       next()
   }
 }
</script>

<style lang="scss" scoped>
.common-header{
    position: relative;
    button{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>