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
  <div class="container">
    <h2>客服信息列表</h2>
    <Tabs value="name1">
      <TabPane label="客服信息登记列表" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="110">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.startTime"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="投诉类别" style="margin-bottom: 0px" prop="tslb">
                <Select v-model="formItem.tslb" :transfer="true" style="width: 195px;">
                  <Option value="">全部</Option>
                  <Option value="DZBTC">到站不停车</Option>
                  <Option value="JZ">拒载</Option>
                  <Option value="DJG">大间隔</Option>
                  <Option value="FWTDC">服务态度差 </Option>
                  <Option value="TXYY">脱线运营</Option>
                  <Option value="SJSG">摔夹事故</Option>
                  <Option value="ICKFM">刷IC卡方面</Option>
                  <Option value="QT">其他</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search1">查询</Button>
              <router-link to="/addKfxx">
                <Button type="primary" icon="plus" class="search_btn">添加</Button>
              </router-link>
              <div class="btn">
                <Button type="primary" icon="android-download">导出Excel</Button>
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
                <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem1.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="客服信息类别" style="margin: 0">
                <Select v-model="formItem1.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">普通事件</Option>
                  <Option value="shanghai">疑难性事件</Option>
                  <Option value="shenzhen">责任性事件</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <Button type="primary" icon="android-download" class="search_btn">批量处理</Button>
              <div class="btn">
                <!--<Button type="primary" icon="android-upload">导入</Button>-->
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns12" :data="data12" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>


      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import * as DateTool from '../../utils/DateTool'
  export default {
    data () {
      return {
        formItem: {
          current:1,
          size:10,
          tslb: '',
          startTime:'',
          endTime:''
        },
        totalPage:0,
        formItem1:{

        },
        columns11: [
          {
            title: '投诉时间',
            key: 'tssj',
            align: 'center',
            width: 120,
          },  {
            title: '线路',
            key: 'xl',
            align: 'center',
            width: 120,
          },  {
            title: '车号',
            key: 'ch',
            align: 'center',
            width: 120,
          },{
            title: '投诉人姓名',
            key: 'tsr',
            align: 'center',
            width: 120,
          },{
            title: '联系电话',
            key: 'lxdh',
            align: 'center',
            width: 120,
          },{
            title: '类别',
            key: 'tslb',
            align: 'center',
            width: 120,
          },{
            title: '来电/来访',
            key: 'lfxs',
            align: 'center',
            width: 120,
          },{
            title: '事由',
            key: 'sy',
            align: 'center',
            width: 260,
          },{
            title: '记录人',
            key: 'jlr',
            align: 'center',
            width: 120,
          },{
            title: '状态',
            key: 'zt',
            align: 'center',
            width: 120,
          },{
            title: '处理结果',
            key: 'cljg',
            align: 'center',
            width: 120,
          },{
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 120,
          },{
            title: '事件类别',
            key: 'sjlb',
            align: 'center',
            width: 120,
          },{
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
                      this.show(params.index)
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
            align: 'center'
          },
          {
            title: '序号',
            key: 'xh',
            align: 'center',
            width: 100,
          },
          {
            title: '投诉时间',
            key: 'tssj',
            align: 'center',
            width: 120,
          },  {
            title: '线路',
            key: 'xl',
            align: 'center',
            width: 120,
          },  {
            title: '车号',
            key: 'ch',
            align: 'center',
            width: 120,
          },{
            title: '投诉人姓名',
            key: 'name',
            align: 'center',
            width: 120,
          },{
            title: '联系电话',
            key: 'phone',
            align: 'center',
            width: 120,
          },{
            title: '类别',
            key: 'lb',
            align: 'center',
            width: 120,
          },{
            title: '来电/访问',
            key: 'type',
            align: 'center',
            width: 120,
          },{
            title: '事由',
            key: 'sy',
            align: 'center',
            width: 260,
          },{
            title: '记录人',
            key: 'jlr',
            align: 'center',
            width: 120,
          },{
            title: '状态',
            key: 'zt',
            align: 'center',
            width: 120,
          },{
            title: '处理结果',
            key: 'cljg',
            align: 'center',
            width: 120,
          },{
            title: '备注',
            key: 'bz',
            align: 'center',
            width: 120,
          },{
            title: '时间类别',
            key: 'sjlb',
            align: 'center',
            width: 120,
          },{
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
                      this.show(params.index)
                    }
                  }
                }, '修改'),
              ]);
            }
          },
        ],
        data12: []
      }
    },
    methods: {
//        客服信息列表
        list:function () {
          this.$fetch(this.$url.kfxxList,this.formItem)
            .then(res => {
             console.log(res);
              if(res.data.total===0){
                  this.$Message.info('暂无数据');
                  this.data10 = res.data.records;
                  this.totalPage = res.data.total;
              }else {
                  res.data.records.forEach(item => {
                    item.tssj = DateTool.timesToDate(item.tssj)
                  });
                  this.data10 = res.data.records;
                  this.totalPage = res.data.total;
              }
            })
        },
      search1:function () {
              if(this.formItem.startTime[0]===''){
                this.list()
              }else {
                let start = DateTool.timesToDate(this.formItem.startTime[0]);
                let end =  DateTool.timesToDate(this.formItem.startTime[1]);
                this.formItem.startTime = start;
                this.formItem.endTime = end;
                this.list()
              }
      },
      setp:function (current) {
        this.totalPage = current;
        this.list();
      }
    },
    mounted () {
        this.list()
    }
  }
</script>
