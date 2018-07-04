<template>
<div>
  <!--<router-link to="/addProgram">-->

  <!--</router-link>-->
  <Modal
    v-model="addProgram"
    title="新增计划"
    @on-ok="ok"
    width="80%"
    :mask-closable="false"
    :scrollable="true"
    style="height: 500px"
    @on-cancel="cancel">
  <addProgram></addProgram>
  </Modal>
  <Card>
    <Form :model="formItem" :label-width="80">
      <Row>
        <Col span="24">
        <FormItem label="按年份查询" style="margin: 0;">
          <DatePicker type="year" placeholder="Select date" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
          <Button type="primary" icon="ios-search">搜索</Button>
          <Button type="primary" icon="android-download" @click="addProgram=true" style="position: absolute;right: 110px;">新增计划</Button>
          <Button type="primary" icon="android-download" style="position: absolute;right: 0">导出excel</Button>
        </FormItem>
        </Col>
      </Row>
    </Form>
  </Card>
  <can-edit-table style="margin-top: 10px;" v-model="data10" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
  </can-edit-table>
  <!--<Table :columns="columns11" :data="data10" border height="515" size="small" style="margin-top: 20px;"></Table>-->
</div>
</template>
<script>
  import canEditTable from './canEditTable.vue';
  import addProgram from './addProgram.vue';
  export default {
      components:{
        canEditTable,
        addProgram
      },
    data () {
      return {
        addProgram:false,
        formItem: {
          select: '',
          date: ''
        },
        columns11: [
          {
            title: '年份',
            key: 'name',
            align: 'center',
            width: 100,
            fixed: 'left',
          },
          {
            title: '路线长度',
            key: 'age',
            align: 'center',
            width: 100,
            sortable: true
          },
          {
            title: '配车数',
            align: 'center',
            children: [
              {
                title: '班车',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '备用',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '合计',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
            ]
          },
          {
            title: '车次',
            align: 'center',
            children: [
              {
                title: '日车次',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '年度车次',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
            ]
          },

          {
            title: '运营里程',
            align: 'center',
            children: [
              {
                title: '日里程',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '年度里程',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
            ]
          },
          {
            title: '非运营里程',
            align: 'center',
            children: [
              {
                title: '出入库加气里程',
                key: 'age',
                align: 'center',
                width: 100,
//                sortable: true,
                children:[
                  {
                    title: '日出入库里程',
                    key: 'age',
                    align: 'center',
                    width: 100,
                    sortable: true
                  },
                  {
                    title: '年度里程',
                    key: 'age',
                    align: 'center',
                    width: 100,
                    sortable: true
                  },
                  {
                    title: '日加气里程',
                    key: 'age',
                    align: 'center',
                    width: 100,
                    sortable: true
                  },
                  {
                    title: '年度里程',
                    key: 'age',
                    align: 'center',
                    width: 100,
                    sortable: true
                  },
                  {
                    title: '小计',
                    key: 'age',
                    align: 'center',
                    width: 100,
                    sortable: true
                  }
                ]
              },
              {
                title: '备用车年度里程',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '合计',
                key: 'age',
                align: 'center',
                width: 100,
                sortable: true
              },
            ]
          },
          {
            title: '年度总里程',
            align: 'center',
          },
          {
            title: '出入库',
            key: 'gender1',
            align: 'center',
            width: 120,
            fixed: 'right',
            editable: true
          },
          {
            title: '加气台数',
            key: 'gender2',
            align: 'center',
            width: 100,
            fixed: 'right',
            editable: true
          },
          {
            title: '出入库说明',
            key: 'gender3',
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
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },
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
          name: '2018年',
          age: i + 1,
          street: 'Lake Park',
          building: 'C',
          door: 2035,
          caddress: 'Lake Street 42',
          cname: 'SoftLake Co',
          gender3: '这里是说明，可以修改的哦',
          gender2: i+25,
          gender1: '出入库',
        });
        this.data10 = data;
      }
    }
  }
</script>

