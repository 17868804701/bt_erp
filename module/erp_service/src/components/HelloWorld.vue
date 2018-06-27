<template>
  <div style="padding: 20px">
    <Card :bordered="false">
      <p slot="title">员工列表查询</p>
      <Form :model="formItem" :label-width="120">
        <Row>
          <Col span="5" style="margin-left: -20px;">
          <FormItem label="按单位查询">
            <Select v-model="formItem.select" style="width: 180px;">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="4" style="margin-left: -30px">
          <FormItem label="按岗位查询">
            <Select v-model="formItem.select1" style="width: 180px;">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="15" style="margin-left:40px">
          <Button type="primary" size="large" style="float: right" @click="exportData(1)"><Icon type="android-download"></Icon>&nbsp;导出Excel</Button>
          </Col>
        </Row>
        <FormItem label="按姓名首字母查询" style="margin-left: -20px">
          <input v-model="formItem.input1"   type="text" @focus="modal1 = true" placeholder="按照姓名首字母查询" id="select_name">
        </FormItem>
        <Modal
          v-model="modal1"
          width="300"
          @on-ok="ok"
          :mask-closable="false"
          title="选择姓名首字母" style="text-align: center">
          <Button type="primary" size="small" :key="index" v-for="(item,index) in letterArray"  id="letter" @click="getLetter(item)">{{item}}</Button>
        </Modal>
      </Form>
    </Card>
    <Tabs type="card" style="margin-top: 10px;">
      <Modal
        v-model="modal2"
        width="550"
        @on-ok="ok"
        :mask-closable="false"
        title="选择要显示的列字段" >
        <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
          <Checkbox style="width: 150px;margin-left: 12px;" label="show">Show</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="weak">Weak</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="signin">Signin</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="click">Click</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="active">Active</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day7">7, retained</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day30">30, retained</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="tomorrow">The next day left</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="day">Day Active</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="week">Week Active</Checkbox>
          <Checkbox style="width: 150px;margin-left: 12px;" label="month">Month Active</Checkbox>
        </Checkbox-group>
      </Modal>
      <TabPane label="集团人员查询">
        <Table :data="tableData2" :columns="tableColumns2" border></Table>
      </TabPane>
      <TabPane label="离职人员查询">标签二的内容</TabPane>
      <Button type="primary" size="small" slot="extra" @click="modal2 = true" >列表字段扩展</Button>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData2: this.mockTableData2(),
        tableColumns2: [],
        tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'],
        letterArray:['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','清除'],
        getLetters:[],
        modal1: false,
        modal2: false,
        formItem: {
          select: '',
          select1: '',
          input1:''
        }
      }
    },
    methods: {
      //        对话框点击确定时候的回调函数
      ok:function () {
      },
      getLetter:function (item) {
          if(item==='清除'){
            this.formItem.input1 ='';
            this.getLetters = []
          }else {
            this.getLetters.push(item);
            let letter = this.getLetters.toString().replace(/,/g,'');
            this.formItem.input1 = letter
          }
      },
      mockTableData2 () {
        let data = [];
        function getNum() {
          return Math.floor(Math.random () * 10000 + 1);
        }
        for (let i = 0; i < 2; i++) {
          data.push({
            name: 'Name ' + (i+1),
            fav: 0,
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
            month: getNum()
          })
        }
        return data;
      },
      getTable2Columns () {
        const table2ColumnList = {
          name: {
            title: 'Name',
            key: 'name',
            fixed: 'left',
            width: 200,
            render: (h, params) => {
              const fav = this.tableData2[params.index].fav;
              const style = fav === 0 ? {
                cursor: 'pointer'
              } : {
                cursor: 'pointer',
                color: '#f50'
              };

              return h('div', [
                h('Icon', {
                  style: style,
                  props: {
                    type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                  },
                  nativeOn: {
                    click: () => {
                      this.toggleFav(params.index);
                    }
                  }
                }),
                h('span', ' ' + params.row.name)
              ]);
            }
          },
          show: {
            title: 'Show',
            key: 'show',
            width: 150,
            sortable: true
          },
          weak: {
            title: 'Weak',
            key: 'weak',
            width: 150,
            sortable: true
          },
          signin: {
            title: 'Signin',
            key: 'signin',
            width: 150,
            sortable: true
          },
          click: {
            title: 'Click',
            key: 'click',
            width: 150,
            sortable: true
          },
          active: {
            title: 'Active',
            key: 'active',
            width: 150,
            sortable: true
          },
          day7: {
            title: '7, retained',
            key: 'day7',
            width: 150,
            sortable: true
          },
          day30: {
            title: '30, retained',
            key: 'day30',
            width: 150,
            sortable: true
          },
          tomorrow: {
            title: 'The next day left',
            key: 'tomorrow',
            width: 150,
            sortable: true
          },
          day: {
            title: 'Day Active',
            key: 'day',
            width: 150,
            sortable: true
          },
          week: {
            title: 'Week Active',
            key: 'week',
            width: 150,
            sortable: true
          },
          month: {
            title: 'Month Active',
            key: 'month',
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
      toggleFav (index) {
        this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
      }
    },
    mounted () {
      this.changeTableColumns();
    }
  }
</script>
<style>
  #select_name{
    width: 180px;
    border:1px solid  #dddee1;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
  }
  #select_name::-webkit-input-placeholder {
    color:#bbbec4;
  }
  #letter{
    margin-right: 10px;width: 50px;margin-bottom: 10px;
  }

</style>
