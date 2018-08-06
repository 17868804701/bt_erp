<template>
  <div style="padding: 20px;">
    <div style="padding: 10px;border-bottom: 1px solid #e9eaec">
      <h2>运营计划调整管理</h2>
    </div>
    <Card style="margin-top: 10px;">
      <Form :model="formItem" :label-width="80">
        <div style="display: flex;flex-wrap: wrap">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end"
                        v-model="formItem.year"></DatePicker>
          </FormItem>
          <FormItem label="线路" style="margin: 0;">
            <Select v-model="formItem.lb" style="width: 195px;">
              <Option value="1路">1路</Option>
              <Option value="2路">2路</Option>
              <Option value="3路">3路</Option>
            </Select>
          </FormItem>
          <FormItem label="公司" style="margin: 0;">
            <Select v-model="formItem.gsm" style="width: 195px;">
              <Option value="公交一公司">公交一公司</Option>
              <Option value="公交二公司">公交二公司</Option>
              <Option value="公交三公司">公交三公司</Option>
            </Select>
          </FormItem>
          <FormItem style="margin: 0;">
            <Button type="primary" icon="ios-search" @click="search">搜索</Button>
          </FormItem>
          <FormItem style="margin: 0">
            <Button type="primary" icon="android-download" @click="addyyProgram=true">新增计划</Button>
            <Button type="primary" icon="android-download">导出excel</Button>
          </FormItem>
          <!--添加-->
          <Modal
            v-model="addyyProgram"
            title="新增计划"
            width="80%"
            :mask-closable="false"
            :scrollable="true"
            style="height: auto">
            <Form :model="program" :label-width="90">
              <div style="display: flex;flex-wrap: wrap">

                <FormItem label="路别">
                  <Select v-model="program.lb" style="width: 195px;">
                    <Option value="1路">1路</Option>
                    <Option value="2路">2路</Option>
                    <Option value="3路">3路</Option>
                  </Select>
                </FormItem>
                <FormItem label="年份">
                  <DatePicker type="year" placeholder="选择年份" :transfer="true" style="width: 195px;" v-model="program.year"></DatePicker>
                </FormItem>
                <FormItem label="班车数量">
                  <Input v-model="program.bcs" placeholder="班车数量" style="width: 195px;"/>
                </FormItem>
                <FormItem label="备用">
                  <Input v-model="program.bys" placeholder="备用" style="width: 195px;"/>
                </FormItem>
                <!--<FormItem label="合计">-->
                  <!--<Input v-model="program.input" placeholder="合计" style="width: 195px;"/>-->
                <!--</FormItem>-->
                <FormItem label="日车次">
                  <Input v-model="program.rcc" placeholder="日车次" style="width: 195px;"/>
                </FormItem>
                <FormItem label="年度车次">
                  <Input v-model="program.ndcc" placeholder="年度车次" style="width: 195px;"/>
                </FormItem>
                <FormItem label="日里程">
                  <Input v-model="program.rlc" placeholder="日里程" style="width: 195px;"/>
                </FormItem>
                <FormItem label="路线长度">
                  <Input v-model="program.xlcd" placeholder="路线长度" style="width: 195px;"/>
                </FormItem>
                <FormItem label="运营日里程">
                  <Input v-model="program.rlc" placeholder="运营日里程" style="width: 195px;"/>
                </FormItem>
                <!--<FormItem label="运营年度里程">-->
                  <!--<Input v-model="program.ndlc" placeholder="运营年度里程" style="width: 195px;"/>-->
                <!--</FormItem>-->
                <FormItem label="日出入库里程">
                  <Input v-model="program.rcrklc" placeholder="日出入库里程" style="width: 195px;"/>
                </FormItem>
                <FormItem label="年度里程">
                  <Input v-model="program.ndlc" placeholder="年度里程" style="width: 195px;"/>
                </FormItem>
                <FormItem label="日加气里程">
                  <Input v-model="program.rjqlc" placeholder="日加气里程" style="width: 195px;"/>
                </FormItem>
                <FormItem label="小计">
                  <Input v-model="program.xj" placeholder="小计" style="width: 195px;"/>
                </FormItem>
                <FormItem label="备用年度里程">
                  <Input v-model="program.bycndlc" placeholder="备用车年度里程" style="width: 195px;"/>
                </FormItem>
                <FormItem label="出入库台数">
                  <Input v-model="program.crkts" placeholder="出入库台数" style="width: 195px;"/>
                </FormItem>
                <FormItem label="加气台数">
                  <Input v-model="program.jqts" placeholder="加气台数" style="width: 195px;"/>
                </FormItem>
                <FormItem label="出入库说明">
                  <Input v-model="program.crksm" style="width: 480px;" type="textarea"
                         :autosize="{minRows: 2,maxRows: 5}" placeholder="出入库说明"></Input>
                </FormItem>
              </div>
            </Form>
          </Modal>
          <!--修改-->
          <Modal
            v-model="editZd"
            title="修改部分字段"
            width="50%"
            :mask-closable="false"
            :scrollable="true"
            style="height: auto"
          >
            <Form :model="formItem" :label-width="90">
              <div style="display: flex;flex-wrap: wrap">
                <FormItem label="年份">
                  <DatePicker type="year" placeholder="选择年份" style="width: 195px;" v-model="formItem.year"></DatePicker>
                </FormItem>
                <FormItem label="公司">
                  <Select v-model="formItem.select" style="width: 195px;">
                    <Option value="beijing">1公司</Option>
                    <Option value="shanghai">2公司</Option>
                    <Option value="shenzhen">3公司</Option>
                  </Select>
                </FormItem>
                <FormItem label="日车次">
                  <Input v-model="formItem.input" placeholder="日车次" style="width: 195px;"/>
                </FormItem>
                <FormItem label="合计">
                  <Input v-model="formItem.input" placeholder="合计" style="width: 195px;"/>
                </FormItem>
                <FormItem label="日车次">
                  <Input v-model="formItem.input" placeholder="日车次" style="width: 195px;"/>
                </FormItem>
                <FormItem label="路线长度">
                  <Input v-model="formItem.input" placeholder="路线长度" style="width: 195px;"/>
                </FormItem>
                <FormItem label="出入库">
                  <Input v-model="formItem.input" placeholder="出入库" style="width: 195px;"/>
                </FormItem>
                <FormItem label="加气台数">
                  <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                </FormItem>
                <FormItem label="班车数">
                  <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                </FormItem>
                <FormItem label="备用车数">
                  <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
                </FormItem>
                <FormItem label="出入库说明">
                  <Input v-model="formItem.textarea" style="width: 32vw" type="textarea"
                         :autosize="{minRows: 2,maxRows: 5}" placeholder="出入库说明"></Input>
                </FormItem>
              </div>
            </Form>
          </Modal>
        </div>
      </Form>
    </Card>
    <Table border :columns="columns11" size="small" :data="data10" style="margin-top: 20px;"></Table>
  </div>
