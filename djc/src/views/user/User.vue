<template>
  <div class="wrapper">
    <div class="input_wrap">
      <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">查询</el-button>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button size="big" type="primary">导入用户</el-button>
      </el-upload>
    </div>

    <el-table
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="50"></el-table-column>

      <el-table-column label="用户名" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="证件号" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.Uid }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.phone }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="积分" width="200">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.sort }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">密码重置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1, 3, 5, 8]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑 -->
      <div>
      <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
        <el-form
          :model="userForm"
          status-icon
          
          ref="userForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="手机号" prop="phone" :label-width="formLabelWidth">
            <el-input type="number" v-model="ruleForm.phone" autocomplete="off">1235</el-input>
          </el-form-item>
          <el-form-item label="修改后密码" prop="password" :label-width="formLabelWidth">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="rpassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="ruleForm.rpassword" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "../../components/Pagination";
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
          date: "2016-05-03",
          username: "王小虎",
          Uid: 411528496,
          phone: 13465063927,
          sort: 22,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage: 1, //默认显示第一页
      pageSize: 3, //默认显示10条
      totalNum: 10 //总页数
    };
  },
  methods: {
    handleEdit(index, row) {
      let phone=row.phone
      // console.log(index,phone)
      this.axios
      .post('/',phone)
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
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(this.pageSize);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(this.currentPage);
    },
    getUsers() {
      this.axios
        .get("/api/user/findAll")
        .then(res => {
          // console.log(res)
          this.tableData = res.data;
          console.log(this.tableData);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    // this.totalNum = this.tableData.length;
    // console.log(this.totalNum)
  },
  mounted() {
    this.getUsers();
  },
  components: {
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
  height: 50px;
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
.page{
  margin-top: 20px;
  margin-left: 39%;
}
</style>>
    
