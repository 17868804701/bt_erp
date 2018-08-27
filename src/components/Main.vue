<style scoped>
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

  .side_menu {
    width: 25px;
    height: 90px;
    display: flex;
    justify-content: center;
    padding-bottom: 3px;
    align-items: center;
    font-size: 28px;
    border-radius: 0 10px 10px 0;
    color: white;
    position: absolute;
    background: rgb(21, 37, 44, 0.4);
    margin-top: 35vh;
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

  .menuStyle {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
  }

  .menuStyle1 {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }

  .icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .tip {
    width: 100%;
    height: 200px;
    background: rgb(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*margin-top: 30vh;*/
  }

  .tip img {
    width: 30px;
    height: 30px;
  }

  .tip span {
    font-size: 12px;
    margin-top: 10px;
  }

  .side2 {
    height: 90vh;
    margin-top: 1.5vh;
    background: rgb(255, 255, 255, 0.3);
    overflow-y: scroll
  }

  .side2::-webkit-scrollbar {
    display: none;
  }

  .side2 a {
    color: #515a6e;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="logo">
          <span><Icon type="logo-twitter" style="margin-right: 10px;"/>包头公交平台</span>
          <div>
            <a href="http://localhost:8081/#/" target="erp_main">
              <Icon type="md-home" class="home_icon"/>
            </a>
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
              <a href="http://localhost:8081/#/UserCenter" target="erp_main">
                <span>
                  <DropdownItem>个人中心</DropdownItem>
                </span>
              </a>
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
        <Sider ref="side1" width="140" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"
               style="background: rgb(255,255,255,0.9);height: 90vh;margin-top: 1.5vh">
          <Menu :active-name="currentClassify" theme="light" width="140" :class="menuitemClasses"
                @on-select="selectClassify">
            <MenuItem v-for="(classify, index) in this.appClassfiyList" class="menuStyle" :name="classify.cid">
              <Icon type="ios-keypad"/>
              <span>{{classify.cname}}</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Sider ref="side1" width="200" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed"
               class="side2">
          <Menu active-name="1" theme="light" width="200" :class="menuitemClasses" style="background: none">
            <MenuItem v-for="(item, index) in this.allAppList" v-show="isShow(item)" class="menuStyle1"
                      :name="item.aname">
              <a :href="item.apath" target="erp_main" class="menuStyle1">
                <img :src="item.aicon" alt="" class="icon">
                <span>{{item.aname}}</span>
              </a>
            </MenuItem>
          </Menu>
          <!--<div class="tip">-->
          <!--<img src="../assets/box.png" alt="">-->
          <!--<span>暂无可用应用</span>-->
          <!--</div>-->
        </Sider>
        <Layout>
          <div class="side_menu" @click="collapsedSider">
            <Icon type="ios-arrow-back" v-show="!isCollapsed"/>
            <Icon type="ios-arrow-forward" v-show="isCollapsed"/>
          </div>
          <Content style="margin:13px 0 0 40px;background: #fff;height: 90vh}">
            <div style="position: relative;overflow-y: hidden;height: 90vh;padding: 0px 10px 10px 10px;">
              <iframe style="height: 100%;width: 100%" name="erp_main" frameborder="0"
                      :src="URL" scrolling="none"></iframe>
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
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      logout() {
        console.log('退出登录');
        this.$fetch(process.env.BASE_URL + 'login/logout?access_token=' + VueCookie.get('access_token'))
          .then(res => {
            if (res.success === true) {
              VueCookie.set('access_token', '', -1);
              window.top.location.href = process.env.BASE_URL + "/login?service=http://localhost:8080/#/";
            }
          })
      },
      ok () {
        this.$Message.info('修改成功');
      },
      cancel () {
      },
      getUserSetting() {
        let that = this;
        let appClassifyURL = process.env.BASE_URL + '/auth/app/getClassify';
        this.$fetch(appClassifyURL)
          .then(res => {
            console.log(res);
            let obj = {
              cicon: "",
              cid: 'all',
              cname: "全部",
            };
            res.data.splice(0, 0, obj);
            that.appClassfiyList = res.data;
            this.$nextTick(() => {
              that.currentClassify = 'all'
            })
          });

        let allAppURL = process.env.BASE_URL + '/auth/app/getAllApp';
        this.$fetch(allAppURL)
          .then(res => {
            res.data.forEach(item => {
              item.apath = process.env.iframe_BASE_URL + item.apath,
                item.aicon = process.env.upload_BASE_URL + item.aicon
            });
            that.allAppList = res.data;
          })
      },
      selectClassify(value) {
        this.currentClassify = value;
      },
      isShow(item) {
        if (this.currentClassify === 'all') {
          return true;
        } else {
          return this.currentClassify === item.cid;
        }
        return false;
      },
      admin(){
        window.location.href = process.env.admin_BASE_URL + 'plat/#/home'
      }
    },
    mounted(){
      this.URL = process.env.iframe_BASE_URL
      this.getUserSetting();
    },
    created() {

    }
  }
</script>
