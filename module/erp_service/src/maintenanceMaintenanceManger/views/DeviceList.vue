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
            <FormItem label="按录入时间查询" style="margin: 0;">
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
      <Table style="margin-top: 10px;" :data="data1" :columns="columns"></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  import DeviceDetail from '../components/DeviceDetail.vue'
  export default {
    components: {
      DeviceDetail,
    },
    data () {
      return {
        formItem: {
          date: '',
        },
        columns: [
          {
            type: 'expand',
            width: 60,
            align: 'center',
            render: (h, params) => {
              return h(DeviceDetail, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: '车辆编号',
            key: 'car_no',
            width: 90,
            align: 'center',
          },
          {
            title: '车牌号码',
            key: 'car_num',
            width: 90,
            align: 'center',
          },
          {
            title: '所属组织',
            key: 'org_own',
            width: 120,
            align: 'center',
          },
          {
            title: '线路',
            key: 'line',
            width: 90,
            align: 'center',
          },
          {
            title: '计划保养时间',
            key: 'expect_time',
            width: 120,
          },
          {
            title: '实际保养时间',
            key: 'fact_time',
            width: 120,
            align: 'center',
          },
          {
            title: '保养类型',
            key: 'maintain_type',
            width: 90,
            align: 'center',
          },
          {
            title: '是否执行',
            key: 'isperform',
            width: 90,
            align: 'center',
          },
          {
            title: '完成情况',
            key: 'progress',
            width: 220,
            render: (h, params) => {

              const row = params.row;
              let text = row.progress + '%';
              let color = '#2d8cf0';
              if (row.progress <= 100 && row.progress > 80) {
                color = '#2d8cf0';
                text = text + '已完成, 设备状态良好';
              } else if (row.progress <= 80 && row.progress >= 60) {
                color = '#ff9900';
                text = text + '已处理, 设备状态一般';
              } else {
                color = '#ed3f14';
                text = text + '已处理, 设备问题严重';
              }
              return h('Tag', {
                props: {
                  color: color,
                }
              }, (text));
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
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
            car_type: '叉车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 100,
            memo: '正常完成',
            worker: '王松',
          },
          {
            car_type: '客车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 80,
            memo: '因设备原因, 胎压未能正常检测, 其余部分完成!',
            worker: '王松',
          },
          {
            car_type: '23座客车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 100,
            memo: '正常完成',
            worker: '王松',
          },
          {
            car_type: '17座客车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 40,
            memo: '设备零件严重损坏, 需要更换',
            worker: '王松',
          },
          {
            car_type: '17座客车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 100,
            memo: '正常完成',
            worker: '王松',
          },
          {
            car_type: '17座客车',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 100,
            memo: '正常完成',
            worker: '王松',
          },
          {
            car_type: '双层公交',
            car_no: 'LT0021558627',
            car_num: '蒙A85624',
            org_own: '公交三公司',
            line: '教育专线',
            expect_time: '2018-03-03',
            expect_time_d: '2018-03-03 12:00',
            fact_time : '2018-04-09',
            fact_time_d: '2018-04-09 10:49',
            maintain_type: '一级保养',
            isperform: '是',
            progress: 100,
            memo: '正常完成',
            worker: '王松',
          },
        ]
      }
    },
    computed: {
      initTableColumns() {
        let coulumns = [
          {
            title: '牌照',
            key: 'pz',
            width: 150,
          },
        ];
        for (let i = 0; i < this.columnsTitle.length; i++) {
          coulumns.push({
            title: this.columnsTitle[i],
            key: this.columnsCode[i],
            width: 120,
            sortable: true
          });
        }

        let newColumns = [
          {
            title: '集团公司立按事故表',
            align: 'center',
            children: coulumns,
          }
        ];

        newColumns.push({
          title: '操作',
          key: 'action',
          width: 250,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.showDetail(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.lossModal = true;
                  }
                }
              }, '追加经损'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delete(params.index)
                  }
                }
              }, '删除'),
            ]);
          }
        });

        return newColumns;
      },
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
