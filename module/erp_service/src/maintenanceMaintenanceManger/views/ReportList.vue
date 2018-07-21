<!--报表管理-->

<template>
  <div style="padding: 20px; height: 100%;">
    <h2>
      报表管理
    </h2>
    <Tabs value="name1" style="margin-top: 5px;">
      <TabPane label="三级保养台账" name="name1">
        <Card>
          <Form :model="formItem">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.tzDate"></DatePicker>
                <Button type="primary" icon="ios-search">搜索</Button>
                <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <Table style="margin-top: 10px;" :data="tzData" border :columns="tzColumns" border></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="三级维护材料使用情况" name="name2">
        <Card>
          <Form :model="formItem">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.clDate"></DatePicker>
                <Button type="primary" icon="ios-search">搜索</Button>
                <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <Table style="margin-top: 10px;" :data="clData" border :columns="clColumns" border></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        formItem: {
          tzDate: '',
          clDate: '',
        },
        tzColumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center',
          },
          {
            title: '车号',
            align: 'center',
            key: 'ch',
          },
          {
            title: '车型',
            align: 'center',
            key: 'cx',
          },
          {
            title: '修别',
            align: 'center',
            key: 'xb',
          },
          {
            title: '备注',
            align: 'center',
            key: 'bz',
          }
        ],
        tzData: [
          {
            ch: '蒙A123456',
            cx: 'WG6110N',
            xb: '三养、换发动机',
            bz: '备注',
          },
          {
            ch: '蒙A123456',
            cx: 'WG6110N',
            xb: '三养、换发动机',
            bz: '备注',
          },
          {
            ch: '蒙A123456',
            cx: 'WG6110N',
            xb: '三养、换发动机',
            bz: '备注',
          },
          {
            ch: '蒙A123456',
            cx: 'WG6110N',
            xb: '三养、换发动机',
            bz: '备注',
          },
          {
            ch: '蒙A123456',
            cx: 'WG6110N',
            xb: '三养、换发动机',
            bz: '备注',
          },
        ],
        // 车号、车型、材料费、发动机大修材料费、费用合计、维修台数合计
        clColumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center'
          },
          {
            title: '车号',
            align: 'center',
            key: 'ch'
          },
          {
            title: '车型',
            align: 'center',
            key: 'cx'
          },
          {
            title: '材料费',
            align: 'center',
            key: 'clf'
          },
          {
            title: '发动机大修材料费',
            align: 'center',
            key: 'fdjclf'
          },
          {
            title: '费用合计',
            align: 'center',
            key: 'fyhj'
          },
          {
            title: '维修台数合计',
            align: 'center',
            key: 'tshj'
          },
        ],
        clData: [
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
          {
            ch: '蒙A123456',
            cx: '大型车',
            clf: '500元',
            fdjclf: '500元',
            fyhj: '1000元',
            tshj: '10台',
          },
        ],
      }
    },
    computed: {
    },
    methods: {
    },
    mounted () {

    }
  }
</script>
