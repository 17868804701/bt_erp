<template>
  <div>
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="cym">曾用名</Checkbox>
      <Checkbox label="xb">性别</Checkbox>
      <Checkbox label="mz">民族</Checkbox>
      <Checkbox label="xmdx">姓名首字母</Checkbox>
      <Checkbox label="csny">出生年月</Checkbox>
      <Checkbox label="jg">籍贯</Checkbox>
      <Checkbox label="zzmm">政治面貌</Checkbox>
      <Checkbox label="gh">工号</Checkbox>
      <Checkbox label="rybh">人员编号</Checkbox>
      <Checkbox label="sfzh">身份证号</Checkbox>
      <Checkbox label="bxdh">保险档号</Checkbox>
      <Checkbox label="bm">部门</Checkbox>
      <Checkbox label="gjjzh">公积金账号</Checkbox>
      <Checkbox label="gjjdh">公积金档号</Checkbox>
      <Checkbox label="gjjzt">公积金状态</Checkbox>
      <Checkbox label="gjjjcbz">公积金缴存情况备注</Checkbox>
      <Checkbox label="gjjkhsj">公积金开户时间</Checkbox>
      <Checkbox label="ylbx">医疗保险</Checkbox>
      <Checkbox label="ylzh">养老证号</Checkbox>
      <Checkbox label="fby">服兵役</Checkbox>
      <Checkbox label="rdsj">入党时间</Checkbox>
      <Checkbox label="gzsj">工作时间</Checkbox>
      <Checkbox label="bdwgzsj">本单位工作时间</Checkbox>
      <Checkbox label="txsj">退休时间</Checkbox>
      <Checkbox label="txdz">通讯地址</Checkbox>
      <Checkbox label="lxdh">联系电话</Checkbox>
      <Checkbox label="dw">单位</Checkbox>
      <Checkbox label="bm">部门</Checkbox>
      <Checkbox label="zyjszc">专业技术职称</Checkbox>
      <Checkbox label="qdsj">取得时间</Checkbox>
      <Checkbox label="xl">学历</Checkbox>
      <Checkbox label="byyx">毕业院校</Checkbox>
      <Checkbox label="sxzy">所学专业</Checkbox>
      <Checkbox label="zc">职称</Checkbox>
      <Checkbox label="txlb">退休类别</Checkbox>
      <Checkbox label="gzzw">公种职务</Checkbox>
      <Checkbox label="gzzh">工作证号</Checkbox>
      <Checkbox label="zyzgjn">职业资格技能</Checkbox>
      <Checkbox label="jkzk">健康状况</Checkbox>
      <Checkbox label="gsbx">工伤保险</Checkbox>
      <Checkbox label="gwzt">岗位状态</Checkbox>
      <Checkbox label="rybgqk">人员变更情况</Checkbox>
      <Checkbox label="zgsf">职工身份</Checkbox>
      <Checkbox label="poqk">配偶情况</Checkbox>
      <Checkbox label="htkssj">合同开始时间</Checkbox>
      <Checkbox label="htjssj">合同结束时间</Checkbox>
      <Checkbox label="lrsj">录入时间</Checkbox>
      <Checkbox label="bz">备注</Checkbox>
      <Checkbox label="ld">路队</Checkbox>
      <Checkbox label="zzqk">在职情况</Checkbox>
      <Checkbox label="sscj">所属车间</Checkbox>
      <Checkbox label="wxbz">维修班组</Checkbox>
    </Checkbox-group>
    <Table :data="tableData2" :columns="tableColumns2" border></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData2: this.mockTableData2(),
        tableColumns2: [],
        tableColumnsChecked: ['cym', 'xb', 'mz', 'xmdx', 'csny', 'jg', 'zzmm', 'gh', 'rybh', 'sfzh', 'bxdh', 'gjjzh', 'gjjdh', 'bm', 'zyjszc',
          'qdsj',
          'xl',
          'byyx',
          'gjjjcbz',
          'sxzy',
          'zc',
          'txlb',
          'gzzw',
          'gzzh',
          'zyzgjn',
          'jkzk',
          'gsbx',
          'gwzt',
          'rybgqk',
          'zgsf',
          'poqk',
          'htkssj',
          'gjjkhsj',
          'ylbx',
          'ylzh',
          'fby',
          'rdsj',
          'gzsj',
          'bdwgzsj',
          'txsj',
          'txdz',
          'lxdh',
          'gjjzt',
          'dw',
          'htjssj',
          'lrsj',
          'bz',
          'ld',
          'zzqk',
          'sscj',
          'cz',
          'wxbz']
      }
    },
    methods: {
      mockTableData2 () {
        let data = [];

        function getNum() {
          return Math.floor(Math.random() * 10000 + 1);
        }

        for (let i = 0; i < 10; i++) {
          data.push({
            xm: 'xm ' + (i + 1),
            cym: getNum(),
            xb: getNum(),
            mz: getNum(),
            xmdx: 'hs',
            csny: getNum(),
            jg: getNum(),
            zzmm: getNum(),
            gh: getNum(),
            rybh: getNum(),
            sfzh: getNum(),
            bxdh: getNum()
          })
        }
        return data;
      },
      getTable2Columns () {
        const table2ColumnList = {
          xm: {
            title: '姓名',
            key: 'xm',
            width: 200,
          },
          cym: {
            title: '曾用名',
            key: 'cym',
            width: 150,
            sortable: true
          },
          xb: {
            title: '性别',
            key: 'xb',
            width: 150,
            sortable: true
          },
          mz: {
            title: '民族',
            key: 'mz',
            width: 150,
            sortable: true
          },
          xmdx: {
            title: '姓名首字母',
            key: 'xmdx',
            width: 150,
            sortable: true
          },
          csny: {
            title: '出生年月',
            key: 'csny',
            width: 150,
            sortable: true
          },
          jg: {
            title: '籍贯',
            key: 'jg',
            width: 150,
            sortable: true
          },
          zzmm: {
            title: '政治面貌',
            key: 'zzmm',
            width: 150,
            sortable: true
          },
          gh: {
            title: '工号',
            key: 'gh',
            width: 150,
            sortable: true
          },
          rybh: {
            title: '人员编号',
            key: 'rybh',
            width: 150,
            sortable: true
          },
          sfzh: {
            title: '身份证号',
            key: 'sfzh',
            width: 150,
            sortable: true
          },
          bxdh: {
            title: '保险档号',
            key: 'bxdh',
            width: 150,
            sortable: true
          },
          gjjzh: {
            title: '公积金账号',
            key: 'gjjzh',
            width: 150,
            sortable: true
          },
          gjjdh: {
            title: '公积金档号',
            key: 'gjjdh',
            width: 150,
            sortable: true
          },
          gjjzt: {
            title: '公积金状态',
            key: 'gjjzt',
            width: 150,
            sortable: true
          },
          gjjjcbz: {
            title: '公积金缴存情况备注',
            key: 'gjjjcbz',
            width: 150,
            sortable: true
          },
          gjjkhsj: {
            title: '公积金开户时间',
            key: 'gjjkhsj',
            width: 150,
            sortable: true
          },
          ylbx: {
            title: '医疗保险',
            key: 'ylbx',
            width: 150,
            sortable: true
          },
          ylzh: {
            title: '养老证号',
            key: 'ylzh',
            width: 150,
            sortable: true
          },
          fby: {
            title: '服兵役',
            key: 'fby',
            width: 150,
            sortable: true
          },
          rdsj: {
            title: '入党时间',
            key: 'rdsj',
            width: 150,
            sortable: true
          },
          gzsj: {
            title: '工作时间',
            key: 'gzsj',
            width: 150,
            sortable: true
          },
          bdwgzsj: {
            title: '本单位工作时间',
            key: 'gzsj',
            width: 150,
            sortable: true
          },
          txsj: {
            title: '退休时间',
            key: 'txsj',
            width: 150,
            sortable: true
          },
          txdz: {
            title: '通讯地址',
            key: 'txsj',
            width: 150,
            sortable: true
          },
          lxdh: {
            title: '联系电话',
            key: 'lxdh',
            width: 150,
            sortable: true
          },
          dw: {
            title: '单位',
            key: 'dw',
            width: 150,
            sortable: true
          },
          bm: {
            title: '部门',
            key: 'bm',
            width: 150,
            sortable: true
          },
          zyjszc: {
            title: '专业技术职称',
            key: 'zyjszc',
            width: 150,
            sortable: true
          },
          qdsj: {
            title: '取得时间',
            key: 'qdsj',
            width: 150,
            sortable: true
          },
          xl: {
            title: '学历',
            key: 'xl',
            width: 150,
            sortable: true
          },
          byyx: {
            title: '毕业院校',
            key: 'byyx',
            width: 150,
            sortable: true
          },
          sxzy: {
            title: '所学专业',
            key: 'sxzy',
            width: 150,
            sortable: true
          },
          zc: {
            title: '职称',
            key: 'zc',
            width: 150,
            sortable: true
          },
          txlb: {
            title: '退休类别',
            key: 'txlb',
            width: 150,
            sortable: true
          },
          gzzw: {
            title: '工种职务',
            key: 'gzzw',
            width: 150,
            sortable: true
          },
          gzzh: {
            title: '工作证号',
            key: 'gzzh',
            width: 150,
            sortable: true
          },
          zyzgjn: {
            title: '职业资格技能',
            key: 'zyzgjn',
            width: 150,
            sortable: true
          },
          jkzk: {
            title: '健康状况',
            key: 'jkzk',
            width: 150,
            sortable: true
          },
          gsbx: {
            title: '工伤保险',
            key: 'gsbx',
            width: 150,
            sortable: true
          },
          gwzt: {
            title: '岗位状态',
            key: 'gwzt',
            width: 150,
            sortable: true
          },
          rybgqk: {
            title: '人员变更情况',
            key: 'rybgqk',
            width: 150,
            sortable: true
          },
          zgsf: {
            title: '职工身份',
            key: 'zgsf',
            width: 150,
            sortable: true
          },
          poqk: {
            title: '配偶情况',
            key: 'poqk',
            width: 150,
            sortable: true
          },
          htkssj: {
            title: '合同开始时间',
            key: 'htkssj',
            width: 150,
            sortable: true
          },
          htjssj: {
            title: '合同结束时间',
            key: 'htjssj',
            width: 150,
            sortable: true
          },
          lrsj: {
            title: '录入时间',
            key: 'lrsj',
            width: 150,
            sortable: true
          },
          bz: {
            title: '备注',
            key: 'bz',
            width: 150,
            sortable: true
          },
          ld: {
            title: '路队',
            key: 'ld',
            width: 150,
            sortable: true
          },
          zzqk: {
            title: '在职情况',
            key: 'zzqk',
            width: 150,
            sortable: true
          },
          sscj: {
            title: '所属车间',
            key: 'sscj',
            width: 150,
            sortable: true
          },
          wxbz: {
            title: '维修班组',
            key: 'wxbz',
            width: 150,
            sortable: true
          },
          cz: {
            title: '操作',
            key: 'month20',
            align: 'center',
            fixed: 'right',
            width: 200,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path: '/ListInfo'
                      })
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginLeft: '5px'
                  },
                  on: {
                    click: () => {
                      alert("删除成功")
                    }
                  }
                }, '删除')
              ]);
            }
          }
        };

        let data = [table2ColumnList.xm];

        this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

        return data;
      },
      changeTableColumns () {
        this.tableColumns2 = this.getTable2Columns();
      },
    },
    mounted () {
      this.changeTableColumns();
    }
  }
</script>
