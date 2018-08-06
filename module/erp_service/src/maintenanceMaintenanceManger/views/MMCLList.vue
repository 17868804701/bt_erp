<!--维修领料管理-->

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按关键字查询" style="margin: 0;">
              <Input style="width: 150px;" placeholder="请输入关键字" v-model="formItem.option"></Input>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="tableData" :columns="columns" border></Table>
      <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
    },
    data () {
      return {
        formItem: {
          option: '',
          currPage: 1,
          pageSize: 10,
        },
        totalSize: 0,
        tableData: [],
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
            title: '领料日期',
            key: 'rq',
            align: 'center',
          },
          {
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
          },
          {
            title: '领料数量',
            key: 'sl',
            align: 'center',
          },
          {
            title: '规格',
            key: 'gg',
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
      }
    },
    computed: {

    },
    methods: {
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        this.$fetch(this.$url.maintain_BYGL_WXLLGL_recordList, this.formItem)
        .then(res=>{
          console.log(res);
          if (res.code === 0) {
            res.page.records.forEach(item => {
              item.rq = DateTool.timesToDate(item.rq);
            })
            this.tableData = res.page.records;
            this.totalSize = res.page.total;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      }
    },
    mounted () {

    }
  }
</script>
