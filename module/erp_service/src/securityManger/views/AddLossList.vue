<!-- 追加事故经损说明管理-->
<template>
  <div>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
            <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="expertExcel">导出excel</Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
    <can-edit-table style="margin-top: 10px;" v-model="tableData" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
    </can-edit-table>
    <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
  </div>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import * as DateTool from '../../../utils/DateTool';
  export default {
    components:{
      canEditTable
    },
    data () {
      return {
        formItem: {
          date: '',
          current: 1,
          size: 10,
        },
        totalSize: 0,
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
        tableData: [],
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
        console.log(this.formItem.date);
      },
      setPage(page) {
        this.formItem.current = page;
        this.requestListData();
      },
      requestListData() {
        console.log('追加事故经损说明管理请求数据');
        console.log(this.formItem);
        this.$fetch(this.$url.security_ZJSGJSSM_list, this.formItem)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            if (res.data.length > 0) {
              this.tableData = res.data.records;
              this.totalSize = res.data.totalSize;
            }
          }else{
            this.$Message.error('数据获取失败, 请重试!');
          }
        })
      },
      expertExcel() {
        let url = this.$url.security_ZJSGJSSM_exportExcel;
        url = url + '?current='+this.formItem.current+'&&size='+this.formItem.size;
        if (this.formItem.date instanceof Date) {
          let firstDay = DateTool.getFirstDay(this.formItem.date);
          let lastDay = DateTool.getLastDay(this.formItem.date);
          url = url + '&&lasjStart=' + firstDay + '&&lasjEnd=' + lastDay;
        }
        window.open(url);
      }
    },
    mounted () {
    }
  }
</script>

