<template>
  <div class="login_wrap">
    <div class="login_main">
      <div class="login_title">
        <span>Ant Design Vue Admin</span>
      </div>
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        @submit="onSubmit"
        @submit.native.prevent
        class="components-form-demo-normal-login login-form"
      >
        <a-form-model-item ref="username" name="username" prop="username">
          <a-input
            size="large"
            v-model="form.username"
            @blur="() => { $refs.username.onFieldBlur();}"
            placeholder="请输入用户名"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item ref="password" name="password" prop="password">
          <a-input
            size="large"
            v-model="form.password"
            @blur="() => { $refs.password.onFieldBlur();}"
            type="password"
            placeholder="请输入密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button size="large" type="primary" html-type="submit" @click="onSubmit" class="login-btn">登录</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <footer>
      <div class="footer_content">
        <a href="javascript:;">帮助</a>
        <a href="javascript:;">隐私</a>
        <a href="javascript:;">条款</a>
      </div>
      <div class="footer_right">Copyright &copy; {{year}} <a href="https://jairwin.cn" target="_blank" rel="noopener noreferrer nofollow">https://jairwin.cn</a> Blog</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear(),
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return
        console.log(this.form)
        this.$router.push('/main')
      })
    }
  }
}
</script>

<style scoped lang="less">
.login_wrap {
  width: 100%;
  height: 100vh;
  background: #f0f2f5 no-repeat center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .login_main {
    width: 368px;
    margin: 100px auto 0;
    flex: 1 1;
    .login_title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      > img {
        height: 44px;
        margin-right: 16px;
      }
      > span {
        font-size: 20px;
        color: rgba(0,0,0,.85);
        font-weight: bold;
      }
    }
    .login-btn {
      width: 100%;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
  }
  footer {
    text-align: center;
    color: rgba(0,0,0,.45);
    font-size: 14px;
    margin-bottom: 24px;
    .footer_content {
      margin-bottom: 8px;
      > a {
        color: rgba(0,0,0,.45);
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media (min-width: 768px) {
    background: #f0f2f5 url('../../src/assets/login.svg') no-repeat center 110px;
    background-size: 100%;
  }
}
</style>
