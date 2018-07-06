<!-- 集团公司事故情况月汇总表-->
<template>
  <div>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按月查询" style="margin: 0;">
            <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search">搜索</Button>
            <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
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
  import canEditTable from '../../components/common/canEditTable.vue'
  export default {
    components:{
      canEditTable
    },
    data () {
      return {
        formItem: {
          select: '',
          date: ''
        },
        columns11: [
          {
            title: '集团公司事故情况月汇总表',
            align: 'center',
            children: [
              {
                title: '序号',
                align: 'center',
                type: 'index',
                width: 100,
              },
              {
                title: '单位',
                key: 'dw',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '牌照',
                key: 'pz',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '自编号',
                key: 'zbh',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '路别',
                key: 'lb',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '时间',
                key: 'sj',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '地点',
                key: 'dd',
                align: 'center',
                width: 200,
                sortable: true
              },
              {
                title: '姓名',
                key: 'xm',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '报案人',
                key: 'bar',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '事故属性',
                key: 'sgsx',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '事故性质',
                key: 'sgxz',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '立案日期',
                key: 'larq',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '勘察人',
                key: 'kcr',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '立案',
                key: 'la',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '估损',
                align: 'center',
                children: [
                  {
                    title: '公积金车损',
                    key: 'gjj_cs',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '公积金车内',
                    key: 'gjj_cn',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '公积金三者',
                    key: 'gjj_sz',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '公积金定损金额合计',
                    key: 'gjj_hj',
                    align: 'center',
                    width: 180,
                    sortable: true
                  },
                  {
                    title: '交强险损失',
                    key: 'jqxss',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '事故总损失',
                    key: 'sgzss',
                    align: 'center',
                    width: 120,
                    sortable: true
                  },
                  {
                    title: '责任',
                    key: 'zr',
                    align: 'center',
                    width: 120,
                  },
                ]
              },
            ]
          },
          {
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 220,
            fixed: 'right',
            editable: true
          }
        ],
        data10: []
      }
    },
    methods:{
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      }

    },
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          key: i,
          dw: '单位' + i,
          pz: '蒙A123456',
          zbh: '1-2262',
          lb: '706路',
          sj: '2018-09-10',
          dd: '南门外环岛处',
          xm: '阿黄',
          bar: '阿黄',
          sgsx: '三者',
          sgxz: '较大事故',
          larq: '2018-09-10',
          kcr: '小谢',
          la: '立案',
          gjj_cs: '5万元',
          gjj_cn: '5万元',
          gjj_sz: '5万元',
          gjj_hj: '15万元',
          jqxss: '2万元',
          sgzss: '17万元',
          zr: '我方司机责任',
          bz: '这里是备注，可以修改的哦',
        });
        this.data10 = data;
      }
    }
  }
</script>
