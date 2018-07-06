<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">天然气汇总管理</h2>
      <Tabs value="name1">
        <TabPane label="分公司天然气汇总" name="name1">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <div style="display: flex;width: 100%">
                  <FormItem label="公司" style="margin: 0">
                    <Select v-model="formItem.select" style="width: 195px;">
                      <Option value="beijing">公交一公司</Option>
                      <Option value="shanghai">公交二公司</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="按年份查询" style="margin: 0;">
                    <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                                v-model="formItem.date"></DatePicker>
                    <Button type="primary" icon="ios-search">搜索</Button>

                  </FormItem>
                  <Button type="primary" icon="android-download"
                          style="right: 0;position: absolute;margin-top: 1px;margin-left: 50px;">导出Excel
                  </Button>
                </div>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table :columns="columns11" :data="data10" ref="selection" border height="500" style="margin-top: 20px;"
                 size="small"></Table>
          <Page :total="100" show-total style="margin-top: 10px;"></Page>
          <Modal
            v-model="modal1"
            width="415px;"
            title="修改">
            <div style="margin-left: 20px;">
              <Form :model="formItem" :label-width="90">
                <div style="display: flex;flex-wrap: wrap">
                  <FormItem label="线路">
                    <Select v-model="formItem.select" style="width: 195px;">
                      <Option value="beijing">1路</Option>
                      <Option value="shanghai">2路</Option>
                      <Option value="shenzhen">3路</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="数量">
                    <Input v-model="formItem.input" placeholder="数量" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="实际价格">
                    <Input v-model="formItem.input" placeholder="单价" style="width: 195px;"/> <span
                    style="color: red;margin-left: 5px;">*单价</span> <br>
                    <Input v-model="formItem.input" placeholder="金额" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*金额</span>
                  </FormItem>
                  <FormItem label="计划价格">
                    <Input v-model="formItem.input" placeholder="单价" style="width: 195px;"/><span
                    style="color: red;margin-left: 5px;">*单价</span> <br>
                    <Input v-model="formItem.input" placeholder="金额" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*金额</span>
                  </FormItem>
                  <FormItem label="备注">
                    <Input v-model="formItem.input" placeholder="备注" style="width: 195px;"/>
                  </FormItem>
                </div>
              </Form>
            </div>
          </Modal>
        </TabPane>
        <TabPane label="天然气月终汇总" name="name2">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按年份查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
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
          <Table :columns="columns12" :data="data12" ref="selection" border height="500" style="margin-top: 20px;"
                 size="small"></Table>
          <Page :total="100" show-total style="margin-top: 10px;"></Page>
          <Modal
            v-model="modal2"
            width="415px;"
            title="修改">
            <div style="margin-left: 20px;">
              <Form :model="formItem" :label-width="90">
                <div style="display: flex;flex-wrap: wrap">
                  <FormItem label="二级单位">
                    <Select v-model="formItem.select" style="width: 195px;">
                      <Option value="beijing">一公司</Option>
                      <Option value="shanghai">二公司</Option>
                      <Option value="shenzhen">三公司</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="中燃">
                    <Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span
                    style="color: red;margin-left: 5px;">*气量</span> <br>
                    <Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*实际价</span>
                    <Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*计划价</span>
                  </FormItem>
                  <FormItem label="汇通">
                    <Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span
                    style="color: red;margin-left: 5px;">*气量</span> <br>
                    <Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*实际价</span>
                    <Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*计划价</span>
                  </FormItem>
                  <FormItem label="合计">
                    <Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span
                    style="color: red;margin-left: 5px;">*气量</span> <br>
                    <Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*实际价</span>
                    <Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span
                    style="color: red;margin-left: 5px;">*计划价</span>
                  </FormItem>
                </div>
              </Form>
            </div>
          </Modal>
        </TabPane>
      </Tabs>
    </div>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        formItem: {
          date: '',
          input: '',
          textarea: '',
          select: ''
        },
//        车号、车型、物品名称（轮胎、润滑油）、领料数量、领料规格、供货单位、品牌型号、规格、计量单位、单价、金额、附记、状态（采购、下派）
        columns11: [
          {
            title: '公交二公司 2018年4月天然气汇总表',
            align: 'center',
            children: [
              {
                title: '使用单位：',
                key: 'ch',
                align: 'center',
                width: 100,
                children: [
                  {
                    title: '线路',
                    key: 'xl',
                    align: 'center',
                    width: 100,
                  },
                  {
                    title: '单位',
                    key: 'dw',
                    align: 'center',
                    width: 100,
                  },
                  {
                    title: '数量',
                    key: 'sl',
                    align: 'center',
                    width: 100,
                  },
                ]
              },
              {
                title: '实际价格',
                key: 'sjjg',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '单价',
                    key: 'dj',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '金额',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '计划价格',
                key: 'jhjg',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '单价',
                    key: 'dj',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '金额',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '备注',
                key: 'bz',
                align: 'center',
                width: 150,
              }, {
                title: '操作',
                key: 'zt',
                align: 'center',
//            fixed: 'right',
                width: 220,
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
                          this.modal1 = true
                        }
                      }
                    }, '查看详情  /  修改'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          alert("删除成功")
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ]
          }
        ],
        data10: [],


        columns12: [
          {
            title: '集团公司  2018年4月天然气月汇总表',
            align: 'center',
            children:[
              {
                title: '二级单位',
                key: 'ejdw',
                align: 'center',
                width: 100,
              },
              {
                title: '中燃',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'dj',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '汇通',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'dj',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '合计',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'dj',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'je',
                    align: 'center',
                    width: 150,
                  },
                ]
              }, {
                title: '操作',
                key: 'zt',
                align: 'center',
                fixed: 'right',
                width: 220,
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
                          this.modal2 = true
                        }
                      }
                    }, '查看详情  /  修改'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          alert("删除成功")
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ]
          }
        ],
        data12: []
      }
    },
    components: {
//      spInfoPicking
    },
    mounted () {
      const data = [];
      for (let i = 1; i < 11; i++) {
        data.push({
          xl: i + '2路',
          dw: '立方米',
          sl: i * 1254 + '22',
          ch: i + '号车',
          cx: '中型公交',
          wpmc: '轮胎',
          llsj: '201' + i + '-10-11',
          llsl: i * 15 + 78,
          llgg: '10个/件',
          ghdw: '产品' + i + '公司',
          ppxh: '飞毛腿',
          gg: '中',
          jldw: '件',
          dj: i * 67 + 98 + '元',
          je: '789' + i + '元',
          fj: '-----',
          zt: '采购',

        });
      }
      this.data10 = data;


      const data1 = [];
      for (let i = 1; i < 11; i++) {
        data1.push({
          ejdw: '公交' + i + '公司',
          xl: i + '2路',
          dw: '立方米',
          sl: i * 1254 + '22',
          ch: i + '号车',
          cx: '中型公交',
          wpmc: '轮胎',
          llsj: '201' + i + '-10-11',
          llsl: i * 15 + 78,
          llgg: '10个/件',
          ghdw: '产品' + i + '公司',
          ppxh: '飞毛腿',
          gg: '中',
          jldw: '件',
          dj: i * 67 + 98 + '元',
          je: '789' + i + '元',
          fj: '-----',
          zt: '采购',

        });
      }
      this.data12 = data1;
    }
  }
</script>
