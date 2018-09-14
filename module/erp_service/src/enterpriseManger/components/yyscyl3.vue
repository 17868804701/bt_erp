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
    width: 100px;
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
            <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem3.nian"
                        class="text_width" style="width: 170px;"></DatePicker>
          </FormItem>
          <FormItem label="选择季度" style="margin: 0">
            <Select v-model="formItem3.jidu" :transfer="true" style="width: 170px;">
              <Option value="">全部</Option>
              <Option value="1">第一季度</Option>
              <Option value="2">第二季度</Option>
              <Option value="3">第三季度</Option>
              <Option value="4">第四季度</Option>
            </Select>
          </FormItem>
          <Button type="primary" icon="ios-search" class="search_btn" @click="getList"
                  v-has="'yyscysyl_cclcydhz_search'">查询
          </Button>
          <div class="btn">
            <Button type="primary" icon="android-download" v-has="'yyscysyl_cclcydhz_daochu'" @click="daochu">导出Excel</Button>
          </div>
        </div>
      </Form>
    </Card>
    <Table :columns="columns13" :data="data13" border height="500" style="margin-top: 10px;" size="small">
      <div slot="header" style="text-align: center">
        <span style="font-size: 16px;">{{nian }}{{jidu}}车次里程耗油月度分析</span>
      </div>
    </Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentTab: 'name1',
        nian: '',
        jidu: '',
        formItem3: {
          nian: '',
          jidu: '',
        },
        columns13: [
          {
            title: '单位',
            key: 'dw',
            width: 150,
            align: 'center',
          },
          {
            title: '运营里程',
            key: 'yylcSum',
            width: 150,
            align: 'center',
          }, {
            title: '实耗油',
            key: 'shySum',
            width: 150,
            align: 'center',
          }, {
            title: '定额油',
            key: 'deySum',
            width: 150,
            align: 'center',
          }, {
            title: '节超',
            key: 'jcSum',
            width: 150,
            align: 'center',
          }, {
            title: '实耗/百公里',
            key: 'shbglAvg',
            width: 150,
            align: 'center',
          }, {
            title: '定额/百公里',
            key: 'debglAvg',
            width: 150,
            align: 'center',
          }, {
            title: '国家定额油耗',
            key: 'gjdeyhSum',
            width: 150,
            align: 'center',
          }, {
            title: '较国家定额油耗节油',
            key: 'jgjdejySum',
            width: 150,
            align: 'center',
          }
        ],
        data13: []
      }
    },
    methods: {
      getList() {
        if (this.formItem3.nian === '') {
          this.formItem3.nian = ''
        } else {
          this.formItem3.nian = this.$formatDate(this.formItem3.nian).substring(0, 4)
        }

        this.nian = this.formItem3.nian
        if(this.formItem3.jidu === '1'){
          this.jidu = '年第一季度'
        }else if(this.formItem3.jidu === '2'){
          this.jidu = '年第二季度'
        }else if(this.formItem3.jidu === '3'){
          this.jidu = '年第三季度'
        }else if(this.formItem3.jidu === '4'){
          this.jidu = '年第四季度'
        }else {
          this.jidu = ''
        }


        this.$fetch(this.$url.qygl_yyscyszl_cclchyYDFX, this.formItem3)
          .then(res => {
            if (res.success === true) {
              if (res.data.length === 0) {
                this.$Message.info('暂无数据')
                console.log(res);
                console.log(res.data);
                this.data13 = res.data
              } else {
                console.log(res);
                console.log(res.data);
                this.data13= res.data
              }
            } else {
              this.$Message.info('查询失败')
            }
          })
      },
      daochu(){
        if (this.formItem3.nian === '') {
          this.formItem3.nian = ''
        } else {
          this.formItem3.nian = this.$formatDate(this.formItem3.nian).substring(0, 4)
        }
        this.$getExcel(this.$url.qygl_yyscyszl_cclchyYDFX_export+'?nian='+this.formItem3.nian+'&jidu='+this.formItem3.jidu )
      }
    },
    mounted () {

    }
  }
</script>
