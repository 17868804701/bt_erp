<!--设备保养记录-->

<template>

  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;margin-bottom: 15px;">
        <h2 style="margin-left: 15px;">
          设备维修保养记录
        </h2>
      </div>
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
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="data1" :columns="columns" border></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        formItem: {
          date: '',
        },
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
          },
          {
            title: '设备型号',
            key: 'sbxh',
            align: 'center',
          },
          {
            title: '养护日期',
            key: 'yhrq',
            align: 'center',
          },
          {
            title: '维修人员',
            key: 'wxry',
            align: 'center',
          },
          {
            title: '养护内容',
            key: 'yhnr',
            align: 'center',
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
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
                      this.clickAction(params, 'reset')
                    }
                  }
                }, '修改'),
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

    },
    mounted () {

    }
  }
</script>
