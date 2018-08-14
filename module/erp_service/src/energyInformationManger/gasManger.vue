<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">天然气汇总管理 <span style="color: red;font-size: 12px;margin-left: 10px;">天然气月汇总合计没有字段，接口有问题</span></h2>
      <Tabs value="name1" @on-click="tabs">
        <TabPane label="分公司天然气汇总" name="name1">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <div style="display: flex;width: 100%">
                  <FormItem label="按年份查询" style="margin: 0;">
                    <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                                v-model="formItem.tjsj"></DatePicker>
                  </FormItem>
                  <FormItem label="公司" style="margin: 0">
                    <Select v-model="formItem.ejdw" style="width: 195px;">
                      <Option value="公交一公司">公交一公司</Option>
                      <Option value="公交二公司">公交二公司</Option>
                    </Select>
                  </FormItem>
                  <Button type="primary" icon="ios-search" style="margin-left: 20px;" @click="chaxun1">搜索</Button>
                  <Button type="primary" icon="android-download"
                          style="right: 0;position: absolute;margin-top: 1px;margin-left: 50px;" @click="daochu1">导出Excel
                  </Button>
                </div>
                </Col>
              </Row>
            </Form>
          </Card>
          <Tag checkable color="blue" style="position: absolute;right:15px;margin-top: 6px;">公司总金额：67.4万元</Tag>
          <Table :columns="columns11" :data="data10" ref="selection" border height="500" style="margin-top: 35px;"
                 size="small"></Table>
          <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setpPage1"></Page>



          <!--<Modal-->
            <!--v-model="modal1"-->
            <!--width="415px;"-->
            <!--title="修改">-->
            <!--<div style="margin-left: 20px;">-->
              <!--<Form :model="formItem" :label-width="90">-->
                <!--<div style="display: flex;flex-wrap: wrap">-->
                  <!--<FormItem label="线路">-->
                    <!--<Select v-model="formItem.select" style="width: 195px;">-->
                      <!--<Option value="beijing">1路</Option>-->
                      <!--<Option value="shanghai">2路</Option>-->
                      <!--<Option value="shenzhen">3路</Option>-->
                    <!--</Select>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="数量">-->
                    <!--<Input v-model="formItem.input" placeholder="数量" style="width: 195px;"/>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="实际价格">-->
                    <!--<Input v-model="formItem.input" placeholder="单价" style="width: 195px;"/> <span-->
                    <!--style="color: red;margin-left: 5px;">*单价</span> <br>-->
                    <!--<Input v-model="formItem.input" placeholder="金额" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*金额</span>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="计划价格">-->
                    <!--<Input v-model="formItem.input" placeholder="单价" style="width: 195px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*单价</span> <br>-->
                    <!--<Input v-model="formItem.input" placeholder="金额" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*金额</span>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="备注">-->
                    <!--<Input v-model="formItem.input" placeholder="备注" style="width: 195px;"/>-->
                  <!--</FormItem>-->
                <!--</div>-->
              <!--</Form>-->
            <!--</div>-->
          <!--</Modal>-->
        </TabPane>
        <TabPane label="天然气月终汇总" name="name2">
          <Card>
            <Form :model="formItem1" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按年份查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                              v-model="formItem1.tjsj"></DatePicker>
                  <Button type="primary" icon="ios-search" @click="chaxun2">搜索</Button>

                  <Button type="primary" icon="android-download"
                          style="float: right;margin-right: 10px" @click="daochu2">导出Excel
                  </Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table :columns="columns12" :data="data12" ref="selection" border height="500" style="margin-top: 20px;"
                 size="small"></Table>
          <Page :total="totalPage1" show-total style="margin-top: 10px;" @on-change="setpPage2"></Page>
          <!--<Modal-->
            <!--v-model="modal2"-->
            <!--width="415px;"-->
            <!--title="修改">-->
            <!--<div style="margin-left: 20px;">-->
              <!--<Form :model="formItem" :label-width="90">-->
                <!--<div style="display: flex;flex-wrap: wrap">-->
                  <!--<FormItem label="二级单位">-->
                    <!--<Select v-model="formItem.select" style="width: 195px;">-->
                      <!--<Option value="beijing">一公司</Option>-->
                      <!--<Option value="shanghai">二公司</Option>-->
                      <!--<Option value="shenzhen">三公司</Option>-->
                    <!--</Select>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="中燃">-->
                    <!--<Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*气量</span> <br>-->
                    <!--<Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*实际价</span>-->
                    <!--<Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*计划价</span>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="汇通">-->
                    <!--<Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*气量</span> <br>-->
                    <!--<Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*实际价</span>-->
                    <!--<Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*计划价</span>-->
                  <!--</FormItem>-->
                  <!--<FormItem label="合计">-->
                    <!--<Input v-model="formItem.input" placeholder="气量" style="width: 195px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*气量</span> <br>-->
                    <!--<Input v-model="formItem.input" placeholder="实际价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*实际价</span>-->
                    <!--<Input v-model="formItem.input" placeholder="计划价" style="width: 195px;margin-top: 10px;"/><span-->
                    <!--style="color: red;margin-left: 5px;">*计划价</span>-->
                  <!--</FormItem>-->
                <!--</div>-->
              <!--</Form>-->
            <!--</div>-->
          <!--</Modal>-->
        </TabPane>
      </Tabs>
    </div>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        totalPage:0,
        totalPage1:0,
        modal1: false,
        modal2: false,
        formItem: {
          ejdw: '',
          tjsj: '',
          current:1,
          size:10
        },
        formItem1:{
          tjsj:'',
          current:1,
          size:10
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
                    width: 150,
                  },
                  {
                    title: '单位',
                    key: 'dw',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '数量',
                    key: 'rlly',
                    align: 'center',
                    width: 150,
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
                    key: 'sjdj',
                    align: 'center',
                    width:200,
                  },
                  {
                    title: '金额',
                    key: 'sjje',
                    align: 'center',
                    width: 200,
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
                    key: 'jhdj',
                    align: 'center',
                    width: 200,
                  },
                  {
                    title: '金额',
                    key: 'jhje',
                    align: 'center',
                    width: 200,
                  },
                ]
              },
              {
                title: '中燃',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'zrql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'zrsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'zrjhj',
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
                    key: 'htql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'htsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'htjhj',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '备注',
                key: 'bz',
                align: 'center',
                width: 200,
              }
            ]
          },
