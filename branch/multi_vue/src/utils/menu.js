// 动态配置权限路由
import {getRequest} from './api'

export const initMenu = (router, store) => {
  if (store.state.menus.length > 0) {
    return
  }
  getRequest('/system/menus').then(data => {
    if (data) {
      console.log(data.data.obj)
      let fmRoutes = setRoute(data.data.obj)
      router.addRoutes(fmRoutes)
      store.commit('initRoutes', fmRoutes)
    }
  })
}
// 处理侧边栏数据
export const setRoute = (data) => {
  let fmRoutes = []
  data.forEach(router => {
    let {
      path,
      component,
      name,
      icon,
      children
    } = router
    if (children && children instanceof Array) {
      children = setRoute(children)
    }
    let fmRouter = {
      path: path,
      name: name,
      icon: icon,
      children: children,
      component (resolve) {
        if (component.startsWith('Home')) {
          require(['../page/' + component + '.vue'], resolve)
        } else if (component.startsWith('Lis')) {
          require(['../page/sys' + component + '.vue'], resolve)
        } else if (component.startsWith('Set')) {
          require(['../page/user' + component + '.vue'], resolve)
        }
      }
    }
    fmRoutes.push(fmRouter)
  })
  return fmRoutes
}
