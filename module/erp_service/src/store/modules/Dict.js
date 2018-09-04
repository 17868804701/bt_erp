/**
 * Created by qismsom on 2018/8/24.
 */
import {post,fetch,patch,put,getExcel} from '../../../utils/http';
// 当前用户权限
const Dict = {
  state: {
    parseDict: {},
    allDict: {},
  },
  mutations: {
    getAllDict(state){
      fetch(process.env.BASE_URL+'/auth/dic/getAllByCode')
      .then(res => {
    
        debugger;
        // 用于解析数据
        let dict = {};
        res.data.forEach(item => {
      
          let subDict = {};
          item.children.forEach(subItem => {
        
            if (subItem.children.length > 0) { // 如果还有子项
          
              let subsubDict = {};
              subItem.children.forEach(subsubItem => {
                subsubDict[subsubItem.code] = subsubItem.title;
              })
              subDict[subItem.code] = subsubDict;
          
            }else{ // 没有
              subDict[subItem.code] = subItem.title;
            }
        
          })
      
          dict[item.code] = subDict;
        });
        state.parseDict = dict;
    
        // 用于commonselect
        let allDict = {};
        res.data.forEach(item => {
          allDict[item.code] = item.children;
        })
        state.allDict = allDict;
    
        debugger;
    
      })
    },
  }
}

export default Dict;
