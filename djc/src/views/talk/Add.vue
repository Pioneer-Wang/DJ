<template>
  <div class="wrapper">
    <el-form ref="form" :model="form" label-width="80px" class="el-form">
      <el-form-item label="描述">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  data() {
    return {
        content:'',
        editorOption:{},
      form: {
        name: ""
      }
    };
  },
  components: {
    // quillEditor
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submit(){
        console.log(this.$refs.text.value)
    }
  }
};
</script>

<style  scoped>
.wrapper {
  position: fixed;
  width: 80%;
  height: 100%;
  left: 250px;
  /* background-color: red; */
}

.el-form {
  margin-top: 20px;
}
/* 富文本编辑器 */
.myQuillEditor{
    height: 400px;
}
</style>>
    
