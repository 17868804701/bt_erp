<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        电能消耗管理  <span style="color: red;font-size: 12px;margin-left: 20px;">集团电能消耗接口报错</span>
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="分公司电能消耗统计" name="name1">
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
        <TabPane label="集团电能消耗统计" name="name2">
          <Card style="padding-left: 15px;">
            <Form :model="formItem1" :label-width="80">
              <div class="search">

                <FormItem label="选择时间" style="margin: 0">
                  <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem1.date"
                              class="text_width"></DatePicker>
                </FormItem>
                <FormItem label="选择线路" style="margin: 0">
                  <Select v-model="formItem1.select" :transfer="true" style="width: 195px;">
                    <Option value="beijing">1路</Option>
                    <Option value="shanghai">2路</Option>
                    <Option value="shenzhen">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="选择公司" style="margin: 0">
                  <Select v-model="formItem1.select" :transfer="true" style="width: 195px;">
                    <Option value="beijing">公交一公司</Option>
                    <Option value="shanghai">公交二公司</Option>
                    <Option value="shenzhen">公交三公司</Option>
                  </Select>
                </FormItem>
                <FormItem label="车牌号" style="margin: 0">
                  <Input v-model="formItem1.input" placeholder="车牌号" class="text_width"/>
                </FormItem>
                <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
                <div class="btn">
                  <Button type="primary" icon="android-download">导出Excel</Button>
                </div>
              </div>
            </Form>
          </Card>
          <Table :columns="columns12" :data="data12" border height="500" style="margin-top: 10px;" size="small"></Table>
          <Page :total="100" show-total style="margin-top: 10px;"></Page>
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
        formItem: {
          current: 1,
          size: 10,
          tjsj: '',
          dw: '',
          lb: '',
          cph: ''
        },
        formItem1: {},
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
            key: 'fgs',
            align: 'center',
            width: 100,
          },
          {
            title: '路别',
            key: 'lubie',
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
                key: 'age',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '营业',
                key: 'age',
                align: 'center',
                width: 150,
                sortable: false
              }, {
                title: '非营业',
                key: 'age',
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
                key: 'age',
                align: 'center',
                width: 160,
                sortable: false
              },
              {
                title: '定额消耗',
                key: 'age',
                align: 'center',
                width: 160,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'jiechao',
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
      }
    },
    mounted () {
      this.list1()


      const data12 = [];
      for (let i = 1; i < 11; i++) {
        data12.push({
          xh: i,
          fgs: '公交' + i + '公司',
          zbh: i + '-117' + i + '号',
          cph: '蒙B68' + i + '04',
          jiechao: i * 12564 - 11252,
          lubie: i + 200 + '路',
          gzcr: i * 10521 + 156144,
          xccs: i * 4521 + 156144,
          key: i,
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
      this.data12 = data12;
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

