<!-- 追加事故经损说明管理-->
<template>
  <div>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search">搜索</Button>
            <Button type="primary" icon="android-download" style="position: absolute;right: 0">导出excel</Button>
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
            title: '追加事故经损说明管理',
            align: 'center',
            children: [
              {
                title: '序号',
                align: 'center',
                type: 'index',
                width: 100,
              },
              {
                title: '追加公司',
                key: 'zjgs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '路别',
                key: 'lb',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '车牌号',
                key: 'cph',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '驾驶员',
                key: 'jsy',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '事故日期',
                key: 'sgrq',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '预估经损',
                key: 'ygjs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '结案经损',
                key: 'jajs',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '追加车内',
                key: 'zjcn',
                align: 'center',
                width: 120,
                sortable: true,
              },
              {
                title: '追加车损、三者',
                key: 'zjcssz',
                align: 'center',
                width: 120,
                sortable: true,
              },
              {
                title: '合计追加',
                key: 'hjzj',
                align: 'center',
                width: 120,
                sortable: true,
              },
              {
                title: '追加扣分',
                key: 'zjkf',
                align: 'center',
                width: 120,
                sortable: true,
              },
            ]
          },
          {
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 220,
            sortable: true,
            fixed: 'right',
            editable: true
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
      }

    },
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          key: i,
          zjgs: '三公司',
          lb: '10路',
          cph: '蒙B75453',
          jsy: '潘玉龙',
          sgrq: '2017-03-24',
          ygjs: '9800',
          jajs: '17694',
          zjcn: '7894',
          zjcssz: '',
          hjzj: '7894',
          zjkf: '',
          bz: '这里可以编辑',
        });
        this.data10 = data;
      }
    }
  }
</script>

