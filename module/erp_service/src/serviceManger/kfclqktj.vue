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
    <h2>客服处理情况报表统计</h2>
    <Tabs value="name1">
      <TabPane label="投诉情况分类汇总表" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">导入</Button>
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data10" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="分公司投诉情况分类汇总表" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">导入</Button>
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns12" :data="data12" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="客服处理情况报表统计" name="name3">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">导入</Button>
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns13" :data="data13" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
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
          date:''
        },
        columns11: [
          {
            title: '时间',
            key: 'sj',
            width:140,
            align: 'center',

          },
          {
            title: '项目',
            key: 'sj',
            width:140,
            align: 'center',
            children:[
              {
                title: '到站不停车',
                key: 'dzbtc',
                width:140,
                align: 'center',
              },  {
                title: '拒载',
                key: 'jz',
                width:140,
                align: 'center',
              },  {
                title: '服务态度差',
                key: 'fwtdc',
                width:140,
                align: 'center',
              }, {
                title: '脱线运营',
                key: 'txyy',
                width:140,
                align: 'center',
              }, {
                title: '摔夹事故',
                key: 'sjsg',
                width:140,
                align: 'center',
              }, {
                title: '刷IC卡方面',
                key: 'ic',
                width:140,
                align: 'center',
              }, {
                title: '其它',
                key: 'qt',
                width:140,
                align: 'center',
              },
            ]
          },  {
            title: '单位',
            key: 'ry',
            width:140,
            align: 'center',
            children:[
              {
                title: '一公司',
                key: 'qt',
                width:140,
                align: 'center',
              },  {
                title: '二公司',
                key: 'qt',
                width:140,
                align: 'center',
              },  {
                title: '三公司',
                key: 'qt',
                width:140,
                align: 'center',
              },  {
                title: '四公司',
                key: 'qt',
                width:140,
                align: 'center',
              },  {
                title: '五公司',
                key: 'qt',
                width:140,
                align: 'center',
              },  {
                title: '六公司',
                key: 'qt',
                width:140,
                align: 'center',
              },
            ]

          },  {
            title: '项目合计',
            key: 'hj',
            width:140,
            align: 'center',

          },  {
            title: '分公司投诉问题合计',
            key: 'tshj',
            width:140,
            align: 'center',

          },{
            title: '备注',
            key: 'yy',
            width:140,
            align: 'center',

          }
        ],
        data10: [],






        columns12: [
          {
            title: '时间',
            key: 'sj',
            width:140,
            align: 'center',

          },
          {
            title: '项目',
            key: 'sj',
            width:140,
            align: 'center',
            children:[
              {
                title: '到站不停车',
                key: 'dzbtc',
                width:140,
                align: 'center',
              },  {
                title: '拒载',
                key: 'jz',
                width:140,
                align: 'center',
              },  {
                title: '服务态度差',
                key: 'fwtdc',
                width:140,
                align: 'center',
              }, {
                title: '脱线运营',
                key: 'txyy',
                width:140,
                align: 'center',
              }, {
                title: '摔夹事故',
                key: 'sjsg',
                width:140,
                align: 'center',
              }, {
                title: '刷IC卡方面',
                key: 'ic',
                width:140,
                align: 'center',
              }, {
                title: '其它',
                key: 'qt',
                width:140,
                align: 'center',
              },
            ]
          },
          {
            title: '项目合计',
            key: 'hj',
            width:140,
            align: 'center',

          },  {
            title: '路别',
            key: 'lb',
            width:140,
            align: 'center',

          },  {
            title: '分公司投诉问题合计',
            key: 'tshj',
            width:140,
            align: 'center',

          },{
            title: '备注',
            key: 'yy',
            width:140,
            align: 'center',

          }
        ],
        data12: [],





        columns13: [
          {
            title: '时间',
            key: 'sj',
            align: 'center',

          },
          {
            title: '单位',
            key: 'dw',
            align: 'center',

          },
          {
            title: '分类及所占的比例',
            key: 'sj',
            align: 'center',
            children:[
              {
                title: '到站不停车',
                key: 'dzbtc',
                align: 'center',
              },  {
                title: '拒载',
                key: 'jz',
                align: 'center',
              },  {
                title: '服务态度差',
                key: 'fwtdc',
                align: 'center',
              }, {
                title: '其它',
                key: 'txyy',
                align: 'center',
              }, {
                title: '安全方面数量',
                key: 'sjsg',
                align: 'center',
              },
            ]
          },
          {
            title: '承办情况',
            key: 'cbqk',
            align: 'center',

          }
        ],
        data13: [],
      }
    },
    methods: {},
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          xh:i,
          gsmc:i+'公司',
          sj:'2018-10-1'+i,
          xl:'1'+i+'路',
          phone:'17868804701',
          type:'投诉',
          ry:'谢中华',
          zt:'已接收',
          qt:'1561',
          yy:'酒后驾车',
          cljg:'已处理',
          bz:'备注......',
          jlr:'谢中华',
          sy:'违规',
          dzbtc:'5',
          fwtdc:'458',
          lb:'706',
          ch:'150',
          jz:'45',
          key: i,
          sjsg:'48485',
          txyy:'48',
          ic:'15',
          hj:'2656',
          tshj:'15613',
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





      const data1 = [];
      for (let i = 0; i < 10; i++) {
        data1.push({
          xh:i,
          gsmc:i+'公司',
          sj:'2018-10-1'+i,
          xl:'1'+i+'路',
          phone:'17868804701',
          type:'投诉',
          ry:'谢中华',
          zt:'已接收',
          qt:'1561',
          yy:'酒后驾车',
          cljg:'已处理',
          bz:'备注......',
          jlr:'谢中华',
          sy:'违规',
          dzbtc:'5',
          fwtdc:'458',
          lb:'706',
          ch:'150',
          jz:'45',
          key: i,
          sjsg:'48485',
          txyy:'48',
          ic:'15',
          lb:'503',
          hj:'2656',
          tshj:'15613',
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
      this.data12 = data1;



      const data2 = [];
      for (let i = 0; i < 10; i++) {
        data2.push({
          xh:i,
          dw:i+'公司',
          sj:'2018-10-1'+i,
          xl:'1'+i+'路',
          phone:'17868804701',
          type:'投诉',
          ry:'谢中华',
          zt:'已接收',
          cbqk:'已办结',
          qt:'1561',
          yy:'酒后驾车',
          cljg:'已处理',
          bz:'备注......',
          jlr:'谢中华',
          sy:'违规',
          dzbtc:'5',
          fwtdc:'458',
          lb:'706',
          ch:'150',
          jz:'45',
          key: i,
          sjsg:'48485',
          txyy:'48',
          ic:'15',
          lb:'503',
          hj:'2656',
          tshj:'15613',
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
      this.data13 = data2;
    }
  }
</script>
