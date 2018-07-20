<!--维修领料管理-->

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="queryItem">
          <Row>
            <Col span="24">
            <FormItem label="按关键字查询" style="margin: 0;">
              <Input style="width: 150px;" placeholder="请输入关键字" v-model="queryItem.option"></Input>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="data1" :columns="columns" border></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        queryItem: {
          option: '',
        },
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '车号',
            key: 'ch',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
          },
          {
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
          },
          {
            title: '领料数量',
            key: 'llsl',
            align: 'center',
          },
          {
            title: '领料规格',
            key: 'llgg',
            align: 'center',
          },
          {
            title: '供货单位',
            key: 'ghdw',
            align: 'center',
          },
          {
            title: '品牌型号',
            key: 'ppxh',
            align: 'center',
          },
          {
            title: '计量单位',
            key: 'jldw',
            align: 'center',
          },
          {
            title: '单价',
            key: 'dj',
            align: 'center',
          },
          {
            title: '金额',
            key: 'je',
            align: 'center',
          },
          {
            title: '附记',
            key: 'fj',
            align: 'center',
          },
        ],
        data1: [
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },

          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            wpmc: '轮胎',
            llsl: '10',
            llgg: '个',
            ghdw: '米其林',
            ppxh: 'MS-2293',
            jldw: '米其林轮胎供货商',
            dj: '100元',
            je: '1000元',
            fj: '备注',
          },
        ]
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
