<template>
  <div style="padding: 20px; height: 100%">
    <h2>
      人员信息管理
    </h2>
    <Tabs style="margin-top: 10px;" @on-click="changeTab" v-model="tabValue">
      <Modal
        v-model="modal2"
        width="550"
        :mask-closable="false"
        title="选择要显示的列字段" >
        <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
          <Checkbox style="width: 150px;margin-left: 12px;" label="show">曾用名</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="weak">性别</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="signin">民族</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="click">出生年月</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="active">工号</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day7">统计</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day30">身份证号</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="tomorrow">保险档号</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day">公积金档号</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="week">公积金状态</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month">服兵役</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month1">工作时间</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month2">退休时间</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month3">单位</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month4">部门</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month5">学历</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month6">毕业院校</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month7">所学专业</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month8">工种</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month9">职务</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month10">工作证号</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month11">合同自起</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month12">合同止</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month13">备注</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month14">路队</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month15">工作类型</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month16">备用字段1</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month17">备用字段2</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month18">备用字段3</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month19">备用字段4</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month20">备用字段5</Checkbox>
        </Checkbox-group>
      </Modal>
      <TabPane label="集团人员查询" name="name1">
        <sxcxArea/>
        <Table style="margin-top: 10px;" :data="tableData2" :columns="tableColumns2" border></Table>
        <Page :total="100" show-total style="margin-top: 10px;"></Page>
      </TabPane>
      <TabPane label="人员岗位统计" name="name2">
        <UserStatistics/>
      </TabPane>
      <!--<Button type="primary" size="small" slot="extra"  @click="tj" style="margin-right: 10px;">人员分布</Button>-->

      <Button v-if="tabValue === 'name1'" type="primary" size="default" slot="extra" @click="modal2 = true" >列表字段扩展</Button>
    </Tabs>
  </div>
