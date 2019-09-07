<template>
  <div class="wrapper">
    <!--  -->
    <el-scrollbar style="height: 100%;">
      <el-form ref="form" :model="form" label-width="80px" class="el-form">
        <el-form-item label="新闻标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="新闻作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="新闻类型">
          <el-select v-model="form.region" placeholder="请选择类型">
            <el-option label="政治新闻" value="shanghai"></el-option>
            <el-option label="体育新闻" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻图片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="新闻内容">
          <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-scrollbar>
    <!-- /滚动条 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      editorOption: {},
      form: {
        name: "",
        author: "",
        desc: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.$refs.text.value);
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: fixed;
  width: 80%;
  height: 700px;
  left: 250px;
  /* background-color: red; */
}
.el-form {
  margin-top: 20px;
}
/* 上传图片 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/* 富文本编辑器 */
.myQuillEditor {
  height: 200px;
}
</style>