<template>
  <div class="wrapper">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>

      <el-table-column label="描述" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.description }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="300">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">已完成</el-button>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.date }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">开启</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination></Pagination>
   
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
          date: "2016-05-02",
          description: "单元测试民主评议",
          tnumber: 22,
          content: "我是谁，我在哪，我要干什么"
        },
        {
          date: "2016-05-04",
          description: "单元测试民主评议",

          tnumber: 22,
          content: "我怎么可以这么难"
        },
        {
          date: "2016-05-01",
          description: "单元测试民主评议",
          tnumber: 22,
          content: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          description: "单元测试民主评议",
          tnumber: 22,
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

</style>>
    
