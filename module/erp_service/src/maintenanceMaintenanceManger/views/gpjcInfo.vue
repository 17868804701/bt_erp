<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding:15px 10px 10px 0px;
    width: 98%;
    margin-left: 1%;
    border-bottom: 1px solid #eae9ec;
  }
  .container h2 {
    margin-left: 15px;
  }
</style>
<template>
  <div>
    <div class="container">
      <h2>钢瓶检测详情 <router-link to="/GPCheckList"><Button type="primary" size="small"><<返回列表</Button></router-link></h2>
    </div>
    <Card style="width:98%;margin: 10px 1%">
      <p slot="title">登记详情</p>
      <div slot="extra">
        <Button type="primary" icon="edit"  size="small">修改</Button>
      </div>
      <div>
        <Form :model="formItem" :label-width="80">
          <div style="padding-left: 20px;display: flex;flex-wrap: wrap">
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
          </div>
        </Form>
      </div>
    </Card>
    <!--更换钢瓶-->
    <Modal
      v-model="modal1"
      width="320"
      title="更换钢瓶登记">
      <Form :model="formItem" :label-width="80">
        <FormItem label="钢瓶重量" style="margin: 0 0 10px 0">
          <Input v-model="formItem.input" placeholder="钢瓶重量" style="width: 195px;"/>
        </FormItem>
        <FormItem label="钢瓶体积" style="margin: 0 0 10px 0">
          <Input v-model="formItem.input" placeholder="钢瓶体积" style="width: 195px;"/>
        </FormItem>
        <FormItem label="瓶号" style="margin: 0 0 10px 0">
          <Input v-model="formItem.input" placeholder="瓶号" style="width: 195px;"/>
        </FormItem>
        <FormItem label="生产日期" style="margin: 0 0 10px 0">
          <DatePicker type="date" placeholder="生产日期" :transfer="true" v-model="formItem.date"
                      style="width: 195px;"></DatePicker>
        </FormItem>
      </Form>
    </Modal>


    <Card style="width:98%;margin: 10px 1%">
      <p slot="title">再装钢瓶详情</p>
      <div slot="extra">
        <Button type="primary" icon="plus" @click="modal1=true"  size="small">增加</Button>
      </div>
      <Table :columns="columns2" :data="data2" size="small" border style="margin-top: 10px;"></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </Card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1:false,
        formItem: {
          input: '',
          select: '',
          date:''
        },
//        钢瓶重量、体积、瓶号、生产日期
        columns2: [
          {
            title: '钢瓶重量',
            key: 'gpzl'
          },
          {
            title: '体积',
            key: 'tj'
          },
          {
            title: '瓶号',
            key: 'ph'
          },
          {
            title: '生产日期',
            key: 'scrq'
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
                    this.modal1=true
                    }
                  }
                }, '修改'),
              ]);
            }
          }
        ],
        data2: []
      }
    },
    methods: {},
    mounted () {
      const data1 = [];
      for (let i = 0; i < 10; i++) {
        data1.push({
          gpzl: '40kg',
          tj: '12L',
          ph: '1510'+i,
          bz: '大客车用',
          scrq:'2018-02-05',
          jcrq:'2018-02-04',
          zbh:'16468165',
          time: '2016-10-03'
        });
      }
      this.data2 = data1;
    }
  }
</script>
