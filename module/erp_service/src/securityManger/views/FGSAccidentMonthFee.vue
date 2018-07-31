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
    <can-edit-table style="margin-top: 10px;" v-model="data10" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
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
          date: ''
        },
        columns11: [
          {
            title: '2018年3月交通事故报表',
            align: 'center',
            children: [
              {
                title: '单位/项目',
                key: 'dwxm',
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
                    key: 'sg_td',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '重大事故',
                    key: 'sg_zd',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '较大事故',
                    key: 'sg_jd',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '一般事故',
                    key: 'sg_yb',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '一级轻微',
                    key: 'sg_yjqw',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '二级轻微',
                    key: 'sg_ejqw',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '三级轻微',
                    key: 'sg_sjqw',
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
                key: 'js_hzj',
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
                title: '本年累计考核事故',
                key: 'bnljkhsg',
                align: 'center',
                width: 120,
                sortable: true,
              },
            ]
          },
        ],
        data10: [],
        dwList: ['集团公司', '一公司', '二公司', '三公司', '四公司', '五公司', '六公司', '长客公司', '吉运公司', '修理公司', '票款中心', '稽查大队', '大自然', '站管', '培训中心'],
      }
    },
    methods:{
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      searchData() {
        if (isNaN(this.formItem.date)&&!isNaN(Date.parse(this.formItem.date))) {
          console.log('_______++++++____');

          console.log(this.formItem);
        }

        let date = this.formatDate(this.formItem.date);
        console.log(date);
        // 请求数据
        console.log('_____________________');
        let firstDay = DateTool.getFirstDay(this.formItem.date);
        let lastDay = DateTool.getLastDay(this.formItem.date);
      },
      exportExcel() {
        // 按当前月份查询下载
        let url = this.$url.security_GFGSJTSG_exportExcel;
        window.open(url);
      },
      formatDate(time) {
        let date =  new Date(time);
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },
    },
    mounted () {
      const data = [];
      for (let i = 0; i < 14; i++) {
        data.push({
          key: i,
          dwxm: this.dwList[i],
          yylc: '9727839',
          xczrsgcs: '6',
          sg_td: '0',
          sg_zd: '0',
          sg_jd: '0',
          sg_yb: '0',
          sg_yjqw: '0',
          sg_ejqw: '3',
          sg_sjqw: '3',
          sgswrs: '0',
          sgssrs: '11',
          sgpl: '0.62',
          js_hzj: '718184',
          jsl: '738.28',
          bnljkhsg: '24',
        });
        this.data10 = data;
      }
    }
  }
</script>

