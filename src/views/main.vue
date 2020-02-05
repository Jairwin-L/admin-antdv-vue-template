<template>
  <div>
    <a-layout id="components-layout-demo-side components-layout-demo-responsive" style="min-height: 100vh">
      <a-layout-sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        v-model="collapsed"
      >
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo">
        </div>
        <a-menu theme="dark" :defaultSelectedKeys="selectedKey" mode="inline" @click="changeSelect">
          <a-menu-item key="1">
            <a-icon type="dashboard" />
            <router-link to="/main" style="display: inline">Admin</router-link>
          </a-menu-item>
          <a-sub-menu
            key="sub2"
          >
            <span slot="title"><icon-font type="icon-icon" />Demo</span>
            <a-menu-item key="2"><router-link to="/demo/demo01">Demo01</router-link></a-menu-item>
            <a-menu-item key="3"><router-link to="/demo/demo02">Demo02</router-link></a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; border-bottom: solid 1px #eee;">
          <a-dropdown>
            <span class="ant-dropdown-link">
            admin <a-icon type="down" />
            </span>
            <a-menu slot="overlay">
              <a-menu-item>
                <span @click="$router.push('/')">退出</span>
              </a-menu-item>
              <a-menu-item>
                <span @click="$router.push('/auth/change-password')">修改密码</span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-layout-header>
        <a-layout-content style="margin: 0 0px">
          <a-breadcrumb style="padding: 16px; background: #fff;">
            <a-breadcrumb-item>Admin</a-breadcrumb-item>
            <a-breadcrumb-item v-for="(item, index) in $route.meta.title" :key="index">{{item}}</a-breadcrumb-item>
          </a-breadcrumb>
          <div class="container">
            <transition name="fade" :duration="100" mode="out-in">
              <router-view/>
            </transition>
          </div>
        </a-layout-content>
        <a-layout-footer>
          <footer>
            <div class="footer-wrap">
              <div class="footer-main">
                <div class="footer-rights">
                  <ul>
                    <li>Copyright © {{year}}</li>
                  </ul>
                </div>
                <div class="footer-author">Design By <a href="https://jairwin.cn" target="_blank" rel="noopener noreferrer nofollow">Jairwin</a></div>
              </div>
            </div>
          </footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1012980_zn0m0zjeqsl.js'
})

export default {
  data () {
    return {
      modal: false,
      collapsed: false,
      year: new Date().getFullYear(),
      selectedKey: []
    }
  },
  beforeMount () {
    const selected = []
    selected.push(localStorage.selectedKey)
    this.selectedKey = selected
  },
  components: {
    IconFont
  },
  methods: {
    changeSelect (e) {
      const selected = []
      selected.push(e.key * 1)
      this.selectedKey = selected
      localStorage.selectedKey = this.selectedKey
    }
  }
}
</script>

<style lang="less">
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.ant-layout-sider .ant-layout-sider-zero-width-trigger {
  top: 9px;
}
.ant-layout-header {
  display: flex;
  justify-content: flex-end;
}
.ant-layout-footer {
  text-align: center;
  .footer-wrap {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    color: #333;
    .footer-main {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
      .footer-rights {
        color: #333;
        ul {
          display: flex;
          li {
            font-size: 14px;
          }
        }
      }
      .footer-author {
        color: #333;
        a {
          color: #333;
        }
      }
    }
  }
}
.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  > img {
      height: 100%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.container {
  margin: 15px;
  min-height: 360px;
  .base_container{
    padding: 15px;
    background: #fff;
    margin-bottom: 15px;
    p {
      margin-bottom: 0;
    }
  }
}
.ant-layout-footer {
  padding: 0 15px !important;
}
</style>
