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
          <Button type="primary" icon="ios-search" class="search_btn" @click="getList" v-has="'nhlctz_fgs_search'">查询</Button>
          <div class="btn">
            <Button type="primary" icon="android-download" @click="exportFGSExcel" v-has="'nhlctz_fgs_daochu'">导出Excel</Button>
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
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    data () {
      return {
        fgsTableData: [],
        fgsND: '',
        fgsjldw: '',
        formItem: {
          select: '公交一公司',
          fgsDate: this.initDate(),
          jtgsDate: this.initDate(),
        },
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
      getList() {
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
