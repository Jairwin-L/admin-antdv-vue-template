<template>
  <div id="app">
    <transition name="fade" :duration="100" mode="out-in">
      <a-locale-provider :locale="locale">
        <router-view/>
      </a-locale-provider>
    </transition>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data () {
    return {
      locale: zhCN,
      show: null
    }
  }
}
</script>

<style lang="less">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

body {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  font-size: 12px!important;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
  margin: 0;
}
img {
  border: 0;
  border: none;
  display: block;
}
input,
button {
  border: none;
  outline: none;
}
/*
清除框架标签自带样式
*/
ul {
  margin-bottom: 0 !important;
  li {
    list-style: none;
  }
}
p {
  margin-bottom: 0 !important;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
