<template>
  <div class="login-wrap">
    <div class="login-main">
        <div class="login-title">
            <img src="@/assets/logo.png" alt="">
            <span>Ant Design Vue Admin简单模板</span>
        </div>
        <div class="login-tip">Ant Design Vue Admin简单模板</div>
        <a-form
          :form="form"
          class="components-form-demo-normal-login login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
            size="large"
              v-decorator="[
                'username',
                { rules: [{ required: true, message: '请输入用户名' }] }
              ]"
              placeholder="请输入用户名"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
            size="large"
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码' }] }
              ]"
              type="password"
              placeholder="请输入密码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button size="large" type="primary" html-type="submit" class="login-btn">登录</a-button>
          </a-form-item>
        </a-form>
    </div>
    <footer>
      <div class="footer-content">
        <a href="javascript:;">帮助</a>
        <a href="javascript:;">隐私</a>
        <a href="javascript:;">条款</a>
      </div>
      <div class="footer-right">Copyright &copy; {{year}} https://jairwin.cn Blog</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        let valid = false
        valid = !err
        if (!valid) return
        console.log(values)
        this.$router.push('/main')
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-wrap {
  width: 100%;
  height: 100vh;
  background: #f0f2f5 no-repeat center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .login-main {
    width: 368px;
    margin: 70px auto 0;
    flex: 1 1;
    .login-title {
      display: flex;
      justify-content: center;
      align-items: center;
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
    .login-tip {
      text-align: center;
      font-size: 14px;
      color: rgba(0,0,0,.45);
      margin-top: 10px;
      margin-bottom: 50px;
    }
    .login-way {
      width: 30%;
      height: 30px;
      text-align: center;
      margin: 0 auto 24px;
      color: #1890ff;
      border-bottom: 2px solid #1890ff;
      padding-bottom: 30px;
    }
    .auto-login {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 33px;
      font-weight: 600;
      padding-top: 75px;
      padding-bottom: 40px;
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
    .footer-content {
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
