<!--安全生产情况分析-->
<template>
  <div >
    <Card>
      <Form :model="formItem" :label-width="80">
        <div style="display: flex;align-items: center">
          <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab1Date"></DatePicker>
          <CheckboxGroup v-model="formItem.tab1Select" style="margin-left: 20px;">
            <Checkbox label="1">第一季度</Checkbox>
            <Checkbox label="2">第二季度</Checkbox>
            <Checkbox label="3">第三季度</Checkbox>
            <Checkbox label="4">第四季度</Checkbox>
          </CheckboxGroup>
          <Button type="primary" icon="ios-search" @click="requestListData" v-has="'aqscqkfx_aqqkfx_search'">搜索</Button>
          <Button type="primary" icon="android-download" style="position: absolute;right: 10px" @click="exportExcel" v-has="'aqscqkfx_aqqkfx_export'">导出excel</Button>
        </div>
      </Form>
    </Card>
    <Table border style="margin-top: 10px;" :data="PA_Quarter_Data" :columns="PA_Quarter_Columns"></Table>
  </div>
</template>

<script>
  import PATableData from '../views/PATableData.js';
  import QuarterQuery from './QuarterQuery.vue';
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
          tab1Select: ['1'],
        },

        PA_Quarter_Columns: [],
        PA_Quarter_Data: [],
      }
    },
    computed: {
    },
    methods: {
      initDate() {
        let now = new Date();
        return now;
      },
      getData () {
          // 2018 年第一季度安全生产情况分析
          this.PA_Quarter_Columns = PATableData.PA_Quarter_Columns;
      },
      requestListData() {
        let params = this.getParams();
        params.jidus = params.jidus.join(',');
        let that = this;
        let url = this.$url.security_AQSCJTGS_list + '?year=' + params.year + '&jidus=' + params.jidus;
        this.$fetch(url)
        .then(res => {
          if (res.data != null && res.data.length > 0) {
            that.PA_Quarter_Data = res.data;
          }
        });
      },
      exportExcel() {
        console.log('导出数据');
        let params = this.getParams();
        let year = params.year;
        let url = params.exportURL;
        let jidus = params.jidus;
        url = url + '?year=' + year + '&jidus=' + jidus;
        this.$getExcel(url);
      },
      getParams() {
        let params = {
          jidus: '',
          year: '',
          exportURL: ''
        };
        params.jidus = this.formItem.tab1Select;
        params.year = this.formItem.tab1Date.getFullYear();
        params.exportURL = this.$url.security_AQQKFX_exportExcel;
        return params;
      },
    },
    mounted () {
    },
    created () {
      this.getData();
    }
  }
</script>