//          {
//            title: '操作',
//            key: 'zt',
//            align: 'center',
//            fixed: 'right',
//            width: 180,
//            render: (h, params) => {
//              return h('div', [
//                h('Button', {
//                  props: {
//                    type: 'primary',
//                    size: 'small'
//                  },
//                  style: {
//                    marginRight: '5px'
//                  },
//                  on: {
//                    click: () => {
//                      this.modal1 = true
//                    }
//                  }
//                }, '查看详情  /  修改'),
//              ]);
//            }
//          }
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
                    key: 'zrql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'zrsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'zrjhj',
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
                    key: 'htql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'htsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'htjhj',
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
              }
            ]
          },
//          {
//            title: '操作',
//            align: 'center',
//            fixed: 'right',
//            width: 220,
//            render: (h, params) => {
//              return h('div', [
//                h('Button', {
//                  props: {
//                    type: 'primary',
//                    size: 'small'
//                  },
//                  style: {
//                    marginRight: '5px'
//                  },
//                  on: {
//                    click: () => {
//                      this.modal2 = true
//                    }
//                  }
//                }, '查看详情  /  修改'),
//              ]);
//            }
//          }
        ],
        data12: []
      }
    },
    components: {
//      spInfoPicking
    },
    methods:{
      list1: function () {
        this.$fetch(this.$url.fgstrq, this.formItem)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无信息');
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            } else {
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            }
          })
      },
      setpPage1: function (current) {
        console.log(current);
        this.formItem.current = current;
        this.list1()
      },
      chaxun1:function () {
        if(this.formItem.tjsj==''){
          this.formItem.tjsj = ''
        }else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0,7)
        }
        console.log(this.formItem)
        this.list1()
      },
      daochu1:function () {
        if(this.formItem.tjsj==''){
          this.formItem.tjsj = ''
        }else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0,7)
        }
        this.$getExcel(process.env.BASE_URL + this.$url.daochufgstrq + '?tjsj=' + this.formItem.tjsj+'&ejdw='+this.formItem.ejdw )
      },











      list2:function () {
        this.$fetch(this.$url.jttrq, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无信息');
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            } else {
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            }
          })
      },
      chaxun2:function () {
        if(this.formItem1.tjsj==''){
          this.formItem1.tjsj = ''
        }else {
          this.formItem1.tjsj = this.$formatDate(this.formItem1.tjsj).substring(0,7)
        }
        console.log(this.formItem1)
        this.list2()
      },
      setpPage2: function (current) {
        console.log(current);
        this.formItem1.current = current;
        this.list2()
      },
      daochu2:function () {
        if(this.formItem1.tjsj==''){
          this.formItem1.tjsj = ''
        }else {
          this.formItem1.tjsj = this.$formatDate(this.formItem1.tjsj).substring(0,7)
        }
        console.log(this.formItem1)
        this.$getExcel(process.env.BASE_URL + this.$url.daochujttrq + '?tjsj=' + this.formItem1.tjsj)
      },

      tabs:function (name) {
        console.log(name)
        if(name=='name1'){
            this.list1()
        }else {
            this.list2()
        }
      }
    },
    mounted () {
        this.list1();
    }
  }
</script>
