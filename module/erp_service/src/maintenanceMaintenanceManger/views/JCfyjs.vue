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
    <Tabs value="name1">
      <TabPane label="月份检测费用结算" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0 0 0px 0">
                <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="车自编号" style="margin: 0 0 0px 0">
                <Input v-model="formItem.input" placeholder="车自编号" class="text_width"/>
              </FormItem>
              <FormItem label="车牌号" style="margin: 0 0 0px 0">
                <Input v-model="formItem.input" placeholder="车牌号" class="text_width"/>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="android-download">导出Excel</Button>
              </FormItem>
            </div>
          </Form>
        </Card>
        <Table :columns="columns1" :data="data1" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="季度检测费用结算" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择年份" style="margin: 0 0 0px 0">
                <DatePicker type="year" placeholder="选择年份" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="季度" style="margin: 0 0 0px 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">第一季度</Option>
                  <Option value="shanghai">第二季度</Option>
                  <Option value="shenzhen">第三季度</Option>
                </Select>
              </FormItem>
              <!--<FormItem label="车自编号" style="margin: 0 0 0px 0">-->
                <!--<Input v-model="formItem.input" placeholder="车自编号" class="text_width"/>-->
              <!--</FormItem>-->
              <!--<FormItem label="车牌号" style="margin: 0 0 0px 0">-->
                <!--<Input v-model="formItem.input" placeholder="车牌号" class="text_width"/>-->
              <!--</FormItem>-->
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="android-download">导出Excel</Button>
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
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        formItem: {
          input: '',
          select: '',
          date: ''
        },
        columns1: [
          {
            title: '序号',
            key: 'xh'
          },
          {
            title: '自编号',
            key: 'zbh'
          },
          {
            title: '检测时间',
            key: 'jcsj'
          },
          {
            title: '牌照号',
            key: 'pzh'
          },
          {
            title: '80L钢瓶支数',
            key: 'bz',
            align:'center',
            children:[
              {
                title: '支数',
                key: 'zs'
              },  {
                title: '单价',
                key: 'dj'
              },  {
                title: '金额',
                key: 'je'
              },
            ]
          },
          {
            title: '120L钢瓶支数',
            key: 'bz',
            align:'center',
            children:[
              {
                title: '支数',
                key: 'zs'
              },  {
                title: '单价',
                key: 'dj'
              },  {
                title: '金额',
                key: 'je'
              },
            ]
          },
          {
            title: '合计',
            align:'center',
            children:[
              {
                title: '总支数',
                key: 'zs'
              },  {
                title: '金额',
                key: 'je'
              },
            ]
          }
        ],
        data1: [],








        columns2: [
          {
            title: '月份',
            key: 'yf'
          },
          {
            title: '台次',
            key: 'tc'
          },
          {
            title: '120L(支)',
            key: 'sl1'
          },
          {
            title: '金额',
            key: 'je1'
          },
          {
            title: '80L(支)',
            key: 'sl2'
          },
          {
            title: '金额',
            key: 'je2'
          },
          {
            title: '50L(支)',
            key: 'sl3'
          },
          {
            title: '金额',
            key: 'je3'
          },
          {
            title: '总支数(支)',
            key: 'zzs'
          },
          {
            title: '合计（元）',
            key: 'hj'
          }
        ],
        data2: []
      }
    },
    methods: {},
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          mc: '钢瓶',
          tj: 18,
          zs:'25',
          je:'151320',
          pzh:'陕A1415',
          jcsj:'2018-10-10',
          dj: '120.8元',
          zbh:i+'541',
          xh:i,
          bz: '大客车用',
          time: '2016-10-03'
        });
      }
      this.data1 = data;





      const data1 = [];
      for (let i = 1; i < 4; i++) {
        data1.push({
          yf: i+'月份',
          tc: 18,
          sl1:'25',
          sl2:'120',
          sl3:'15',
          je1:'451',
          je2:'451',
          je3:'451',
          jcsj:'2018-10-10',
          dj: '120.8元',
          zbh:i+'541',
          xh:i,
          zzs:'1646',
          hj:'215821',
          bz: '大客车用',
          time: '2016-10-03'
        });
      }
      this.data2 = data1;
    }
  }
</script>
