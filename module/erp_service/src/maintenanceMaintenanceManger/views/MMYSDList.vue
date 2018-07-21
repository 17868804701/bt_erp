<!--检验单管理-->

<template>
  <div>
    <Modal
      v-model="showDetailModal"
      title="查看验收项目"
      width="50%"
      @on-ok="showDetailModal = false"
      @on-cancel="showDetailModal = false">
      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <div v-for="(item, itemIndex) in showDetailItem" :key="item+itemIndex">
          <Tooltip v-for="(subItem, subItemIndex) in item.subItems" :key="subItem+subItemIndex">
            <div slot="content">{{item.title}}</div>
            <Tag style="margin-bottom: 10px;margin-right: 20px;" type="dot" color="green">{{subItem}}</Tag>
          </Tooltip>
        </div>
      </div>
    </Modal>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="queryItem">
          <Row>
            <Col span="24">
            <FormItem label="按验收时间进行查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="queryItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
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
        //         // 车号、车型、报修人、承修人、验收项目、是否合格、验收时间、检验员

        showDetailModal: false,
        queryItem: {
          date: '',
        },
        showDetailItem: [],
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
            title: '报修人',
            key: 'bxr',
            align: 'center',
          },
          {
            title: '验收时间',
            key: 'yssj',
            align: 'center',
          },
          {
            title: '检验员',
            key: 'jyy',
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
                      this.showDetail(params.row);
                    }
                  }
                }, '查看验收项目')
              ]);
            }
          },
        ],
        data1: [
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            bxr: '小黄',
            cxr: '小黄',
            sfhg: '合格',
            yssj: '2018-07-07',
            jyy: '小黄',
            ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
          },
        ]
      }
    },
    computed: {

    },
    methods: {
      showDetail(row) {
        console.log('查看验收项目' + row);
        this.showDetailItem = row.ysxm;
        this.showDetailModal = true;
      }
    },
    mounted () {

    }
  }
</script>
