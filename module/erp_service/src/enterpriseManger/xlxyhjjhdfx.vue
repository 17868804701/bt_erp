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
    <div style="padding: 20px 0 10px 20px;border-bottom: 1px solid #eae9ec">
      <h2>线路效益和经济活动分析</h2>
    </div>
    <div v-if="$showMenu('线路效益和经济活动')">
      <Card style="padding-left: 15px;margin-top: 10px;">
        <Form :model="formItem" :label-width="80">
          <div class="search">
            <FormItem label="选择时间" style="margin: 0">
              <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                          class="text_width"></DatePicker>
            </FormItem>
            <FormItem label="选择季度" style="margin: 0">
              <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                <Option value="beijing">第一季度</Option>
                <Option value="shanghai">第二季度</Option>
                <Option value="shenzhen">第三季度</Option>
              </Select>
            </FormItem>
            <FormItem label="选择公司" style="margin: 0">
              <Select v-model="formItem.select1" :transfer="true" style="width: 195px;">
                <Option value="beijing">公交一公司</Option>
                <Option value="shanghai">公交二公司</Option>
                <Option value="shenzhen">公交三公司</Option>
              </Select>
            </FormItem>
            <div class="btn">
              <Modal
                v-model="modal1"
                title="填写导出说明">
                <div>
                  <FormItem label="填写导出说明">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请填写导出说明"></Input>
                  </FormItem>
                </div>
              </Modal>
            </div>
          </div>
          <div style="width: 100%;justify-content: center;display: flex;margin-top: 10px;">
            <ButtonGroup>
              <Button type="primary" @click="search2" style="margin-right: 3px;"><Icon type="search"></Icon>  搜索</Button>
              <Button type="primary" icon="android-download" @click="modal1=true">导出</Button>
            </ButtonGroup>
          </div>
        </Form>
      </Card>
      <Table :columns="columns12" :data="data12" border height="500" style="margin-top: 10px;" size="small"></Table>
    </div>
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
          select1: '',
          textarea:'',
          date:''
        },
        columns12: [
          {
            title: '单位',
            key: 'dww',
            width:100,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '线路名称',
            key: 'xlmc',
            width:100,
            align: 'center',
          }, {
            title: '行车次数',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '运营里程',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '客运量',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '收入',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '每车次客运量',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '每公里收入（元/百公里）',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '百公里成本（元/百公里）',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          }
        ],
        data12: [],



        columns10: [
          {
            title: '集团合计',
            key: 'jthj',
            width:100,
            align: 'center',
            fixed: 'left',
          },
          {
            title: '线路名称',
            key: 'xlmc',
            width:100,
            align: 'center',
          }, {
            title: '行车次数',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '运营里程',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '客运量',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '收入',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '每车次客运量',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '每公里收入（元/百公里）',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          },
          {
            title: '百公里成本（元/百公里）',
            key: 'tbrc',
            width:100,
            align: 'center',
            children:[
              {
                title: '本期',
                key: 'dw',
                width:100,
                align: 'center',
              },   {
                title: '上年同期',
                key: 'dw',
                width:100,
                align: 'center',
              }, {
                title: '±%',
                key: 'dw',
                width:100,
                align: 'center',
              },
            ]
          }
        ],
        data10: [],
      }
    },
    methods: {},
    mounted () {
      const data = [];
      for (let i = 1; i <7; i++) {
        data.push({
          jthj:i+'公司合计',
          dw:'51551',
          xlmc:i+'路公交',
          dww:'51551',
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


      const data2 = [];
      for (let i = 1; i < 10; i++) {
        data2.push({
          key: i,
          name: 'John Brown',
          xlmc:i+'路公交',
          dww: '第'+i+'公司',
          age: i + 1,
          dw:'1984',
          street: 'Lake Park',
          building: 'C',
          door: 2035,
          caddress: 'Lake Street 42',
          cname: 'SoftLake Co',
          gender: 'M',
        });
      }
      this.data12 = data2;
    }
  }
</script>
