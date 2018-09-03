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
      <Form :model="formItem4" :label-width="80">
        <div class="search">
          <FormItem label="选择时间" style="margin: 0">
            <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="formItem4.nian"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="ios-search" class="search_btn" @click="search4">查询</Button>
          <div class="btn">
            <Button type="primary" icon="android-download" @click="daochu4">导出Excel</Button>
          </div>
        </div>
      </Form>
    </Card>
    <Table :columns="columns14" :data="data14" border height="500" style="margin-top: 10px;" size="small"></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem4: {
          nian: '2018',
          yue: '08'
        },
        columns14: [
          {
            title: '单位/名称',
            key: 'mc',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '计算单位',
            key: 'jldw',
            align: 'center',
            fixed: 'left',
          },
          {
            title: '公交合计',
            align: 'center',
            children: [
              {
                title: '计划',
                key: 'jhSum',
                align: 'center',
              }, {
                title: '实际',
                key: 'sjSum',
                align: 'center',
              }, {
                title: '±%',
                key: 'zzlAvg',
                align: 'center',
              }, {
                title: '上年同期',
                key: 'sntqSum',
                align: 'center',
              }
            ]
          }
        ],
        data14:[],
      }
    },
    methods: {
      getList:function () {
        this.$fetch(this.$url.gjhjList, this.formItem4)
          .then(res => {
            console.log(res.data);
            if (res.success === true) {
              this.data14= res.data
            } else {
              this.$Message.error('获取数据失败, 请重试!');
            }
          })
      },
      search4: function () {
        if (this.formItem4.nian === '') {
          this.formItem4.nian = ''
          this.formItem4.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem4.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem4.nian).substring(5, 7)
          this.formItem4.nian = nian
          this.formItem4.yue = yue
        }
        console.log(this.formItem4)
        this.getList()
      },
      daochu4:function () {
        if (this.formItem4.nian === '') {
          this.formItem4.nian = ''
          this.formItem4.yue = ''
        } else {
          let nian = this.$formatDate(this.formItem4.nian).substring(0, 4)
          let yue = this.$formatDate(this.formItem4.nian).substring(5, 7)
          this.formItem4.nian = nian
          this.formItem4.yue = yue
        }
        this.$getExcel(process.env.BASE_URL+this.$url.gjhjDaochu+'?nian='+this.formItem4.nian+'&yue='+this.formItem4.yue);
      }
    },
    mounted () {

    }
  }
</script>
