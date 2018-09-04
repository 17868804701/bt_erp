<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="formItem" :label-width="80">
          <Row>
            <Col span="24">
            <div style="display: flex;width: 100%">
              <FormItem label="按年份查询" style="margin: 0;">
                <DatePicker type="month" placeholder="选择时间" :transfer="true" placement="bottom-end"
                            v-model="formItem.tjsj"></DatePicker>
              </FormItem>
              <FormItem label="公司" style="margin: 0">
                <Select v-model="formItem.ejdw" style="width: 195px;">
                  <Option value="公交一公司">公交一公司</Option>
                  <Option value="公交二公司">公交二公司</Option>
                </Select>
              </FormItem>

              <FormItem label="燃料来源" style="margin: 0">
                <Select v-model="formItem.rlly" style="width: 195px;">
                  <Option value="中燃">中燃</Option>
                  <Option value="汇通">汇通</Option>
                </Select>
              </FormItem>

              <Button type="primary" icon="ios-search" style="margin-left: 20px;" @click="chaxun1" v-has="'trqtjgl_fgshz_search'">搜索</Button>
              <Button type="primary" icon="android-download"
                      style="right: 0;position: absolute;margin-top: 1px;margin-left: 50px;" @click="daochu1" v-has="'trqtjgl_fgshz_export'">导出Excel
              </Button>
            </div>
            </Col>
          </Row>
        </Form>
      </Card>
      <Tag checkable color="blue" style="position: absolute;right:15px;margin-top: 6px;">总金额：{{this.sjje}}万元</Tag>
      <Tag checkable color="blue" style="position: absolute;right:185px;margin-top: 6px;">汇通总金额：{{this.htsjj}}万元</Tag>
      <Tag checkable color="blue" style="position: absolute;right:385px;margin-top: 6px;">中燃总金额：{{this.zrsjj}}万元</Tag>
      <Table :columns="columns11" :data="data10" ref="selection" border height="500" style="margin-top: 35px;"
             size="small"></Table>
      <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setpPage1"></Page>
    </div>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        totalPage:0,
        sjje:'',
        zrsjj:'',
        htsjj:'',
        formItem: {
          ejdw: '',
          tjsj: '',
          rlly:'',
          current:1,
          size:10
        },

        columns11: [
          {
            title: '公交二公司 2018年4月天然气汇总表',
            align: 'center',
            children: [
              {
                title: '使用单位：',
                key: 'ch',
                align: 'center',
                width: 100,
                children: [
                  {
                    title: '线路',
                    key: 'xl',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '单位',
                    key: 'dw',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '数量',
                    key: 'rlly',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '实际价格',
                key: 'sjjg',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '单价',
                    key: 'sjdj',
                    align: 'center',
                    width:200,
                  },
                  {
                    title: '金额',
                    key: 'sjje',
                    align: 'center',
                    width: 200,
                  },
                ]
              },
              {
                title: '计划价格',
                key: 'jhjg',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '单价',
                    key: 'jhdj',
                    align: 'center',
                    width: 200,
                  },
                  {
                    title: '金额',
                    key: 'jhje',
                    align: 'center',
                    width: 200,
                  },
                ]
              },
              {
                title: '中燃',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'zrql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'zrsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'zrjhj',
                    align: 'center',
                    width: 150,
                  },
                ]
              },
              {
                title: '汇通',
                key: 'zr',
                align: 'center',
                width: 150,
                children: [
                  {
                    title: '气量',
                    key: 'htql',
                    align: 'center',
                    width: 150,
                  },
                  {
                    title: '实际价',
                    key: 'htsjj',
                    align: 'center',
                    width: 150,
                  }, {
                    title: '计划价',
                    key: 'htjhj',
                    align: 'center',
                    width: 150,
                  },
                ]
              }
            ]
          },
        ],
        data10: [],
      }
    },
    methods:{
      getList: function () {
        this.$fetch(this.$url.fgstrq, this.formItem)
          .then(res => {
            this.sjje = res.count[0].sjje
            this.zrsjj = res.count[0].zrsjj
            this.htsjj = res.count[0].htsjj
            if (res.data.total === 0) {
              this.$Message.info('暂无信息');
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            } else {
              this.data10 = res.data.records;
              this.totalPage = res.data.total;
            }
          })
      },
      setpPage1: function (current) {
        console.log(current);
        this.formItem.current = current;
        this.getList()
      },
      chaxun1:function () {
        if(this.formItem.tjsj==''){
          this.formItem.tjsj = ''
        }else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0,7)
        }
        console.log(this.formItem)
        this.getList()
      },
      daochu1:function () {
        if(this.formItem.tjsj==''){
          this.formItem.tjsj = ''
        }else {
          this.formItem.tjsj = this.$formatDate(this.formItem.tjsj).substring(0,7)
        }
        this.$getExcel(process.env.BASE_URL + this.$url.daochufgstrq + '?tjsj=' + this.formItem.tjsj+'&ejdw='+this.formItem.ejdw+'&rlly='+ this.formItem.rlly)
      }
    },
    mounted () {

    }
  }
</script>
