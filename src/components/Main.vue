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
    overflow: hidden;
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
    margin-top: -4px;
    margin-left: -10px;
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
              <DropdownItem>退出</DropdownItem>
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
          <Menu active-name="0" theme="light" width="120" :class="menuitemClasses">
            <MenuItem class="menuStyle" name="0">
              <Icon type="ios-keypad"/>
              <span>全部（8）</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="1">
              <Icon type="md-person"/>
              <span>人力资源管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="2">
              <Icon type="md-jet"/>
              <span>计划管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="3">
              <Icon type="md-planet"/>
              <span> 运营管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="4">
              <Icon type="ios-analytics"/>
              <span>能源信息管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="5">
              <Icon type="md-albums"/>
              <span>企业管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="6">
              <Icon type="md-bulb"/>
              <span>安全管理</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="7">
              <Icon type="md-construct"/>
              <span>维修养护</span>
            </MenuItem>
            <MenuItem class="menuStyle" name="8">
              <Icon type="md-restaurant"/>
              <span>服务管理</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Sider ref="side1" width="170" hide-trigger collapsible :collapsed-width="0" v-model="isCollapsed"
               style="height: 90vh;margin-top: 1.5vh;background: rgb(255,255,255,0.3)">
          <Menu active-name="1" theme="light" width="170" :class="menuitemClasses" style="background: none">
            <MenuItem class="menuStyle1" name="1">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span>人力资源管理</span>
            </MenuItem>
            <MenuItem class="menuStyle1" name="2">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span>计划管理</span>
            </MenuItem>
            <MenuItem class="menuStyle1" name="3">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span> 运营管理</span>
            </MenuItem>
            <MenuItem class="menuStyle1" name="4">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span>能源信息管理</span>
            </MenuItem>
            <MenuItem class="menuStyle1" name="5">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span>企业管理</span>
            </MenuItem>
            <MenuItem class="menuStyle1" name="6">
              <img src="../assets/lo.jpg" alt="" class="icon">
              <span>安全管理</span>
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
                      src="http://localhost:8081/#/userinfo"
                      scrolling="none"></iframe>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false,
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
          textarea: ''
        }
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
      ok () {
        this.$Message.info('修改成功');
      },
      cancel () {
//        this.$Message.info('取消');
      }
    }
    ,
    mounted(){
      this.list();
    }
  }
</script>
