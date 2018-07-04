<style scoped>

  .layout {
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
    position: relative;
    /*border-radius: 4px;*/
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    .0 left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header style="height: 8vh">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">
            <a href="http://localhost:8081/#/" target="erp_main">
              <MenuItem name="1-1">人力资源管理</MenuItem>
            </a>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                计划管理
              </template>
              <a href="http://localhost:8081/#/programManager" target="erp_main">
                <MenuItem name="1-2">运营计划管理</MenuItem>
              </a>
              <a href="http://localhost:8081/#/programManager1" target="erp_main">
                <MenuItem name="1-2">运营计划调整管理</MenuItem>
              </a>
              <a href="http://localhost:8081/#/programManager2" target="erp_main">
                <MenuItem name="1-2">收入计划制定</MenuItem>
              </a>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                运营管理
              </template>
              <a href="http://localhost:8081/#/fgsOperatingManger" target="erp_main">
                <MenuItem name="2-1">分公司运营报表统计</MenuItem>
              </a>
              <a href="http://localhost:8081/#/jtgsOperatingManger" target="erp_main">
                <MenuItem name="2-2">集团运营部报表统计</MenuItem>
              </a>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                能源信息管理
              </template>
              <a href="http://localhost:8081/#/electricManger" target="erp_main">
                <MenuItem name="3-1">电能消耗统计</MenuItem>
              </a>
              <a href="http://localhost:8081/#/pickingManger" target="erp_main">
                <MenuItem name="3-2">领料管理</MenuItem>
              </a>
              <MenuItem name="3-3">天然气统计管理</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 0px'}">
          <Content style="height: 90vh;margin-top: 10px;">
            <div style="position: relative;overflow-y: hidden;height: 100%">
              <iframe src="http://localhost:8081/#/" frameborder="0" style="width: 100%;height: 100%" scrolling="none"
                      name="erp_main"></iframe>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        fullHeight: document.documentElement.clientHeight
      }
    }
  }
</script>
