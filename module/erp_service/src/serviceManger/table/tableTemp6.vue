<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  .container {
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #eae9ec;
    width: 98%;
    margin-left: 1%;
  }

  .container h2 {
    margin-left: 15px;
  }
  td{
    text-align: center;
    width: 120px;
    height: 40px;
  }
</style>
<template>
 <div>
   <div style="width: 100%;border: 0px solid red;display: flex;flex-direction: column;justify-content: center;align-items: center;">
     <div style="text-align: center">
       <span style="font-size: 17px;">包头市公交运输集团有限责任公司</span> <br>
       <span style="font-size: 17px;">稽查大队2018年4月经营业绩星级考核表</span>
     </div>
     <div style="width: 630px;display: flex;justify-content: space-between;margin-top: 15px;">
       <span>填报部门:企业管理部门</span>
       <span>填报日期：2018-10-10</span>
     </div>
     <table border="1" cellspacing="0" style="margin-top: 10px;width:630px">
       <tr>
         <td>指标名称</td>
         <td style="width: 10px;">目标值</td>
         <td>分值</td>
         <td style="width: 200px;">实际</td>
         <td>得分</td>
       </tr>
       <tr>
         <td>一、经费空置率</td>
         <td></td>
         <td>18</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>二、文明稽查</td>
         <td></td>
         <td>20</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>三、月运营车辆检查率</td>
         <td></td>
         <td>20</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>四、行车责任事故</td>
         <td></td>
         <td>15</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>五、行政管理</td>
         <td></td>
         <td>12</td>
         <td></td>
         <td rowspan="6"></td>
       </tr>
       <tr>
         <td>1、“四防”工作</td>
         <td></td>
         <td>4</td>
         <td></td>
       </tr>
       <tr>
         <td>2、现场管理</td>
         <td></td>
         <td>2</td>
         <td></td>
       </tr>
       <tr>
         <td>3、人力资源管理</td>
         <td></td>
         <td>3</td>
         <td></td>
       </tr>
       <tr>
         <td>4、基础管理</td>
         <td></td>
         <td>2</td>
         <td></td>
       </tr>
       <tr>
         <td>5、计划生育</td>
         <td></td>
         <td>1</td>
         <td></td>
       </tr>
       <tr>
         <td>七、党建工会工作</td>
         <td></td>
         <td>20</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td colspan="2">综合得分率（%）</td>
         <td>100</td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>工资总额考核</td>
         <td colspan="2">岗位档次工资标准</td>
         <td>星级级别</td>
         <td>星级工资标准</td>
       </tr>
       <tr>
         <td>领导班子正职（元）</td>
         <td colspan="2"></td>
         <td rowspan="2"></td>
         <td></td>
       </tr>
       <tr>
         <td>副职（元）</td>
         <td colspan="2"></td>
         <td></td>
       </tr>
       <tr>
         <td>备注</td>
         <td colspan="4"></td>
       </tr>
     </table>
     <div style="width: 630px;display: flex;justify-content: space-between;margin-top: 10px">
       <span>总经理：张三</span>
       <span>分管领导：张三</span>
       <span>部门负责人：张三</span>
       <span>制表：张三</span>
     </div>
   </div>
 </div>
</template>
<script>
  export default {
    data () {
      return {
        value1:1,
        formItem: {
          input: '',
          select: '',
          date: ''
        },
      }
    },
    methods: {}
  }
</script>
