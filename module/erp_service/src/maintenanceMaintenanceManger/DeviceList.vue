<!--设备保养记录-->

<template>
  <div style="padding: 20px; height: 100%;">
    <Row type="flex" justify="space-between" style="border-bottom: 1px solid #e9eaec; padding-bottom: 5px;">
      <h2>
        设备保养记录
      </h2>
    </Row>
    <!--<Card style="width:100%; margin-top: 20px;">-->
      <!--<Form v-model="searchOptions">-->
        <!--<Row type="flex" align="middle" >-->
          <!--<Col span="6">-->
            <!--<FormItem label="搜索查询" style="margin: 0px;" v-model="searchOptions.xmorcarNo">-->
              <!--<Input placeholder="请输入牌照或姓名查询..." clearable style="width: 180px"></Input>-->
            <!--</FormItem>-->
          <!--</Col>-->
          <!--<Col span="6">-->
            <!--<FormItem label="立案时间" style="margin: 0px;"  v-model="searchOptions.lasj">-->
              <!--<DatePicker style="width: 180px;" type="date"-->
                          <!--placeholder="请选择立案时间"></DatePicker>-->
            <!--</FormItem>-->
          <!--</Col>-->
          <!--<Col span="6">-->
            <!--<Button type="primary" @click="search">-->
              <!--<Icon type="search"></Icon>-->
              <!--搜索-->
            <!--</Button>-->
          <!--</Col>-->
          <!--<Col span="6">-->
            <!--<FormItem style="margin: 0px;display: flex;justify-content: flex-end">-->
              <!--<Button  type="primary" @click="accidentModal = true">-->
                <!--<Icon type="plus-round"></Icon>-->
                <!--新增-->
              <!--</Button>-->
              <!--<Button  type="primary">-->
                <!--<Icon type="plus-round"></Icon>-->
                <!--导出Excel-->
              <!--</Button>-->
            <!--</FormItem>-->
          <!--</Col>-->

        <!--</Row>-->
      <!--</Form>-->
    <!--</Card>-->
    <!--表格-->
    <Table style="margin-top: 10px;" height="575px" :data="tableData" border :columns="initTableColumns" border></Table>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        columnsTitle: ['单位','自编号', '路别', '立案时间', '地点', '驾驶员姓名', '报案人', '事故属性', '事故性质', '立案日期', '勘查人', '立案', '估损', '责任','备注'],
        columnsCode: ['dw','zbh','lb','lasj','dd','jsyxm','bar','sgsx','sgxz','larq','kcr','la','gs','zr','bz'],
        tableData:this.mockTableData(),
        searchOptions: {
          xmorcarNo: '',
          lasj: '',
        },
      }
    },
    computed: {
      initTableColumns() {
        let coulumns = [
          {
            title: '牌照',
            key: 'pz',
            width: 150,
          },
        ];
        for (let i = 0; i < this.columnsTitle.length; i++) {
          coulumns.push({
            title: this.columnsTitle[i],
            key: this.columnsCode[i],
            width: 120,
            sortable: true
          });
        }

        let newColumns = [
          {
            title: '集团公司立按事故表',
            align: 'center',
            children: coulumns,
          }
        ];

        newColumns.push({
          title: '操作',
          key: 'action',
          width: 250,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.showDetail(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.lossModal = true;
                  }
                }
              }, '追加经损'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.delete(params.index)
                  }
                }
              }, '删除'),
            ]);
          }
        });

        return newColumns;
      },
    },
    methods: {

      mockTableData () {
        let data = [];
        function getNum() {
          return Math.floor(Math.random () * 100 + 1);
        }
        for (let i = 0; i < 10; i++) {
          data.push({
            dw: '单位'+ i,
            pz: '蒙A123456',
            zbh: getNum(),
            lb: '706路',
            lasj: '2018-09-10',
            dd: getNum(),
            jsyxm: '大黄',
            bar: '大黄',
            sgsx: '交强、车损、车内',
            sgxz: '重大事故',
            larq: getNum(),
            kcr: '阿俊',
            la: '立案',
            gs: '20万元',
            zr: getNum(),
            bz: getNum(),
          })
        }
        return data;
      },
    },
    mounted () {

    }
  }
</script>
