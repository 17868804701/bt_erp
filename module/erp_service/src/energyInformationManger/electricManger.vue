<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        电能消耗管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="分公司电能消耗统计" name="name1">
          <Form :model="formItem" :label-width="80">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                <Button type="primary" icon="ios-search">搜索</Button>
                <Button type="ghost" icon="android-download"
                        style="float: right;margin-right: 10px">导出Excel
                </Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
          <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
        </TabPane>
        <TabPane label="集团电能消耗统计" name="name2">
          <Form :model="formItem" :label-width="80">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                <Button type="primary" icon="ios-search">搜索</Button>
                <Button type="ghost" icon="android-download"
                        style="float: right;margin-right: 10px">导出Excel
                </Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
          <Table :columns="columns12" :data="data12" border height="500" style="margin-top: 10px;" size="small"></Table>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem:{
          date:''
        },
        columns11: [
          {
            title: '路别',
            key: 'lubie',
            align: 'center',
            width: 100,
          },
          {
            title: '序号',
            key: 'xh',
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
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '营业',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },{
                title: '非营业',
                key: 'age',
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
                key: 'age',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '定额消耗',
                key: 'age',
                align: 'center',
                width: 150,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'jiechao',
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
              },{
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
    mounted () {
      const data = [];
      for (let i = 1; i < 11; i++) {
        data.push({
          xh:i,
          zbh:i+'-117'+i+'号',
          cph:'蒙B68'+i+'04',
          jiechao:i*12564-11252,
          lubie:i+200+'路',
          gzcr:i*10521+156144,
          xccs:i*4521+156144,
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



      const data12 = [];
      for (let i = 1; i < 11; i++) {
        data12.push({
          xh:i,
          fgs:'公交'+i+'公司',
          zbh:i+'-117'+i+'号',
          cph:'蒙B68'+i+'04',
          jiechao:i*12564-11252,
          lubie:i+200+'路',
          gzcr:i*10521+156144,
          xccs:i*4521+156144,
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
