<template>
  <div class="auth">
    <div class="auth-box">
      <div class="auth-svg"></div>
      <div class="auth-content">
        <span>403</span>
        <p>抱歉，您无权访问此页面</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.auth {
  padding: 15px;
  .auth-box {
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin: 100px auto 0;
    .auth-svg {
      width: 100%;
      max-width: 430px;
      background: url('../../../src/assets/auth.svg') no-repeat center;
      height: 360px;
    }
    .auth-content {
      margin-top: 100px;
      > span {
        font-size: 72px;
        font-weight: bold;
      }
      p {
        color: #878889;
        font-size: 20px;
      }
    }
  }
}
</style>
