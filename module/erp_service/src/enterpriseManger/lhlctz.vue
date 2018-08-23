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
    <h2>能耗里程台账</h2>
    </div>
    <Tabs value="name1" @on-click="clickTab">
      <TabPane label="集团公司能耗里程台账" name="name1">
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
          <span style="margin-top: 10px;">指标名称：线路里程、气耗（集团公司合计）</span>
          <span style="margin-top: 10px;">{{jtgsND}}年</span>
          <span style="margin-top: 10px;margin-right: 30px;">计算单位：{{jtgsjldw}}</span>
        </div>
        <Table :columns="columns1" :data="jtgsTableData" border style="margin-top: 10px;" size="small"></Table>
      </TabPane>

      <TabPane label="分公司能耗里程台账" name="name2">
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
          <span style="margin-top: 10px;">指标名称：线路里程、气耗（{{formItem.select}}）</span>
          <span style="margin-top: 10px;">{{fgsND}}年</span>
          <span style="margin-top: 10px;margin-right: 30px;">计算单位：{{fgsjldw}}</span>
        </div>
        <Table :columns="columns2" :data="fgsTableData" border style="margin-top: 10px;" size="small"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import * as DateTool from '../../utils/DateTool'
  export default {
    data () {
      return {
        fgsTableData: [],
        jtgsTableData: [],
        jtgsND: '',
        fgsND: '',
        jtgsjldw: '',
        fgsjldw: '',
        formItem: {
          select: '公交一公司',
          fgsDate: this.initDate(),
          jtgsDate: this.initDate(),
        },
        columns1: [
          {
            title: '项目/月别',
            key: 'title',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '行驶里程（公里）',
            align: 'center',
            children:[
              {
                title: '本年',
                key: 'xslc_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'xslc_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'xslc_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '实耗天然气（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'shtrq_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'shtrq_qn',
                align: 'center',
              }
            ]
          },
          {
            title: '公司定额（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'gsde_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'gsde_qn',
                align: 'center',
              }
            ]
          },
          {
            title: '较公司定额节超气（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bn_jc',
                align: 'center',
              },
              {
                title: '去年',
                key: 'qn_jc',
                align: 'center',
              }
            ]
          },
          {
            title: '百公里气耗（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bglqh_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'bglqh_qn',
                align: 'center',
              }
            ]
          }
        ],
        columns2: [
          {
            title: '项目/月别',
            key: 'title',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '行驶里程（公里）',
            align: 'center',
            children:[
              {
                title: '本年',
                key: 'xslc_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'xslc_qn',
                align: 'center',
              },
              {
                title: '±%',
                key: 'xslc_zzl',
                align: 'center',
              },
            ]
          },
          {
            title: '实耗天然气（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'shtrq_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'shtrq_qn',
                align: 'center',
              }
            ]
          },
          {
            title: '公司定额（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'gsde_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'gsde_qn',
                align: 'center',
              }
            ]
          },
          {
            title: '较公司定额节超气（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bn_jc',
                align: 'center',
              },
              {
                title: '去年',
                key: 'qn_jc',
                align: 'center',
              }
            ]
          },
          {
            title: '百公里气耗（立方米）',
            align: 'center',
            children: [
              {
                title: '本年',
                key: 'bglqh_bn',
                align: 'center',
              },
              {
                title: '去年',
                key: 'bglqh_qn',
                align: 'center',
              }
            ]
          }
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
        this.$fetch(this.$url.qygl_nhlctz_jtgs, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.jtgsTableData = res.data;
            if (res.data.length > 0) {
              let obj = res.data[0];
              this.jtgsjldw = obj.jldw;
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
        this.$fetch(this.$url.qygl_nhlctz_fgs, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.fgsTableData = res.data;
            if (res.data.length > 0) {
              let obj = res.data[0];
              this.fgsjldw = obj.jldw;
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
        let url = this.$url.qygl_nhlctz_jtgs_export + '?nd=' + this.formItem.fgsDate.getFullYear();
        this.$getExcel(url);
      },
      exportFGSExcel() {
        if (this.formItem.fgsDate === null || this.formItem.fgsDate === '') {
          this.$Message.error('请先选择年份!');
          return;
        }
        let url = this.$url.qygl_nhlctz_fgs_export + '?nd=' + this.formItem.fgsDate.getFullYear() + '&dw=' + this.formItem.select;
        this.$getExcel(url);
      }
    },
    computed: {

    },
    mounted () {
      this.requestJTGSData();
    }
  }
</script>
