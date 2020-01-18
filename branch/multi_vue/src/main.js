// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js'

import {postKeyValueRequest} from './utils/api'
import {initMenu} from './utils/menu'

Vue.prototype.postKeyValueRequest = postKeyValueRequest
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$axios = Axios

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    console.log(to.path)
    next()
  } else {
    if (window.sessionStorage.getItem('userinfo')) {
      initMenu(router, store)
      next()
    } else {
      next('/?redirect=' + to.path)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
