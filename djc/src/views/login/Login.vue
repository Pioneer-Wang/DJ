<template>
  <div class="wrap">
    <div class="top">
      <img src="../../../public/images/logo.png" alt />
    </div>
    <div class="text">
      <span>系统登录</span>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm el-form"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input type="number" v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input class="y_number" type="text" v-model="ruleForm.y_number" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="l_btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
       <el-form-item>
        <el-button class="r_btn" type="primary" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import jwt_decode from 'jwt-decode';
import { constants } from 'crypto';
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
      }
      callback();
    };
    return {
      ruleForm: {
        phone: "",
        password: "",
        y_number: ""
      },
      rules: {
        phone: [{ validator: validateUser, trigger: "blue" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        this.axios
            .post("/api/user/login",this.ruleForm)
            .then(res => {
              const {success}=res.data;
              const {token}=res.data;
              // 设置并解析token
              localStorage.setItem('eleToken',token);
              const decode=jwt_decode(token)
              console.log(decode)
             
              if(success){
                this.$router.push('/');
              }
              //  this.$router.push('/')
            })
      
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    register(){
      this.$router.push('/register')
    }
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
  position: absolute;
  width: 550px;
  height: 520px;
  /* background-color: gray; */
  top: 50%;
  left: 50%;
  margin-left: -275px;
  margin-top: -275px;
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
  margin-top: 30px;
}
/* 注册 */
.r_btn{
  float: right;
}
</style>