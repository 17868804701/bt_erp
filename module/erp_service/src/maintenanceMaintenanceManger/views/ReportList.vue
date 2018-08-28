<!--报表管理-->

<template>
  <div style="padding: 20px; height: 100%;">
    <h2>
      报表管理
    </h2>
    <Tabs v-model="currentTab" style="margin-top: 5px;" @on-click="clickTab">
      <TabPane v-if="$showMenu('三级保养台账')" label="三级保养台账" name="name1">
        <Card>
          <Form :model="form1Item">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="form1Item.month"></DatePicker>
                <Button type="primary" icon="ios-search" @click="this.requestListData">搜索</Button>
                <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出Excel</Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <Table style="margin-top: 10px;" :data="tableData" border :columns="tzColumns" border></Table>
        <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
      </TabPane>
      <TabPane v-if="$showMenu('三级维护材料使用情况')" label="三级维护材料使用情况" name="name2">
        <Card>
          <Form :model="form2Item">
            <Row>
              <Col span="24">
              <FormItem label="按月查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="form2Item.month"></DatePicker>
                <Button type="primary" icon="ios-search" @click="this.requestListData">搜索</Button>
                <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出Excel</Button>
              </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <Table style="margin-top: 10px;" :data="clData" border :columns="clColumns" border></Table>
        <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool';
  export default {
    components: {
    },
    data () {
      return {
        currentTab: 'name1',
        totalSize: 0,
        form1Item: {
          month: '',
          currPage: 1,
          pageSize: 10,
        },
        form2Item: {
          month: '',
          currPage: 1,
          pageSize: 10,
        },
        tzColumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center',
          },
          {
            title: '车牌号',
            align: 'center',
            key: 'cph',
          },
          {
            title: '车型',
            align: 'center',
            key: 'cx',
          },
          {
            title: '保养类别',
            align: 'center',
            key: 'bylb',
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
        tableData: [],
      }
    },
    computed: {

    },
    methods: {
      initDate() {
        this.form1Item.month = new Date();
        this.form2Item.month = new Date();
      },
      clickTab(name) {
        this.requestListData();
      },
      setPage(page) {
        if (this.currentTab === 'name1') {
          this.form1Item.currPage = page;
        }else{
          this.form2Item.currPage = page;
        }
        this.requestListData();
      },
      requestListData() {
        let params = {};
        let url = '';
        if (this.currentTab === 'name1') {
          params = this.form1Item;
          url = this.$url.maintain_BBGL_SJBYTZ_list;
        }else{
          params = this.form2Item;
          url = this.$url.maintain_BBGL_SJWHCL_list;
        }
        this.$fetch(url, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      },
      exportExcel() {
        let params = {};
        let url = '';
        if (this.currentTab === 'name1') {
          params = this.form1Item;
          url = this.$url.maintain_BBGL_SJBYTZ_exportExcel;
        }else{
          params = this.form2Item;
          url = this.$url.maintain_BBGL_SJWHCL_exportExcel;
        }

        if (params.month instanceof Date) {
          url = url + '?month=' + DateTool.yyyymm01FormatDate(params.month);
        }

        this.$getExcel(url);
      }
    },
    mounted () {
      this.requestListData();
      this.initDate();
    }
  }
</script>
