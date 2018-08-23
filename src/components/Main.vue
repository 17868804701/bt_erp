<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }

  .header {
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(47, 79, 79, 0.8);
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
    width: 69px;
    font-size: 12px;
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
    padding-left: 20px;
  }

  .icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-top: 10px;
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
</style>
<template>
  <div class="layout">
    <Layout>
      <Header class="header">
        <div class="logo">
          <span><Icon type="logo-twitter" style="margin-right: 10px;"/>智慧公交平台</span>
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
              <span @click="logout">
                <DropdownItem>退出</DropdownItem>
              </span>
              <span @click="userCenter">
                <DropdownItem>个人中心</DropdownItem>
              </span>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <!--个人信息-->
      <Modal
        v-model="modal1"
        title="个人信息"
        @on-ok="ok"
        @on-cancel="cancel">
        <div>
          <Form :model="formItem" :label-width="80">
            <FormItem label="用户名">
              <Input v-model="formItem.input" placeholder="用户名"></Input>
            </FormItem>
            <FormItem label="所在公司">
              <Select v-model="formItem.select">
                <Option value="公交一公司">公交一公司</Option>
                <Option value="公交二公司">公交二公司</Option>
                <Option value="公交三公司">公交三公司</Option>
              </Select>
            </FormItem>
            <FormItem label="籍贯">
              <Input v-model="formItem.jiguan" placeholder="用户名"></Input>
            </FormItem>
            <FormItem label="性别">
              <RadioGroup v-model="formItem.radio">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="兴趣爱好">
              <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="是否在职">
              <i-switch v-model="formItem.switch" size="large">
                <span slot="open">是</span>
                <span slot="close">否</span>
              </i-switch>
            </FormItem>
            <FormItem label="个人简介">
              <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                     placeholder="个人简介"></Input>
            </FormItem>
          </Form>
        </div>
      </Modal>
      <!--个人信息完-->
      <Layout>
        <Sider ref="side1" width="120" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed"
               style="background: rgb(255,255,255,0.9);height: 90vh;margin-top: 1.5vh">
          <Menu :active-name="currentClassify" theme="light" width="120" :class="menuitemClasses" @on-select="selectClassify">
            <MenuItem v-for="(classify, index) in this.appClassfiyList" class="menuStyle" :name="classify.cid">
              <Icon type="ios-keypad"/>
              <span>{{classify.cname}}</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Sider ref="side1" width="200" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed"
               style="height: 90vh;margin-top: 1.5vh;background: rgb(255,255,255,0.3)">
          <Menu active-name="1" theme="light" width="200" :class="menuitemClasses" style="background: none">
            <MenuItem v-for="(item, index) in this.allAppList"  v-show="isShow(item)"  class="menuStyle1" :name="item.aname">
              <a :href="'http://localhost:8081/#/'+item.apath" target="erp_main">
                <img src="../assets/lo.jpg" alt="" class="icon">
                <span>{{item.aname}}</span>
              </a>
            </MenuItem>
          </Menu>
          <div class="tip">
            <img src="../assets/box.png" alt="">
            <span>暂无可用应用</span>
          </div>
        </Sider>
        <Layout>
          <div class="side_menu" @click="collapsedSider">
            <Icon type="ios-arrow-back" v-show="!isCollapsed"/>
            <Icon type="ios-arrow-forward" v-show="isCollapsed"/>
          </div>
          <Content style="margin:13px 0 0 40px;background: #fff;height: 90vh}">
            <div style="position: relative;overflow-y: hidden;height: 90vh">
              <iframe style="height: 100%;width: 100%" name="erp_main" frameborder="0"
                      src="http://localhost:8081/#/"
                      scrolling="none"></iframe>
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
        id:'',
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
      list: function () {
//        this.$fetch('http://rap.taobao.org/mockjsdata/11793/test').then(res => {
//          console.log(res)
//        })
      },
      userCenter: function () {
        this.modal1 = true
      },
      logout() {
        console.log('退出登录');
        this.$fetch('http://10.50.0.144:8702/login/logout?access_token='+VueCookie.get('access_token'))
        .then(res => {
          console.log(res);
          if(res.success===true){
            VueCookie.set('access_token','',-1);
            window.top.location.href = process.env.BASE_URL+"/login?service=http://localhost:8080/#/";
          }
        })
      },
      ok () {
        this.$Message.info('修改成功');
      },
      cancel () {
//        this.$Message.info('取消');
      },
      getUserSetting() {
        let that = this;
        console.log('获取用户权限');
        let appClassifyURL = process.env.BASE_URL+'/auth/app/getClassify';
        this.$fetch(appClassifyURL)
        .then(res => {
          console.log(res);
          let obj = {
            cicon: "",
            cid: 'all',
            cname: "全部",
          }
          res.data.splice(0, 0, obj);
          that.appClassfiyList = res.data;
          this.$nextTick(() => {
            that.currentClassify = 'all'
          })
        })

        let allAppURL = process.env.BASE_URL+'/auth/app/getAllApp';
        this.$fetch(allAppURL)
        .then(res => {
          console.log(res);
          that.allAppList = res.data;
        })
      },
      selectClassify(value) {
        console.log(value);
        this.currentClassify = value;
      },
      isShow(item) {
        console.log(this.currentClassify);
        if (this.currentClassify === 'all') {
          return true;
        }else{
          return this.currentClassify ==item.cid;
        }
        return false;
      }
    },
    mounted(){
      this.list();
      this.getUserSetting();
    },
    created() {

    }
  }
</script>
