<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    <h2>客服信息列表</h2>
    </div>
    <Tabs value="name1" @on-click="tabs">
      <TabPane label="客服信息登记列表" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="110">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.startTime"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="事件类别" style="margin-bottom: 0px">
                <Select v-model="formItem.sjlb" :transfer="true" style="width: 195px;">
                  <Option value="">全部</Option>
                  <Option value="0">责任性事件</Option>
                  <Option value="1">疑难性事件</Option>
                  <Option value="2">普通事件</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search1">查询</Button>
              <router-link to="/addKfxx">
                <Button type="primary" icon="plus" class="search_btn">添加</Button>
              </router-link>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="daochu">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data10" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setp"></Page>
      </TabPane>
      <TabPane label="待我处理列表" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem1" :label-width="110">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem1.startTime"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search2">查询</Button>
              <Button type="primary" icon="android-download" class="search_btn" @click="plcl">批量处理</Button>
            </div>
          </Form>
        </Card>
        <Table :columns="columns12" :data="data12" border height="470" style="margin-top: 10px;" size="small"
               @on-selection-change="selectAll"></Table>
        <Page :total="totalPage1" show-total style="margin-top: 10px;" @on-change="setp1"></Page>
      </TabPane>
    </Tabs>

    <!--批量处理-->
    <Modal
      v-model="modal1"
      width="500"
      @on-cancel="cancel"
      title="填写反馈信息">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="plclOk">确定</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancel">取消</Button>
      </div>
      <Form :model="formItem2" :label-width="100">
        <FormItem label="反馈信息">
          <Input style="width: 350px;" v-model="formItem2.cljg" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="填写反馈信息"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  import * as DateTool from '../../utils/DateTool'
  export default {
    data () {
      return {
        formItem: {
          current: 1,
          size: 10,
          sjlb: '',
          startTime: '',
          endTime: ''
        },
        formItem1: {
          current: 1,
          size: 10,
          startTime: '',
          endTime: ''
        },
        formItem2: {
          cljg: '',
          ids: []
        },
        modal1: false,
        totalPage: 0,
        totalPage1: 0,
        selection: [],
        columns11: [
          {
            title: '投诉时间',
            key: 'tssj',
            align: 'center',
            width: 120,
          }, {
            title: '线路',
            key: 'xl',
            align: 'center',
            width: 120,
          }, {
            title: '车号',
            key: 'ch',
            align: 'center',
            width: 120,
          }, {
            title: '投诉人姓名',
            key: 'tsr',
            align: 'center',
            width: 120,
          }, {
            title: '联系电话',
            key: 'lxdh',
            align: 'center',
            width: 120,
          }, {
            title: '类别',
            key: 'tslb',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.tslb === 'DZBTC') {
                texts = '到站不停车'
              } else if (params.row.tslb === 'JZ') {
                texts = '拒载'
              } else if (params.row.tslb === 'DJG') {
                texts = '大间隔'
              } else if (params.row.tslb === 'FWTDC') {
                texts = '服务态度差'
              } else if (params.row.tslb === 'TXYY') {
                texts = '脱线运营'
              } else if (params.row.tslb === 'SJSG') {
                texts = '摔夹事故'
              } else if (params.row.tslb === 'ICKFM') {
                texts = '刷IC卡方面'
              } else if (params.row.tslb === 'QT') {
                texts = '其他'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '来电/来访',
            key: 'lfxs',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.lfxs == 0) {
                texts = '来电'
              } else if (params.row.lfxs == 1) {
                texts = '来访'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '事由',
            key: 'sy',
            align: 'center',
            width: 260,
          }, {
            title: '记录人',
            key: 'jlr',
            align: 'center',
            width: 120,
          }, {
            title: '状态',
            key: 'zt',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.zt == 1) {
                texts = '处理中'
              } else if (params.row.zt == 2) {
                texts = '处理完成'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '处理结果',
            key: 'cljg',
            align: 'center',
            width: 120,
          }, {
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 120,
          }, {
            title: '事件类别',
            key: 'sjlb',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.sjlb == 0) {
                texts = '责任性事件'
              } else if (params.row.sjlb == 1) {
                texts = '疑难性事件'
              } else if (params.row.sjlb == 2) {
                texts = '普通事件'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '操作',
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
                      this.$router.push({
                        path: '/addkfxx',
                        query: {row: params.row,tip:'edit'}
                      })
                    }
                  }
                }, '修改'),
              ]);
            }
          },
        ],
        data10: [],


        columns12: [
          {
            type: 'selection',
            width: 60,
            align: 'center',

          },
          {
            title: '投诉时间',
            key: 'tssj',
            align: 'center',
            width: 120,
          }, {
            title: '线路',
            key: 'xl',
            align: 'center',
            width: 120,
          }, {
            title: '车号',
            key: 'ch',
            align: 'center',
            width: 120,
          }, {
            title: '投诉人姓名',
            key: 'tsr',
            align: 'center',
            width: 120,
          }, {
            title: '联系电话',
            key: 'lxdh',
            align: 'center',
            width: 120,
          }, {
            title: '类别',
            key: 'tslb',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.tslb === 'DZBTC') {
                texts = '到站不停车'
              } else if (params.row.tslb === 'JZ') {
                texts = '拒载'
              } else if (params.row.tslb === 'DJG') {
                texts = '大间隔'
              } else if (params.row.tslb === 'FWTDC') {
                texts = '服务态度差'
              } else if (params.row.tslb === 'TXYY') {
                texts = '脱线运营'
              } else if (params.row.tslb === 'SJSG') {
                texts = '摔夹事故'
              } else if (params.row.tslb === 'ICKFM') {
                texts = '刷IC卡方面'
              } else if (params.row.tslb === 'QT') {
                texts = '其他'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '来电/来访',
            key: 'lfxs',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.lfxs == 0) {
                texts = '来电'
              } else if (params.row.lfxs == 1) {
                texts = '来访'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '事由',
            key: 'sy',
            align: 'center',
            width: 260,
          }, {
            title: '记录人',
            key: 'jlr',
            align: 'center',
            width: 120,
          }, {
            title: '状态',
            key: 'zt',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.zt == 1) {
                texts = '处理中'
              } else if (params.row.zt == 2) {
                texts = '处理完成'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '处理结果',
            key: 'cljg',
            align: 'center',
            width: 120,
          }, {
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 120,
          }, {
            title: '事件类别',
            key: 'sjlb',
            align: 'center',
            width: 120,
            render: (h, params) => {
              let texts = '';
              if (params.row.sjlb == 0) {
                texts = '责任性事件'
              } else if (params.row.sjlb == 1) {
                texts = '疑难性事件'
              } else if (params.row.sjlb == 2) {
                texts = '普通事件'
              }
              return h('div', {
                props: {},
              }, texts)
            }
          }, {
            title: '操作',
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
                      console.log(params.row.id);
                      this.formItem2.ids.push(params.row.id)
                      this.modal1 = true;
                    }
                  }
                }, '处理'),
              ]);
            }
          },
        ],
        data12: []
      }
    },
    methods: {
//        客服信息列表
      list: function () {
        this.$fetch(this.$url.kfxxList, this.formItem)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无数据');
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            } else {
              res.data.records.forEach(item => {
                item.tssj = DateTool.timesToDate(item.tssj)
              });
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            }
          })
      },
      //        待我处理客服信息列表
      list2: function () {
        this.$fetch(this.$url.dwclkfxx, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无数据');
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            } else {
              res.data.records.forEach(item => {
                item.tssj = DateTool.timesToDate(item.tssj)
              });
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            }
          })
      },
      daochu: function () {
        if (this.formItem.startTime[0] == '') {
          this.formItem.startTime = '',
            this.formItem.endTime = '',
            this.$getExcel(process.env.BASE_URL + this.$url.daochukfxx + '?sjlb=' + this.formItem.sjlb + '&startTime = ' + this.formItem.startTime + '&endTime = ' + this.formItem.endTime)
        } else {
          let start = DateTool.timesToDate(this.formItem.startTime[0]);
          let end = DateTool.timesToDate(this.formItem.startTime[1]);
          this.formItem.startTime = start;
          this.formItem.endTime = end;
          this.$getExcel(process.env.BASE_URL + this.$url.daochukfxx + '?sjlb=' + this.formItem.sjlb + '&startTime = ' + this.formItem.startTime + '&endTime = ' + this.formItem.endTime)
        }
      },
      search2: function () {
        if (this.formItem1.startTime[0] == '') {
          this.formItem1.startTime = '',
            this.formItem1.endTime = '',
            this.list2()
        } else {
          let start1 = DateTool.timesToDate(this.formItem1.startTime[0]);
          let end2 = DateTool.timesToDate(this.formItem1.startTime[1]);
          this.formItem1.startTime = start1;
          this.formItem1.endTime = end2;
          this.list2()
        }
      },
      search1: function () {
        if (this.formItem.startTime[0] == '') {
          this.formItem.startTime = '',
            this.formItem.endTime = '',
            this.list()
        } else {
          let start = DateTool.timesToDate(this.formItem.startTime[0]);
          let end = DateTool.timesToDate(this.formItem.startTime[1]);
          this.formItem.startTime = start;
          this.formItem.endTime = end;
          this.list()
        }
      },
      setp: function (current) {
        this.totalPage = current;
        this.list();
      },
      setp1: function () {
        this.totalPage1 = current;
        this.list2();
      },
      tabs: function (name) {
        if (name === 'name1') {
          this.list()
        } else {
          this.list2()
        }
      },
      selectAll: function (selection) {
        this.selection = selection;
        console.log(this.selection)
      },
      plclSubmit: function () {
          console.log(this.formItem2);
        this.$post(this.$url.plclkfxx, this.formItem2)
          .then(res => {
            console.log(res)
          })
      },
      plcl: function () {
        if (this.selection.length === 0) {
          this.$Message.error('请选择数据')
        } else {
          this.selection.forEach(item => {
            this.formItem2.ids.push(item.id)
          });
          this.modal1 = true;
        }
      },
      plclOk: function () {
        if (this.formItem2.cljg === '') {
          this.$Message.error('请填写反馈信息')
        } else {
          this.plclSubmit()
        }
      },
      cancel: function () {
        this.$Message.error('操作失败');
        this.modal1 = false;
        this.formItem2.cljg = ''
        this.formItem2.ids = []
      }
    },
    mounted () {
      this.list();
    }
  }
</script>
