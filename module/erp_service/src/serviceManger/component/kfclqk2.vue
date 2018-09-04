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
      <Form :model="fgstsqkfl" :label-width="80">
        <div class="search">
          <FormItem label="选择公司" style="margin: 0">
            <Select v-model="fgstsqkfl.bm" :transfer="true" style="width: 195px;">
              <Option value="一公司">一公司</Option>
              <Option value="二公司">二公司</Option>
              <Option value="三公司">三公司</Option>
            </Select>
          </FormItem>
          <Button type="primary" icon="ios-search" class="search_btn" @click="search2" v-has="'kfclqktj_fgstsqkflhzb_search'">查询</Button>
          <div class="btn">
            <!--<Button type="primary" icon="android-upload">导入</Button>-->
            <Button type="primary" icon="android-download" @click="daochu2" v-has="'kfclqktj_fgstsqkflhzb_export'">导出Excel</Button>
          </div>
        </div>
      </Form>
    </Card>
    <Table :columns="columns12" :data="data12" border height="auto" style="margin-top: 10px;" size="small"></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fgstsqkfl:{
            bm:''
        },

        columns12: [
          {
            title: '路别/项目',
            key: 'xl',
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
          },
        ],
        data12: [],

      }
    },
    methods: {
      getList:function () {
        this.$fetch(this.$url.fgstsqkfl, this.fgstsqkfl)
          .then(res => {
            if(res.success===true){
              if(res.data==null){
                this.$Message.info('暂无数据');
//                this.data12 = res.data
              }else {
                this.data12 = res.data
              }
            }
          })
      },
      search2:function () {
        this.getList();
      },
      daochu2:function () {
        this.$getExcel(process.env.BASE_URL + this.$url.fgstsqkflExport + '?bm=' + this.fgstsqkfl.bm)
      },
    },
    mounted () {

    }
  }
</script>
