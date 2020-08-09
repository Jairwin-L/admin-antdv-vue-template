<template>
  <div class="base_container">
    <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        @submit="onSubmit"
        @submit.native.prevent
        class="components-form-demo-normal-login login-form"
      >
        <a-form-model-item ref="oldPassword" name="oldPassword" prop="oldPassword">
          <a-input
            size="large"
            v-model="form.oldPassword"
            @blur="() => { $refs.oldPassword.onFieldBlur();}"
            type="password"
            placeholder="请输入旧密码"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item ref="newPpassword" name="newPpassword" prop="newPpassword">
          <a-input
            size="large"
            v-model="form.newPpassword"
            @blur="() => { $refs.newPpassword.onFieldBlur();}"
            type="password"
            placeholder="请输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item ref="sureNnewPpassword" name="sureNnewPpassword" prop="sureNnewPpassword">
          <a-input
            size="large"
            v-model="form.sureNnewPpassword"
            @blur="() => { $refs.sureNnewPpassword.onFieldBlur();}"
            type="password"
            placeholder="请再次输入新密码"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button size="large" type="primary"  html-type="submit" @click="onSubmit" class="login-btn">确认修改</a-button>
        </a-form-model-item>
      </a-form-model>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear(),
      form: {
        oldPassword: '',
        newPpassword: '',
        sureNnewPpassword: ''
      },
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码', trigger: 'change' }],
        newPpassword: [{ required: true, message: '请输入新密码', trigger: 'change' }],
        sureNnewPpassword: [{ required: true, message: '请再次输入新密码', trigger: 'change' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return
        const { oldPassword, newPpassword, sureNnewPpassword } = this.form
        if (oldPassword === newPpassword) {
          this.$message.warning(`新旧密码一致`)
          return
        }
        if (newPpassword !== sureNnewPpassword) {
          this.$message.warning(`2次新密码不一致`)
          return
        }
        console.log(this.form)
        this.$message.success(`密码修改成功`)
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
