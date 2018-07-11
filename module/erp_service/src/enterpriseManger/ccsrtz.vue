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
    <h2>车次线路收入台账</h2>
    <Tabs value="name1">
      <TabPane label="集团公司车次线路收入台账" name="name1">
        <Card>
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <!--<FormItem label="备用" style="margin: 0">-->
              <!--<Input v-model="formItem.input" placeholder="备用字段" class="text_width"/>-->
              <!--</FormItem>-->
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择年份" style="margin: 0">
                <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择公司" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">公交一公司</Option>
                  <Option value="shanghai">公交二公司</Option>
                  <Option value="shenzhen">公交三公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">打印</Button>
                <Button type="ghost" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <h4 style="margin-top: 10px;">指标名称：线路收入、收入（XX公司）</h4>
        <Table :columns="columns11" :data="data10" border height="560" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="分公司车次线路收入台账" name="name2">

        <Card>
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <!--<FormItem label="备用" style="margin: 0">-->
              <!--<Input v-model="formItem.input" placeholder="备用字段" class="text_width"/>-->
              <!--</FormItem>-->
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择年份" style="margin: 0">
                <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择公司" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">公交一公司</Option>
                  <Option value="shanghai">公交二公司</Option>
                  <Option value="shenzhen">公交三公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">打印</Button>
                <Button type="ghost" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <h4 style="margin-top: 10px;">指标名称：线路收入、收入（XX公司）</h4>
        <Table :columns="columns12" :data="data12" border height="560" style="margin-top: 10px;" size="small"></Table>
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
          date: ''
        },
        columns11: [
          {
            title: '年份',
            key: 'nf',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计量单位',
            key: 'jldw',
            width:150,
            align: 'center',
          },
          {
            title: '客运量',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnpp',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'bnick',
                width:150,
                align: 'center',
              }, {
                title: '本年小计',
                key: 'bnxj',
                width:150,
                align: 'center',
              }, {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '较去年节超',
                key: 'jqnjc',
                width:150,
                align: 'center',
              }
            ]
          },
          {
            title: '普票收入',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnpp1',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡收入优惠后金额',
                key: 'bnick1',
                width:150,
                align: 'center',
              }, {
                title: '本年IC卡补贴',
                key: 'bnickbt',
                width:150,
                align: 'center',
              }, {
                title: '本年小计',
                key: 'bnxj',
                width:150,
                align: 'center',
              }, {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '较去年节超',
                key: 'jqnjc',
                width:150,
                align: 'center',
              }
            ]
          },


          {
            title: '行驶车次',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bn',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '节超',
                key: 'jc',
                width:150,
                align: 'center',
              }
            ]
          },


          {
            title: '月别',
            align: 'center',
            children: [
              {
                title: '全年合计',
                key: 'qnhj',
                width:150,
                align: 'center',
              }, {
                title: '上半年小计',
                key: 'sbnxj',
                width:150,
                align: 'center',
              },
              {
                title: '第一季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '一月',
                    key: 'yiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '二月',
                    key: 'eryue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '三月',
                    key: 'sanyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第二季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '四月',
                    key: 'siyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '五月',
                    key: 'wuyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '六月',
                    key: 'liuyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第三季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '七月',
                    key: 'qiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '八月',
                    key: 'bayue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '九月',
                    key: 'jiuyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第四季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '十月',
                    key: 'shiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '十一月',
                    key: 'shiyiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '十二月',
                    key: 'shieryue',
                    width:150,
                    align: 'center',
                  },
                ]
              }
            ]
          }
        ],
        data10: [],


        columns12: [
          {
            title: '年份',
            key: 'nf',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计量单位',
            key: 'jldw',
            width:150,
            align: 'center',
          },
          {
            title: '客运量',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnpp',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'bnick',
                width:150,
                align: 'center',
              }, {
                title: '本年小计',
                key: 'bnxj',
                width:150,
                align: 'center',
              }, {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '较去年节超',
                key: 'jqnjc',
                width:150,
                align: 'center',
              }
            ]
          },
          {
            title: '普票收入',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnpp1',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡收入优惠后金额',
                key: 'bnick1',
                width:150,
                align: 'center',
              }, {
                title: '本年IC卡补贴',
                key: 'bnickbt',
                width:150,
                align: 'center',
              }, {
                title: '本年小计',
                key: 'bnxj',
                width:150,
                align: 'center',
              }, {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '较去年节超',
                key: 'jqnjc',
                width:150,
                align: 'center',
              }
            ]
          },


          {
            title: '行驶车次',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bn',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qn',
                width:150,
                align: 'center',
              }, {
                title: '节超',
                key: 'jc',
                width:150,
                align: 'center',
              }
            ]
          },


          {
            title: '月别',
            align: 'center',
            children: [
              {
                title: '全年合计',
                key: 'qnhj',
                width:150,
                align: 'center',
              }, {
                title: '上半年小计',
                key: 'sbnxj',
                width:150,
                align: 'center',
              },
              {
                title: '第一季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '一月',
                    key: 'yiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '二月',
                    key: 'eryue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '三月',
                    key: 'sanyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第二季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '四月',
                    key: 'siyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '五月',
                    key: 'wuyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '六月',
                    key: 'liuyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第三季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '七月',
                    key: 'qiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '八月',
                    key: 'bayue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '九月',
                    key: 'jiuyue',
                    width:150,
                    align: 'center',
                  },
                ]
              },
              {
                title: '第四季度',
                key: 'cname',
                width:150,
                align: 'center',
                children: [
                  {
                    title: '十月',
                    key: 'shiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '十一月',
                    key: 'shiyiyue',
                    width:150,
                    align: 'center',
                  },
                  {
                    title: '十二月',
                    key: 'shieryue',
                    width:150,
                    align: 'center',
                  },
                ]
              }
            ]
          }
        ],
        data12: []
      }
    },
    methods: {},
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          key: i,
          nf:'201'+i,
          jldw:'立方米',
          bnpp:'1451',
          bnick:'15645',
          bnxj:'115645',
          qn:'315645',
          jqnjc:'5645',
          bnpp1:'645',
          bnick1:'7784',
          bnickbt:'55564',
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
      this.data10 = data;


      const data2 = [];
      for (let i = 0; i < 10; i++) {
        data2.push({
          key: i,
          nf:'201'+i,
          jldw:'立方米',
          bnpp:'1451',
          bnick:'15645',
          bnxj:'115645',
          qn:'315645',
          jqnjc:'5645',
          bnpp1:'645',
          bnick1:'7784',
          bnickbt:'55564',
          name: 'John Brown',
          cname: 'SoftLake Co',
          gender: 'M',
        });
      }
      this.data12 = data2;
    }
  }
</script>
