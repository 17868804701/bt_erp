<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    padding: 10px;
  }

  .container h2 {
    margin-left: 15px;
  }

  .search_btn {
    margin-left: 10px;
  }

  .text_width {
    width: 195px;
  }

  .search {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    align-items: center;
  }

  .btn {
    position: absolute;
    right: 20px;
  }
</style>
<template>
  <div>
    <div style="padding: 20px 0 10px 20px;">
      <h2>检测登记</h2>
    </div>
    <Tabs value="name1" @on-click="changesTabs">
      <TabPane v-if="$showMenu('检测费用设定')" label="检测费用设定" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="100">
            <div class="search">
              <FormItem label="选择分类名称" style="margin: 0">
                <Select v-model="formItem.flmc" :transfer="true" style="width: 195px;">
                  <Option value="">全部</Option>
                  <Option value="钢瓶">钢瓶</Option>
                  <Option value="钢瓶2">钢瓶2</Option>
                  <Option value="钢瓶3">钢瓶3</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="plus" @click="add">新增</Button>
              </FormItem>

              <!--添加钢瓶类型-->
              <Modal
                v-model="modal1"
                width="320"
                @on-cancel="quxiao"
                title="添加检测费用设定">
                <div slot="footer" style="height: 30px;">
                  <Button type="primary" style="float: right;margin-right: 10px" v-show="this.madalType==='add'"
                          @click='ok("addFysd")'>确定
                  </Button>
                  <Button type="primary" style="float: right;margin-right: 10px" v-show="this.madalType==='update'"
                          @click='update'>修改
                  </Button>
                  <Button type="primary" style="float: right;margin-right: 10px" @click='cancel'>取消</Button>
                </div>
                <Form :model="addFysd" ref="addFysd" :rules="ruleValidate" :label-width="80">
                  <FormItem label="名称" prop="flmc" style="margin: 0 0 25px 0">
                    <Input v-model="addFysd.flmc" placeholder="名称" class="text_width"/>
                  </FormItem>
                  <FormItem label="体积" prop="tj" style="margin: 0 0 25px 0">
                    <Input v-model="addFysd.tj" placeholder="体积" class="text_width"/>
                  </FormItem>
                  <FormItem label="单价" prop="dj" style="margin: 0 0 25px 0">
                    <Input v-model="addFysd.dj" placeholder="单价" class="text_width"/>
                  </FormItem>
                  <FormItem label="备注" prop="bz" style="margin: 0 0 25px 0">
                    <Input v-model="addFysd.bz" placeholder="备注" class="text_width"/>
                  </FormItem>
                  <FormItem label="选择年份" prop="xzsj" style="margin: 0 0 10px 0">
                    <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="addFysd.xzsj"
                                class="text_width"></DatePicker>
                  </FormItem>

                </Form>
              </Modal>
            </div>
          </Form>
        </Card>
        <Table :columns="columns1" :data="data1" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
      </TabPane>
      <TabPane v-if="$showMenu('钢瓶检测登记')" label="钢瓶检测登记" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <Button type="primary" icon="plus" @click="modal2=true" style="margin-left: 20px;">进厂登记</Button>

              <!--进厂登记-->
              <Modal
                v-model="modal2"
                width="360"
                title="进厂登记">
                <div slot="footer" style="height: 30px;">
                  <Button type="primary" style="float: right;margin-right: 10px" @click="jcdj('formItem1')">确定</Button>
                  <Button type="primary" style="float: right;margin-right: 10px" @click='cancel'>取消</Button>
                </div>
                <Form :model="formItem1" ref="formItem1" :rules="ruleValidate" :label-width="100">
                  <FormItem label="单位名称" style="margin: 0 0 25px 0" prop="dwmc">
                    <Select v-model="formItem1.dwmc" :transfer="true" style="width: 195px;">
                      <Option value="公交一公司">公交一公司</Option>
                      <Option value="公交二公司">公交二公司</Option>
                      <Option value="公交三公司">公交三公司</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="车牌号" style="margin: 0 0 25px 0" prop="cph">
                    <Input v-model="formItem1.cph" placeholder="车牌号" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="自编号" style="margin: 0 0 25px 0" prop="zbh">
                    <Input v-model="formItem1.zbh" placeholder="自编号" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="车型" style="margin: 0 0 25px 0" prop="cx">
                    <Input v-model="formItem1.cx" placeholder="车型" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="本次检测日期" style="margin: 0 0 25px 0" prop="bcjcrq">
                    <DatePicker type="date" placeholder="本次检测日期" :transfer="true" v-model="formItem1.bcjcrq"
                                style="width: 195px;"></DatePicker>
                  </FormItem>
                  <FormItem label="接车日期" style="margin: 0 0 25px 0" prop="jcrq">
                    <DatePicker type="date" placeholder="接车日期" :transfer="true" v-model="formItem1.jcrq"
                                style="width: 195px;"></DatePicker>
                  </FormItem>
                </Form>
              </Modal>


              <!--<FormItem label="" style="margin: 0">-->
              <!--</FormItem>-->
            </div>
          </Form>
        </Card>
        <Table :columns="columns2" :data="data2" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="totalPage2" show-total style="margin-top: 10px;" @on-change="setPageGpjcdj"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        madalType: 'add',
        totalPage: 0,
        totalPage2: 0,
        formItem: {
          currPage: 1,
          pageSize: 10,
          flmc: ''
        },
        formItem1: {
          bcjcrq: "",
          cph: "",
          cx: "",
          dwmc: "",
          jcrq: "",
          zbh: ""
        },
        addFysd: {
          flmc: '',
          tj: '',
          dj: '',
          bz: '',
          xzsj: ''
        },
        gpjcdjLists: {
          currPage: 1,
          pageSize: 10
        },
        ruleValidate: {
          flmc: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          xzsj: [
            {required: true, message: '必填项', trigger: 'blur', type: 'date'}
          ],
          tj: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          dj: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          bz: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          jcrq: [
            {required: true, message: '必填项', trigger: 'blur', type: 'date'}
          ],
          bcjcrq: [
            {required: true, message: '必填项', trigger: 'blur', type: 'date'}
          ],
          cx: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          cph: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          zbh: [
            {required: true, message: '必填项', trigger: 'blur'}
          ],
          dwmc: [
            {required: true, message: '必填项', trigger: 'change'}
          ]
        },
        columns1: [
          {
            title: '分类名称',
            key: 'flmc'
          },
          {
            title: '体积',
            key: 'tj'
          },
          {
            title: '单价',
            key: 'dj'
          },
          {
            title: '备注',
            key: 'bz'
          },
          {
            title: '增加时间',
            key: 'xzsj'
          },
          {
            title: '操作',
            align: 'center',
            key: 'time',
            render: (h, params) => {
              return h('div', [
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
                      this.$fetch(this.$url.delFysd + '?id=' + params.row.id)
                        .then(res => {
                          console.log(res)
                          if (res.msg === 'success') {
                            this.$Message.info('删除成功');
                            this.getgpjcdjList();
                          } else {
                            this.$Message.error('删除失败');
                          }
                        })
                    }
                  }
                }, '删除'),
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
                      console.log(params.row);
                      this.madalType = 'update';
                      this.modal1 = true;
                      for (let attr in params.row) {
                        this.addFysd[attr] = params.row[attr];
                      }
                    }
                  }
                }, '修改')
              ]);
            }
          }
        ],
        data1: [],


        columns2: [
          {
            title: '单位名称',
            key: 'dwmc'
          },
          {
            title: '车牌号',
            key: 'cph'
          },
          {
            title: '自编号',
            key: 'zbh'
          },
          {
            title: '车型',
            key: 'cx'
          }, {
            title: '本次检测日期',
            key: 'bcjcrq'
          }, {
            title: '接车日期',
            key: 'jcrq'
          },
          {
            title: '操作',
            align: 'center',
            key: 'time',
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
                      this.$router.push({path: '/gpjcInfo',query: {djInfo: params.row}});
                    }
                  }
                }, '详情'),
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
                      console.log(params.row.id)
                      this.$fetch(this.$url.gpjcdjDel+'?id='+params.row.id)
                        .then(res => {
                          console.log(res)
                          if (res.msg === 'success') {
                            this.$Message.info('删除成功');
                            this.gpjcdjList();
                          } else {
                            this.$Message.error('删除失败');
                          }
                        })
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data2: []
      }
    },
    methods: {
//        检测费用设定
      getgpjcdjList: function () {
        this.$fetch(this.$url.gpjcList, this.formItem)
          .then(res => {
            console.log(res)
            if (res.page.total === 0) {
              this.$Message.info('暂无数据');
              this.totalPage = res.page.total;
              this.data1 = res.page.records;
            } else {
              res.page.records.forEach(item => {
                item.xzsj = DateTool.timesToDate(item.xzsj)
              });
              this.totalPage = res.page.total;
              this.data1 = res.page.records;
            }
          })
      },
      search: function () {
        this.getgpjcdjList()
      },
      add: function () {
        this.modal1 = true;
        this.madalType = 'add'
      },
      quxiao: function () {
        this.addFysd = {}
      },
      cancel: function () {
        this.modal1 = false;
        this.addFysd = {}
        this.modal2 = false;
        this.formItem1 = {}
      },
      update: function () {
        this.$post(this.$url.updateFysd, this.addFysd)
          .then(res => {
            if (res.msg === 'success') {
              this.$Message.info('修改成功');
              this.modal1 = false;
              this.addFysd = {}
              this.getgpjcdjList();
            } else {
              this.$Message.error('修改失败');
            }
          })
      },
      ok: function (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$post(this.$url.addFysd, this.addFysd)
              .then(res => {
                if (res.msg === 'success') {
                  this.$Message.info('添加成功');
                  this.modal1 = false;
                  this.addFysd={}
                  this.getgpjcdjList();
                } else {
                  this.$Message.error('添加失败');
                }
              })
          } else {
            this.$Message.error('请输入完整信息!');
          }
        });
      },
      setPage: function (current) {
        this.formItem.currPage = current;
        this.getgpjcdjList();
      },

