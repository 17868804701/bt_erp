<style scoped>
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }

  .header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2c83db;
  }

  .logo {
    color: white;
    font-size: 22px;
    font-weight: bold;
    margin-left: -30px;
    align-items: center;
    display: flex;
  }

  .more {
    margin-left: 8px;
    color: white;
    float: right;
  }

  .home_icon {
    color: white;
    font-size: 30px;
    margin-left: 50px;
    margin-top: -5px;
  }


  .menu-item span {
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    width: 120px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .side2 a {
    color: #515a6e;
  }
  #Sider a {
    color: #333;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="logo">
          <span><Icon type="logo-twitter" style="margin-right: 10px;"/>包头公交平台</span>
          <div>
            <router-link to="/" style="color: white">
              <Icon type="md-home" class="home_icon" style="color: white"/>Home
            </router-link>
          </div>
        </div>
        <div class="demo-avatar">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <Dropdown class="more">
            <span>
              欢迎，管理员
              <Icon type="ios-arrow-down"></Icon>
            </span>
            <DropdownMenu slot="list">
                <router-link to="UserCenter" >
                  <span>
                    <DropdownItem>个人中心</DropdownItem>
                  </span>
                </router-link>
              <span @click="admin">
                <DropdownItem>后台管理中心</DropdownItem>
              </span>
              <span @click="logout">
                <DropdownItem>退出</DropdownItem>
              </span>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}" id="Sider">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" :accordion="true">
            <Submenu :name="item1.cid" v-for="(item1,index) in appClassfiyList" >
              <template slot="title" style="height: 30px;">
                <Icon type="ios-navigate"></Icon> <span style="font-size: 12px;">{{item1.cname}}</span>
              </template>
                <router-link v-for="(item2,index) in allAppList" :to="item2.apath" >
                  <MenuItem :name="index" v-show="item1.cid==item2.cid" style="height: 40px;line-height:11px;">
                     <span style="font-size: 12px;"> {{item2.aname}}</span>
                  </MenuItem>
                </router-link>
            </Submenu>
          </Menu>
        </Sider>
        <Layout style="height: 90vh">
          <Content style="margin:13px 10px 0 20px;background: #fff;height: 90vh}">
            <div id="app" style="padding: 10px;">
              <router-view/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import VueCookie from 'vue-cookie';
export default {
  name: 'App',
  data () {
    return {
      isCollapsed: false,
      id: '',
      URL: '',
      modal1: false,
      formItem: {
        input: 'admin',
        jiguan: '陕西省汉中市',
        select: '公交一公司',
        radio: '男',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: '',
      },
      appClassfiyList: [],
      allAppList: [],
      currentClassify: 0,
    }
  },
  mounted() {
    this.$store.commit('getAllMenu');
    this.$store.commit('getCurrentAuth');
    this.$store.commit('getAllDict');
    this.$store.commit('getAllCLList');
    this.$store.commit('getOriganzation');
    this.URL = process.env.iframe_BASE_URL;
    this.getUserSetting();
  },
  methods: {
    logout() {
      console.log('退出登录');
      debugger
      this.$fetch(process.env.BASE_URL + 'login/logout?access_token=' + VueCookie.get('access_token'))
        .then(res => {
          if (res.success === true) {
            VueCookie.set('access_token', '', -1);
            window.location.href = process.env.BASE_URL + "/login?service=http://localhost:8080/#/";
          }
        })
    },
    getUserSetting() {
      let that = this;
      let appClassifyURL = process.env.BASE_URL + '/auth/app/getClassify';
      this.$fetch(appClassifyURL)
        .then(res => {
          console.log(res.data,'分类');
          that.appClassfiyList = res.data;
        });

      let allAppURL = process.env.BASE_URL + '/auth/app/getApp';
      this.$fetch(allAppURL)
        .then(res => {
          console.log(res.data,'应用')
          that.allAppList = res.data;
        })
    },
    admin(){
      window.location.href = process.env.admin_BASE_URL + 'plat/#/home'
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
