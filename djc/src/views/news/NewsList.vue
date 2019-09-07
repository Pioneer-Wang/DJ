<template>
  <div class="wrapper">
    <div class="input_wrap">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select input">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
          
        </el-select>
         
      </el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary">新增</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>

      <el-table-column label="ID" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.userId }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
     
       <el-table-column label="发布时间" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.date }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="新闻类别" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.phone }}</el-tag>
          </div>
        </template>
      </el-table-column>
    
      <el-table-column label="操作" width="350">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">生成轮播图</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
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
          name: "王小虎",
          userId: 411528496,
          phone: 13465063927,
          sort: 22,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          userId: 411528496,
          phone: 13465063927,
          sort: 22,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          userId: 411528496,
          phone: 13465063927,
          sort: 22,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          userId: 411528496,
          phone: 13465063927,
          sort: 22,
          address: "上海市普陀区金沙江路 1516 弄"
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
  width: 200px;
  margin-right: 15px;
}
.upload-demo {
  display: inline-block;
  margin-left: 20px;
}
.input_wrap {
  width: 80%;
  height: 53px;
  margin-top: 20px;
  background-color: rgb(242, 242, 242);
}

</style>>
    
