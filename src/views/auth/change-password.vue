<template>
  <a-row class="base_container">
    <a-col :span="8">
      <a-form
        :form="form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'old_password',
              { rules: [{ required: true, message: '请输入旧密码' }] }
            ]"
            type="old_password"
            placeholder="请输入旧密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'new_password',
              { rules: [{ required: true, message: '请输入新密码' }] }
            ]"
            type="password"
            placeholder="请输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'sure_new_password',
              { rules: [{ required: true, message: '请再次输入新密码' }] }
            ]"
            type="password"
            placeholder="请再次输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-item>
        <a-button type="primary" html-type="submit" class="login-btn">确认修改</a-button>
      </a-form>
    </a-col>
  </a-row>
</template>

<script>
export default {
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
        if (values.old_password === values.new_password) {
          this.$message.warning('新旧密码一致')
          return
        }
        if (values.new_password !== values.sure_new_password) {
          this.$message.warning('2次新密码不一致')
          return
        }
        console.log(values)
        this.$router.push('/main')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.verify-box {
  display: flex;
  justify-content: space-between;
  .verify {
    display: flex;
    .verify-code {
      width: 60%;
    }
    .send-code {
      width: 30%;
    }
  }
}
</style>