</template>
<script>
  import sxcxArea from './sxcxArea.vue';
  import UserStatistics from './UserStatistics.vue'
  export default {
    components: {
      sxcxArea,
      UserStatistics
    },
    data () {
      return {
        tableData2: this.mockTableData2(),
        tableColumns2: [],
//        tableColumnsChecked: ['曾用名', '性别', '民族', '出生年月', '工号', '统计', '身份证号', '保险档号', '公积金档号', '公积金状态', '服兵役', '工作时间', '退休时间', '单位', '部门', '学历', '毕业院校', '所学专业', '工种', '职务', '工作证号', '合同自起', '合同止','备注', '路队', '工作类型', '备用字段1', '备用字段2', '备用字段3','备用字段4','备用字段5'],
        tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month', 'month1', 'month2', 'month3', 'month4', 'month5', 'month6', 'month7', 'month8', 'month9', 'month10', 'month11', 'month12', 'month13', 'month14', 'month15', 'month16', 'month17', 'month18','month19','month20'],
        modal2: false,
        tabValue: 'name1'
      }
    },
    methods: {
      changeTab() {
        console.log(this.tabValue);
      },
      mockTableData2 () {
        let data = [];
        function getNum() {
          return Math.floor(Math.random () * 10000 + 1);
        }
        for (let i = 0; i < 10; i++) {
          data.push({
            name: 'Name ' + (i+1),
            show: getNum(),
            weak: getNum(),
            signin: getNum(),
            click: getNum(),
            active: getNum(),
            day7: getNum(),
            day30: getNum(),
            tomorrow: getNum(),
            day: getNum(),
            week: getNum(),
            month: getNum(),
            month1: getNum(),
            month2: getNum(),
            month3: getNum(),
            month4: getNum(),
            month5: getNum(),
            month6: getNum(),
            month7: getNum(),
            month8: getNum(),
            month9: getNum(),
            month10: getNum(),
            month11: getNum(),
            month12: getNum(),
            month13: getNum(),
            month19: getNum(),
            month14: getNum(),
            month15: getNum(),
            month16: getNum(),
            month17: getNum(),
            month18: getNum(),
          })
        }
        return data;
      },
      getTable2Columns () {
        const table2ColumnList = {
          name: {
            title: '姓名',
            key: 'name',
            fixed: 'left',
            width: 200,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, params.row.name),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path: '/ListInfo'
                      })
                    }
                  }
                }, '查看详情')
              ]);
            }
          },
          show: {
            title: '曾用名',
            key: 'show',
            width: 150,
            sortable: true
          },
          weak: {
            title: '性别',
            key: 'weak',
            width: 150,
            sortable: true
          },
          signin: {
            title: '民族',
            key: 'signin',
            width: 150,
            sortable: true
          },
          click: {
            title: '出生年月',
            key: 'click',
            width: 150,
            sortable: true
          },
          active: {
            title: '工号',
            key: 'active',
            width: 150,
            sortable: true
          },
          day7: {
            title: '统计',
            key: 'day7',
            width: 150,
            sortable: true
          },
          day30: {
            title: '身份证号',
            key: 'day30',
            width: 150,
            sortable: true
          },
          tomorrow: {
            title: '保险档号',
            key: 'tomorrow',
            width: 150,
            sortable: true
          },
          day: {
            title: '公积金档号',
            key: 'day',
            width: 150,
            sortable: true
          },
          week: {
            title: '公积金状态',
            key: 'week',
            width: 150,
            sortable: true
          },
          month: {
            title: '服兵役',
            key: 'month',
            width: 150,
            sortable: true
          },
          month1: {
            title: '工作时间',
            key: 'month1',
            width: 150,
            sortable: true
          },
          month2: {
            title: '退休时间',
            key: 'month2',
            width: 150,
            sortable: true
          },
          month3: {
            title: '单位',
            key: 'month3',
            width: 150,
            sortable: true
          },
          month4: {
            title: '部门',
            key: 'month4',
            width: 150,
            sortable: true
          },
          month5: {
            title: '学历',
            key: 'month5',
            width: 150,
            sortable: true
          },
          month6: {
            title: '毕业院校',
            key: 'month6',
            width: 150,
            sortable: true
          },
          month7: {
            title: '所学专业',
            key: 'month7',
            width: 150,
            sortable: true
          },
          month8: {
            title: '工种',
            key: 'month8',
            width: 150,
            sortable: true
          },
          month9: {
            title: '职务',
            key: 'month9',
            width: 150,
            sortable: true
          },
          month10: {
            title: '合同自起',
            key: 'month10',
            width: 150,
            sortable: true
          },
          month11: {
            title: '合同止',
            key: 'month11',
            width: 150,
            sortable: true
          },
          month12: {
            title: '备注',
            key: 'month12',
            width: 150,
            sortable: true
          },
          month13: {
            title: '路队',
            key: 'month13',
            width: 150,
            sortable: true
          },
          month14: {
            title: '备用字段1',
            key: 'month14',
            width: 150,
            sortable: true
          },
          month15: {
            title: '备用字段2',
            key: 'month15',
            width: 150,
            sortable: true
          },
          month16: {
            title: '备用字段3',
            key: 'month16',
            width: 150,
            sortable: true
          },
          month17: {
            title: '备用字段4',
            key: 'month17',
            width: 150,
            sortable: true
          },
          month18: {
            title: '备用字段5',
            key: 'month18',
            width: 150,
            sortable: true
          },
          month19: {
            title: '工作类型',
            key: 'month19',
            width: 150,
            sortable: true
          },
          month20: {
            title: '备用字段5',
            key: 'month20',
            width: 150,
            sortable: true
          }
        };

        let data = [table2ColumnList.name];

        this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

        return data;
      },
      changeTableColumns () {
        this.tableColumns2 = this.getTable2Columns();
      },
      tj() {
        this.$router.push({
          path: '/UserStatistics'
        })
      }
    },
    mounted () {
      this.changeTableColumns();
    }
  }
</script>