</template>
<script>
  import canEditTable from './canEditTable.vue';
  import addyyProgram from './addyyProgram.vue';
  export default {
    data () {
      return {
        addyyProgram: false,
        editZd: false,
        formItem: {
          year: '',
          lb: '',
          gsm: '',
          current: 1,
          size: 10,
        },
        program:{
          bcs: 0,
          bycndlc: 0,
          bys: 0,
          crkndlc: 0,
          crksm: "string",
          crkts: 0,
          fyyhj: 0,
          fyyxj: 0,
          gsm: "公交二公司",
          id: "22202",
          jjbz: 0,
          jqts: 0,
          lb: "string",
          ndcc: 0,
          ndlc: 0,
          nf: 2016,
          rcc: 0,
          rcrklc: 0,
          rjqlc: 0,
          rjqndlc: 0,
          rlc: 0,
          tzbz: 0,
          tzsj: "2018-08-03T02:34:59.592Z",
          xj: 0,
          xlcd: 0,
          zxsj: "2018-08-03T02:34:59.592Z"
        },
        columns11: [
          {
            title: '年份',
            key: 'nf',
            align: 'center',
            width: 100,
          },
          {
            title: '路别',
            key: 'lb',
            width: 100,
            align: 'center',
          },
          {
            title: '公司',
            key: 'gsm',
            align: 'center',
            width: 100,
          },
          {
            title: '线路长度',
            key: 'xlcd',
            align: 'center',
            width: 100,
          },
          {
            title: '配车数',
            align: 'center',
            children: [
              {
                title: '班车',
                key: 'bcs',
                align: 'center',
                width: 100,
              },
              {
                title: '备用',
                key: 'bys',
                align: 'center',
                width: 100,
              },
              {
                title: '合计',
                key: 'xj',
                align: 'center',
                width: 100,
              },
            ]
          },
          {
            title: '车次',
            align: 'center',
            children: [
              {
                title: '日车次',
                key: 'rcc',
                align: 'center',
                width: 100,
              },
              {
                title: '年度车次',
                key: 'ndcc',
                align: 'center',
                width: 100,
              },
            ]
          },

          {
            title: '运营里程',
            align: 'center',
            children: [
              {
                title: '日里程',
                key: 'rlc',
                align: 'center',
                width: 100,
              },
              {
                title: '年度里程',
                key: 'ndlc',
                align: 'center',
                width: 100,
              },
            ]
          },
          {
            title: '非运营里程',
            align: 'center',
            children: [
              {
                title: '出入库加气里程',
                align: 'center',
                width: 100,
                children: [
                  {
                    title: '日出入库里程',
                    key: 'rcrklc',
                    align: 'center',
                    width: 100,
                  },
                  {
                    title: '年度里程',
                    key: 'ndlc',
                    align: 'center',
                    width: 100,
                  },
                  {
                    title: '日加气里程',
                    key: 'rjqlc',
                    align: 'center',
                    width: 100,
                  }
                ]
              },
              {
                title: '备用车年度里程',
                key: 'bycndlc',
                align: 'center',
                width: 100,
              },
              {
                title: '合计',
                key: 'age',
                align: 'center',
                width: 100,
              },
            ]
          },
          {
            title: '出入库台数',
            key: 'jqts',
            align: 'center',
            width: 120,
//            fixed: 'right',
          },
          {
            title: '加气台数',
            key: 'jqts',
            align: 'center',
            width: 100,
          },
          {
            title: '出入库说明',
            key: 'crksm',
            align: 'center',
            width: 220,
          },
          {
            title: '操作',
            align: 'center',
            width: 170,
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editZd = true
                    }
                  }
                }, '修改')
              ]);
            }
          }
        ],
        data10: []
      }
    },
    methods: {
      getList: function () {
        console.log(this.formItem)
        this.$fetch(this.$url.yyjhtzList)
          .then(res => {
            console.log(res)
            if (res.success === true) {
              if (res.data.total === 0) {
                this.$Message.info('暂无信息');
                this.data10 = res.data.records;
                this.totalPage = res.data.total
              } else {
                this.data10 = res.data.records;
                this.totalPage = res.data.total
              }
            }
          })
      },
      search: function () {
        if (this.formItem.year === '') {
          this.formItem.year = ''
        } else {
          this.formItem.year = this.$formatDate(this.formItem.year).substring(0, 4);
        }
        this.getList();
      }
    },
    mounted () {
      this.getList()
    }
  }
</script>
