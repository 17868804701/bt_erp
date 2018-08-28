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
  <div>
    <div style="padding: 20px 0 10px 20px;">
    <h2>客服处理情况报表统计</h2>
    </div>
    <Tabs value="name1"  @on-click="changes">
      <TabPane v-if="$showMenu('投诉情况分类汇总表')" label="投诉情况分类汇总表" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="tsqkfl" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="tsqkfl.time"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search1">查询</Button>
              <div class="btn">
                <!--<Button type="primary" icon="android-upload">导入</Button>-->
                <Button type="primary" icon="android-download" @click="daochu1">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data11" border height="470" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane v-if="$showMenu('分公司投诉情况分类汇总表')" label="分公司投诉情况分类汇总表" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="fgstsqkfl" :label-width="80">
            <div class="search">
              <FormItem label="选择公司" style="margin: 0">
                <Select v-model="fgstsqkfl.bm" :transfer="true" style="width: 195px;">
                  <Option value="一公司">一公司</Option>
                  <Option value="二公司">二公司</Option>
                  <Option value="三公司">三公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search2">查询</Button>
              <div class="btn">
                <!--<Button type="primary" icon="android-upload">导入</Button>-->
                <Button type="primary" icon="android-download" @click="daochu2">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns12" :data="data12" border height="auto" style="margin-top: 10px;" size="small"></Table>
        <!--<Page :total="100" show-total style="margin-top: 10px;"></Page>-->
      </TabPane>
      <TabPane v-if="$showMenu('客服处理情况报表统计')" label="客服处理情况报表统计" name="name3">
        <Card style="padding-left: 15px;">
          <Form :model="kfxxtj" :label-width="80">
            <div class="search">
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="kfxxtj.time"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="search3">查询</Button>
              <div class="btn">
                <!--<Button type="primary" icon="android-upload">导入</Button>-->
                <Button type="primary" icon="android-download" @click="daochu3">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns13" :data="data13" border height="470" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tsqkfl: {
         time:''
        },
        fgstsqkfl:{
            bm:''
        },
        kfxxtj:{
            time:''
        },
        columns11: [
          {
            title: '单位/项目',
            key: 'bm',
            align: 'center',

          },
          {
            title: '到站不停车',
            key: 'dzbtcCount',
            align: 'center',
          },  {
            title: '拒载',
            key: 'jzCount',
            align: 'center',
          },  {
            title: '服务态度差',
            key: 'fwtdcCount',
            align: 'center',
          }, {
            title: '脱线运营',
            key: 'txyyCount',
            align: 'center',
          }, {
            title: '摔夹事故',
            key: 'sjsgCount',
            align: 'center',
          }, {
            title: '刷IC卡方面',
            key: 'ickfmCount',
            align: 'center',
          }, {
            title: '其它',
            key: 'qtCount',
            align: 'center',
          },
        ],
        data11: [],

        columns12: [
          {
            title: '路别/项目',
            key: 'xl',
            align: 'center',

          },
          {
            title: '到站不停车',
            key: 'dzbtcCount',
            align: 'center',
          },  {
            title: '拒载',
            key: 'jzCount',
            align: 'center',
          },  {
            title: '服务态度差',
            key: 'fwtdcCount',
            align: 'center',
          }, {
            title: '脱线运营',
            key: 'txyyCount',
            align: 'center',
          }, {
            title: '摔夹事故',
            key: 'sjsgCount',
            align: 'center',
          }, {
            title: '刷IC卡方面',
            key: 'ickfmCount',
            align: 'center',
          }, {
            title: '其它',
            key: 'qtCount',
            align: 'center',
          },
        ],
        data12: [],

        columns13: [
          {
            title: '单位/项目',
            key: 'bm',
            align: 'center',

          }, {
            title: '分类及所占比例',
            key: 'jz',
            align: 'center',
            children:[
              {
                title: '到站不停车',
                key: 'dzbtcCount',
                align: 'center',
              }, {
                title: '%',
                key: 'dzbtcBfb',
                align: 'center',
              }, {
                title: '大间隔',
                key: 'djgCount',
                align: 'center',
              }, {
                title: '%',
                key: 'djgBfb',
                align: 'center',
              }, {
                title: '拒载',
                key: 'jzCount',
                align: 'center',
              }, {
                title: '%',
                key: 'jzBfb',
                align: 'center',
              }, {
                title: '服务态度差',
                key: 'fwtdcCount',
                align: 'center',
              }, {
                title: '%',
                key: 'fwtdcBfb',
                align: 'center',
              }, {
                title: '其他',
                key: 'qtCount',
                align: 'center',
              }, {
                title: '%',
                key: 'qtBfb',
                align: 'center',
              }, {
                title: '安全方面',
                key: 'aqfmCount',
                align: 'center',
              }, {
                title: '%',
                key: 'aqfmBfb',
                align: 'center',
              },
            ],
          },
          {
            title: '承办情况',
            key: 'qt',
            align: 'center',
            children:[
              {
                title: '已办结',
                key: 'ybjtshj',
                align: 'center',
              },
              {
                title: '未办结',
                key: 'wbjtshj',
                align: 'center',
              },
            ]
          },
        ],
        data13: [],
      }
    },
    methods: {
        list1:function () {
          this.$fetch(this.$url.tsqkfl, this.tsqkfl)
            .then(res => {
              console.log(res);
              if(res.success===true){
                  if(res.data.length==0){
                      this.$Message.info('暂无数据');
                      this.data11 = res.data
                  }else {
                      this.data11 = res.data
                  }
              }
            })
        },
      search1:function () {
        if(this.tsqkfl.time===''){
          this.tsqkfl.time==''
        }else {
          this.tsqkfl.time = this.$formatDate(this.tsqkfl.time).substring(0,7);
        }
        this.list1();
      },
      daochu1:function () {
        if(this.tsqkfl.time===''){
          this.tsqkfl.time==''
        }else {
          this.tsqkfl.time = this.$formatDate(this.tsqkfl.time).substring(0,7);
        }
        this.$getExcel(process.env.BASE_URL + this.$url.tsqkflExport + '?time=' + this.tsqkfl.time)
      },

      list3:function () {
        this.$fetch(this.$url.kfxxtj, this.kfxxtj)
          .then(res => {
            if(res.success===true){
              if(res.data.length==0){
                this.$Message.info('暂无数据');
                this.data13 = res.data
              }else {
                this.data13 = res.data
              }
            }
          })
      },
      search3:function () {
        if(this.kfxxtj.time===''){
          this.kfxxtj.time==''
        }else {
          this.kfxxtj.time = this.$formatDate(this.kfxxtj.time).substring(0,7);
        }
        this.list3()
      },
      daochu3:function () {
        if(this.kfxxtj.time===''){
          this.kfxxtj.time==''
        }else {
          this.kfxxtj.time = this.$formatDate(this.kfxxtj.time).substring(0,7);
        }
        this.$getExcel(process.env.BASE_URL + this.$url.kfxxtjExport + '?time=' + this.kfxxtj.time)
      },




      list2:function () {
        this.$fetch(this.$url.fgstsqkfl, this.fgstsqkfl)
          .then(res => {
            if(res.success===true){
              if(res.data==null){
                this.$Message.info('暂无数据');
//                this.data12 = res.data
              }else {
                this.data12 = res.data
              }
            }
          })
      },
      search2:function () {
        this.list2();
      },
      daochu2:function () {
        this.$getExcel(process.env.BASE_URL + this.$url.fgstsqkflExport + '?bm=' + this.fgstsqkfl.bm)
      },
      changes:function (name) {
        if(name==='name1'){
            this.list1()
        }
        if(name==='name2'){
            this.list2()
        }
        if(name==='name3'){
            this.list3()
        }
      }
    },
    mounted () {
      this.list1();
    }
  }
</script>
