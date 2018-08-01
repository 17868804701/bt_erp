/**
 * Created by qismsom on 2018/7/24.
 */

const baseURL = 'http://10.50.0.144:8702';

const NetworkInterface = {
  userManager_userList: '/person/userInfo/list', // 人力资源管理列表
  userManager_saveUserInfo: '/person/userInfo/save', // 保存人员信息
  userManager_updateUserInfo: '/person/userInfo/update', // 更新人员信息
  userManager_exportExcel: '/person/userInfo/exportExcel', //导出员工信息
  userManager_importExcel: '/person/userInfo/importExcel', // 导入员工信息
  userManager_userChangeList: '/person/userInfo/getHis', // 员工变更记录
  userManager_counts: '/person/userInfo/getCount', // 员工数据统计

  // 安全事故管理
  security_LASG_list: '/anq/lasg/lasgList', // 立案事故信息列表
  security_LASG_add: '/anq/lasg/saveLasg', // 添加立案事故信息
  security_LASG_update: '/anq/lasg/updateLasg', //更新立案事故信息
  security_LASG_delete: '/anq/lasg/deleteLasg', // 删除立案事故
  security_LASG_addLoss: '/anq/lasg/saveZjsg', // 添加立案事故追加经损信息
  security_LASG_deleteLoss: '/anq/lasg/deleteZjsg', // 删除立案事故追加经损信息
  security_LASG_updateLoss: '/anq/lasg/updateZjsg', // 更新立案事故追加经损信息
  security_LASG_lossList: '/anq/lasg/zjsgList', // 追加事故信息列表

  //报表
  security_LASG_exportExcel: 'http://10.50.0.144:8702/anq/lasg/exportLasgExcel', // 导出立案事故信息列表

  // 事故情况汇总
  security_JTGSSGHZ_exportExcel: 'http://10.50.0.144:8702/anq/lasg/exportLasgExcel',// 集团公司事故情况月汇总表 ---- 和立案事故管理页面一样的接口 --- 需要添加 按月份查询
  security_JTGSSGHZ_list: '/anq/lasg/lasgList',

  security_GFGSJTSG_exportExcel: 'http://10.50.0.144:8702/anq/lasg/exportJtsgbbExcel',  // 各分公司交通事故月报表
  security_GFGSJTSG_list: '/anq/lasg/jtsgbbList', // 各分公司交通事故月报表列表数据

  // 安全管理月考核表
  security_AQGLYKH_exportExcel: 'http://10.50.0.144:8702/anq/lasg/exportAqglkhbExcel', // 安全管理月考核表
  security_AQGLYKH_list: '/anq/lasg/aqglkhbList', // 安全管理月考核表列表数据
  security_ZJSGJSSM_exportExcel: 'http://10.50.0.144:8702/anq/lasg/exportZjsgjsExcel', // 追加事故经损说明管理
  security_ZJSGJSSM_list: '/anq//lasg/zjsgjsList', // 追加事故经损说明管理列表数据

  // 安全生产情况分析列表数据
  security_AQSCFGS_list: '/anq/lasg/fgsAqsczbList',
  security_AQSCJTGS_list: '/anq/lasg/hzAqsczbList',

  // 安全生产情况分析 报表导出
  //   /lasg/exportAqsczbExcel   整个的导出
  security_AQQKFX_exportExcel: baseURL+'/lasg/exportAqsczbQkfxExcel', // 安全情况分析 --- 报表导出
  security_LASGFB_exportExcel: baseURL+'/lasg/exportAqsczbLasgfbExcel', // 立案事故分布 --- 报表导出
  security_KHSGFB_exportExcel: baseURL+'/lasg/exportAqsczbKhsgfbExcel', // 考核事故分布 --- 报表导出
  security_JJSS_exportExcel: baseURL+'/lasg/exportAqsczbJjssExcel', // 经济损失 --- 报表导出
  security_SCZRSGPL_exportExcel: baseURL+'/lasg/exportAqsczbXczrsgplExcel', // 行车责任事故频率 --- 报表导出
  security_LASGJSLZB_exportExcel: baseURL+'/lasg/exportAqsczbLasgjslExcel', // 立案事故经损率指标 --- 报表导出
  security_CLAJ_exportExcel: baseURL+'/lasg/exportAqsczbAjtcExcel', // 车辆安检 --- 报表导出
  security_DWTBJQXJPF_exportExcel: baseURL+'/lasg/exportAqsczbDwtbExcel', // 对外投保交强险及赔付情况 --- 报表导出
  // 安全情况分析
  // 立案事故分布
  // 考核事故分布
  // 经济损失
  // 行车责任事故频率
  // 立案事故经损率指标
  // 车辆安检
  // 对外投保交强险及赔付情况


  // 运营管理
  fgsxcyb:'/yuny/fgsXcyb/getXcybList',   //分公司行车月报表列表
  exportFgsxcyb:'/yuny/fgsXcyb/exportXcybExcel',   //分公司行车月报表导出
  yyexportFgsxcyb:'/yuny/yybbtj/exportLineExcel',   //导出线路车次正点统计表
  getLineList:'/yuny/yybbtj/getLineList',   //导出线路车次正点统计表
  yyJtexportFgsxcyb:'/yuny/yybbtj/exportJthzExcel',   //导出各公司与集团汇总表
  getjthzList:'/yuny//yybbtj/getjthzList'   //导出各公司与集团汇总表
};

export default NetworkInterface;
