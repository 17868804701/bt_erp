<!--安全生产情况分析-->
<template>
  <div >
    <Card>
      <Form :model="formItem" :label-width="80">
        <div style="display: flex;align-items: center">
          <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.tab2Date"></DatePicker>
          <CheckboxGroup v-model="formItem.tab2Select" style="margin-left: 20px;">
            <Checkbox label="1">第一季度</Checkbox>
            <Checkbox label="2">第二季度</Checkbox>
            <Checkbox label="3">第三季度</Checkbox>
            <Checkbox label="4">第四季度</Checkbox>
          </CheckboxGroup>
          <Button type="primary" icon="ios-search" @click="requestListData">搜索</Button>
          <Button type="primary" icon="android-download" style="position: absolute;right: 10px" @click="exportExcel">导出excel</Button>
        </div>
      </Form>
    </Card>
    <Table border style="margin-top: 10px;" :data="PA_LASG_Data" :columns="PA_LASG_Columns"></Table>
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
        exportURL: this.$url.security_AQQKFX_exportExcel,
        formItem: {
          tab2Date: this.initDate(),
          tab2Select: ['1'],
        },

        PA_LASG_Columns: [],
        PA_LASG_Data: [],
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
          // 立案事故分布情况
          this.PA_LASG_Columns = PATableData.PA_LASG_Columns;
      },
      requestListData() {
        let params = this.getParams();
        params.jidus = params.jidus.join(',');
        let that = this;
        let url = this.$url.security_AQSCFGS_list + '?year=' + params.year + '&jidus=' + params.jidus;
        this.$fetch(url)
        .then(res => {
          if (res.data != null && res.data.length > 0) {
            that.PA_LASG_Data = res.data;
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
        params.jidus = this.formItem.tab2Select;
        params.year = this.formItem.tab2Date.getFullYear();
        this.exportURL = this.$url.security_LASGFB_exportExcel;
        params.exportURL = this.exportURL;
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








