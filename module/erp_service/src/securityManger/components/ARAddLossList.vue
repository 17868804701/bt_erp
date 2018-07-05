<!--追加事故经损记录-->
<template>
  <Card style="margin-top: 20px;">
    <!--表格-->
    <p slot="title" >
      追加经损记录
    </p>
    <Button slot="extra" type="primary" size="small" style="margin-right: 10px;">导出Excel</Button>

    <!--<Table style="margin-top: 20px;" height="535px" :data="tableData" border :columns="initTableColumns" border></Table>-->
    <can-edit-table
      refs="table4"
      v-model="tableData"
      :hover-show="true"
      @on-cell-change="handleCellChange"
      @on-change="handleChange"
      :editIncell="true"
      :columns-list="initTableColumns"
    ></can-edit-table>
  </Card>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue';
  export default {
    components: {
      canEditTable,
    },
    data () {
      return {
        columnsTitle: ['追加公司', '路别', '牌照', '驾驶员姓名', '立案时间', '预估经损', '结案经损', '追加车内', '追加车损', '三者', '合计追加', '追加扣分', '备注'],
        columnsCode: ['zjgs','lb','pz','jsyxm','lasj','ygjs','jajs','zjcn','zjcs','sz','hjzj','zjkf','bz'],
        tableData:this.mockTableData(),
        addLossStatus: false,

      }
    },
    computed: {
      initTableColumns() {
        let coulumns = [
          {
            type: 'index',
            width: 60,
            align: 'center',
            fixed: 'left'
          },
        ];
        for (let i = 0; i < this.columnsTitle.length; i++) {
          coulumns.push({
            title: this.columnsTitle[i],
            key: this.columnsCode[i],
            width: 160,
            sortable: true,
            editable: ((this.columnsTitle[i] === '结案经损')||(this.columnsTitle[i] === '追加车内')||(this.columnsTitle[i] === '追加车损')||
            (this.columnsTitle[i] === '三者')||(this.columnsTitle[i] === '合计追加')||(this.columnsTitle[i] === '追加扣分')||(this.columnsTitle[i] === '备注'))
          });
        }
        coulumns.push({
          title: '操作',
          key: 'handle',
          width: 200,
          fixed: 'right',
          align: 'center',
          handle: ['edit', 'delete'],
        });

        return coulumns;
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
            zjgs: '单位'+ i,
            pz: '蒙A123456',
            lb: '706路',
            lasj: '2018-09-10',
            jsyxm: '大黄',
            sgsx: '交强、车损、车内',
            sgxz: '重大事故',
            ygjs: '100万元',
            jajs: '80万元',
            zjcn: '20万元',
            zjcs: '40万元',
            sz: '20万元',
            hjzj: '100万元',
            zjkf: '10分',
            bz: getNum(),
          })
        }
        return data;
      },
      search() {
        console.log('搜索查询');
      },
      deleteData() {
        console.log('查看详情');
      },
      handleDel (val, index) {
        this.$Message.success('删除了第' + (index + 1) + '行数据');
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
    },
    mounted () {

    }
  }
</script>
