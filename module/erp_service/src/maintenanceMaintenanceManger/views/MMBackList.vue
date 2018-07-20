<!--返修管理-->

<template>
  <div>
    <Modal
      v-model="backModal"
      title="新增返修记录"
      width="50%"
      @on-ok="confirmAddBack"
      @on-cancel="cancleAddBack">
      <div>
        <Form v-model="backItem" :label-width="90">
          <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <FormItem label="车号" style="margin-top: 0px;">
              <Input v-model="backItem.ch" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="车型" style="margin-top: 0px;">
              <Input v-model="backItem.cx" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="返修进厂时间" style="margin-top: 0px;">
              <Input v-model="backItem.jcsj" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="返修出厂时间" style="margin-top: 0px;">
              <Input v-model="backItem.ccsj" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="返修原因" style="margin-top: 0px;">
              <Input v-model="backItem.fxyy" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="备注" style="margin-top: 0px;">
              <Input v-model="backItem.bz" style="width:120px;"></Input>
            </FormItem>
          </div>
        </Form>
      </div>
    </Modal>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="queryItem">
          <Row>
            <Col span="24">
            <FormItem label="按返修进场时间查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="queryItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px" @click="backModal=true">新增</Button>
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
        // 车号、车型、返修进厂时间、返修出厂时间、返修项目以及返修原因、备注
        backModal: false,
        queryItem: {
          date: '',
        },
        backItem: {
          ch: '',
          cx: '',
          jcsj: '',
          ccsj: '',
          fxyy: '',
          bz: '',
        },
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '车号',
            key: 'ch',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
          },
          {
            title: '返修进厂时间',
            key: 'jcsj',
            align: 'center',
          },
          {
            title: '返修出厂时间',
            key: 'ccsj',
            align: 'center',
          },
          {
            title: '返修原因',
            key: 'fxyy',
            align: 'center',
          },
          {
            title: '备注',
            key: 'bz',
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
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
        ]
      }
    },
    computed: {

    },
    methods: {
      confirmAddBack() {
        console.log('确认添加返修记录');
      },
      cancleAddBack() {
        console.log('取消添加返修记录');
      },
      clickAction(params, type) {
        console.log('操作返修记录');
        console.log(params + type);
      }
    },
    mounted () {

    }
  }
</script>
