<template>
    <div class="layout">
       <Head></Head>
        <SideBar></SideBar>
        <router-view></router-view>
    </div>
       
</template>


<script>
import Head from "../views/layout/coms/Head";
import SideBar from "../views/layout/coms/SideBar";
export default {
  components: {
    Head,
    SideBar
  }
};
</script>
<style>
  .layout{
  /* margin-top: 82px;
  margin-left: 230px;  
  padding-left: 30px;   */
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