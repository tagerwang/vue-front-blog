<template>
  <div class="container">
    <h2>用户注册</h2>
    <el-form ref="ruleForm" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="passwordAgain">
        <el-input v-model="form.passwordAgain"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('ruleForm')">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        name: '',
        password: '',
        passwordAgain: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        passwordAgain: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created(){
  },
  methods: {
    onSubmit(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.form.password !== this.form.passwordAgain) {
              this.$message.error('两次输入的密码不一致');
              return
            }
            this.$axios.post(`http://localhost:3000/users/register`, {
              name: this.form.name,
              password: this.form.password
            }).then((res)=>{
              const {code} = res.data
              if(code == 200) {
                this.$message.success('注册成功');
              } else {
                this.$message.warning('注册失败');
              }
            }).catch(err=>{
              this.$message.error('服务器异常');
            })
          } else {
            this.$message.error('提交失败');
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  h2{
    text-align: center;
    margin-top: 20px;
  }
  .el-form{
    width: 1200px;
    margin: 20px auto;
  }
}
</style>
