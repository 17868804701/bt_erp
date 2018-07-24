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
                <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="客服信息类别" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">一类</Option>
                  <Option value="shanghai">二类</Option>
                  <Option value="shenzhen">三类</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <Button type="primary" icon="android-download" class="search_btn">下派</Button>
              <Button type="primary" icon="android-upload" class="search_btn">上报</Button>
              <router-link to="/addKfxx">
                <Button type="primary" icon="plus" class="search_btn">添加</Button>
              </router-link>
              <div class="btn">
                <!--<Button type="primary" icon="android-upload">导入</Button>-->
                <Button type="primary" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <Table :columns="columns11" :data="data10" border height="470" style="margin-top: 10px;" size="small"></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <!--<TabPane label="分公司车次线路收入台账" name="name2">分公司车次线路收入台账</TabPane>-->
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
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          },
        ],
        data10: []
      }
    },
    methods: {},
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          xh:i,
          tssj:'2018-10-1'+i,
          xl:'1'+i+'路',
          phone:'17868804701',
          type:'投诉',
          zt:'已接收',
          cljg:'已处理',
          bz:'备注......',
          jlr:'谢中华',
          sy:'违规',
          lb:'--',
          ch:'150',
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
      this.data10 = data;
    }
  }
</script>
