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
      <Header style="height: 8vh;display: flex;justify-content: flex-start;align-items: center">
        <div style="width: 300px;color: white;font-size:22px;font-weight: bold;margin-left: -32px;margin-top: 4px;">
          <Icon type="social-twitter"></Icon>
          <span>&nbsp;包头公交ERP</span>
        </div>
        <div class="demo-avatar" style="position: absolute;right: 150px;">
          <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
          <Dropdown style="margin-left: 10px;">
            <span style="color: white">欢迎管理员</span>
            <Icon type="arrow-down-b" style="color: white"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem>我的收藏</DropdownItem>
              <DropdownItem>个人信息</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#495060'}">
          <Menu active-name="0-1"  :theme="theme2" width="auto" :open-names="['0']" :accordion="true">
              <Submenu name="0">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                    人力资源管理
                </template>
                <a :href="url" target="erp_main">
                  <MenuItem name="0-1">人员信息管理</MenuItem>
                </a>
              </Submenu>
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  计划管理
                </template>
                <a :href="url+'programManager'" target="erp_main">
                  <MenuItem name="1-2">运营计划管理</MenuItem>
                </a>
                <a :href="url +'programManager1'" target="erp_main">
                  <MenuItem name="1-3">运营计划调整管理</MenuItem>
                </a>
                <a :href="url +'programManager2'" target="erp_main">
                  <MenuItem name="1-4">收入计划制定</MenuItem>
                </a>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  运营管理
                </template>
                <a :href="url+'fgsOperatingManger'" target="erp_main">
                  <MenuItem name="2-1">分公司行车月报管理</MenuItem>
                </a>
                <a :href="url+'jtgsOperatingManger'" target="erp_main">
                  <MenuItem name="2-2">集团运营部报表统计</MenuItem>
                </a>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  能源信息管理
                </template>
                <a :href="url+'electricManger'" target="erp_main">
                  <MenuItem name="3-1">电能消耗统计</MenuItem>
                </a>
                <a :href="url+'pickingManger'" target="erp_main">
                  <MenuItem name="3-2">领料管理</MenuItem>
                </a>
                <a :href="url+'gasManger'" target="erp_main">
                  <MenuItem name="3-3">天然气统计管理</MenuItem>
                </a>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  企业管理
                </template>
                <a :href="url+'fgsOperatingManger'" target="erp_main">
                  <MenuItem name="4-1">行车月报管理</MenuItem>
                </a>
                <a :href="url+'lhlctz'" target="erp_main">
                  <MenuItem name="4-2">能耗里程台账</MenuItem>
                </a>
                <a :href="url+'ccsrtz'" target="erp_main">
                  <MenuItem name="4-3">车次线路收入台账</MenuItem>
                </a>
                <a :href="url+'yyscyl'" target="erp_main">
                  <MenuItem name="4-4">运营生产原始资料</MenuItem>
                </a>
                <a :href="url+'xlxyhjjhdfx'" target="erp_main">
                  <MenuItem name="4-5">线路效益和经济活动</MenuItem>
                </a>
                <a :href="url+'jjzbwcqk'" target="erp_main">
                  <MenuItem name="4-7">经济指标完成情况</MenuItem>
                </a>
              </Submenu>
              <Submenu name="5">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  安全管理
                </template>
                <a :href="url+'ARList'" target="erp_main">
                  <MenuItem name="5-1">立案事故管理</MenuItem>
                </a>
                <a :href="url+'AccidentMonthFee'" target="erp_main">
                  <MenuItem name="5-2">事故情况汇总</MenuItem>
                </a>
                <a :href="url+'AccidentExamineReport'" target="erp_main">
                  <MenuItem name="5-3">安全管理月考核表管理</MenuItem>
                </a>
                <a :href="url+'ProductAnalyse'" target="erp_main">
                  <MenuItem name="5-4">安全生产情况分析</MenuItem>
                </a>
              </Submenu>
              <Submenu name="6">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  维修养护
                </template>
                <a :href="url+'MMList'" target="erp_main">
                  <MenuItem name="6-1">保养管理</MenuItem>
                </a>
                <a :href="url+'GPCheckList'" target="erp_main">
                  <MenuItem name="6-2">钢瓶检测</MenuItem>
                </a>
                <a :href="url+'JCfyjs'" target="erp_main">
                  <MenuItem name="6-5">检测费用结算</MenuItem>
                </a>
                <a :href="url+'DeviceList'" target="erp_main">
                  <MenuItem name="6-3">设备保养记录</MenuItem>
                </a>
                <a :href="url+'ReportList'" target="erp_main">
                  <MenuItem name="6-4">报表管理</MenuItem>
                </a>
              </Submenu>


            <Submenu name="7">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                服务管理
              </template>
              <a :href="url+'kfxxList'" target="erp_main">
                <MenuItem name="7-1">客服信息列表页面</MenuItem>
              </a>
              <a :href="url+'zrxts'" target="erp_main">
                <MenuItem name="7-2">责任性投诉反馈</MenuItem>
              </a>
              <a :href="url+'kfclqktj'" target="erp_main">
                <MenuItem name="7-3">客服处理情况统计</MenuItem>
              </a>
              <a :href="url+'xjpj'" target="erp_main">
                <MenuItem name="7-4">星级评价</MenuItem>
              </a>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 0px'}">
          <Content style="height: 90vh;margin-top: 10px;">
            <div style="position: relative;overflow-y: hidden;height: 100%">
              <iframe :src="url" frameborder="0" style="width: 100%;height: 100%" scrolling="none"
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
        theme2:'dark',
//        url:'http://106.12.19.134:8080/bterp/#/',
        url:'http://localhost:8081/#/',
        fullHeight: document.documentElement.clientHeight
      }
    }
  }
</script>
