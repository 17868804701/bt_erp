<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
      <Form :model="formItem3" :label-width="80">
        <div class="search">
          <FormItem label="选择时间" style="margin: 0">
            <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem3.date"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="ios-search" class="search_btn" v-has="'jjzbwcqk_bsan_search'">查询</Button>
          <div class="btn">
            <Button type="primary" icon="android-download" v-has="'jjzbwcqk_bsan_daochu'">导出Excel</Button>
          </div>
        </div>
      </Form>
    </Card>
    <Table :columns="columns13" :data="data13" border height="500" style="margin-top: 10px;" size="small"></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem3:{

        },
        columns13: [
          {
            title: '单位',
            key: 'xj_dw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '利润（万元）',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'xj_jh',
                align: 'center',
              }, {
                title: '实际',
                key: 'xj_sj',
                align: 'center',
              }, {
                title: '±%',
                key: 'xj_add',
                align: 'center',
              }
            ]
          },
          {
            title: '得分率',
            key: 'mc',
            align: 'center',
            children: [
              {
                title: '本月',
                key: 'xj_by',
                align: 'center',
              },
              {
                title: '月平均得分',
                key: 'xj_avg',
                align: 'center',
              },
            ]
          },
        ],
        data13: [
          {
            xj_dw: '一公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          },
          {
            xj_dw: '二公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          },
          {
            xj_dw: '三公司',
            xj_jh: '-341.2',
            xj_sj: '-292.3',
            xj_add: '45.54',
            xj_by: '99.6',
            xj_avg: '95.06'
          }
        ],
      }
    },
    methods: {
      getList:function () {
        this.$fetch(this.$url.gjfgsList, this.formItem1)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
              this.data11= res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search1: function () {
        if (this.formItem1.nian === '') {
          this.formItem1.nian = ''
          this.formItem1.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem1.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem1.nian).substring(5, 7)
          this.formItem1.nian = nian
          this.formItem1.yue = yue
        }
        console.log(this.formItem1)
        this.getList()
      },
      daochu1:function () {
        if (this.formItem1.nian === '') {
          this.formItem1.nian = ''
          this.formItem1.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem1.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem1.nian).substring(5, 7)
          this.formItem1.nian = nian
          this.formItem1.yue = yue
        }
        this.$getExcel(process.env.BASE_URL+this.$url.gjfgsDaochu+'?nian='+this.formItem1.nian+'&yue='+this.formItem1.yue);
      },
    },
    mounted () {
      this.getList()
    }
  }
</script>
