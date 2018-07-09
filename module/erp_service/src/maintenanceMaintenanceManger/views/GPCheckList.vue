<!--钢瓶检测-->

<template>
  <div style="padding: 20px; height: 100%;">
    <Row type="flex" justify="space-between" style="border-bottom: 1px solid #e9eaec; padding-bottom: 5px;">
      <h2>
        钢瓶检测
      </h2>
    </Row>
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
