<style>
  .border_line{
    /*border-bottom: 1px solid #e9eaec;*/
    margin-bottom: 10px;
  }
</style>

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div class="border_line">
        <h2 style="margin-left: 15px;">
          集团公司运营部统计
        </h2>
      </div>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="线路车次正点统计表" name="name1">
          <Card>
            <Form :model="formItem" :label-width="80" style="margin-top: 20px;">
              <div style="display: flex;flex-wrap: wrap;margin-left: 10px;">
                <FormItem label="按年份查询" style="margin: 0;">
                  <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                              v-model="formItem.date"></DatePicker>
                </FormItem>
                <FormItem class="formItem" label="路别">
                  <Select v-model="formItem.select" style="width: 195px;">
                    <Option value="beijing">1路</Option>
                    <Option value="shanghai">2路</Option>
                    <Option value="shenzhen">3路</Option>
                  </Select>
                </FormItem>
                <FormItem class="formItem" label="公司">
                  <Select v-model="formItem.select1" style="width: 195px;">
                    <Option value="beijing">公交一公司</Option>
                    <Option value="shanghai">公交二公司</Option>
                    <Option value="shenzhen">公交三公司</Option>
                  </Select>
                </FormItem>
                <div style="margin-left: 10px;margin-top: 1px;">
                  <Button type="primary" icon="ios-search">搜索</Button>
                </div>
              </div>
            </Form>
            <Button type="primary" icon="android-download" style="position: absolute;right: 10px;margin-top: -44px;">导出Excel</Button>
          </Card>
          <Table :columns="columns11" :data="data10" border height="520" size="small" style="margin-top: 10px;"></Table>
          <Page :total="100" show-total style="margin-top: 10px;"></Page>
        </TabPane>
        <TabPane label="各公司与集团汇总表" name="name2">
          <Card>
            <Form :model="formItem" :label-width="80" style="margin-top: 20px;">
              <div style="display: flex;flex-wrap: wrap;margin-left: 10px;">
                <FormItem label="按年份查询" style="margin: 0;">
                  <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                              v-model="formItem.date"></DatePicker>
                </FormItem>
                <FormItem class="formItem" label="路别">
                  <Select v-model="formItem.select" style="width: 195px;">
                    <Option value="beijing">1路</Option>
                    <Option value="shanghai">2路</Option>
                    <Option value="shenzhen">3路</Option>
                  </Select>
                </FormItem>
                <FormItem class="formItem" label="公司">
                  <Select v-model="formItem.select1" style="width: 195px;">
                    <Option value="beijing">公交一公司</Option>
                    <Option value="shanghai">公交二公司</Option>
                    <Option value="shenzhen">公交三公司</Option>
                  </Select>
                </FormItem>
                <div style="margin-left: 10px;margin-top: 1px;">
                  <Button type="primary" icon="ios-search">搜索</Button>
                </div>
              </div>
            </Form>
            <Button type="primary" icon="android-download" style="position: absolute;right: 10px;margin-top: -44px;">导出Excel</Button>
          </Card>
          <Table :columns="columns12" :data="data12" border height="520"  size="small" style="margin-top: 10px;"></Table>
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
        formItem: {
          date: '',
          select: '',
          select1: ''
        },
        columns11: [
          {
            title: '单位',
            key: 'danwei',
            align: 'center',
            width: 100,
          },
          {
            title: '时间',
            key: 'time',
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
            title: '车次完成情况',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '计划',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '实际',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '短缺',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '车次率',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '不正点',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点率',
                key: 'age',
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
                title: '实投币',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: 'SIM卡',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '月票',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '公益',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '敬老卡',
                    key: 'jiechao',
                    align: 'center',
                    width: 120,
                    sortable: false
                  }, {
                    title: '员工卡',
                    key: 'jiechao',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
            ]
          },
          {
            title: '客运收入（元）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '投币收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '普卡（无补）',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: 'SIM卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: 'SIM卡（无补）',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: '合计',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '百公里收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '敬老卡免费金额（元）',
            key: 'age',
            align: 'center',
            width: 120,
          }
        ],
        data10: [],















        columns12: [
          {
            title: '公司',
            key: 'danwei',
            align: 'center',
            width: 100,
          },
          {
            title: '车次完成情况',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '计划',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '实际',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '短缺',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '车次率',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '不正点',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '正点率',
                key: 'age',
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
                title: '实投币',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: 'SIM卡',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '月票',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false
              }, {
                title: '公益',
                key: 'jiechao',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '敬老卡',
                    key: 'jiechao',
                    align: 'center',
                    width: 120,
                    sortable: false
                  }, {
                    title: '员工卡',
                    key: 'jiechao',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
            ]
          },
          {
            title: '客运收入（元）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '投币收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '普卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: '普卡（无补）',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: 'SIM卡收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false,
                children: [
                  {
                    title: 'SIM卡（无补）',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                  {
                    title: '补贴',
                    key: 'age',
                    align: 'center',
                    width: 120,
                    sortable: false
                  },
                ]
              },
              {
                title: '合计',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '百公里收入',
                key: 'age',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '敬老卡免费金额（元）',
            key: 'age',
            align: 'center',
            width: 120,
          }
        ],
        data12: []
      }
    },
    mounted () {
      const data = [];
      for (let i = 1; i < 11; i++) {
        data.push({
          danwei: '公交' + i + '公司',
          time: 2018 + '年' + i + '月',
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



      const data1 = [];
      for (let i = 1; i < 11; i++) {
        data1.push({
          danwei: '公交' + i + '公司',
          time: 2018 + '年' + i + '月',
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
      this.data12 = data1;
    }
  }
</script>
