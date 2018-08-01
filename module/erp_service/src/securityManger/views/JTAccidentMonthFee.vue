<!-- 集团公司事故情况月汇总表-->
<template>
  <div>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按月查询" style="margin: 0;">
            <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
            <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出Excel</Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
    <can-edit-table style="margin-top: 10px;" v-model="tableData" :columnsList="initTableColumns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
    </can-edit-table>
    <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
  </div>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue';
  import * as DateTool from '../../../utils/DateTool';
  export default {
    components:{
      canEditTable
    },
    data () {
      return {
        formItem: {
          date: '',
          lasjStart: '',
          lasjEnd: '',
        },
        columnsTitle: ['牌照','单位','自编号', '路别', '立案时间', '地点', '驾驶员姓名', '报案人', '事故属性', '事故性质', '立案日期', '勘查人', '立案类型', '责任','备注'],
        columnsCode: ['pz','dw','zbh','lb','lasj','dd','jsyxm','bar','sgsx','sgxz','larq','kcr','lalx','zr','bz'],
        gsColumnsTitle: ['公积金车损', '公积金车内', '公积金三者', '公积金定损金额合计', '交强险损失', '事故总损失'],
        gsColumnsCode: [ 'gjjcs', 'gjjcn', 'gjjsz', 'gjjhj', 'jqxss', 'sgzss'],
        data10: [],
        tableData: [],
        totalSize: 0,
        current: 1,
        size: 10,
      }
    },
    computed: {
      initTableColumns() {
        let coulumns = [];
        for (let i = 0; i < this.columnsTitle.length; i++) {
          coulumns.push({
            title: this.columnsTitle[i],
            key: this.columnsCode[i],
            width: 120,
            align: 'center'
          });
        }
        let gsCoulumns = [];
        for (let i = 0; i < this.gsColumnsTitle.length; i++) {
          gsCoulumns.push({
            title: this.gsColumnsTitle[i],
            key: this.gsColumnsCode[i],
            width: 120,
            align: 'center',
            sortable: true
          });
        }
        coulumns.push({
          title: '估损',
          align: 'center',
          children: gsCoulumns
        });
        let newColumns = [
          {
            title: '集团公司立案事故月汇总表',
            align: 'center',
            children: coulumns,
          }
        ];
        return newColumns;
      },
    },
    methods:{
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      requestListData() {
        console.log('请求集团公司数据');
        let params = {
          current: this.current,
          size: this.size,
          lasjStart: this.formItem.lasjStart,
          lasjEnd: this.formItem.lasjEnd
        }
        console.log(params);
        this.$fetch(this.$url.security_LASG_list, params)
        .then(res => {
          console.log(res);
          this.tableData = res.data.records;
          this.totalSize = res.data.total;
          this.current = res.data.current;
        })
      },
      setPage(page) {
        this.searchOptions.current = page;
        this.requestListData();
      },
      searchData() {
        if (this.formItem.date instanceof Date) {
          console.log(this.formItem);
          let firstDay = DateTool.getFirstDay(this.formItem.date);
          let lastDay = DateTool.getLastDay(this.formItem.date);
          this.formItem.lasjStart = firstDay;
          this.formItem.lasjEnd = lastDay;
          this.current = 1;
          this.requestListData();

        }else{
          this.$Message.error('请选择月份后搜索!');
        }
      },
      exportExcel() {
        let url = this.$url.security_JTGSSGHZ_exportExcel;
        if (this.formItem.date instanceof Date) {
          let firstDay = DateTool.getFirstDay(this.formItem.date);
          let lastDay = DateTool.getLastDay(this.formItem.date);
          url = url + '&&lasjStart=' + firstDay + '&&lasjEnd=' + lastDay;
        }
        this.$getExcel(url);
      },
    },
    mounted () {
    }
  }
</script>
