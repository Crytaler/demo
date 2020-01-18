<template>
    <div>
      <el-container>
        <el-header class="homeHeader">
          <div class="title">微服务</div>
          <div>
            <el-button icon="el-icon-bell" type="text" style="margin-right: 8px;color: #000000;" size="normal"></el-button>
            <el-dropdown class="userinfo" @command="handleCommand">
  <span class="el-dropdown-link">
    {{userinfo.username}}<img :src="userinfo.userface" alt="">
  </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="userinfo">个人中心</el-dropdown-item>
                <el-dropdown-item command="setting">设置</el-dropdown-item>
                <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
                <el-dropdown-item command="updatepassword" disabled>修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
              router unique-opened
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
            <el-submenu :index="index+''" v-for="(item,index) in menus" v-if="!item.hidden" :key="index">
              <template slot="title">
                <i style="color: #409eff;margin-right: 5px" :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item :index="child.path"  v-for="(child,indexj) in item.children" :key="indexj">
                {{child.name}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
          </el-aside>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="homeWelcome" v-if="this.$router.currentRoute.path=='/home'">
              欢迎来到振的微服务！
            </div>
            <router-view class="homeRouterView"/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import {getRequest} from '../utils/api'

export default {
  name: 'Home',
  data () {
    return {
      userinfo: JSON.parse(window.sessionStorage.getItem('userinfo'))
    }
  },
  computed: {
    menus () {
      return this.$store.state.menus
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'userinfo') {
        this.$router.push('test')
      } else if (command === 'logout') {
        this.$confirm('此操作将注销登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          getRequest('/logout')
          window.sessionStorage.removeItem('userinfo')
          console.log('退出')
          this.$store.commit('initRoutes', [])
          this.$router.replace('/')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
  .homeHeader {
    background-color: deepskyblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box
  }
  .homeHeader .title {
    font-size: 30px;
    font-family: 华文行楷;
    color: #ffffff
  }
  .homeHeader .userinfo {
    cursor: pointer;
  }
  .homeWelcome {
    text-align: center;
    font-size: 30px;
    font-family: 华文行楷;
    color: #409eff;
    padding-top: 50px;
  }
  .homeRouterView {
    margin-top: 10px;
  }

  .el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-left: 8px;
  }

  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
</style>
