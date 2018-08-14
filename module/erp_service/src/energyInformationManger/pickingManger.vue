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
                              v-model="formItem.kssj"></DatePicker>
                  <Button type="primary" icon="ios-search" @click="search">搜索</Button>
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
          <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="step"></Page>
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
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="save('add')">确定
          </Button>
          <Button type="primary" style="float: right;margin-right: 10px">修改
          </Button>
          <Button type="primary" style="float: right;margin-right: 10px">取消</Button>
        </div>
        <div>
          <Form :model="add" ref="add" :rules="ruleValidate" :label-width="80">
            <div style="display: flex;flex-wrap: wrap">
              <FormItem label="车牌号" prop="cph">
                <Input v-model="add.cph" placeholder="请输入领料数量" style="width: 195px;"/>
              </FormItem>
              <FormItem label="车型" prop="cx">
                <Select v-model="add.cx" style="width: 195px;">
                  <Option value="大型">大型</Option>
                  <Option value="中型">中型</Option>
                  <Option value="小型">小型</Option>
                </Select>
              </FormItem>
              <FormItem label="物品名称" prop="wpmc">
                <Select v-model="add.wpmc" style="width: 195px;">
                  <Option value="轮胎">轮胎</Option>
                  <Option value="润滑油">润滑油</Option>
                </Select>
              </FormItem>
              <FormItem label="领料数量" prop="llsl">
                <Input v-model="add.llsl" placeholder="请输入领料数量" style="width: 195px;"/>
              </FormItem>
              <FormItem label="领料时间" prop="llsj">
                <DatePicker type="date" placeholder="选择领料时间" v-model="add.llsj" style="width: 195px;"></DatePicker>
              </FormItem>
              <FormItem label="领料规格" prop="llgg">
                <Input v-model="add.llgg" placeholder="领料规格" style="width: 195px;"/>
              </FormItem>
              <FormItem label="物品编号" prop="wpbh">
                <Input v-model="add.wpbh" placeholder="物品编号" style="width: 195px;"/>
              </FormItem>
              <FormItem label="供货单位" prop="ghdw">
                <Select v-model="add.ghdw" style="width: 195px;">
                  <Option value="产品1公司">产品1公司</Option>
                  <Option value="产品2公司">产品2公司</Option>
                  <Option value="产品3公司">产品3公司</Option>
                </Select>
              </FormItem>
              <FormItem label="品牌型号" prop="ppxh">
                <Input v-model="add.ppxh" placeholder="品牌型号" style="width: 195px;"/>
              </FormItem>
              <FormItem label="规格" prop="gg">
                <Input v-model="add.gg" placeholder="规格" style="width: 195px;"/>
              </FormItem>
              <FormItem label="计量单位" prop="jldw">
                <Select v-model="add.jldw" style="width: 195px;">
                  <Option value="件">件</Option>
                  <Option value="台">台</Option>
                  <Option value="提">提</Option>
                </Select>
              </FormItem>
              <FormItem label="单价" prop="dj">
                <Input v-model="add.dj" placeholder="单价" style="width: 195px;"/>
              </FormItem>
              <FormItem label="金额" prop="je">
                <Input v-model="add.je" placeholder="金额" style="width: 195px;"/>
              </FormItem>
              <FormItem label="状态" prop="zt">
                <Select v-model="add.zt" style="width: 195px;">
                  <Option value="采购">采购</Option>
                  <Option value="派发">派发</Option>
                </Select>
              </FormItem>
              <FormItem label="附记" prop="fj">
                <Input v-model="add.fj" placeholder="附记" style="width: 470px;"/>
              </FormItem>
            </div>
          </Form>
        </div>
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
        totalPage: 0,
        formItem: {
          kssj: '',
          jssj: '',
          current: 1,
          size: 10
        },
        add: {
          cph: "",
          cx: "",
          wpmc: "",
          llsl: "",
          ghdw: "",
          ppxh: "",
          gg: "",
          jldw: "",
          dj:'',
          je: '',
          fj: "",
          zt: "",
          llsj: '',
          wpbh: "",
          llgg: ""
        },
        ruleValidate: {
          cph: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          cx: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          wpmc: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          llsl: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          ghdw: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          ppxh: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          gg: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          jldw: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          dj: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          je: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          fj: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          zt: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          llsj: [
            {required: true, message: '必填项必填', trigger: 'blur',type:'date'}
          ],
          wpbh: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ],
          llgg: [
            {required: true, message: '必填项必填', trigger: 'blur'}
          ]
        },
//        车号、车型、物品名称（轮胎、润滑油）、领料数量、领料规格、供货单位、品牌型号、规格、计量单位、单价、金额、附记、状态（采购、下派）
        columns11: [
          {
            title: '车号',
            key: 'cph',
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
          }, {
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
    methods: {
      search: function () {
        if (this.formItem.kssj[0] == '') {
          this.formItem.kssj = '',
            this.formItem.jssj = ''
          this.list()
        } else {
          let start1 = this.$formatDate(this.formItem.kssj[0]).substring(0, 10);
          let end2 = this.$formatDate(this.formItem.kssj[1]).substring(0, 10);
          this.formItem.kssj = start1;
          this.formItem.jssj = end2;
          this.list()
        }
        console.log(this.formItem.kssj)
      },
      list: function () {
        this.$fetch(this.$url.lljl, this.formItem)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无数据');
              this.totalPage = res.data.total;
              this.data10 = res.data.records;
            } else {
              res.data.records.forEach(item => {
                item.llsj = this.$formatDate(item.llsj).substring(0, 10)
              })
              this.data10 = res.data.records
            }
          })
      },
      step: function (current) {
        this.formItem.current = current
        this.list()
      },
      save: function (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.add.llsj = this.$formatDate(this.add.llsj).substring(0,10)
            this.$post(this.$url.savell, this.add)
              .then(res => {
                console.log(res);

              })
          } else {
            this.$Message.error('请填写完整表单!');
          }
        })
      }
    },
    mounted () {
      console.log(this.formItem)
      this.list();
    }
  }
</script>
