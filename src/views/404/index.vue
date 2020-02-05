<template>
  <div class="empty">
    <div class="empty-box">
      <div class="empty-svg"></div>
      <div class="empty-content">
        <span>404</span>
        <p>抱歉，您访问的页面不存在</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.empty {
  padding: 15px;
  .empty-box {
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin: 100px auto 0;
    .empty-svg {
      width: 100%;
      max-width: 430px;
      background: url('../../../src/assets/empty.svg') no-repeat center;
      height: 360px;
    }
    .empty-content {
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
