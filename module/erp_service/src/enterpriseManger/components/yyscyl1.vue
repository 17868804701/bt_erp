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
    width: 100px;
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
    <Tabs v-model="currentTab" @on-click="clickTab">
      <TabPane v-if="$showMenu('车次里程耗油季度汇总')" label="车次里程耗油季度汇总" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem1" :label-width="80">
            <div class="search">
              <FormItem label="开始月份" style="margin: 0">
                <DatePicker
                  type="month"
                  placeholder="选择时间"
                  :transfer="true"
                  v-model="formItem1.startDate"
                  style="width:120px;"
                  @on-change="clickDate"></DatePicker>
              </FormItem>
              <div style="margin-left: 20px;">
                -
              </div>
              <FormItem label="截至月份" style="margin: 0">
                <DatePicker
                  type="month"
                  placeholder="选择时间"
                  :transfer="true"
                  v-model="formItem1.endDate"
                  style="width:120px;"
                  @on-change="clickDate"></DatePicker>
              </FormItem>

              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem1.select" :transfer="true" style="width: 195px;">
                  <Option value="第一季度">第一季度</Option>
                  <Option value="第二季度">第二季度</Option>
                  <Option value="第三季度">第三季度</Option>
                  <Option value="第四季度">第四季度</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="requestData" v-has="'yyscysyl_cclcjdhz_chaxun'">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" v-has="'yyscysyl_cclcjdhz_daochu'">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentTab: 'name1',
        formItem1: {
          select: '',
          startDate: '',
          endDate: '',
        },
        formItem2: {
          select: '',
          startDate: '',
          endDate: '',
        },
        formItem3: {
          select: '',
          startDate: '',
          endDate: '',
        },
        tab1Data: [],
        tab2Data: [],
        tab3Data: [],

        columns11: [
          {
            title: '合计',
            key: 'hj',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '单位',
            key: 'dw',
            width:150,
            align: 'center',
          },     {
            title: '运营车数',
            key: 'yycs',
            width:150,
            align: 'center',
          }, {
            title: '月日历数',
            key: 'yrls',
            width:150,
            align: 'center',
          }, {
            title: '运营车日',
            key: 'yycr',
            width:150,
            align: 'center',
          }, {
            title: '占场车日',
            key: 'zccr',
            width:150,
            align: 'center',
          },{
            title: '完好车日',
            key: 'whcr',
            width:150,
            align: 'center',
          },{
            title: '工作车日',
            key: 'gzcr',
            width:150,
            align: 'center',
          },{
            title: '完好车率',
            key: 'whcl',
            width:150,
            align: 'center',
          },{
            title: '工作车率',
            key: 'gzcl',
            width:150,
            align: 'center',
          },{
            title: '行车次数',
            key: 'xccs',
            width:150,
            align: 'center',
          },{
            title: '行驶里程',
            key: 'xslc',
            width:150,
            align: 'center',
          },{
            title: '非营业里程',
            key: 'fyylc',
            width:150,
            align: 'center',
          },{
            title: '实耗油',
            key: 'shy',
            width:150,
            align: 'center',
          },{
            title: '定额油',
            key: 'dey',
            width:150,
            align: 'center',
          },{
            title: '较定额节超',
            key: 'jdejc',
            width:150,
            align: 'center',
          },{
            title: '百公里实耗',
            key: 'bglsh',
            width:150,
            align: 'center',
          }
        ],
        data10: [],


        columns12: [
          {
            title: '合计',
            key: 'hj',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '单位',
            key: 'dw',
            width:150,
            align: 'center',
          }, {
            title: '投币人次',
            key: 'tbrc',
            width:150,
            align: 'center',
          },{
            title: '团体包车',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '鹿城通IC卡人次',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '员工IC卡人次',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '敬老卡人次',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '其他IC卡人次',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: 'XX元月票IC卡人次',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '乘客人次合计',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '投币收入',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '团体包车收入',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '鹿城通IC卡收入',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: 'IC卡补贴收入',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '月票IC卡收入小计',
            key: 'ttbc',
            width:150,
            align: 'center',
          },{
            title: '收入总计',
            key: 'ttbc',
            width:150,
            align: 'center',
          },
        ],
        data12: [],


        columns13: [
          {
            title: '单位',
            key: 'dw',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '运营里程',
            key: 'yylc',
            width:150,
            align: 'center',
          }, {
            title: '实耗油',
            key: 'shy',
            width:150,
            align: 'center',
          },{
            title: '定额油',
            key: 'dey',
            width:150,
            align: 'center',
          },{
            title: '节超',
            key: 'jc',
            width:150,
            align: 'center',
          },{
            title: '实耗/百公里',
            key: 'sh',
            width:150,
            align: 'center',
          },{
            title: '定额/百公里',
            key: 'de',
            width:150,
            align: 'center',
          },{
            title: '国家定额油耗',
            key: 'gjdeyh',
            width:150,
            align: 'center',
          },{
            title: '较国家定额油耗节油',
            key: 'jgjdeyh',
            width:150,
            align: 'center',
          }
        ],
        data13: []
      }
    },
    methods: {
      clickDate() {
        console.log('选择了时间!');
        if (this.currentTab === 'name1') {
          console.log(this.formItem1);
        } else if (this.currentTab === 'name2') {
          console.log(this.formItem2);
        } else {
          console.log(this.formItem3);
        }
      },
      clickTab() {
        this.requestData();
      },
      requestTab1Data() {
        let params = {
          nian: '',
          startYue: '',
          endYue: '',
          jidu: '',
        }
        this.$fetch(this.$url.qygl_yyscyszl_cclchyJDFX, params)
        .then(res => {
          console.log(res);
        })
      },
      requestTab2Data() {
        let params = {
          nian: '',
          startYue: '',
          endYue: '',
          jidu: '',
        }
        this.$fetch(this.$url.qygl_yyscyszl_kylyzsr, params)
        .then(res => {
          console.log(res);
        })
      },
      requestTab3Data() {
        let params = {
          nian: '',
          startYue: '',
          endYue: '',
          jidu: '',
        }
        this.$fetch(this.$url.qygl_yyscyszl_cclchyYDFX, params)
        .then(res => {
          console.log(res);
        })
      },
      requestData() {
        if (this.currentTab === 'name1') {
          this.requestTab1Data();
        } else if (this.currentTab === 'name2') {
          this.requestTab2Data();
        } else {
          this.requestTab3Data();
        }
      }
    },
    mounted () {

    }
  }
</script>
