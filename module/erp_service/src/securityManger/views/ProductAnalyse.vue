<!--安全生产情况分析-->
<template>
  <div >
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        安全生产情况分析
      </h2>

      <Tabs value="name" style="margin-top: 5px;">
        <TabPane label="安全情况分析" name="name">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Quarter_Data" :columns="PA_Quarter_Columns">
          </Table>
        </TabPane>

        <TabPane label="立案事故分布" name="name0">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_LASG_Data" :columns="PA_LASG_Columns">
          </Table>
        </TabPane>

        <TabPane label="考核事故分布" name="name1">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Examine_Data" :columns="PA_Examine">
          </Table>
        </TabPane>

        <TabPane label="经济损失" name="name2">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Economic_Losses_Data" :columns="PA_Economic_Losses">
          </Table>
        </TabPane>

        <TabPane label="行车责任事故频率" name="name3">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_XCZR_Rate_Data" :columns="PA_XCZR_Rate">
          </Table>
        </TabPane>

        <TabPane label="立案事故经损率指标" name="name4">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_LASG_LossRateTarget_Data" :columns="PA_LASG_LossRateTarget">
          </Table>
        </TabPane>

        <TabPane label="车辆安检" name="name5">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_CLAJ_Yield_Data" :columns="PA_CLAJ_Yield">
          </Table>
        </TabPane>

        <TabPane label="对外投保交强险及赔付情况" name="name6">
          <Card>
            <Form :model="formItem" :label-width="80">
              <Row>
                <Col span="24">
                <FormItem label="按月查询" style="margin: 0;">
                  <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
                  <Button type="primary" icon="ios-search">搜索</Button>
                  <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
                </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Insure_Paid_Data" :columns="PA_Insure_Paid">
          </Table>
        </TabPane>

      </Tabs>
    </div>
  </div>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import PATableData from './PATableData.js';
  export default {
    components: {
      canEditTable,
    },
    data () {
      return {
        formItem: {
          select: '',
          date: ''
        },

        PA_Quarter_Columns: [],
        PA_Quarter_Data: this.getListData(PATableData.PA_Quarter_Data),

        PA_LASG_Columns: [],
        PA_LASG_Data: this.getListData(PATableData.PA_LASG_Data),

        PA_Economic_Losses: [],
        PA_Economic_Losses_Data: this.getListData(PATableData.PA_Economic_Losses_Data),

        PA_Examine: [],
        PA_Examine_Data: this.getListData(PATableData.PA_Examine_Data),

        PA_XCZR_Rate: [],
        PA_XCZR_Rate_Data: this.getListData(PATableData.PA_XCZR_Rate_Data),

        PA_LASG_LossRateTarget: [],
        PA_LASG_LossRateTarget_Data: this.getListData(PATableData.PA_LASG_LossRateTarget_Data),

        PA_CLAJ_Yield: [],
        PA_CLAJ_Yield_Data: this.getListData(PATableData.PA_CLAJ_Yield_Data),

        PA_Insure_Paid: [],
        PA_Insure_Paid_Data: this.getListData(PATableData.PA_Insure_Paid_Data),
      }
    },
    computed: {
    },
    methods: {
      getListData(item) {
        let dataArray = [];
        for (let i = 0; i < 10; i++) {
          dataArray.push(item);
        }
        return dataArray;
      },
      getData () {
          // 2018 年第一季度安全生产情况分析
          this.PA_Quarter_Columns = PATableData.PA_Quarter_Columns;
          // 立案事故分布情况
          this.PA_LASG_Columns = PATableData.PA_LASG_Columns;
          // 经济损失
          this.PA_Economic_Losses = PATableData.PA_Economic_Losses;
          // 考核事故分布
          this.PA_Examine = PATableData.PA_Examine;
          //行车责任事故频率
          this.PA_XCZR_Rate = PATableData.PA_XCZR_Rate;
          //立案事故经损率指标完成情况
          this.PA_LASG_LossRateTarget = PATableData.PA_LASG_LossRateTarget;
          //车辆安检台次及合格率
          this.PA_CLAJ_Yield = PATableData.PA_CLAJ_Yield;
          //对外投保交强险及赔付情况
          this.PA_Insure_Paid = PATableData.PA_Insure_Paid;
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      }
    },
    mounted () {

    },
    created () {
      this.getData();
    }
  }
</script>
