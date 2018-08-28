<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    padding: 10px;
  }

  .container h2 {
    margin-left: 15px;
  }

  .search_btn {
    margin-left: 10px;
  }

  .text_width {
    width: 195px;
  }

  .search {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    align-items: center;
  }

  .btn {
    position: absolute;
    right: 20px;
  }
</style>
<template>
  <div>
    <div style="padding: 20px 0 10px 20px;">
    <h2>车次线路收入台账</h2>
    </div>
    <Tabs value="name1" @on-click="clickTab">
      <TabPane v-if="$showMenu('集团公司车次线路收入台账')" label="集团公司车次线路收入台账" name="name1">
        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择年份" style="margin: 0">
                <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem.jtgsDate"
                            class="text_width"></DatePicker>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="requestJTGSData">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="exportJTGSExcel">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <div style="display: flex;justify-content: space-between">
          <span style="margin-top: 10px;">指标名称：线路收入、车次（集团公司）</span>
          <span style="margin-top: 10px;">{{jtgsND}}年</span>
        </div>
        <Table :columns="columns1" :data="jtgsTableData" border height="560" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
      <TabPane v-if="$showMenu('分公司车次线路收入台账')" label="分公司车次线路收入台账" name="name2">

        <Card style="padding-left: 15px;">
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="选择年份" style="margin: 0">
                <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem.fgsDate"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="单位" style="margin: 0">
                <Select v-model="formItem.select" style="width: 120px;">
                  <Option value="公交一公司">公交一公司</Option>
                  <Option value="公交二公司">公交二公司</Option>
                  <Option value="公交三公司">公交三公司</Option>
                  <Option value="公交四公司">公交四公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn" @click="requestFGSData">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-download" @click="exportFGSExcel">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
        <div style="display: flex;justify-content: space-between">
          <span style="margin-top: 10px;">指标名称：线路收入、车次（{{formItem.select}}）</span>
          <span style="margin-top: 10px;">{{fgsND}}年</span>
        </div>
        <Table :columns="columns2" :data="fgsTableData" border height="560" style="margin-top: 10px;" size="small"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fgsTableData: [],
        jtgsTableData: [],
        jtgsND: '',
        fgsND: '',
        formItem: {
          select: '公交一公司',
          fgsDate: this.initDate(),
          jtgsDate: this.initDate(),
        },
        columns1: [
          {
            title: '项目/月别',
            key: 'xmlb',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '客运量（人次）',
            key: 'jldw',
            align: 'center',
            children:[
              {
                title: '本年普票',
                key: 'ky_bnpp',
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'ky_bnick',
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'ky_bnxj',
                align: 'center',
              },
              {
                title: '去年',
                key: 'ky_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'ky_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '普票收入（元）',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'sr_bnpp',
                align: 'center',
              },
              {
                title: '本年IC卡优惠后金额',
                key: 'sr_bnickyh',
                align: 'center',
              },
              {
                title: '本年IC卡补贴',
                key: 'sr_bnickbt',
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'sr_bnxj',
                align: 'center',
              },
              {
                title: '去年',
                key: 'sr_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'sr_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '行驶车次（次）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'xscc_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'xscc_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'xscc_zzl',
                align: 'center',
              }
            ]
          },
        ],
        columns2: [
          {
            title: '项目/月别',
            key: 'title',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '客运量（人次）',
            key: 'jldw',
            align: 'center',
            children:[
              {
                title: '本年普票',
                key: 'ky_bnpp',
                align: 'center',
              },
              {
                title: '本年IC卡',
                key: 'ky_bnick',
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'ky_bnxj',
                align: 'center',
              },
              {
                title: '去年',
                key: 'ky_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'ky_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '普票收入（元）',
            align: 'center',
            children: [
              {
                title: '本年普票',
                key: 'sr_bnpp',
                align: 'center',
              },
              {
                title: '本年IC卡优惠后金额',
                key: 'sr_bnickyh',
                align: 'center',
              },
              {
                title: '本年IC卡补贴',
                key: 'sr_bnickbt',
                align: 'center',
              },
              {
                title: '本年小计',
                key: 'sr_bnxj',
                align: 'center',
              },
              {
                title: '去年',
                key: 'sr_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'sr_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '行驶车次（次）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'xscc_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'xscc_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'xscc_zzl',
                align: 'center',
              }
            ]
          },
        ],
      }
    },
    methods: {
      initDate() {
        let now = new Date();
        this.jtgsND = now.getFullYear();
        this.fgsND = now.getFullYear();
        return now;
      },
      clickTab(name) {
        if (name === 'name1') {
          this.requestJTGSData();
        }else{
          this.requestFGSData();
        }
      },
      requestJTGSData() {
        let params = {};
        if (this.formItem.jtgsDate === null || this.formItem.jtgsDate === '') {
          params.nd = '';
          this.$Message.error('请先选择年份!');
          return;
        }else{
          params.nd = this.formItem.jtgsDate.getFullYear();
        }
        console.log(params);
        this.$fetch(this.$url.qygl_ccxlsrtz_jtgs, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.jtgsTableData = res.data;
            if (res.data.length > 0) {
              let obj = res.data[0];
              this.jtgsND = obj.nd;
            }
          }else{
            this.$Message.error('获取数据失败, 请重试!');
          }
        })
      },
      requestFGSData() {
        let params = {};
        if (this.formItem.fgsDate === null || this.formItem.fgsDate === '') {
          params.nd = '';
          this.$Message.error('请先选择年份!');
          return;
        }else{
          params.nd = this.formItem.fgsDate.getFullYear();
        }
        params.dw = this.formItem.select;
        console.log(params);
        this.$fetch(this.$url.qygl_ccxlsrtz_fgs, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.fgsTableData = res.data;
            if (res.data.length > 0) {
              let obj = res.data[0];
              this.fgsND = obj.nd;
            }
          }else{
            this.$Message.error('获取数据失败, 请重试!');
          }
        })
      },
      exportJTGSExcel() {
        if (this.formItem.jtgsDate === null || this.formItem.jtgsDate === '') {
          this.$Message.error('请先选择年份!');
          return;
        }
        let url = this.$url.qygl_ccxlsrtz_jtgs_export + '?nd=' + this.formItem.fgsDate.getFullYear();
        this.$getExcel(url);
      },
      exportFGSExcel() {
        if (this.formItem.fgsDate === null || this.formItem.fgsDate === '') {
          this.$Message.error('请先选择年份!');
          return;
        }
        let url = this.$url.qygl_ccxlsrtz_fgs_export + '?nd=' + this.formItem.fgsDate.getFullYear() + '&dw=' + this.formItem.select;
        this.$getExcel(url);
      }
    },
    mounted () {
      this.requestJTGSData();
    }
  }
</script>

