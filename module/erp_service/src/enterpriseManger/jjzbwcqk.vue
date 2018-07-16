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
    <h2>经济指标完成情况</h2>
    <Tabs value="name1">
      <TabPane label="经济指标完成情况（表一）" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                  <Option value="shenzhen">第四季度</Option>
                </Select>
              </FormItem>
              <FormItem label="选择分公司" style="margin: 0">
                <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一公司</Option>
                  <Option value="shanghai">第二公司</Option>
                  <Option value="shenzhen">第三公司</Option>
                  <Option value="shenzhen">第四公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data11" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="经济指标完成情况（表二）" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                  <Option value="shenzhen">第四季度</Option>
                </Select>
              </FormItem>
              <FormItem label="选择分公司" style="margin: 0">
                <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一公司</Option>
                  <Option value="shanghai">第二公司</Option>
                  <Option value="shenzhen">第三公司</Option>
                  <Option value="shenzhen">第四公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
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
              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                  <Option value="shenzhen">第四季度</Option>
                </Select>
              </FormItem>
              <FormItem label="选择分公司" style="margin: 0">
                <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一公司</Option>
                  <Option value="shanghai">第二公司</Option>
                  <Option value="shenzhen">第三公司</Option>
                  <Option value="shenzhen">第四公司</Option>
                </Select>
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
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                  <Option value="shenzhen">第四季度</Option>
                </Select>
              </FormItem>
              <FormItem label="选择分公司" style="margin: 0">
                <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一公司</Option>
                  <Option value="shanghai">第二公司</Option>
                  <Option value="shenzhen">第三公司</Option>
                  <Option value="shenzhen">第四公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns14" :data="data14" border height="500" style="margin-top: 10px;" size="small"></Table>
      </TabPane>

      <TabPane label="经济指标完成情况（表五）" name="name5">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择季度" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                  <Option value="shenzhen">第四季度</Option>
                </Select>
              </FormItem>
              <FormItem label="选择分公司" style="margin: 0">
                <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一公司</Option>
                  <Option value="shanghai">第二公司</Option>
                  <Option value="shenzhen">第三公司</Option>
                  <Option value="shenzhen">第四公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
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
        columns11: [
          {
            title: '单位/名称',
            key: 'dwmc',
            width: 150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'dw',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '实际',
                key: 'sj',
                width: 100,
                align: 'center',
              }, {
                title: '±%',
                key: 'jh',
                width: 100,
                align: 'center',
              }, {
                title: '上年同期',
                key: 'jh',
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
            key: 'dw',
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
                key: 'add',
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntq',
                align: 'center',
              },
            ]
          }
        ],
        data12: [
          {
            mc: '一、总产值',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '其中工时收入',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '材料收入',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '二、总成本',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '其中：工资',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '材料费',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '三、利润总额',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '四、峻工交车质量',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '五、责任性返修',
            dw: '万元',
            jh: '15165',
            sj: '1215',
            add: '2.5%',
            sntq: '20.07'
          }, {
            mc: '备注',
          },
        ],


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
            key: 'xj_dw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'xj_dw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '公交合计',
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
              }, {
                title: '上年同期',
                key: 'xj_add',
                align: 'center',
              }
            ]
          }
        ],






        columns15: [
          {
            title: '',
            key: 'dw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jsdw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '长客总公司',
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
              }, {
                title: '上年同期',
                key: 'xj_sntq',
                align: 'center',
              }
            ]
          }
        ],
        data15:[
          {
            dw: '一、周转量',
            jsdw: '万吨（人）公里',
            xj_jh: '',
            xj_sj: '2292.3',
            xj_add: '',
            xj_sntq: '2545.54',
          },
          {
            dw: '二、运营收入',
            jsdw: '万元',
            xj_jh: '',
            xj_sj: '2292.3',
            xj_add: '',
            xj_sntq: '2545.54',
          },
          {
            dw: '三、行车责任事故频率',
            jsdw: '次/百万公里',
            xj_jh: '1.6',
            xj_sj: '0.00',
            xj_add: '100.00',
            xj_sntq: '3.54',
          }
        ]
      }
    },
    methods: {},
    mounted () {
      const data3 = [];
      for (let i = 1; i < 10; i++) {
        data3.push({
          key: i,
          dw:'万元',
//          dwmc:'第'+i+'公司',
          yylc:'15165',
          jh:'541.2',
          sj:'5.2',
          shy:'454',
          dey:'148948',
          jc:"468416",
          sh:'156456',
          de:'54651',
          gjdeyh:'54611151',
          jgjdeyh:'111154611151',
          name: 'John Brown',
          age: i + 1,
          street: 'Lake Park',
          building: 'C',
          door: 2035,
          caddress: 'Lake Street 42',
          cname: 'SoftLake Co',
          gender: 'M',
        });
      }
      this.data11 = data3;
    }
  }
</script>
