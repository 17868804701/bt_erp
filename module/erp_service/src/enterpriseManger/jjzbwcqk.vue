<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
    <h2>经济指标完成情况</h2>
    </div>
    <Tabs value="name1" @on-click="clickTab">
      <TabPane label="经济指标完成情况（表一）" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem1" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem1.nian"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search1">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="daochu1">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data11" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="经济指标完成情况（表二）" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem2" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem2.nian"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search2">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="daochu2">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns12" :data="data12" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="各单位星级考核结果(表三)" name="name3">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns13" :data="data13" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="经济指标完成情况（表四）" name="name4">
        <Card style="padding-left: 15px;">
          <Form :model="formItem4" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem4.nian"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search4">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="daochu4">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns14" :data="data14" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="经济指标完成情况（表五）" name="name5">
        <Card style="padding-left: 15px;">
          <Form :model="formItem5" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem5.nian"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search5">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="daochu5">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns15" :data="data15" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          select1: '',
          date: ''
        },
        formItem5: {
          nian: '2018',
          yue: '08'
        },
        formItem4: {
          nian: '2018',
          yue: '08'
        },
        formItem2: {
          nian: '2018',
          yue: '08'
        },
        formItem1: {
          nian: '2018',
          yue: '08'
        },
        columns11: [
          {
            title: '单位/名称',
            key: 'mc',
            width: 150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jldw',
            width: 90,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '公交一公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh1',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj1',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl1',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq1',
                width: 100,
                align: 'center',
              },
            ]
          },
          {
            title: '公交二公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh2',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj2',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl2',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq2',
                width: 100,
                align: 'center',
              },
            ]
          }
          ,
          {
            title: '公交三公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh3',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj3',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl3',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq3',
                width: 100,
                align: 'center',
              },
            ]
          },
          {
            title: '公交四公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh4',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj4',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl4',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq4',
                width: 100,
                align: 'center',
              },
            ]
          },
          {
            title: '公交五公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh5',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj5',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl5',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq5',
                width: 100,
                align: 'center',
              },
            ]
          },
          {
            title: '公交六公司',
            width: 150,
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh6',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj6',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl6',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq6',
                width: 100,
                align: 'center',
              },
            ]
          }
        ],
        data11: [],

        columns12: [
          {
            title: '单位/指标名称',
            key: 'mc',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jldw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '修理公司',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh',
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl',
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq',
                align: 'center',
              },
            ]
          }
        ],
        data12: [],

        columns13: [
          {
            title: '单位',
            key: 'xj_dw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '利润（万元）',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'xj_jh',
                align: 'center',
              }, {
                title: '实际',
                key: 'xj_sj',
                align: 'center',
              }, {
                title: '±%',
                key: 'xj_add',
                align: 'center',
              }
            ]
          },
          {
            title: '得分率',
            key: 'mc',
            align: 'center',
            children: [
              {
                title: '本月',
                key: 'xj_by',
                align: 'center',
              },
              {
                title: '月平均得分',
                key: 'xj_avg',
                align: 'center',
              },
            ]
          },
        ],
        data13: [
          {
            xj_dw: '一公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          },
          {
            xj_dw: '二公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          },
          {
            xj_dw: '三公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          }
        ],

        columns14: [
          {
            title: '单位/名称',
            key: 'mc',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jldw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '公交合计',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jhSum',
                align: 'center',
              }, {
                title: '实际',
                key: 'sjSum',
                align: 'center',
              }, {
                title: '±%',
                key: 'zzlAvg',
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntqSum',
                align: 'center',
              }
            ]
          }
        ],
        data14:[],

        columns15: [
          {
            title: '名称',
            key: 'mc',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jldw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '长客总公司',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jh',
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                align: 'center',
              }, {
                title: '±%',
                key: 'zzl',
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq',
                align: 'center',
              }
            ]
          }
        ],
        data15: []
      }
    },
    methods: {
      list5:function () {
        this.$fetch(this.$url.ckgsList, this.formItem5)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
               this.data15 = res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search5: function () {
        if (this.formItem5.nian === '') {
          this.formItem5.nian = ''
          this.formItem5.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem5.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem5.nian).substring(5, 7)
          this.formItem5.nian = nian
          this.formItem5.yue = yue
        }
        console.log(this.formItem5)
        this.list5()
      },
      daochu5:function () {
        if (this.formItem5.nian === '') {
          this.formItem5.nian = ''
          this.formItem5.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem5.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem5.nian).substring(5, 7)
          this.formItem5.nian = nian
          this.formItem5.yue = yue
        }
        console.log(this.formItem5.nian)
        console.log(this.formItem5.yue)
        this.$getExcel(process.env.BASE_URL+this.$url.ckgsDaochu+'?nian='+this.formItem5.nian+'&yue='+this.formItem5.yue);
      },



      list4:function () {
        this.$fetch(this.$url.gjhjList, this.formItem4)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
              this.data14= res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search4: function () {
        if (this.formItem4.nian === '') {
          this.formItem4.nian = ''
          this.formItem4.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem4.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem4.nian).substring(5, 7)
          this.formItem4.nian = nian
          this.formItem4.yue = yue
        }
        console.log(this.formItem4)
        this.list4()
      },
      daochu4:function () {
        if (this.formItem4.nian === '') {
          this.formItem4.nian = ''
          this.formItem4.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem4.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem4.nian).substring(5, 7)
          this.formItem4.nian = nian
          this.formItem4.yue = yue
        }
        this.$getExcel(process.env.BASE_URL+this.$url.gjhjDaochu+'?nian='+this.formItem4.nian+'&yue='+this.formItem4.yue);
      },





      list2:function () {
        this.$fetch(this.$url.xlgsList, this.formItem2)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
              this.data12= res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search2: function () {
        if (this.formItem2.nian === '') {
          this.formItem2.nian = ''
          this.formItem2.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem2.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem2.nian).substring(5, 7)
          this.formItem2.nian = nian
          this.formItem2.yue = yue
        }
        console.log(this.formItem2)
        this.list2()
      },
      daochu2:function () {
        if (this.formItem2.nian === '') {
          this.formItem2.nian = ''
          this.formItem2.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem2.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem2.nian).substring(5, 7)
          this.formItem2.nian = nian
          this.formItem2.yue = yue
        }
        this.$getExcel(process.env.BASE_URL+this.$url.xlgsDaochu+'?nian='+this.formItem2.nian+'&yue='+this.formItem2.yue);
      },


      list1:function () {
        this.$fetch(this.$url.gjfgsList, this.formItem1)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
              this.data11= res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search1: function () {
        if (this.formItem1.nian === '') {
          this.formItem1.nian = ''
          this.formItem1.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem1.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem1.nian).substring(5, 7)
          this.formItem1.nian = nian
          this.formItem1.yue = yue
        }
        console.log(this.formItem1)
        this.list1()
      },
      daochu1:function () {
        if (this.formItem1.nian === '') {
          this.formItem1.nian = ''
          this.formItem1.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem1.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem1.nian).substring(5, 7)
          this.formItem1.nian = nian
          this.formItem1.yue = yue
        }
        this.$getExcel(process.env.BASE_URL+this.$url.gjfgsDaochu+'?nian='+this.formItem1.nian+'&yue='+this.formItem1.yue);
      },
      clickTab:function (name) {
        console.log(name)
        if(name==='name1'){
            this.list1()
        }else if(name==='name2'){
          this.list2()
        }else if(name==='name4'){
          this.list4()
        }else if(name==='name5') {
          this.list5()
        }
      }
    },
    mounted () {
      this.list1()
    }
  }
</script>
