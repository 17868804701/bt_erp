<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        电能消耗管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;" @on-click="tabsChange">
        <TabPane v-if="$showMenu('分公司电能消耗统计')" label="分公司电能消耗统计" name="name1">
          <Card style="padding-left: 15px;">
            <Form :model="formItem" :label-width="80">
              <div class="search">
                <FormItem label="选择时间" style="margin: 0">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem.tjsj"
                              class="text_width"></DatePicker>
                </FormItem>
                <FormItem label="选择线路" style="margin: 0">
                  <Select v-model="formItem.lb" :transfer="true" style="width: 195px;">
                    <Option value="1路">1路</Option>
                    <Option value="2路">2路</Option>
                    <Option value="3路">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="选择公司" style="margin: 0">
                  <Select v-model="formItem.dw" :transfer="true" style="width: 195px;">
                    <Option value="beijing">公交一公司</Option>
                    <Option value="shanghai">公交二公司</Option>
                    <Option value="shenzhen">公交三公司</Option>
                  </Select>
                </FormItem>
                <FormItem label="车牌号" style="margin: 0">
                  <Input v-model="formItem.cph" placeholder="车牌号" class="text_width"/>
                </FormItem>
                <Button type="primary" icon="ios-search" class="search_btn" @click="chaxun1">查询</Button>
                <Button type="primary" icon="android-download" style="margin-left: 20px;" @click="daochu1">导出Excel
                </Button>
                <div class="btn">
                </div>
              </div>
            </Form>
          </Card>
          <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
          <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setpPage1"></Page>
        </TabPane>
        <TabPane v-if="$showMenu('集团电能消耗统计')" label="集团电能消耗统计" name="name2">
          <Card style="padding-left: 15px;">
            <Form :model="formItem1" :label-width="80">
              <div class="search">
                <FormItem label="选择时间" style="margin: 0">
                  <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem1.tjsj"
                              class="text_width"></DatePicker>
                </FormItem>
                <FormItem label="选择线路" style="margin: 0">
                  <Select v-model="formItem1.lb" :transfer="true" style="width: 195px;">
                    <Option value="1路">1路</Option>
                    <Option value="2路">2路</Option>
                    <Option value="3路">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="选择公司" style="margin: 0">
                  <Select v-model="formItem1.dw" :transfer="true" style="width: 195px;">
                    <Option value="公交一公司">公交一公司</Option>
                    <Option value="公交二公司">公交二公司</Option>
                    <Option value="公交三公司">公交三公司</Option>
                  </Select>
                </FormItem>
                <FormItem label="车牌号" style="margin: 0">
                  <Input v-model="formItem1.cph" placeholder="车牌号" class="text_width"/>
                </FormItem>
                <Button type="primary" icon="ios-search" class="search_btn" @click="chaxun2">查询</Button>
                  <Button type="primary" icon="android-download" style="margin-left: 20px;" @click="daochu2">导出Excel</Button>
              </div>
            </Form>
          </Card>
          <Table :columns="columns12" :data="data12" border height="500" style="margin-top: 10px;" size="small"></Table>
          <Page :total="totalPage1" show-total style="margin-top: 10px;" @on-change="setpPage2"></Page>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        totalPage: 1,
        totalPage1: 1,
        formItem: {
          current: 1,
          size: 10,
          tjsj: '',
          dw: '',
          lb: '',
          cph: ''
        },
        formItem1: {
          current: 1,
          size: 10,
          tjsj: '',
          dw: '',
          lb: '',
          cph: ''
        },
        columns11: [
          {
            title: '路别',
            key: 'lb',
            align: 'center',
            width: 100,
          },
          {
            title: '自编号',
            key: 'zbh',
            align: 'center',
            width: 100,
          },
          {
            title: '车牌号',
            key: 'cph',
            align: 'center',
            width: 100,
          },
          {
            title: '工作车日',
            key: 'gzcr',
            align: 'center',
            width: 120,
          },
          {
            title: '行车次数',
            key: 'xccs',
            align: 'center',
            width: 120,
          },
          {
            title: '行驶里程（公里）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '合计',
                key: 'hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '营业',
                key: 'yylc',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '非营业',
                key: 'fyylc',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '电能消耗（度）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实际消耗',
                key: 'sjxh',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '定额消耗',
                key: 'dexh',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'jc',
                align: 'center',
                width: 150,
                sortable: false
              },
            ]
          }
        ],
        data10: [],


        columns12: [
          {
            title: '分公司',
            key: 'dw',
            align: 'center',
            width: 100,
          },
          {
            title: '路别',
            key: 'lb',
            align: 'center',
            width: 100,
          },
          {
            title: '工作车日',
            key: 'gzcr',
            align: 'center',
            width: 120,
          },
          {
            title: '行车次数',
            key: 'xccs',
            align: 'center',
            width: 120,
          },
          {
            title: '行驶里程（公里）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '合计',
                key: 'hj',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '营业',
                key: 'yylc',
                align: 'center',
                width: 150,
                sortable: false
              }, {
                title: '非营业',
                key: 'fyylc',
                align: 'center',
                width: 150,
                sortable: false
              },
            ]
          },
          {
            title: '电能消耗（度）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实际消耗',
                key: 'sjxh',
                align: 'center',
                width: 160,
                sortable: false
              },
              {
                title: '定额消耗',
                key: 'dexh',
                align: 'center',
                width: 160,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'jc',
                align: 'center',
                width: 160,
                sortable: false
              },
            ]
          }
        ],
        data12: [],
      }
    },
    methods: {
      list1: function () {
        this.$fetch(this.$url.fgsdnList, this.formItem)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无信息')
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            } else {
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            }
          })
      },
      setpPage1: function (current) {
        console.log(current);
        this.formItem.current = current;
        this.list1()
      },
      chaxun1: function () {
        if (this.formItem.tjsj == '') {
          this.formItem.tjsj = ''
        } else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0, 7)
        }
        console.log(this.formItem)
        this.list1()
      },
      daochu1: function () {
        if (this.formItem.tjsj == '') {
          this.formItem.tjsj = ''
        } else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0, 7)
        }
        this.$getExcel(process.env.BASE_URL + this.$url.daochufgsdnList + '?tjsj=' + this.formItem.tjsj+'&dw='+this.formItem.dw+'&lb='+this.formItem.lb+'&cph='+this.formItem.cph )
      },



      list2:function () {
        this.$fetch(this.$url.jtdnList, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.data.total === 0) {
              this.$Message.info('暂无信息')
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            } else {
              this.data12 = res.data.records;
              this.totalPage1 = res.data.total;
            }
          })
      },


      setpPage2: function (current) {
        console.log(current);
        this.formItem1.current = current;
        this.list2()
      },

      chaxun2:function () {
        console.log(this.formItem1)
        if(this.formItem1.tjsj==''){
            this.formItem1.tjsj=''
        }else {
            this.formItem1.tjsj = this.$formatDate(this.formItem1.tjsj).substring(0,7)
        }
        this.list2()
      },
      tabsChange:function (name) {
        if(name=='name1'){
            this.list1()
        }else {
            this.list2()
        }
      },
      daochu2:function () {
        if (this.formItem1.tjsj == '') {
          this.formItem1.tjsj = ''
        } else {
          this.formItem1.tjsj = this.$formatDate(this.formItem1.tjsj).substring(0, 7)
        }
        this.$getExcel(process.env.BASE_URL + this.$url.jtdnListdaochu + '?tjsj=' + this.formItem1.tjsj+'&dw='+this.formItem1.dw+'&lb='+this.formItem1.lb+'&cph='+this.formItem1.cph )
      }
    },
    mounted () {
      this.list1()
    }
  }
</script>


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

