<template>
  <div class="layout">
    
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
// import sideBar from "./coms/side-bar.vue"
import Head from "./coms/Head"

export default {
    name: 'layout',
    components:{
    
      Head
    },
    methods:{
      // isLogin(){
      //   this.$axios.get('isLogin').then(res=>{
      //     if(!res.ret){
      //       this.$router.push('/')
      //     }
      //   })
      // },
    },
    created(){
      // this.isLogin()
    }
  }
</script>

<style scoped>
.layout{
  margin-top: 82px;
  margin-left: 230px;  
  padding-left: 30px;  
}
.cell{
  font-size:20px;
  text-align: center
}
.el-table td, .el-table th{
  padding: 15px 0;
}

.el-button--mini{
  font-size: 16px;
  padding: 9px 18px;
  border-radius: 6px;
}
</style>

