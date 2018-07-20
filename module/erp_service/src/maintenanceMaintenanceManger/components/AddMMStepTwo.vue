<template>
  <div style="margin-top: 40px;">
    <Card style="margin-top: 20px;">
      <p slot="title" >
        领料备料
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="clModal=true">添加</Button>
      <can-edit-table
        style="margin-top: 10px;"
        v-model="clList"
        :columnsList="clColumns"
        :editIncell="true"
        :hoverShow="true"
        @on-cell-change="handleCellChange"
        @on-change="handleChange">
      </can-edit-table>
    </Card>
    <!--新增领料备料-->
    <Modal
      v-model="clModal"
      title="新增领料备料"
      width="50%"
      @on-ok="addLLBL"
      @on-cancel="cancleAddLLBL">
      <div >
        <Form v-model="clItem" :label-width="80">
          <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
            <FormItem label="领料车号" style="margin-top: 0px;">
              <Input v-model="clItem.lych" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="材料名称" style="margin-top: 0px;">
              <Input v-model="clItem.clmc" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="数量" style="margin-top: 0px;">
              <Input v-model="clItem.sl" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="日期" style="margin-top: 0px;">
              <Input v-model="clItem.rq" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="备注" style="margin-top: 0px;">
              <Input v-model="clItem.bz" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="说明" style="margin-top: 0px;">
              <Input v-model="clItem.sm" style="width:120px;"></Input>
            </FormItem>
            <FormItem label="检验员" style="margin-top: 0px;">
              <Input v-model="clItem.jyy" style="width:120px;"></Input>
            </FormItem>
          </div>
        </Form>
      </div>
    </Modal>

    <Card style="margin-top: 20px;">
      <p slot="title" >
        车辆三级维护过程检验记录
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="jysmModal=true">添加检验完成项目</Button>

      <!--this.jysmData-->
      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <div v-for="(item, itemIndex) in this.jysmData" :key="itemIndex">
          <Tooltip v-for="(subItem, subItemIndex) in item" :key="subItem+subItemIndex">
            <div slot="content">{{JYSMOptions[itemIndex].value}}</div>
            <Tag style="margin-bottom: 10px;margin-right: 20px;" type="dot" color="green">{{subItem}}</Tag>
          </Tooltip>
        </div>
      </div>

    </Card>
    <!--新增维护过程检验记录-->
    <Modal
      v-model="jysmModal"
      title="新增维护过程检验记录"
      width="50%"
      @on-ok="addJYSM"
      @on-cancel="cancleAddJYSM">
      <div>
        <Form :label-width="50">
          <Tabs style="margin-top: 5px;" type="card">
            <TabPane v-for="(item, index) in JYSMOptions" :label="item.value" :key="index">
              <CheckboxGroup v-model="jysmData[index]">
                <Checkbox v-for="(subItem, index) in item.subItems" :key="subItem.title+index" :label="subItem.title"></Checkbox>
              </CheckboxGroup>
            </TabPane>
          </Tabs>
        </Form>
      </div>
    </Modal>


    <Card style="margin-top: 20px;">
      <p slot="title" >
        车辆三级维护项目验收
      </p>
      <Collapse>
        <Panel  v-for="(item, index) in YSXMOptions" :name="item+index" :key="item+index">
          {{item.title}}
          <Tag style="margin-left: 10px;" type="dot" color="green">已完成验收 ({{ysxmData[index].length}}/{{item.items.length}})</Tag>

          <CheckboxGroup slot="content" v-model="ysxmData[index]" @on-change="checkYSXM">
            <Checkbox v-for="(subItem, subIndex) in item.items" :key="subItem+subIndex" :label="subItem"></Checkbox>
          </CheckboxGroup>
        </Panel>
      </Collapse>
    </Card>


  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import StepTwoTableData from './StepTwoTableData'
  export default {
    name: 'AddMMStepTwo',
    components: {
      canEditTable,
    },
    data () {
      return {
        clModal: false,
        clList: [],
        clItem: {
          lych: '',
          clmc: '',
          sl: '',
          rq: '',
          bz: '',
          sm: '',
          jyy: '',
        },
        clColumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center',
          },
          {
            title: '领料车号',
            key: 'lych',
            align: 'center',
            editable: true
          },
          {
            title: '材料名称',
            key: 'clmc',
            align: 'center',
            editable: true
          },
          {
            title: '数量',
            key: 'sl',
            align: 'center',
            editable: true
          },
          {
            title: '日期',
            key: 'rq',
            align: 'center',
            editable: true
          },
          {
            title: '备注',
            key: 'bz',
            align: 'center',
            editable: true
          },
          {
            title: '说明',
            key: 'sm',
            align: 'center',
            editable: true
          },
          {
            title: '检验员',
            key: 'jyy',
            align: 'center',
            editable: true
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (h, params, index) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log('删除领料备料记录');
                      this.clList.splice(index, 1);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        // 材料名称、数量、备注、说明、日期、检验员姓名

        jysmModal: false,
        jysmData: [],

        // 验收项目数据
        ysxmData: [],
      }
    },
    computed: {
      JYSMOptions() {
        return StepTwoTableData.WXYH_JYXM;
      },
      YSXMOptions() {
        return StepTwoTableData.WXYH_YSD;
      },
    },
    methods: {
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      addLLBL() {
        this.clList.push(this.clItem);
        this.clItem = {
          lych: '',
            clmc: '',
            sl: '',
            rq: '',
            bz: '',
            sm: '',
            jyy: '',
        };
       console.log('确认添加领料备料记录');
      },
      cancleAddLLBL() {
        console.log('取消添加领料备料记录')
      },
      checkJYXMChange(e) {
        console.log(e);
      },
      addJYSM() {
        console.log(this.jysmData);
        console.log('确认添加维修养护过程检验项目记录');
      },
      cancleAddJYSM() {
        console.log('取消添加维修养护过程检验项目记录');
      },
      getJYSMData() {
        let itemResults = [];
        for (let i = 0; i < StepTwoTableData.WXYH_JYXM.length; i++){
          itemResults.push([]);
        }
        return itemResults;
      },
      getYSXMData() {
        let itemResults = [];
        for (let i = 0; i < StepTwoTableData.WXYH_YSD.length; i++){
          let tmpArray = [];
          itemResults.push([]);
        }
        return itemResults;
      },
      checkYSXM() {
        console.log('选择了验收项目');
        console.log(this.ysxmData);
      }
    },
    mounted () {

    },
    created () {
      this.jysmData = this.getJYSMData();
      this.ysxmData = this.getYSXMData();
    },
  }
</script>
