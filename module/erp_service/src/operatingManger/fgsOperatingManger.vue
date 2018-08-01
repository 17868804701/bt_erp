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
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;margin-bottom: 15px;">
        <h2 style="margin-left: 15px;">
          分公司行车月报表
        </h2>
      </div>
      <Card style="padding-left: 15px;">
        <Form :model="formItem" :label-width="80">
          <div class="search">
            <FormItem label="选择年份" style="margin: 0">
              <DatePicker type="year" placeholder="选择时间" :transfer="true"
                          class="text_width"></DatePicker>
            </FormItem>
            <FormItem label="选择公司" style="margin: 0">
              <Select :transfer="true" style="width: 195px;">
                <Option value="beijing">公交一公司</Option>
                <Option value="shanghai">公交二公司</Option>
                <Option value="shenzhen">公交三公司</Option>
              </Select>
            </FormItem>
            <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
            <div class="btn">
              <Button type="primary" icon="android-download" @click="modal1=true">导出Excel</Button>
              <Modal
                v-model="modal1"
                title="填写导出说明"
                >
                <Form :model="formItem" :label-width="80">
                  <FormItem label="导出说明">
                    <Input  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入导出说明"></Input>
                  </FormItem>
                </Form>
              </Modal>
            </div>
          </div>
        </Form>
      </Card>
      <Table :columns="columns11" :data="data10" border height="500" style="margin-top: 10px;" size="small"></Table>
      <Page :total="totalPage" show-total style="margin-top: 10px;"  @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1:false,
        totalPage:0,
        formItem: {
          current:1,
          size:'10',
          nd:'',
          yf:'',
          dw:'  '
        },
        columns11: [
          {
            title: '路别',
            key: 'lb',
            align: 'center',
            width: 100,
          },
          {
            title: '单位',
            key: 'dw',
            align: 'center',
            width: 100,
          },
          {
            title: '年度',
            key: 'nd',
            align: 'center',
            width: 100,
          },
          {
            title: '月份',
            key: 'yf',
            align: 'center',
            width: 100,
          },
          {
            title: '工作车日',
            key: 'gzcr',
            align: 'center',
            width: 100,
          },
          {
            title: '行车次数（车次）',
            key: 'xccs',
            align: 'center',
            width: 100,
          },
          {
            title: '行驶里程（公里）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '合计',
                key: 'xslc_hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：非营业',
                key: 'xslc_fyy',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '燃料、电量消耗',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '实耗',
                key: 'rlxh_sh',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '定额',
                key: 'rlxh_de',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '节超（+）',
                key: 'rlxh_jc',
                align: 'center',
                width: 120,
                sortable: false
              },
            ]
          },
          {
            title: '客运量（人次）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '合计',
                key: 'kyl_hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：投币人次',
                key: 'kyl_tbrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：普通IC卡人',
                key: 'kyl_icrc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：月票卡人',
                key: 'kyl_yprc',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：月票卡老年卡人次',
                key: 'kyl_jlkrc',
                align: 'center',
                width: 120,
                sortable: false
              }
            ]
          },
          {
            title: '普票收入（元）',
            key: 'name',
            align: 'center',
            width: 120,
            children: [
              {
                title: '合计',
                key: 'sr_hj',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：投币收入',
                key: 'sr_tbsr',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：IC卡优惠后收入',
                key: 'sr_ickyhsr',
                align: 'center',
                width: 120,
                sortable: false
              },
              {
                title: '其中：IC卡补贴收入',
                key: 'sr_ickbtsr',
                align: 'center',
                width: 120,
                sortable: false
              }
            ]
          }
        ],
        data10: []
      }
    },

    methods:{
      List:function () {
        this.$fetch(this.$url.fgsxcyb,this.formItem)
          .then(res => {
            console.log(res);
            this.totalPage = res.data.total;
            this.data10 = res.data.records;
            this.$Message.info('查询成功')
          })
      },
      setPage: function (current) {
        this.cxItem.current = current;
        this.getList();
      },
    },
    mounted () {
      this.List()
    }
  }
</script>
