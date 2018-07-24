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
    <h2>检测登记</h2>
    <Tabs value="name1">
      <TabPane label="检测费用设定" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择名称" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">钢瓶1</Option>
                  <Option value="shanghai">钢瓶2</Option>
                  <Option value="shenzhen">钢瓶3</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <FormItem label="" style="margin: 0">
                <Button type="primary" icon="plus" @click="modal1=true">新增</Button>
              </FormItem>

              <!--添加钢瓶类型-->
              <Modal
                v-model="modal1"
                width="320"
                title="添加检测费用设定">
                <Form :model="formItem" :label-width="80">
                  <FormItem label="名称" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="名称" class="text_width"/>
                  </FormItem>
                  <FormItem label="体积" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="体积" class="text_width"/>
                  </FormItem>
                  <FormItem label="单价" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="单价" class="text_width"/>
                  </FormItem>
                  <FormItem label="备注" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="备注" class="text_width"/>
                  </FormItem>
                  <FormItem label="选择年份" style="margin: 0 0 10px 0">
                    <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                                class="text_width"></DatePicker>
                  </FormItem>
                </Form>
              </Modal>
            </div>
          </Form>
        </Card>
        <Table :columns="columns1" :data="data1" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="钢瓶检测登记" name="name2">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <!--<FormItem label="选择名称" style="margin: 0">-->
                <!--<Select v-model="formItem.select" :transfer="true" style="width: 195px;">-->
                  <!--<Option value="beijing">钢瓶1</Option>-->
                  <!--<Option value="shanghai">钢瓶2</Option>-->
                  <!--<Option value="shenzhen">钢瓶3</Option>-->
                <!--</Select>-->
              <!--</FormItem>-->
              <!--<Button type="primary" icon="ios-search" class="search_btn">查询</Button>-->
              <Button type="primary" icon="plus" @click="modal2=true" style="margin-left: 20px;">进厂登记</Button>

              <!--进厂登记-->
              <Modal
                v-model="modal2"
                width="320"
                title="进厂登记">
                <Form :model="formItem" :label-width="80">
                  <FormItem label="单位名称" style="margin: 0 0 10px 0">
                    <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                      <Option value="beijing">一公司</Option>
                      <Option value="shanghai">二公司</Option>
                      <Option value="shenzhen">三公司</Option>
                    </Select>
                  </FormItem>
                  <FormItem label="车牌号" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="车牌号" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="自编号" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="自编号" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="车型" style="margin: 0 0 10px 0">
                    <Input v-model="formItem.input" placeholder="车型" style="width: 195px;"/>
                  </FormItem>
                  <FormItem label="检测日期" style="margin: 0 0 10px 0">
                    <DatePicker type="date" placeholder="本次检测日期" :transfer="true" v-model="formItem.date"
                                style="width: 195px;"></DatePicker>
                  </FormItem>
                  <FormItem label="接车日期" style="margin: 0 0 10px 0">
                    <DatePicker type="date" placeholder="接车日期" :transfer="true" v-model="formItem.date"
                                style="width: 195px;"></DatePicker>
                  </FormItem>
                </Form>
              </Modal>


              <!--<FormItem label="" style="margin: 0">-->
              <!--</FormItem>-->
            </div>
          </Form>
        </Card>
        <Table :columns="columns2" :data="data2" size="small" border style="margin-top: 10px;"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
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
            title: '名称',
            key: 'mc'
          },
          {
            title: '体积',
            key: 'tj'
          },
          {
            title: '单价',
            key: 'dj'
          },
          {
            title: '备注',
            key: 'bz'
          },
          {
            title: '增加时间',
            key: 'time'
          },
          {
            title: '操作',
            align: 'center',
            key: 'time',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
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
                }, '删除'),
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
                }, '修改')
              ]);
            }
          }
        ],
        data1: [],








        columns2: [
          {
            title: '单位名称',
            key: 'dwmc'
          },
          {
            title: '车牌号',
            key: 'cph'
          },
          {
            title: '自编号',
            key: 'zbh'
          },
          {
            title: '车型',
            key: 'cx'
          }, {
            title: '本次检测日期',
            key: 'bcjcrq'
          },{
            title: '接车日期',
            key: 'jcrq'
          },
          {
            title: '操作',
            align: 'center',
            key: 'time',
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
                      this.$router.push({path: '/gpjcInfo'});
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
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
                }, '删除')
              ]);
            }
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
          dj: '120.8元',
          bz: '大客车用',
          time: '2016-10-03'
        });
      }
      this.data1 = data;




      const data1 = [];
      for (let i = 0; i < 10; i++) {
        data1.push({
          dwmc: i+'单位',
          cph: '蒙B'+116518,
          cx: '客车',
          bz: '大客车用',
          bcjcrq:'2018-02-05',
          jcrq:'2018-02-04',
          zbh:'16468165',
          time: '2016-10-03'
        });
      }
      this.data2 = data1;
    }
  }
</script>
