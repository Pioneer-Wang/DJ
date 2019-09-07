<template>
  <div class="wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>

      <el-table-column label="缩略图" width="200">
        <template >
            <div  class="name-wrapper">
              <!-- <el-tag size="medium">{{ scope.row.name }}</el-tag> -->
              <!-- <img :src="scope.row.img" width="90" height="60" class="head_pic"/> -->
              <!-- <el-image src="../../../public/images/lunbo1.png"></el-image> -->
              <img src="../../../public/images/lunbo1.png" width="90" height="60" class="head_pic" alt="">
            </div>
        </template>
      </el-table-column>
      <el-table-column label="顺序" width="300">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.content }}</el-tag>
            </div>
        </template>
      </el-table-column>
       <el-table-column label="状态" width="100">
        <template slot-scope="scope">
            <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">启用</el-button>
        </template>
      </el-table-column>
       <el-table-column label="标题" width="200">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.title }}</el-tag>
            </div>
        </template>
      </el-table-column>
      <el-table-column label="操作"  width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="bu_div">
          <el-button type="primary" class="sure_btns" plain >添加</el-button>
         <el-button type="info" plain class="sure_btns"  >批量删除</el-button>
        <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination';
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      tableData: [
        {
          title: "讲形式，讲政策。。。",
          img:'../../../public/images/lunbo1.png',
          tnumber:22,
          content: "我是谁，我在哪，我要干什么"
        },
        {
         title: "讲形式，讲政策。。。",
          name: "王小虎",
          
           
          tnumber:22,
          content: "我怎么可以这么难"
        },
        {
          title: "讲形式，讲政策。。。",
          name: "王小虎",
          tnumber:22,
          content: "上海市普陀区金沙江路 1519 弄"
        },
        {
         title: "讲形式，讲政策。。。",
          name: "王小虎",
          tnumber:22,
          content: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  components:{
    Pagination
  }
};
</script>

<style  scoped>
.wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 250px;
  /* background-color: red; */
}
.input_wrap {
  width: 100%;
  height: 80px;
  margin-top: 20px;
  padding-top: 10px;

  background-color: rgb(242, 242, 242);
}
.input {
  width: 170px;
  margin-right: 15px;
}
.upload-demo {
  display: inline-block;
  margin-left: 20px;
}
.bu_div{
    width: 80%;
    height: 70px;
    /* background-color: red; */
    background-color:rgb(242, 242, 242) ;
}
.sure_btns{
    margin-top: 16px;
}
</style>>
    
