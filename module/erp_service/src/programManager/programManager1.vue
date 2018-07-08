<template>
  <div style="padding: 20px;">
    <div style="padding: 10px;border-bottom: 1px solid #e9eaec">
    <h2>运营计划调整管理</h2>
    </div>
    <Card style="margin-top: 10px;">
      <Form :model="formItem" :label-width="80">
          <div style="display: flex;align-items: center">
            <FormItem label="按年份查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            </FormItem>
            <FormItem label="线路" style="margin: 0;">
              <Select v-model="formItem.select" style="width: 195px;">
                <Option value="beijing">1路</Option>
                <Option value="shanghai">2路</Option>
                <Option value="shenzhen">3路</Option>
              </Select>
            </FormItem>
            <FormItem label="公司" style="margin: 0;">
              <Select v-model="formItem.select" style="width: 195px;">
                <Option value="beijing">1公司</Option>
                <Option value="shanghai">2公司</Option>
                <Option value="shenzhen">3公司</Option>
              </Select>
            </FormItem>
            <div style="margin-left: 20px;margin-top:1px;">
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="position: absolute;right: 130px;top:17px" @click="addyyProgram=true">新增计划</Button>
              <Button type="primary" icon="android-download" style="position: absolute;right: 10px;top:17px">导出excel</Button>
            </div>
            <Modal
              v-model="addyyProgram"
              title="新增计划"
              width="80%"
              :mask-closable="false"
              :scrollable="true"
              style="height: auto">
              <addyyProgram></addyyProgram>
            </Modal>
            <!--时间（年月日）、公司、配车数（包括班车、备用）、日车次、路线长度、出入库和加气台数、出入库说明-->

            <Modal
              v-model="editZd"
              title="修改部分字段"
              width="50%"
              :mask-closable="false"
              :scrollable="true"
              style="height: auto"
            >
              <Form :model="formItem" :label-width="90">
                <div style="display: flex;flex-wrap: wrap">
                  <FormItem label="年份">
                    <DatePicker type="year" placeholder="选择年份" style="width: 195px;" v-model="formItem.date"></DatePicker>
                  </FormItem>
                  <FormItem label="公司">
                    <Select v-model="formItem.select" style="width: 195px;">
                      <Option value="beijing">1公司</Option>
                      <Option value="shanghai">2公司</Option>
                      <Option value="shenzhen">3公司</Option>
                    </Select>
                  </FormItem>

                  <FormItem label="日车次">
                    <Input v-model="formItem.input" placeholder="日车次" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="合计">
                    <Input v-model="formItem.input" placeholder="合计" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="日车次">
                    <Input v-model="formItem.input" placeholder="日车次" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="路线长度">
                    <Input v-model="formItem.input" placeholder="路线长度" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="出入库">
                    <Input v-model="formItem.input" placeholder="出入库" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="加气台数">
                    <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="班车数">
                    <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="备用车数">
                    <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="出入库说明">
                    <Input v-model="formItem.textarea" style="width: 32vw" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="出入库说明"></Input>
                  </FormItem>
                </div>
              </Form>
            </Modal>
          </div>
      </Form>
    </Card>
    <can-edit-table style="margin-top: 10px;" v-model="data10" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
    </can-edit-table>
    <!--<Table :columns="columns11" :data="data10" border height="515" size="small" style="margin-top: 20px;"></Table>-->
  </div>
</template>
<script>
  import canEditTable from './canEditTable.vue';
  import addyyProgram from './addyyProgram.vue';
  export default {
    components:{
      canEditTable,
      addyyProgram
    },
    data () {
      return {
        addyyProgram:false,
        editZd:false,
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
//            fixed: 'left',
          },
          {
            title: '路别',
            key: 'lb',
            align: 'center',
            width: 100,
//            fixed: 'left',
          },
          {
            title: '公司',
            key: 'gs',
            align: 'center',
            width: 100,
//            fixed: 'left',
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
//            fixed: 'right',
//            editable: true
          },
          {
            title: '加气台数',
            key: 'gender2',
            align: 'center',
            width: 100,
//            fixed: 'right',
//            editable: true
          },
          {
            title: '出入库说明',
            key: 'gender3',
            align: 'center',
            width: 220,
//            fixed: 'right',
//            editable: true
          },
          {
            title: '操作',
            align: 'center',
            width: 220,
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editZd=true
                    }
                  }
                }, '修改部分字段'),
              ]);
            }
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
      for (let i = 1; i < 10; i++) {
        data.push({
          gs:'公交'+i+'公司',
          key: i,
          lb:'1'+i+'2',
          name: '2018年',
          age: i + 1,
          street: 'Lake Park',
          building: 'C',
          door: 2035,
          caddress: 'Lake Street 42',
          cname: 'SoftLake Co',
          gender3: '这里是说明，可以修改的哦',
          gender2: '20',
          gender1: '出入库',
        });
        this.data10 = data;
      }
    }
  }
</script>
