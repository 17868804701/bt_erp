import Vue from 'vue'
import Router from 'vue-router'
// 人力资源管理
import List from '../peopleManger/List.vue'
import SxcxArea from '../peopleManger/sxcxArea.vue'
import ListInfo from '../peopleManger/ListInfo.vue'
import UserStatistics from '../peopleManger/UserStatistics.vue'
// 计划管理
import programManager from '../programManager/programManager.vue'
import programManager1 from '../programManager/programManager1.vue'
import programManager2 from '../programManager/programManager2.vue'
import addProgram from '../programManager/addProgram.vue'
// 运营管理
import fgsOperatingManger from '../operatingManger/fgsOperatingManger.vue'
import jtgsOperatingManger from '../operatingManger/jtgsOperatingManger.vue'
// 安全管理
import ARList from '../securityManger/views/ARList.vue'
import AccidentDetail from '../securityManger/views/AccidentDetail.vue'
import AccidentMonthFee from '../securityManger/views/AccidentMonthFee.vue'
import AccidentExamineReport from '../securityManger/views/AccidentExamineReport.vue'
import ProductAnalyse from '../securityManger/views/ProductAnalyse.vue'

// 能源管理
import electricManger from '../energyInformationManger/electricManger.vue'
import pickingManger from '../energyInformationManger/pickingManger.vue'
import gasManger from '../energyInformationManger/gasManger.vue'

// 企业管理
import lhlctz from '../enterpriseManger/lhlctz.vue'
import ccsrtz from '../enterpriseManger/ccsrtz.vue'
import yyscyl from '../enterpriseManger/yyscyl.vue'
import xlxyhjjhdfx from '../enterpriseManger/xlxyhjjhdfx.vue'
import jjzbwcqk from '../enterpriseManger/jjzbwcqk.vue'

// 维修养护管理
import MainMM from '../maintenanceMaintenanceManger/views/MainMM.vue'
import GPCheckList from '../maintenanceMaintenanceManger/views/GPCheckList.vue'
import DeviceList from '../maintenanceMaintenanceManger/views/DeviceList.vue'
import ReportList from '../maintenanceMaintenanceManger/views/ReportList.vue'
import MMDetail from '../maintenanceMaintenanceManger/views/MMDetail.vue'
import JCfyjs from '../maintenanceMaintenanceManger/views/JCfyjs.vue'
import gpjcInfo from '../maintenanceMaintenanceManger/views/gpjcInfo.vue'

// 服务管理
import kfxxList from '../serviceManger/kfxxList.vue'
import addKfxx from '../serviceManger/addKfxx.vue'
import zrxts from '../serviceManger/zrxts.vue'
import kfclqktj from '../serviceManger/kfclqktj.vue'
import xjpj from '../serviceManger/xjpj.vue'
import tableTemp from '../serviceManger/tableTemp.vue'

Vue.use(Router);

export default[
  {
    path: '/',
    component: List
  },
  {
    path: '/SxcxArea',
    component: SxcxArea
  },
  {
    path: '/ListInfo',
    component: ListInfo
  },
  {
    path: '/UserStatistics',
    component: UserStatistics
  },
  {
    path: '/programManager',
    component: programManager
  },

  {
    path: '/programManager1',
    component: programManager1
  },
  {
    path: '/programManager2',
    component: programManager2
  },
  {
    path: '/addProgram',
    component: addProgram
  },
  {
    path: '/fgsOperatingManger',
    component: fgsOperatingManger
  },
  {
    path: '/jtgsOperatingManger',
    component: jtgsOperatingManger
  },
  {
    path: '/electricManger',
    component: electricManger
  },
  {
    path: '/pickingManger',
    component: pickingManger
  },
  {
    path: '/ARList',
    component: ARList
  },
  {
    path: '/AccidentDetail',
    component: AccidentDetail
  },
  {
    path: '/AccidentMonthFee',
    component: AccidentMonthFee
  },
  {
    path: '/AccidentExamineReport',
    component: AccidentExamineReport
  },
  {
    path: '/ProductAnalyse',
    component: ProductAnalyse
  },
  {
    path: '/gasManger',
    component: gasManger
  } ,
  {
    path: '/lhlctz',
    component: lhlctz
  },
  {
    path: '/MainMM',
    component: MainMM
  },
  {
    path: '/GPCheckList',
    component: GPCheckList
  },
  {
    path: '/DeviceList',
    component: DeviceList
  },
  {
    path: '/ReportList',
    component: ReportList
  },
  {
    path: '/ccsrtz',
    component: ccsrtz
  },
  {
    path: '/yyscyl',
    component: yyscyl
  },{
    path: '/xlxyhjjhdfx',
    component: xlxyhjjhdfx
  },{
    path: '/jjzbwcqk',
    component: jjzbwcqk
  },
  {
    path: '/MMDetail',
    component: MMDetail
  },{
    path: '/kfxxList',
    component: kfxxList
  },{
    path: '/addKfxx',
    component: addKfxx
  },{
    path: '/zrxts',
    component: zrxts
  },{
    path: '/kfclqktj',
    component: kfclqktj
  },{
    path: '/xjpj',
    component: xjpj
  },{
    path: '/JCfyjs',
    component: JCfyjs
  },{
    path: '/gpjcInfo',
    component: gpjcInfo
  },{
    path: '/tableTemp',
    component: tableTemp
  }
]
