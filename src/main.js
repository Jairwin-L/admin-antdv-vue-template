import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, Input, Button, message, Modal, Breadcrumb, Menu, Dropdown, LocaleProvider, Layout, Icon } from 'ant-design-vue'
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Modal.name, Modal)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Dropdown.name, Dropdown)
Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Icon.name, Icon)
Vue.prototype.$message = message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
