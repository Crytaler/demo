import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/page/Login'
import Home from '@/page/Home'
import test from '@/page/test'
import List from '@/page/sys/List'
import Setting from '@/page/user/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      hidden: true,
      meta: [
        { name: '项目管理列表' },
        { name: '项目列表', url: '/project/list' },
        { name: '里程碑' }
      ],
      children: [
        {
          path: '/test',
          name: '在线聊天',
          component: test,
          hidden: true
        },
        {
          path: '/list',
          name: '管理员列表',
          component: List,
          hidden: true
        },
        {
          path: '/setting',
          name: '个人设置',
          component: Setting,
          hidden: true
        }
      ]
    }
  ]
})
