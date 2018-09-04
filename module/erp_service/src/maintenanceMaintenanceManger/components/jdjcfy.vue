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
      <Form :model="formItem1" :label-width="80">
        <div class="search">
          <FormItem label="选择年份" style="margin: 0 0 0px 0">
            <DatePicker type="date" placeholder="选择年份" :transfer="true" v-model="formItem1.years"
                        class="text_width"></DatePicker>
          </FormItem>
          <FormItem label="季度" style="margin: 0 0 0px 0">
            <Select v-model="formItem1.quarter" :transfer="true" style="width: 195px;">
              <Option value="">全部</Option>
              <Option value="第一季度">第一季度</Option>
              <Option value="第二季度">第二季度</Option>
              <Option value="第三季度">第三季度</Option>
            </Select>
          </FormItem>
          <FormItem label="车自编号" style="margin: 0 0 0px 0">
            <Input v-model="formItem1.zbh" placeholder="车自编号" class="text_width"/>
          </FormItem>
          <FormItem label="车牌号" style="margin: 0 0 0px 0">
            <Input v-model="formItem1.cph" placeholder="车牌号" class="text_width"/>
          </FormItem>
        </div>
        <div style="width: 100%;justify-content: center;display: flex;margin-top: 10px;">
          <ButtonGroup>
            <Button type="primary" @click="search_jd" style="margin-right: 3px;"><Icon type="search"></Icon>  搜索</Button>
            <Button type="primary" @click="jdjcfydc" icon="android-download"> 导出</Button>
          </ButtonGroup>
        </div>
      </Form>
    </Card>
    <Table :columns="columns2" :data="data2" size="small" border style="margin-top: 10px;"></Table>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        totalCount: 1,
        formItem1: {
          quarter: '',
          currPage: 1,
          pageSize: 10,
          years: '',
          cph: '',
          zbh: ''
        },
        columns2: [
          {
            title: '月份',
            key: 'months'
          },
          {
            title: '台次',
            key: 'stage'
          },
          {
            title: '120L(支)',
            key: 'count120'
          },
          {
            title: '金额',
            key: 'amount120'
          },
          {
            title: '80L(支)',
            key: 'count80'
          },
          {
            title: '金额',
            key: 'amount80'
          },
          {
            title: '总支数(支)',
            key: 'allCount'
          },
          {
            title: '合计（元）',
            key: 'allAmount'
          }
        ],
        data2: []
      }
    },
    methods: {
//        季度检测费用结算
      jdjcfydc:function () {
        if (this.formItem1.years == '') {
          this.formItem1.years = ''
        } else {
          this.formItem1.years = this.$formatDate(this.formItem1.years).substring(0, 10)
        }

        this.$getExcel(process.env.BASE_URL + this.$url.jdjcfydc+'?years='+this.formItem1.years+'&quarter='+this.formItem1.quarter+'&cph='+this.formItem1.cph+'&zbh='+this.formItem1.zbh)
      },
      search_jd: function () {
        this.getList();
      },
      getList: function () {

        if (this.formItem1.years == '') {
          this.formItem1.years = ''
        } else {
          this.formItem1.years = this.$formatDate(this.formItem1.years).substring(0, 10)
        }
        console.log(this.formItem1);
        this.$fetch(this.$url.jdjcfyjs, this.formItem1)
          .then(res => {
            console.log(res);
            if (res.msg === 'success') {
              if (res.page.totalCount == 0) {
                this.$Message.info('暂无信息')
                this.data2 = res.page.list
                this.totalCount = res.page.totalCount
              } else {
                res.page.list.forEach(item => {
                  item.bcjcrq = DateTool.timesToDate(item.bcjcrq)
                });
                this.data2 = res.page.list
                this.totalCount = res.page.totalCount
              }
            }
          });
      },
    },
    mounted () {

    }
  }
</script>
