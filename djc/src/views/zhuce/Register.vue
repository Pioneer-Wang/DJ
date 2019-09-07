<template>
  <div class="wrap">
    <div class="top">
      <img src="../../../public/images/logo.png" alt />
    </div>
    <div class="text">
      <span>系统注册</span>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm el-form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="积分" prop="sort">
        <el-input type="password" v-model="ruleForm.sort" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input type="number" v-model="ruleForm.status" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="证件号" prop="Uid">
        <el-input type="number" v-model="ruleForm.Uid" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="l_btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { constants } from "crypto";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        phone: "",
        sort: "",
        status: "",
        Uid: ""
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blue" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            // console.log(this.ruleForm)
            this.axios.post('/api/user/register',this.ruleForm).then(res=>{
                // console.log(res)
                if(res.status==200){
                    this.$message({
                        message:'恭喜，注册成功！',
                        type:'success'
                    })
                    this.$router.push('/login')
                }
            }).catch(err=>{
               this.$message({
                   message:'抱歉，注册失败！',
                   type:'error'
               })
            })

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
  position: absolute;
  width: 550px;
  height: 600px;
  /* background-color: gray; */
  top: 50%;
  left: 50%;
  margin-left: -275px;
  margin-top: -300px;
  /* 阴影设置 */
  box-shadow: 5px 5px 10px 5px #888888;
}
.top {
  background-color: rgb(32, 160, 255);
}
.text {
  width: 100%;
  height: 100px;
  line-height: 100px;

  text-align: center;
  background-color: #fff;
}
.el-form {
  width: 450px;
  height: 300px;
  margin-left: 50px;

  /* background-color: skyblue; */
}
/* 验证码 */
.y_number {
  width: 100px;
}
/* 登录 */
.l_btn {
  width: 200px;
  margin-left: 40px;
  margin-top: 10px;
}
</style>