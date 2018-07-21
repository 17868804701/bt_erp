<!--设备保养记录-->

<template>

  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;margin-bottom: 15px;">
        <h2 style="margin-left: 15px;">
          设备维修保养记录
        </h2>
      </div>
      <Modal
        v-model="addModal"
        title="新增设备保养记录"
        width="50%"
        @on-ok="confirmAddDevice"
        @on-cancel="cancleAddDevice">
        <div>
          <Form v-model="deviceItem" :label-width="90">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem label="设备名称:" style="margin-top: 0px;">
                <Input v-model="deviceItem.device_time" style="width:120px;"></Input>
              </FormItem>
              <FormItem label="设备型号:" style="margin-top: 0px;">
                <Input v-model="deviceItem.sbxh" style="width:120px;"></Input>
              </FormItem>
              <FormItem label="养护日期:" style="margin-top: 0px;">
                <Input v-model="deviceItem.yhrq" style="width:120px;"></Input>
              </FormItem>
              <FormItem label="维修人员:" style="margin-top: 0px;">
                <Input v-model="deviceItem.wxry" style="width:120px;"></Input>
              </FormItem>
              <FormItem label="养护内容:" style="margin-top: 0px;">
                <Input v-model="deviceItem.yhnr" style="width:120px;"></Input>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按养护日期查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                          v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download"
                      style="float: right;margin-right: 10px">导出Excel
              </Button>
              <Button type="primary" icon="plus"
                      style="float: right;margin-right: 10px" @click="addModal=true">新增
              </Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <can-edit-table style="margin-top: 10px;" v-model="data1" :columnsList="columns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
      </can-edit-table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  export default {
    components: {
      canEditTable
    },
    data () {
      return {
        formItem: {
          date: '',
        },
        deviceItem: {
          device_time: '叉车',
          sbxh: '3T',
          yhrq: '2018-02-01',
          wxry: '王松',
          yhnr: '更换机油'
        },
        addModal: false,
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '设备名称',
            key: 'device_time',
            align: 'center',
            editable: true
          },
          {
            title: '设备型号',
            key: 'sbxh',
            align: 'center',
            editable: true
          },
          {
            title: '养护日期',
            key: 'yhrq',
            align: 'center',
            editable: true
          },
          {
            title: '维修人员',
            key: 'wxry',
            align: 'center',
            editable: true
          },
          {
            title: '养护内容',
            key: 'yhnr',
            align: 'center',
            editable: true
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.clickAction(params, 'delete')
                    }
                  }
                }, '删除')
              ]);
            }
          },
        ],
        data1: [
          {
            device_time: '叉车',
            sbxh: '3T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '2T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '5T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '10T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '叉车',
            sbxh: '3T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '2T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '5T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
          {
            device_time: '铲车',
            sbxh: '10T',
            yhrq: '2018-02-01',
            wxry: '王松',
            yhnr: '更换机油'
          },
        ]
      }
    },
    computed: {

    },
    methods: {
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      confirmAddDevice() {
        console.log('确认添加设备维修记录');
      },
      cancleAddDevice() {
        console.log('取消添加设备维修记录');
      },
    },
    mounted () {

    }
  }
</script>
