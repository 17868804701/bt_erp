<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;margin-bottom: 15px;">
        <h2 style="margin-left: 15px;">
          分公司行车月报表
        </h2>
      </div>
      <Card>
        <Form :model="formItem" :label-width="80">
          <Row>
            <Col span="24">
            <FormItem label="按年份查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                          v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download"
                      style="float: right;margin-right: 10px">导出Excel
              </Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          date: ''
        },
        columns11: [
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
            width: 100,
          },
          {
            title: '行车次数（车次）',
            key: 'xccs',
            align: 'center',
            width: 100,
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
                title: '其中：非营业',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '燃料、电量消耗',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实耗',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '定额',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '客运量（人次）',
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
                title: '其中：投币人次',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：普通IC卡人',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：月票卡人',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：月票卡老年卡人次',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }
            ]
          },
          {
            title: '普票收入（元）',
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
                title: '其中：投币收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：IC卡优惠后收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：IC卡补贴收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }
            ]
          }
        ],
        data10: []
      }
    },
    mounted () {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
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
      this.data10 = data;
    }
  }
</script>
