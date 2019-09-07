<template>
  <div class="header">
    <img src="../../../../public/images/logo.png" alt />
    <div class="right">
      <el-row class="block-col-2">
        <el-col :span="12">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="../../../../public/images/rightLogin.png" alt />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-lock">
                <el-button @click="changePsd">密码修改</el-button>
              </el-dropdown-item>
              <el-dropdown-item icon="el-icon-top-right">
                <el-button @click="logout">退出登录</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="手机号" prop="phone" :label-width="formLabelWidth">
            <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
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
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.rpossword !== "") {
          this.$refs.ruleForm.validateField("rpassword");
        }
        callback();
      }
    };
    var validateRpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      ruleForm: {
        phone: "",
        password: "",
        rpassword: ""
      },
      rules: {
        phone: [{ validator: validateUser, trigger: "blue" }],
        rpassword: [{ validator: validateRpassword, trigger: "blue" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios.post("/api/user/updatePsd", this.ruleForm).then(res => {
            if (res.data.success) {
              this.$message({
                message: "恭喜你，密码修改成功！",
                type: "success"
              });
              localStorage.removeItem("eleToken");
              this.$router.push("/login");
            }
          });
          this.dialogFormVisible = false;
        }
      });
    },
    changePsd() {
      this.dialogFormVisible = true;
    },
    logout() {
      localStorage.removeItem("eleToken");
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: rgb(32, 160, 255);
}
.right {
  margin-right: 10px;
  margin-top: 6px;
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #efeff0;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
