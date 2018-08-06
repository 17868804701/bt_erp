<style>
  .border_line {
    /*border-bottom: 1px solid #e9eaec;*/
    margin-bottom: 10px;
  }
</style>

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div class="border_line">
        <h2 style="margin-left: 15px;">
          集团公司运营部统计
        </h2>
      </div>
      <Tabs value="name1" style="margin-top: 5px;" @on-click="changes">
        <TabPane label="线路车次正点统计表" name="name1">
          <Card>
            <Form :model="formItem1" :label-width="80">
              <div style="display: flex;flex-wrap: wrap;margin-left: 10px;">
                <FormItem label="选择年月" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                              v-model="formItem1.sj"></DatePicker>
                </FormItem>
                <FormItem label="路别" style="margin: 0">
                  <Select v-model="formItem1.lb" style="width: 195px;">
                    <Option value="">全部</Option>
                    <Option value="1路">1路</Option>
                    <Option value="2路">2路</Option>
                    <Option value="3路">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="公司" style="margin: 0">
                  <Select v-model="formItem1.dw" style="width: 195px;">
                    <Option value="">全部</Option>
                    <Option value="公交一公司">公交一公司</Option>
                    <Option value="公交二公司">公交二公司</Option>
                    <Option value="公交三公司">公交三公司</Option>
                  </Select>
                </FormItem>
                <div style="margin-left: 10px;margin-top: 1px;">
                  <Button type="primary" @click="search1" icon="ios-search">搜索</Button>
                </div>
              </div>
            </Form>
            <Button type="primary" icon="android-download" style="position: absolute;right: 10px;top:17px"
                    @click="modal1=true">导出Excel
            </Button>
            <Modal
              v-model="modal1"
              @on-ok="ok1"
              @on-cancel="cancel1"
              title="填写导出说明"
            >
              <Form :model="formItem1" :label-width="80">
                <FormItem label="导出说明">
                  <Input v-model="formItem1.dcsm" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                         placeholder="请输入导出说明"></Input>
                </FormItem>
              </Form>
            </Modal>
          </Card>
          <Table :columns="columns11" :data="data10" border height="520" size="small" style="margin-top: 10px;"></Table>
          <Page :total="totalPage1" show-total style="margin-top: 10px;" @on-change="setPage1"></Page>
        </TabPane>
        <TabPane label="各公司与集团汇总表" name="name2">
          <Card>
            <Form :model="formItem2" :label-width="80">
              <div style="display: flex;flex-wrap: wrap;margin-left: 10px;">
                <FormItem label="按年份查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                              v-model="formItem2.sj"></DatePicker>
                </FormItem>
                <FormItem label="路别" style="margin: 0">
                  <Select v-model="formItem2.lb" style="width: 195px;">
                    <Option value="">全部</Option>
                    <Option value="1路">1路</Option>
                    <Option value="2路">2路</Option>
                    <Option value="3路">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="公司" style="margin: 0">
                  <Select v-model="formItem2.dw" style="width: 195px;">
                    <Option value="">全部</Option>
                    <Option value="公交一公司">公交一公司</Option>
                    <Option value="公交二公司">公交二公司</Option>
                    <Option value="公交三公司">公交三公司</Option>
                  </Select>
                </FormItem>
                <div style="margin-left: 10px;margin-top: 1px;">
                  <Button type="primary" icon="ios-search" @click="search2">搜索</Button>
                </div>
              </div>
            </Form>
            <Button type="primary" icon="android-download" style="position: absolute;right: 10px;top:17px;"
                    @click="modal2=true">导出Excel
            </Button>
            <Modal
              v-model="modal2"
              title="填写导出说明"
              @on-ok="ok2"
              @on-cancel="cancel2"
            >
              <Form :model="formItem2" :label-width="80">
                <FormItem label="导出说明">
                  <Input v-model="formItem2.dcsm" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                         placeholder="请输入导出说明"></Input>
                </FormItem>
              </Form>
            </Modal>
          </Card>
          <Table :columns="columns12" :data="data12" border height="520" size="small" style="margin-top: 10px;"></Table>
          <Page :total="totalPage2" show-total style="margin-top: 10px;" @on-change="setPage2"></Page>
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
        totalPage1: 0,
        totalPage2: 0,
        formItem: {
          date: '',
          textarea: '',
          select: '',
          select1: ''
        },
        formItem1: {
          dw: '',
          sj: '',
          dcsm: '',
          lb: '',
          current: 1,
          size: 10
        },
        formItem2: {
          dw: '',
          sj: '',
          dcsm: '',
          lb: '',
          current: 1,
          size: 10
        },
        columns11: [
          {
            title: '单位',
            key: 'dw',
            align: 'center',
            width: 100,
          },
          {
            title: '时间',
            key: 'sj',
            align: 'center',
            width: 100,
          },
          {
            title: '路别',
            key: 'lb',
            align: 'center',
            width: 100,
          },
          {
            title: '车次完成情况',
            align: 'center',
            width: 120,
            children: [
              {
                title: '计划',
                key: 'ccqk_jh',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '实际',
                key: 'ccqk_sj',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '短缺',
                key: 'ccqk_dq',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '车次率',
                key: 'ccqk_ccl',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点',
                key: 'ccqk_zd',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '不正点',
                key: 'ccqk_bzd',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点率',
                key: 'ccqk_zdl',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '客运量（人次）',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实投币',
                key: 'kyl_tbrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡',
                key: 'kyl_icrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: 'SIM卡',
                key: 'kyl_simrc',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '月票',
                key: 'kyl_yprc',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '公益',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '敬老卡',
                    key: 'kyl_jlkrc',
                    align: 'center',
                    width: 120,
                    sortable: false
                  }, {
                    title: '员工卡',
                    key: 'kyl_ygkrc',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
            ]
          },
          {
            title: '客运收入（元）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '投币收入',
                key: 'sr_tbsr',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡收入',
                key: 'sr_icsr',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '普卡（无补）',
                    key: 'sr_ickyhsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'sr_ickbtsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: 'SIM卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: 'SIM卡（无补）',
                    key: 'sr_simyhsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'sr_simbtsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: '合计',
                key: 'sr_hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '百公里收入',
                key: 'sr_bgl',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '敬老卡免费金额（元）',
            key: 'jlkmfje',
            align: 'center',
            width: 120,
          }
        ],
        data10: [],


        columns12: [
          {
            title: '单位',
            key: 'dw',
            align: 'center',
            width: 100,
          },
          {
            title: '车次完成情况',
            align: 'center',
            width: 120,
            children: [
              {
                title: '计划',
                key: 'ccqk_jh',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '实际',
                key: 'ccqk_sj',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '短缺',
                key: 'ccqk_dq',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '车次率',
                key: 'ccqk_ccl',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点',
                key: 'ccqk_zd',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '不正点',
                key: 'ccqk_bzd',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点率',
                key: 'ccqk_zdl',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '客运量（人次）',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实投币',
                key: 'kyl_tbrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡',
                key: 'kyl_icrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: 'SIM卡',
                key: 'kyl_simrc',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '月票',
                key: 'kyl_yprc',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '公益',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '敬老卡',
                    key: 'kyl_jlkrc',
                    align: 'center',
                    width: 120,
                    sortable: false
                  }, {
                    title: '员工卡',
                    key: 'kyl_ygkrc',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
            ]
          },
          {
            title: '客运收入（元）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '投币收入',
                key: 'sr_tbsr',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡收入',
                key: 'sr_icsr',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '普卡（无补）',
                    key: 'sr_ickyhsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'sr_ickbtsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: 'SIM卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: 'SIM卡（无补）',
                    key: 'sr_simyhsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'sr_simbtsr',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: '合计',
                key: 'sr_hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '百公里收入',
                key: 'sr_bgl',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '敬老卡免费金额（元）',
            key: 'jlkmfje',
            align: 'center',
            width: 120,
          }
        ],
        data12: [],
      }
    },
    methods: {
      //线路车次正点统计
      ok1: function () {
        let time = '';
        if (this.formItem1.sj === '') {
          time = ''
        } else {
          time = this.$formatDate(this.formItem1.sj).substring(0, 7);
        }
        this.$getExcel(process.env.BASE_URL + this.$url.yyexportFgsxcyb + '?sj=' + time + '&dw=' + this.formItem1.dw + '&dcsm=' + this.formItem1.dcsm)
      },
      cancel1: function () {
        this.$Message.error('导出失败')
      },
      setPage1: function (current1) {
        this.formItem1.current = current1;
        this.getList1();
      },
      search1: function () {
        if (this.formItem1.sj === '') {
          this.formItem1.sj = ''
        } else {
          this.formItem1.sj = this.$formatDate(this.formItem1.sj).substring(0, 7);
        }
        this.getList1();
      },
      getList1: function () {
        this.$fetch(this.$url.getLineList, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无数据');
              this.totalPage1 = res.data.total;
              this.data10 = res.data.records;
            } else {
              this.totalPage1 = res.data.total;
              this.data10 = res.data.records;
            }
          })
      },


      //各公司与集团汇总
      ok2: function () {
        let time = '';
        if (this.formItem2.sj === '') {
          time = ''
        } else {
          time = this.$formatDate(this.formItem2.sj).substring(0, 7);
        }
        this.$getExcel(process.env.BASE_URL + this.$url.yyJtexportFgsxcyb + '?sj=' + time + '&dw=' + this.formItem2.dw + '&dcsm=' + this.formItem2.dcsm)
      },
      cancel2: function () {
        this.$Message.error('导出失败')
      },
      getList2: function () {
        this.$fetch(this.$url.getjthzList, this.formItem2)
          .then(res => {
            if (res.data.total === 0) {
              this.$Message.info('暂无数据')
              this.totalPage2 = res.data.total;
              this.data12 = res.data.records;
            } else {
              this.totalPage2 = res.data.total;
              this.data12 = res.data.records;
            }
          })
      },
      setPage2: function (current2) {
        this.formItem2.current = current2;
        this.getList2();
      },
      search2: function () {
        if (this.formItem2.sj === '') {
          this.formItem2.sj = ''
        } else {
          this.formItem2.sj = this.$formatDate(this.formItem2.sj).substring(0, 7);
        }
        this.getList2();
      },
      changes:function (name) {
        if(name==='name1'){
            this.getList1()
        }else{
            this.getList2()
        }
      }
    },
    mounted () {
      this.getList1();
    }
  }
</script>
