<!--交通事故月报表-->
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
    <can-edit-table style="margin-top: 10px;" v-model="tableData" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
    </can-edit-table>
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
          date: this.initDate(),
        },
        columns11: [
          {
            title: '2018年3月交通事故报表',
            align: 'center',
            children: [
              {
                title: '单位/项目',
                key: 'dw',
                align: 'center',
                width: 120,
              },
              {
                title: '运营里程(百万公里)',
                key: 'yylc',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '行车责任事故次数',
                key: 'xczrsgcs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '责任事故次数, 其中:',
                align: 'center',
                children: [
                  {
                    title: '特大事故',
                    key: 'tdsg',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '重大事故',
                    key: 'zdsg',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '较大事故',
                    key: 'jdsg',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '一般事故',
                    key: 'ybsg',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '一级轻微',
                    key: 'yjqw',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '二级轻微',
                    key: 'ejqw',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '三级轻微',
                    key: 'sjqw',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                ]
              },
              {
                title: '事故死亡人数',
                key: 'sgswrs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '事故受伤人数',
                key: 'sgssrs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '事故频率(次/百万公里)',
                key: 'sgpl',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '经损(含追加)(元)',
                key: 'js',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '经损率(元/万公里)',
                key: 'jsl',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '本月累计考核事故',
                key: 'bykhsgSum',
                align: 'center',
                width: 120,
                sortable: true,
              },
            ]
          },
        ],
        tableData: [],
      }
    },
    methods:{
      initDate() {
        let now = new Date();
        return now;
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      requestListData() {
        console.log('请求分公司数据');
        let params = {
          time: DateTool.yyyyddFormatDate(this.formItem.date)
        }
        console.log(params);
        this.$fetch(this.$url.security_GFGSJTSG_list, params)
        .then(res => {
          console.log('----------');
          console.log(res);
          if (res.success === true) {
            if (res.data.length > 0) {
              this.tableData = res.data;
            }
          }else{
            this.$Message.error('数据获取失败, 请重试!');
          }
        })
      },
      searchData() {
        if (this.formItem.date instanceof Date) {
          let firstDay = DateTool.getFirstDay(this.formItem.date);
          let lastDay = DateTool.getLastDay(this.formItem.date);
          this.formItem.lasjStart = firstDay;
          this.formItem.lasjEnd = lastDay;
          this.requestListData();
        }else{
          this.$Message.error('请选择月份后搜索!');
        }
      },
      exportExcel() {
        // 按当前月份查询下载
        let url = this.$url.security_GFGSJTSG_exportExcel;
        if (this.formItem.date instanceof Date) {
          let date = this.formatDate(this.formItem.date);
          let firstDay = DateTool.getFirstDay(this.formItem.date);
          let lastDay = DateTool.getLastDay(this.formItem.date);
          url = url + '?startTime=' + firstDay + '&&endTime=' + lastDay;
        }
        this.$getExcel(url);
      },
    },
    mounted () {
    }
  }
</script>

