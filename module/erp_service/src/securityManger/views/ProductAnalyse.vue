<!--安全生产情况分析-->
<template>
  <div >
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        安全生产情况分析
      </h2>

      <Tabs v-model="currentTab" style="margin-top: 5px;" @on-click="clickTab">
        <TabPane label="安全情况分析" name="name1">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div >
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab1Date"></DatePicker>
                <RadioGroup v-model="formItem.tab1Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Quarter_Data" :columns="PA_Quarter_Columns">
          </Table>
        </TabPane>

        <TabPane label="立案事故分布" name="name2">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab2Date"></DatePicker>
                <RadioGroup v-model="formItem.tab2Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_LASG_Data" :columns="PA_LASG_Columns">
          </Table>
        </TabPane>

        <TabPane label="考核事故分布" name="name3">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab3Date"></DatePicker>
                <RadioGroup v-model="formItem.tab3Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Examine_Data" :columns="PA_Examine">
          </Table>
        </TabPane>

        <TabPane label="经济损失" name="name4">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab4Date"></DatePicker>
                <RadioGroup v-model="formItem.tab4Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_Economic_Losses_Data" :columns="PA_Economic_Losses">
          </Table>
        </TabPane>

        <TabPane label="行车责任事故频率" name="name5">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab5Date"></DatePicker>
                <RadioGroup v-model="formItem.tab5Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_XCZR_Rate_Data" :columns="PA_XCZR_Rate">
          </Table>
        </TabPane>

        <TabPane label="立案事故经损率指标" name="name6">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab6Date"></DatePicker>
                <RadioGroup v-model="formItem.tab6Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_LASG_LossRateTarget_Data" :columns="PA_LASG_LossRateTarget">
          </Table>
        </TabPane>

        <TabPane label="车辆安检" name="name7">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab7Date"></DatePicker>
                <RadioGroup v-model="formItem.tab7Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
            </Form>
          </Card>
          <Table border style="margin-top: 10px;" :data="PA_CLAJ_Yield_Data" :columns="PA_CLAJ_Yield">
          </Table>
        </TabPane>

        <TabPane label="对外投保交强险及赔付情况" name="name8">
          <Card>
            <Form :model="formItem" :label-width="80">
              <div>
                <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab8Date"></DatePicker>
                <RadioGroup v-model="formItem.tab8Select" style="margin-left: 20px;">
                  <Radio label="第一季度"></Radio>
                  <Radio label="第二季度"></Radio>
                  <Radio label="第三季度"></Radio>
                  <Radio label="第四季度"></Radio>
                </RadioGroup>
                <Button type="primary" icon="ios-search" @click="searchData">搜索</Button>
                <Button type="primary" icon="android-download" style="position: absolute;right: 0" @click="exportExcel">导出excel</Button>
              </div>
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
  import PATableData from './PATableData.js';
  import QuarterQuery from '../components/QuarterQuery.vue';
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
      QuarterQuery
    },
    data () {
      return {
        currentTab: 'name1',
        exportURL: this.$url.security_AQQKFX_exportExcel,
        formItem: {
          tab1Date: this.initDate(),
          tab1Select: '第一季度',
          tab2Date: this.initDate(),
          tab2Select: '第一季度',
          tab3Date: this.initDate(),
          tab3Select: '第一季度',
          tab4Date: this.initDate(),
          tab4Select: '第一季度',
          tab5Date: this.initDate(),
          tab5Select: '第一季度',
          tab6Date: this.initDate(),
          tab6Select: '第一季度',
          tab7Date: this.initDate(),
          tab7Select: '第一季度',
          tab8Date: this.initDate(),
          tab8Select: '第一季度',
        },

        PA_Quarter_Columns: [],
        PA_Quarter_Data: [],

        PA_LASG_Columns: [],
        PA_LASG_Data: [],

        PA_Economic_Losses: [],
        PA_Economic_Losses_Data: [],

        PA_Examine: [],
        PA_Examine_Data: [],

        PA_XCZR_Rate: [],
        PA_XCZR_Rate_Data: [],

        PA_LASG_LossRateTarget: [],
        PA_LASG_LossRateTarget_Data: [],

        PA_CLAJ_Yield: [],
        PA_CLAJ_Yield_Data: [],

        PA_Insure_Paid: [],
        PA_Insure_Paid_Data: [],
      }
    },
    computed: {
    },
    methods: {
      initDate() {
        let now = new Date();
        console.log(now);
        return now;
      },
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
      clickTab(name) {
        console.log(this.currentTab);
        this.requestListData();
      },
      searchData() {
        console.log('搜索数据');
        this.requestListData();
      },
      requestListData() {
        console.log('请求数据');
        let params = this.getParams();
        let newParams = {
          year: params.year,
          jidu: params.jidu,
        };
        console.log(newParams);
        let that = this;
        if (this.currentTab === 'name1' || this.currentTab === 'name4') { // 安全生产情况分析 或者 经济损失
          this.$fetch(this.$url.security_AQSCJTGS_list,newParams)
          .then(res => {
            console.log(res);
            if (res.data != null && res.data.length > 0) {
              // 这个页面里面的错误是因为解析出错, 后台返回了一个   第一个元素为null 的数组
              that.configureHZData(res);
            }
          });

        }else{
          console.log('分公司数据');
          this.$fetch(this.$url.security_AQSCFGS_list, newParams)
          .then(res => {
            console.log(res);
            if (res.data != null && res.data.length > 0) {
              that.configureFGSData(res);
            }
          });
        }
      },
      exportExcel() {
        console.log('导出数据');
        let params = this.getParams();
        let year = params.year;
        let url = params.exportURL;
        let jidu = params.jidu;
        url = url + '?year=' + year + '&jidu=' + jidu;
        this.$getExcel(url);
      },
      convertJIDU(jiduString) {
        let jidu = 1;
        if (jiduString === '第一季度') {
          jidu = 1;
        } else if (jiduString === '第二季度') {
          jidu = 2;
        } else if (jiduString === '第三季度') {
          jidu = 3;
        } else {
          jidu = 4;
        }
        return jidu;
      },
      getParams() {
        let params = {
          jidu: '',
          year: '',
          exportURL: ''
        };
        if (this.currentTab === 'name1') { // 安全情况分析 --- 报表导出


          params.jidu = this.convertJIDU(this.formItem.tab1Select);
          params.year = this.formItem.tab1Date.getFullYear();
          this.exportURL = this.$url.security_AQQKFX_exportExcel;

        } else if (this.currentTab === 'name2') { // 立案事故分布 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab2Select);
          params.year = this.formItem.tab2Date.getFullYear();
          this.exportURL = this.$url.security_LASGFB_exportExcel;

        } else if (this.currentTab === 'name3') { // 考核事故分布 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab3Select);
          params.year = this.formItem.tab3Date.getFullYear();
          this.exportURL = this.$url.security_KHSGFB_exportExcel;

        } else if (this.currentTab === 'name4') { // 经济损失 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab4Select);
          params.year = this.formItem.tab4Date.getFullYear();
          this.exportURL = this.$url.security_JJSS_exportExcel;

        } else if (this.currentTab === 'name5') { // 行车责任事故频率 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab5Select);
          params.year = this.formItem.tab5Date.getFullYear();
          this.exportURL = this.$url.security_SCZRSGPL_exportExcel;

        } else if (this.currentTab === 'name6') { // 立案事故经损率指标 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab6Select);
          params.year = this.formItem.tab6Date.getFullYear();
          this.exportURL = this.$url.security_LASGJSLZB_exportExcel;

        } else if (this.currentTab === 'name7') { // 车辆安检 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab7Select);
          params.year = this.formItem.tab7Date.getFullYear();
          this.exportURL = this.$url.security_CLAJ_exportExcel;

        } else { // 对外投保交强险及赔付情况 --- 报表导出

          params.jidu = this.convertJIDU(this.formItem.tab8Select);
          params.year = this.formItem.tab8Date.getFullYear();
          this.exportURL = this.$url.security_DWTBJQXJPF_exportExcel;
        }
        params.exportURL = this.exportURL;
        return params;
      },
      configureHZData(res) {
        if (this.currentTab === 'name1') { // 安全情况分析
          this.PA_Quarter_Data = res.data;
        }else{ // 经济损失
          this.PA_Economic_Losses_Data = res.data;
        }
      },
      configureFGSData(res) {
        if (this.currentTab === 'name2') { // 立案事故分布
          this.PA_LASG_Data = res.data;
        } else if (this.currentTab === 'name3') { // 考核事故分布
          this.PA_Examine_Data = res.data;
        } else if (this.currentTab === 'name5') { // 行车责任事故频率
          this.PA_XCZR_Rate_Data = res.data;
        } else if (this.currentTab === 'name6') { // 立案事故经损率指标
          this.PA_LASG_LossRateTarget_Data = res.data;
        } else if (this.currentTab === 'name7') { // 车辆安检
          this.PA_CLAJ_Yield_Data = res.data;
        } else { // 对外投保交强险及赔付情况
          this.PA_Insure_Paid_Data = res.data;
        }
      },
    },
    mounted () {
      this.requestListData();
    },

    created () {
      this.getData();
    }
  }
</script>








