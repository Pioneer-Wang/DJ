<template>
  <div class="side-bar">
     <el-scrollbar style="height: 100%;"> <!-- 滚动条 -->
    <el-menu
      background-color="#e1e3e6"
      text-color="gray"
      active-text-color="#ffd04b"
      :router = "true"
      >

        <el-submenu index="3">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/user">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>


         <el-submenu index="4">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>党员互动</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/tiezi">帖子列表</el-menu-item>
            
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>轮播图管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/lunbo">轮播图列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        

         <el-submenu index="6">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>民主评议</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/talk/list">评议列表</el-menu-item>
            <el-menu-item index="/talk/add">发起评议</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
  
         <el-submenu index="9">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>心得总结</span>
          </template>
          <el-menu-item-group>
           <el-menu-item index="/xinde">心得总结列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>     

        <el-submenu index="8">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>思想汇报</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/report">思想汇报列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>






        <el-submenu index="5">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>新闻管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/news">新闻列表</el-menu-item>
            <el-menu-item index="/news/add">添加新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        

        

         

        

       
        <!-- <el-submenu index="5">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>历史上的今天</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/today">历史上的今天列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu> 

        <el-submenu index="6">
          <template slot="title">
           <i class="el-icon-document"></i>            
            <span>党支部坐标管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/maps">党支部坐标列表</el-menu-item>
            <el-menu-item index="/maps/add">添加党支部坐标</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="7">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>个人总结</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/grzj">个人总结列表</el-menu-item>
            <el-menu-item index="/grzj/reply">个人总结评价列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        

        <el-submenu index="9">
          <template slot="title">
           <i class="el-icon-menu"></i>            
            <span>心得总结</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/xdzj">心得总结列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>       -->
    </el-menu>
     </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'side-bar'
    
  }
</script>
<style scoped>
.side-bar{
  position: fixed;
  top: 57px;
  bottom: 0;
  left: 0;
  width: 230px;
  height: 700px;
  background-color: #e1e3e6;
}
a{
  color: gray;
  text-decoration: none;
}

</style>
