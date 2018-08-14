/**
 * Created by qismsom on 2018/7/24.
 */

const baseURL = 'http://10.50.0.144:8702';

const NetworkInterface = {

  // **********        数据字典            *********** //
  common_getDictListDataWithCode: 'auth/dic/getByCode',  // 根据code字典数据


  // **********        人力资源            *********** //
  userManager_userList: '/person/userInfo/list', // 人力资源管理列表
  userManager_saveUserInfo: '/person/userInfo/save', // 保存人员信息
  userManager_updateUserInfo: '/person/userInfo/update', // 更新人员信息
  userManager_exportExcel: '/person/userInfo/exportExcel', //导出员工信息
  userManager_importExcel: '/person/userInfo/importExcel', // 导入员工信息
  userManager_userChangeList: '/person/userInfo/getHis', // 员工变更记录
  userManager_counts: '/person/userInfo/getCount', // 员工数据统计


  // **********        安全事故管理            *********** //
  security_LASG_list: '/anq/lasg/lasgList', // 立案事故信息列表
  security_LASG_add: '/anq/lasg/saveLasg', // 添加立案事故信息
  security_LASG_update: '/anq/lasg/updateLasg', //更新立案事故信息
  security_LASG_delete: '/anq/lasg/deleteLasg', // 删除立案事故
  security_LASG_addLoss: '/anq/lasg/saveZjsg', // 添加立案事故追加经损信息
  security_LASG_deleteLoss: '/anq/lasg/deleteZjsg', // 删除立案事故追加经损信息
  security_LASG_updateLoss: '/anq/lasg/updateZjsg', // 更新立案事故追加经损信息
  security_LASG_lossList: '/anq/lasg/zjsgList', // 追加事故信息列表
  //报表
  security_LASG_exportExcel: baseURL+'/anq/lasg/exportLasgExcel', // 导出立案事故信息列表
  // 事故情况汇总
  security_JTGSSGHZ_exportExcel: baseURL+'/anq/lasg/exportLasgExcel',// 集团公司事故情况月汇总表 ---- 和立案事故管理页面一样的接口 --- 需要添加 按月份查询
  security_JTGSSGHZ_list: '/anq/lasg/lasgList',
  security_GFGSJTSG_exportExcel: baseURL+'/anq/lasg/exportJtsgbbExcel',  // 各分公司交通事故月报表
  security_GFGSJTSG_list: '/anq/lasg/jtsgbbList', // 各分公司交通事故月报表列表数据
  // 安全管理月考核表
  security_AQGLYKH_exportExcel: baseURL+'/anq/lasg/exportAqglkhbExcel', // 安全管理月考核表
  security_AQGLYKH_list: '/anq/lasg/aqglkhbList', // 安全管理月考核表列表数据
  security_AQGLYKH_save: '/anq/lasg/saveAqkh', // 安全管理月考核表， 添加安全相关分数
  security_AQGLYKH_update: '/anq/lasg/updateAqkh', // 安全管理月考核表， 更新安全相关分数
  security_ZJSGJSSM_exportExcel: baseURL+'/anq/lasg/exportZjsgjsExcel', // 追加事故经损说明管理
  security_ZJSGJSSM_list: '/anq//lasg/zjsgjsList', // 追加事故经损说明管理列表数据
  // 安全生产情况分析列表数据
  security_AQSCFGS_list: '/anq/lasg/fgsAqsczbList', // 分公司数据
  security_AQSCJTGS_list: '/anq/lasg/hzAqsczbList', // 集团公司数据
  // 安全生产情况分析 报表导出
  //   /lasg/exportAqsczbExcel   整个的导出
  security_AQQKFX_exportExcel: baseURL+'/anq/lasg/exportAqsczbQkfxExcel', // 安全情况分析 --- 报表导出
  security_LASGFB_exportExcel: baseURL+'/anq/lasg/exportAqsczbLasgfbExcel', // 立案事故分布 --- 报表导出
  security_KHSGFB_exportExcel: baseURL+'/anq/lasg/exportAqsczbKhsgfbExcel', // 考核事故分布 --- 报表导出
  security_JJSS_exportExcel: baseURL+'/anq/lasg/exportAqsczbJjssExcel', // 经济损失 --- 报表导出
  security_SCZRSGPL_exportExcel: baseURL+'/anq/lasg/exportAqsczbXczrsgplExcel', // 行车责任事故频率 --- 报表导出
  security_LASGJSLZB_exportExcel: baseURL+'/anq/lasg/exportAqsczbLasgjslExcel', // 立案事故经损率指标 --- 报表导出
  security_CLAJ_exportExcel: baseURL+'/anq/lasg/exportAqsczbAjtcExcel', // 车辆安检 --- 报表导出
  security_DWTBJQXJPF_exportExcel: baseURL+'/anq/lasg/exportAqsczbDwtbExcel', // 对外投保交强险及赔付情况 --- 报表导出


  // **********        维修养护            *********** //
  maintain_BYGL_DATA_WXGXX_list: '/weix/dataDictionary/listWXGXX',                              // 基础数据 - 维修工信息管理列表
  maintain_BYGL_DATA_WXGXX_saveOrUpdate: '/weix/dataDictionary/saveWXGXX',                      // 基础数据 - 维修工信息新增或更新
  maintain_BYGL_DATA_WXGXX_delete: '/weix/dataDictionary/deleteWXGXX',                          // 基础数据 - 维修工信息删除

  maintain_BYGL_DATA_PGXX_list: '/weix/dataDictionary/listPJXX',                                // 基础数据 - 配件信息列表
  maintain_BYGL_DATA_PGXX_saveOrUpdate: '/weix/dataDictionary/savePJXX',                        // 基础数据 - 配件信息新增或更新
  maintain_BYGL_DATA_PGXX_delete: '/weix/dataDictionary/deletePJXX',                            // 基础数据 - 配件信息删除

  maintain_BYGL_CLBY_recordList: '/weix/maintenanceManagement/clby/list',                       // 车辆保养 - 列表数据
  maintain_BYGL_CLBY_saveRecord: '/weix/maintenanceManagement/clby/save',                       // 车辆保养 - 新增保养进场登记
  maintain_BYGL_CLBY_updateRecord: '/weix/maintenanceManagement/clby/update',                   // 车辆保养 - 更新保养进场登记
  maintain_BYGL_CLBY_deleteRecord: '/weix/maintenanceManagement/clby/delete',                   // 车辆保养 - 删除保养进场登记
  maintain_BYGL_CLBY_recordDetail: '/weix/maintenanceManagement/clby/info',                     // 车辆保养 - 详情
  maintain_BYGL_CLBY_exportExcel: baseURL+'/weix/maintenanceManagement/clby/listExport',        // 车辆保养 - 列表导出excel

  maintain_BYGL_CLBY_FDJ_saveOrUpdate: '/weix/maintenanceManagement/clbyFdjjc/update',          // 车辆保养详情 - 发动机进场记录更新

  maintain_BYGL_CLBY_DSJ_saveUpdate: '/weix/maintenanceManagement/clbyMx/saveDspj',             // 车辆保养详情 - 添加或者保存丢失件修配记录
  maintain_BYGL_CLBY_CY_saveUpdate: '/weix/maintenanceManagement/clbyMx/saveCy',                // 车辆保养详情 - 添加或者保存超养作业记录
  maintain_BYGL_CLBY_DJSORCY_delete: '/weix/maintenanceManagement/clbyMx/delete',               // 车辆保养详情 - 删除超养作业记录或丢失件

  maintain_BYGL_CLBY_CL_save: '/weix/maintenanceManagement/llmx/save',                          // 车辆保养详情 - 添加一条领料记录
  maintain_BYGL_CLBY_CL_update: '/weix/maintenanceManagement/llmx/update',                      // 车辆保养详情 - 更新修改一条领料记录
  maintain_BYGL_CLBY_CL_delete: '/weix/maintenanceManagement/llmx/delete',                      // 车辆保养详情 - 删除一条领料记录

  maintain_BYGL_JYDGL_recordList: '/weix/maintenanceManagement/jyd/list',                            // 检验单管理 - 列表
  maintain_BYGL_JYDGL_exportExcel: baseURL+'/weix/maintenanceManagement/jyd/listExport',             // 检验单管理 - 列表导出excel
  maintain_BYGL_YSDGL_recordList: '/weix/maintenanceManagement/ysd/list',                            // 验收单管理 - 列表
  maintain_BYGL_YSDGL_exportExcel: baseURL+'/weix/maintenanceManagement/ysd/listExport',             // 验收单管理 - 列表导出excel
  maintain_BYGL_WXLLGL_recordList: '/weix/maintenanceManagement/llmx/list',                          // 维修理领料管理 - 列表
  maintain_BYGL_WXLLGL_exportExcel: baseURL+'/weix/maintenanceManagement/llmx/listExport',           // 维修理领料管理 - 列表导出excel
  maintain_BYGL_FXGL_recordList: '/weix/maintenanceManagement/fxgl/list',                            // 返修管理 - 列表
  maintain_BYGL_FXGL_save: '/weix/maintenanceManagement/fxgl/save',                                  // 返修管理 - 新增
  maintain_BYGL_FXGL_update: '/weix/maintenanceManagement/fxgl/update',                              // 返修管理 - 更新
  maintain_BYGL_FXGL_delete: '/weix/maintenanceManagement/fxgl/delete',                              // 返修管理 - 删除
  maintain_BYGL_FXGL_listDetail: '/weix/maintenanceManagement/fxgl/info',                            // 返修管理 - 列表查看详情
  maintain_BYGL_FXGL_exportExcel: baseURL+'/weix/maintenanceManagement/fxgl/listExport',             // 返修管理 - 列表导出excel

  maintain_DEVICE_list: '/weix/equipmentMaintenanceRecord/list',                                       // 设备保养记录 - 设备管理列表
  maintain_DEVICE_save: '/weix/equipmentMaintenanceRecord/save',                                       // 设备保养记录 - 新增设备信息
  maintain_DEVICE_update: '/weix/equipmentMaintenanceRecord/update',                                   // 设备保养记录 - 更新设备信息
  maintain_DEVICE_delete: '/weix/equipmentMaintenanceRecord/delete',                                   // 设备保养记录 - 删除设备信息
  maintain_DEVICE_exportExcel: baseURL+'/weix/equipmentMaintenanceRecord/listExport',

  maintain_DEVICEBY_list: '/weix/equipmentMaintenanceRecord/wxby/list',                                // 设备保养记录 - 设备保养管理列表
  maintain_DEVICEBY_save: '/weix/equipmentMaintenanceRecord/wxby/save',                                // 设备保养记录 - 新增设备保养信息
  maintain_DEVICEBY_update: '/weix/equipmentMaintenanceRecord/wxby/update',                            // 设备保养记录 - 更新设备保养信息
  maintain_DEVICEBY_delete: '/weix/equipmentMaintenanceRecord/wxby/delete',                            // 设备保养记录 - 删除设备保养信息
  maintain_DEVICEBY_exportExcel: baseURL+'/weix/equipmentMaintenanceRecord/wxby/listExport',

  maintain_BBGL_SJBYTZ_list: '/weix/reportManagement/tertiaryMaintenanceAccount',                                // 报表管理 - 三级保养台账列表
  maintain_BBGL_SJBYTZ_exportExcel: baseURL+'/weix/reportManagement/tertiaryMaintenanceAccountExport',           // 报表管理 - 三级保养台账 导出excel
  maintain_BBGL_SJWHCL_list: '/weix/reportManagement/tertiaryMaintenanceMaterialUsage',                          // 报表管理 - 三级维护材料使用情况列表
  maintain_BBGL_SJWHCL_exportExcel: baseURL+'/weix/reportManagement/tertiaryMaintenanceMaterialUsageExport',     // 报表管理 - 三级维护材料使用情况 导出excel
  // **********        维修养护            *********** //



  // 运营管理
  fgsxcyb:'/yuny/fgsXcyb/getXcybList',   //分公司行车月报表列表
  exportFgsxcyb:'/yuny/fgsXcyb/exportXcybExcel',   //分公司行车月报表导出
  yyexportFgsxcyb:'/yuny/yybbtj/exportLineExcel',   //导出线路车次正点统计表
  getLineList:'/yuny/yybbtj/getLineList',   //导出线路车次正点统计表
  yyJtexportFgsxcyb:'/yuny/yybbtj/exportJthzExcel',   //导出各公司与集团汇总表
  getjthzList:'/yuny//yybbtj/getjthzList',   //导出各公司与集团汇总表



  // 计划管理
  jtgsList:'/erp-modules-jih/jtyyjh/getJtyyjhList',  ///集团公司运营计划管理
  yyjhtzList:'/erp-modules-jih/yyjhtz/getYyjhtzList',//运营计划调整列表
  saveYyjh:'/erp-modules-jih/yyjhtz/saveYyjhtz',//新增运营计划调整
  updateYyjh:'/erp-modules-jih/yyjhtz/updateYyjhtz',//修改运营计划调整
  fgssrjhList:'/erp-modules-jih/fsrjh/getFsrjhList',//分公司收入计划
  saveFgssrjh:'/erp-modules-jih/fsrjh/saveFsrjh',//分公司收入计划新增
  delFgssrjh:'/erp-modules-jih/fsrjh/deleteFsrjh',//分公司收入计划删除
  updateFgssrjh:'/erp-modules-jih/fsrjh/updateFsrjh',//分公司收入计划修改


  snjhList:'/erp-modules-jih/jtsrjh/getJtsrjhList',//市内公交总计划制定列表

  // 钢瓶检测
  gpjcList:'/weix/cylinderInspection/fysz/list',   //检测费用设定列表
  addFysd:'/weix/cylinderInspection/fysz/save',   //添加费用设定
  delFysd:'/weix/cylinderInspection/fysz/delete',   //删除费用设定
  updateFysd:'/weix/cylinderInspection/fysz/update',   //删除费用设定
  gpjcdj:'/weix/cylinderInspection/save',   //钢瓶检测登记 -----添加
  gpjcdjDel:'/weix/cylinderInspection/delete',   //钢瓶检测登记 -----删除
  gpjcdjList:'/weix/cylinderInspection/list',   //钢瓶检测登记 -----列表
  updateGpjcdj:'/weix/cylinderInspection/update',   //钢瓶检测登记 -----修改
  yfjcfyjs:'/weix/inspectionFeeSettlement/getMonthlyInspectionFee',   //月份检测费用结算
  jdjcfyjs:'/weix/inspectionFeeSettlement/getQuarterInspectionFee',   //季度检测费用结算列表
  yjcfydc:'/weix/inspectionFeeSettlement/getMonthlyInspectionFeeExport',   //月检测费用导出
  jdjcfydc:'/weix/inspectionFeeSettlement/getQuarterInspectionFeeExport',   //季度测费用导出
  gpjcxqList:'/weix/cylinderInspection/gpxq/list',   //钢瓶检测详情list
  gpjcxqDel:'/weix/cylinderInspection/gpxq/delete',   //钢瓶检测详情list删除
  gpjcxqSave:'/weix/cylinderInspection/gpxq/save',   //钢瓶检测详情list增加
  gpjcxqJQ:'/weix/cylinderInspection/gpxq/cz',   //加气换瓶
  gpjcxqJL:'/weix/cylinderInspection/gpxq/jl',   //操作记录


  // 服务管理
  tsqkfl:'/fuw/kfxx/tsqkflHzList',    //投诉情况分类表
  tsqkflExport:'/fuw/kfxx/exportTsqkflHzExcel',    //投诉情况分类表导出
  fgstsqkfl:'/fuw/kfxx/fgsTsqkflHzList',    //分公司投诉情况分类表
  fgstsqkflExport:'/fuw/kfxx/exportFgsTsqkflHzExcel',    //分公司投诉情况分类表导出
  kfxxtj:'/fuw/kfxx/tsxzbTjList',    //客服信息列表
  kfxxtjExport:'/fuw/kfxx/exportTsxzbTjExcel',    //客服信息列表

  kfxxList:'/fuw/kfxx/kfxxList',//客服信息列表
  savekfxx:'/fuw/kfxx/saveKfxx',//客服信息--新增
  daochukfxx:'/fuw/kfxx/exportKfxxExcel',//客服信息-导出
  dwclkfxx:'/fuw/kfxx/dwclkfxxList',//待我处理客服信息-导出
  plclkfxx:'/fuw/kfxx/updateBatchKfxx',//批量处理
  updatekfxx:'/fuw/kfxx/updateKfxx',//更新客服信息



  // 能源信息管理
  fgsdnList:'/nengy/Dnxxtj/getFgsdnxhList',  //分公司电能列表
  daochufgsdnList:'/nengy/Dnxxtj/exportFgsdnExcel',  //导出分公司电能列表
  fgstrq:'/nengy/Trqtj/getFrqtjList',  //分公司天然气
  daochufgstrq:'/nengy/Trqtj/exportFrqtjExcel',  //分公司天然气导出
  jttrq:'/nengy/Trqtj/getJtrqList',  //天然气月汇总
  daochujttrq:'/nengy/Trqtj/exportJtrqtjExcel',  //天然气月汇总--导出
  lljl:'/nengy/Lljl/getLljlList',  //领料记录
  savell:'/nengy/Lljl/save',  //新增领料
  updatell:'/nengy/Lljl/update',  //修改领料
  delll:'/nengy/Lljl/delete',  //删除领料
  daochull:'/nengy/Lljl/exportLljlExcel',  //领料导出
  jtdnList:'/nengy/Dnxxtj/getJtdnxhList',  //集团电能列表
  jtdnListdaochu:'/nengy/Dnxxtj/exportJtdnExcel',  //集团电能列表导出
};

export default NetworkInterface;
