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
    height: 30px;
  }
</style>
<template>
  <div>
    <div class="container">
      <h2>星级评价</h2>
    </div>
    <Card style="margin-top: 10px;width: 98%;margin-left: 1%">
      <p slot="title">导出表格</p>
      <Form :model="formItem" :label-width="110">
        <div style="display: flex;flex-wrap: wrap">
          <FormItem label="请选择报表" style="margin: 0">
            <Select v-model="formItem.select" style="width:300px;">
              <Option v-for="(item, index) in allReportTitle" :key="item+index" :value="item">{{item}}</Option>
            </Select>
          </FormItem>
          <FormItem label="请选择时间" style="margin: 0">
            <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="eye" style="margin-left: 120px;" @click="requestReportData">查看预览</Button>
          <Modal
            v-model="modal1"
            width="700"
            title="预览表单">
            <TPL></TPL>
          </Modal>
          <Button type="primary" icon="android-download" style="margin-left: 10px;">导出表格</Button>
        </div>
      </Form>
    </Card>
    <Collapse style="width: 98%;margin-left: 1%;margin-top: 40px;">
      <Panel v-for="(item, index) in userPJList" :name="item+index" :key="item+index">
        {{item.tableTitle}}
        <table slot="content">
          <tr>
            <td style="width: 120px;">序号</td>
            <td style="width: 120px;">考核指标</td>
            <td style="width: 120px;">实际得分</td>
            <td style="width: 120px;">最高分值</td>
          </tr>
          <tr v-for="(subOption, subOptionIndex) in item.options.subOptions" :key="subOption+subOptionIndex">
            <td>{{subOptionIndex+1}}</td>
            <td>{{subOption.subOptionName}}</td>
            <td>
              <InputNumber v-model="subOption.score" :max="subOption.maxScore" :min="0" style="width: 50px"></InputNumber>&nbsp;&nbsp;分
            </td>
            <td>{{subOption.maxScore}}分</td>
          </tr>
          <tr>
            <td>
              <Button type="primary" icon="checkmark-circled" style="margin-left: 40px;" @click="commitPJWithReportIndex(index)">提交</Button>
            </td>
          </tr>
        </table>
      </Panel>
    </Collapse>

  </div>
</template>
<script>
  import XJPJData from './XJPJData.js';
  import TPL from './tableTemp.vue';
  import axios from 'axios';
  import * as DateTool from '../../utils/DateTool';
  export default {
    components: {
      TPL,
    },
    data () {

      return {
        modal1:false,
        value1:1,
        formItem: {
          select: '',
          date: ''
        },
//        XJPJ_QG_DATA: XJPJData.XJPJ_QG_DATA,
        userPJList: [], // 用户打分的所有选项
        allReportTitle: [], // 所有报表名称
        TPLData: [], // 预览报表的数据
      }
    },
    methods: {
      // 提交分数
      commitPJWithReportIndex(index) {
        let report = this.userPJList[index];
        let subOptionsArray = report.options.subOptions;
        let requestArray = [];
        subOptionsArray.forEach(subOption => {
          let params = {
            khMonth: 9,
            khYear: 2018,
            score: subOption.score,
            xmid: subOption.subOptionID,
          };
          console.log(params);
          let request = this.$post(this.$url.commitPFWithID, params);
          requestArray.push(request);
        })
        var that = this;
        axios.all(requestArray)
        .then(axios.spread(function(...res){
          console.log(...res);
          let statusArray = [];
          statusArray.push(...res);
          let status = true;
          statusArray.forEach(item => {
            if (item.success === false) {
              status = false;
              that.$Message.error('提交失败!');
              return;
            }
          })
          that.$Message.success('提交成功!');
          // 重新加载模板
          that.requestBaseData();
        }));
      },

      // 请求一张表的所有分值
      requestReportData() {

        if (typeof this.formItem.date === 'date' || this.formItem.date === null || this.formItem.date === '') {
          this.$Message.error('请先选择时间, 再进行操作!');
          return;
        }

        if (this.formItem.select === '' || this.formItem.select.length <= 0) {
          this.$Message.error('请选择要操作的报表!');
          return;
        }

        let year = this.formItem.date.getFullYear();
        let month = this.formItem.date.getMonth()+1;
        let params = {
          tableTitle : this.formItem.select,
          khYear: year,
          khMonth: month,
        };
        debugger;
        this.$fetch(this.$url.getReportData, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.TPLData = res.data;
            this.modal1=true;
          }else{
            this.$Message.error('获取数据失败, 请重试!');
          }
        })
      },

      // 请求当前用户的所有报表的打分选项
      requestBaseData() {
        var that = this;
        this.$fetch(this.$url.getUserPFList)
        .then(res => {
          if (res.success === true) {
            let dataArray = res.data;
            dataArray.forEach(item => {
              that.allReportTitle.push(item.tableTitle);
              item.options.subOptions.forEach(subOptions => {
                subOptions.score = 0; // 给每条数据增加一个用来双向绑定的分值
              })
            })
            that.userPJList = dataArray;
            console.log(dataArray);
          }else{
            this.$Message.error('加载配置数据失败!');
          }
        })
      }
    },
    mounted() {
      this.requestBaseData();
    }
  }
</script>
