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
      <Form :model="tsqkfl" :label-width="80">
        <div class="search">
          <FormItem label="选择时间" style="margin: 0">
            <DatePicker type="month" placeholder="选择时间" :transfer="true" v-model="tsqkfl.time"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="ios-search" class="search_btn" @click="search1" v-has="'kfclqktj_tsqkflhzb_search'">查询</Button>
          <div class="btn">
            <!--<Button type="primary" icon="android-upload">导入</Button>-->
            <Button type="primary" icon="android-download" @click="daochu1" v-has="'kfclqktj_tsqkflhzb_export'">导出Excel</Button>
          </div>
        </div>
      </Form>
    </Card>
    <Table :columns="columns11" :data="data11" border height="470" style="margin-top: 10px;" size="small"></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tsqkfl: {
         time:''
        },
        columns11: [
          {
            title: '单位/项目',
            key: 'bm',
            align: 'center',

          },
          {
            title: '到站不停车',
            key: 'dzbtcCount',
            align: 'center',
          },  {
            title: '拒载',
            key: 'jzCount',
            align: 'center',
          },  {
            title: '服务态度差',
            key: 'fwtdcCount',
            align: 'center',
          }, {
            title: '脱线运营',
            key: 'txyyCount',
            align: 'center',
          }, {
            title: '摔夹事故',
            key: 'sjsgCount',
            align: 'center',
          }, {
            title: '刷IC卡方面',
            key: 'ickfmCount',
            align: 'center',
          }, {
            title: '其它',
            key: 'qtCount',
            align: 'center',
          },{
            title: '合计',
            key: 'tshj',
            align: 'center',
          },
        ],
        data11: [],
      }
    },
    methods: {
        getList:function () {
          this.$fetch(this.$url.tsqkfl, this.tsqkfl)
            .then(res => {
              console.log(res);
              if(res.success===true){
                  if(res.data.length==0){
                      this.$Message.info('暂无数据');
                      this.data11 = res.data
                  }else {
                      this.data11 = res.data
                  }
              }
            })
        },
      search1:function () {
        if(this.tsqkfl.time===''){
          this.tsqkfl.time==''
        }else {
          this.tsqkfl.time = this.$formatDate(this.tsqkfl.time).substring(0,7);
        }
        this.getList();
      },
      daochu1:function () {
        if(this.tsqkfl.time===''){
          this.tsqkfl.time==''
        }else {
          this.tsqkfl.time = this.$formatDate(this.tsqkfl.time).substring(0,7);
        }
        this.$getExcel(process.env.BASE_URL + this.$url.tsqkflExport + '?time=' + this.tsqkfl.time)
      }
    },
    mounted () {

    }
  }
</script>
