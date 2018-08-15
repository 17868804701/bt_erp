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
        <Card style="padding-left: 15px;">
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
        <div style="display: flex;justify-content: space-between">
          <span style="margin-top: 10px;">指标名称：线路收入、车次（集团公司）</span>
          <span style="margin-top: 10px;">2018年</span>
          <span style="margin-top: 10px;margin-right: 30px;">计算单位：立方米</span>
        </div>
        <Table :columns="columns11" :data="data10" border height="560" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane label="分公司车次线路收入台账" name="name2">

        <Card style="padding-left: 15px;">
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
        <div style="display: flex;justify-content: space-between">
          <span style="margin-top: 10px;">指标名称：线路收入、车次（公交一公司）</span>
          <span style="margin-top: 10px;">2018年</span>
          <span style="margin-top: 10px;margin-right: 30px;">计算单位：立方米</span>
        </div>
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
            title: '项目/月别',
            key: 'xmlb',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '客运量（人次）',
            key: 'jldw',
            width:150,
            align: 'center',
            children:[
              {
                title: '本年普票',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '±%',
                key: 'nf',
                width:150,
                align: 'center',
              },
            ]
          },
          {
            title: '普票收入（元）',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡优惠后金额',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡补贴',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },{
                title: '±%',
                key: 'nf',
                width:150,
                align: 'center',
              },
            ]
          },
          {
            title: '行驶车次（次）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '±%',
                key: 'qnxslc',
                width:150,
                align: 'center',
              }
            ]
          },
        ],
        data10: [
          {xmlb:'全年合计', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'上半年小计', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'一月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'二月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'三月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'四月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'五月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'六月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'七月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'八月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'九月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十一月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十二月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
        ],


        columns12: [
          {
            title: '项目/月别',
            key: 'xmlb',
            width:150,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '客运量（人次）',
            key: 'jldw',
            width:150,
            align: 'center',
            children:[
              {
                title: '本年普票',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'nf',
                width:150,
                align: 'center',
              },
              {
                title: '±%',
                key: 'nf',
                width:150,
                align: 'center',
              },
            ]
          },
          {
            title: '普票收入（元）',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'bnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡优惠后金额',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年IC卡补贴',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },{
                title: '±%',
                key: 'nf',
                width:150,
                align: 'center',
              },
            ]
          },
          {
            title: '行驶车次（次）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '去年',
                key: 'qnxslc',
                width:150,
                align: 'center',
              },
              {
                title: '±%',
                key: 'qnxslc',
                width:150,
                align: 'center',
              }
            ]
          },
        ],
        data12: [
          {xmlb:'全年合计', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'上半年小计', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'一月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'二月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'三月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'四月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'五月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'六月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'七月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'八月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'九月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十一月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
          {xmlb:'十二月', nf:'22144', bnxslc:'154684', qnxslc:'416846'},
        ]
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