//      钢瓶检测登记
      jcdj: function (name) {
        console.log(this.formItem1)
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$post(this.$url.gpjcdj, this.formItem1)
              .then(res => {
                if (res.msg === 'success') {
                  this.$Message.info('添加成功');
                  this.gpjcdjList();
                  this.modal2 = false;
                  this.formItem1={}
                } else {
                  this.$Message.error('添加失败');
                }
              })
          } else {
            this.$Message.error('请输入完整信息!');
          }
        });
      },
      gpjcdjList: function () {
        this.$fetch(this.$url.gpjcdjList, this.gpjcdjLists)
          .then(res => {
            console.log(res)
            if (res.page.total === 0) {
              this.$Message.info('暂无数据');
              this.totalPage2 = res.page.total;
              this.data2 = res.page.records;
            } else {
              res.page.records.forEach(item => {
                item.jcrq = DateTool.timesToDate(item.jcrq)
                item.bcjcrq = DateTool.timesToDate(item.bcjcrq)
              });
              this.totalPage2 = res.page.total;
              this.data2 = res.page.records;
            }
          })
      },
      setPageGpjcdj: function (current) {
        this.gpjcdjLists.currPage = current;
        this.gpjcdjList();
      },
      changesTabs: function (name) {
        if (name === 'name1') {
          this.getgpjcdjList();
        } else {
          this.gpjcdjList()
        }
      }
    },
    mounted () {
      this.getgpjcdjList();
    }
  }
</script>
