/**
 * Created by qismsom on 2018/7/24.
 */

const NetworkInterface = {
  userManager_userList: '/person/userInfo/list', // 人力资源管理列表
  userManager_saveUserInfo: '/person/userInfo/save', // 保存人员信息
  userManager_updateUserInfo: '/person/userInfo/update', // 更新人员信息
  userManager_exportExcel: '/person/userInfo/exportExcel', //导出员工信息
  userManager_importExcel: '/person/userInfo/importExcel', // 导入员工信息
  userManager_userChangeList: '/person/userInfo/getHis', // 员工变更记录
  userManager_counts: '/person/userInfo/getCount', // 员工数据统计
  
};

export default NetworkInterface;
