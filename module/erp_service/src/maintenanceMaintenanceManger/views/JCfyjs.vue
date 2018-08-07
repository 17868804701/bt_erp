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
  <div class="container">
    <h2>检测费用结算</h2>
    <Tabs value="name1" @on-click="changes">
      <TabPane label="月份检测费用结算" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0 0 0px 0">
                <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.year"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="时间范围" style="margin: 0 0 0px 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.dateRange"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="车自编号" style="margin: 0 0 0px 0">
                <Input v-model="formItem.zbh" placeholder="车自编号" class="text_width"/>
              </FormItem>
              <FormItem label="车牌号" style="margin: 0 0 0px 0">
                <Input v-model="formItem.cph" placeholder="车牌号" class="text_width"/>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search_yf">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="android-download" @click="yjcfydc">导出Excel</Button>
              </FormItem>
            </div>
          </Form>
        </Card>
        <Table :columns="columns1" :data="data1" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="totalCount" show-total style="margin-top: 10px;" @on-change="setpPage"></Page>
      </TabPane>
      <TabPane label="季度检测费用结算" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem1" :label-width="80">
            <div class="search">
              <FormItem label="选择年份" style="margin: 0 0 0px 0">
                <DatePicker type="date" placeholder="选择年份" :transfer="true" v-model="formItem1.years"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="季度" style="margin: 0 0 0px 0">
                <Select v-model="formItem1.quarter" :transfer="true" style="width: 195px;">
                  <Option value="">全部</Option>
                  <Option value="第一季度">第一季度</Option>
                  <Option value="第二季度">第二季度</Option>
                  <Option value="第三季度">第三季度</Option>
                </Select>
              </FormItem>
              <FormItem label="车自编号" style="margin: 0 0 0px 0">
                <Input v-model="formItem1.zbh" placeholder="车自编号" class="text_width"/>
              </FormItem>
              <FormItem label="车牌号" style="margin: 0 0 0px 0">
                <Input v-model="formItem1.cph" placeholder="车牌号" class="text_width"/>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search_jd">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="android-download" @click="jdjcfydc">导出Excel</Button>
              </FormItem>
            </div>
          </Form>
        </Card>
        <Table :columns="columns2" :data="data2" size="small" border style="margin-top: 10px;"></Table>
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
        totalCount: 1,
        formItem: {
          year: '',
          dateRange: '',
          cph: '',
          zbh: '',
          month: '',
          currPage: 1,
          pageSize: 10
        },
        formItem1: {
          quarter: '',
          currPage: 1,
          pageSize: 10,
          years: '',
          cph: '',
          zbh: ''
        },
        columns1: [
          {
            title: '自编号',
            key: 'zbh'
          },
          {
            title: '检测时间',
            key: 'bcjcrq'
          },
          {
            title: '牌照号',
            key: 'cph'
          },
          {
            title: '80L钢瓶支数',
            key: 'bz',
            align: 'center',
            children: [
              {
                title: '支数',
                key: 'count80'
              }, {
                title: '单价',
                key: 'dj80'
              }, {
                title: '金额',
                key: 'amount80'
              },
            ]
          },
          {
            title: '120L钢瓶支数',
            key: 'bz',
            align: 'center',
            children: [
              {
                title: '支数',
                key: 'count120'
              }, {
                title: '单价',
                key: 'dj120'
              }, {
                title: '金额',
                key: 'amount120'
              },
            ]
          },
          {
            title: '合计',
            align: 'center',
            children: [
              {
                title: '总支数',
                key: 'allCount'
              }, {
                title: '金额',
                key: 'allAmount'
              },
            ]
          }
        ],
        data1: [],


        columns2: [
          {
            title: '月份',
            key: 'months'
          },
          {
            title: '台次',
            key: 'stage'
          },
          {
            title: '120L(支)',
            key: 'count120'
          },
          {
            title: '金额',
            key: 'amount120'
          },
          {
            title: '80L(支)',
            key: 'count80'
          },
          {
            title: '金额',
            key: 'amount80'
          },
          {
            title: '总支数(支)',
            key: 'allCount'
          },
          {
            title: '合计（元）',
            key: 'allAmount'
          }
        ],
        data2: []
      }
    },
    methods: {
//        季度检测费用结算
      jdjcfydc:function () {
        if (this.formItem1.years == '') {
          this.formItem1.years = ''
        } else {
          this.formItem1.years = this.$formatDate(this.formItem1.years).substring(0, 10)
        }

        this.$getExcel(process.env.BASE_URL + this.$url.jdjcfydc+'?years='+this.formItem1.years+'&quarter='+this.formItem1.quarter+'&cph='+this.formItem1.cph+'&zbh='+this.formItem1.zbh)
      },
//        月检测费用导出
      yjcfydc:function () {
        let params = {};
        for (let attr in this.formItem) {
          params[attr] = this.formItem[attr];
        }
        let timeArr = [];
        if (params.year === '') {
          params.year = '';
          params.month = ''
        } else {
          params.year = this.$formatDate(params.year).substring(0, 10);
          params.month = params.year;
        }
        if (params.dateRange[0] === '') {
          params.dateRange = '';
        } else {
          params.dateRange.map((item) => {
            timeArr.push(this.$formatDate(item).substring(0, 10));
          });
          params.dateRange = timeArr.toString();
        }

        this.$getExcel(process.env.BASE_URL + this.$url.yjcfydc+'?years='+params.years+'&month='+params.month+'&dateRange='+params.dateRange+'&cph='+params.cph+'&zbh='+params.zbh)
      },
      search_yf: function () {
        this.getList_yf()
      },
      search_jd: function () {
        this.jdjcfyList();
      },
      setpPage: function (current) {
        this.formItem.currPage = current
        this.getList_yf();
      },
      jdjcfyList: function () {

        if (this.formItem1.years == '') {
          this.formItem1.years = ''
        } else {
          this.formItem1.years = this.$formatDate(this.formItem1.years).substring(0, 10)
        }
        console.log(this.formItem1);
        this.$fetch(this.$url.jdjcfyjs, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.msg === 'success') {
              if (res.page.totalCount == 0) {
                this.$Message.info('暂无信息')
                this.data2 = res.page.list
                this.totalCount = res.page.totalCount
              } else {
                res.page.list.forEach(item => {
                  item.bcjcrq = DateTool.timesToDate(item.bcjcrq)
                });
                this.data2 = res.page.list
                this.totalCount = res.page.totalCount
              }
            }
          });
      },
      getList_yf: function () {
        let params = {};
        for (let attr in this.formItem) {
          params[attr] = this.formItem[attr];
        }
        let timeArr = [];
        if (params.year === '') {
          params.year = ''
          params.month = ''
        } else {
          params.year = this.$formatDate(params.year).substring(0, 10);
          params.month = params.year;
        }
        if (params.dateRange[0] === '') {
          params.dateRange = '';
        } else {
          params.dateRange.map((item) => {
            timeArr.push(this.$formatDate(item).substring(0, 10));
          });
          params.dateRange = timeArr.toString();
        }
        this.$fetch(this.$url.yfjcfyjs, params)
          .then(res => {
//            console.log(res);
            if (res.msg === 'success') {
              if (res.page.totalCount == 0) {
                this.$Message.info('暂无信息')
                this.data1 = res.page.list
                this.totalCount = res.page.totalCount
              } else {
                res.page.list.forEach(item => {
                  item.bcjcrq = DateTool.timesToDate(item.bcjcrq)
                });
                this.data1 = res.page.list
                this.totalCount = res.page.totalCount
              }
            }
          });
      },
      changes:function (name) {
        if(name=='name1'){
          this.getList_yf();
        }else {
          this.jdjcfyList();
        }
      }
    },
    mounted () {
      this.getList_yf();
    }
  }
</script>
