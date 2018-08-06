<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        领料管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="领料历史记录" name="name1">
          <Card>
          <Form :model="formItem" :label-width="110">
            <Row>
              <Col span="24">
              <FormItem label="选择月份或者状态" style="margin: 0;">
                <DatePicker type="daterange" placeholder="选择时间段" :transfer="true" placement="bottom-end"
                            v-model="formItem.date"></DatePicker>
                <Select v-model="formItem.select" style="width: 195px;">
                  <Option value="beijing">采购</Option>
                  <Option value="shanghai">下派</Option>
                </Select>
                <Button type="primary" icon="ios-search">搜索</Button>
                <Button type="primary" icon="android-download"
                        style="float: right;margin-right: 10px">导出Excel
                </Button>
                <!--<Button type="ghost" icon="android-download"  style="float: right;margin-right:10px">批量派发</Button>-->
                <Button type="primary" icon="plus" style="float: right;margin-right:10px" @click="addPicking=true">
                  新增领料
                </Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
          </Card>
          <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
          <Page :total="100" show-total style="margin-top: 10px;"></Page>
        </TabPane>
        <!--<TabPane label="领料审批记录" name="name2">-->
          <!--<spPicking></spPicking>-->
        <!--</TabPane>-->
      </Tabs>

      <!--增加领料-->
      <Modal
        v-model="addPicking"
        title="新增领料"
        width="60%"
      >
        <addPicking></addPicking>
      </Modal>
    </div>
  </div>


</template>
<script>
  import addPicking from './addPicking.vue'
  import spPicking from './spPicking.vue'
  export default {
    data () {
      return {
        addPicking: false,
        formItem: {
          date: ''
        },
//        车号、车型、物品名称（轮胎、润滑油）、领料数量、领料规格、供货单位、品牌型号、规格、计量单位、单价、金额、附记、状态（采购、下派）
        columns11: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '车号',
            key: 'ch',
            align: 'center',
            width: 100,
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
            width: 100,
          },
          {
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
            width: 100,
          },
          {
            title: '领料数量',
            key: 'llsl',
            align: 'center',
            width: 100,
          }, {
            title: '领料时间',
            key: 'llsj',
            align: 'center',
            width: 130,
          },
        {
            title: '物品编号',
            key: 'wpbh',
            align: 'center',
            width: 120,
          },
          {
            title: '供货单位',
            key: 'ghdw',
            align: 'center',
            width: 120,
          }, {
            title: '品牌型号',
            key: 'ppxh',
            align: 'center',
            width: 120,
          }, {
            title: '规格',
            key: 'gg',
            align: 'center',
            width: 120,
          },  {
            title: '计量单位',
            key: 'jldw',
            align: 'center',
            width: 120,
          }, {
            title: '单价',
            key: 'dj',
            align: 'center',
            width: 120,
          }, {
            title: '金额',
            key: 'je',
            align: 'center',
            width: 120,
          }, {
            title: '附记',
            key: 'fj',
            align: 'center',
            width: 120,
          }, {
            title: '状态',
            key: 'zt',
            align: 'center',
            width: 120,
          }, {
            title: '操作',
            key: 'zt',
            align: 'center',
            fixed: 'right',
            width: 180,
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
                      this.addPicking = true
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

                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data10: []
      }
    },
    components: {
      addPicking,
      spPicking
    },
    mounted () {
      const data = [];
      for (let i = 1; i < 11; i++) {
        data.push({
          ch: i + '号车',
          cx: '中型公交',
          wpmc: '轮胎',
          wpbh:'c-0901',
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
    }
  }
</script>
