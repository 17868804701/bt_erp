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


    <!--项目检验记录-->
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

    <!--项目验收记录-->
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
  import * as DateTool from '../../../utils/DateTool'
  export default {
    name: 'AddMMStepTwo',
    components: {
      canEditTable,
    },
    props: {
      sourceData: Object,
    },
    data () {
      return {
        clModal: false,
        clList: [],

        clItem: {
          gg: "",
          ghdw: "",
          ppxh: "",
          jldw: "",
          fj: "",
          dj: '',
          clmc: "",
          jyyxm: "",
          cx: "",
          wpmc: "",
          bz: "",
          sl: '',
          sm: "",
          cph: "",
          id: "",
          je: '',
          yt: "",
          byid: "",
          rq: ''
        },
        clColumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center',
          },
          {
            title: '领料车牌号',
            key: 'cph',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
          },
          {
            title: '商品编码',
            key: 'spbm',
            align: 'center',
          },
          {
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
          },{
            title: '物品分类名称',
            key: 'wpflmc',
            align: 'center',
          },
          {
            title: '供货单位',
            key: 'gys',
            align: 'center',
          },
          {
            title: '计量单位',
            key: 'dw',
            align: 'center',
          },
          {
            title: '规格',
            key: 'gg',
            align: 'center',
          },
          {
            title: '数量',
            key: 'sl',
            align: 'center',
          },
          {
            title: '单价',
            key: 'dj',
            align: 'center',
          },
          {
            title: '金额',
            key: 'je',
            align: 'center',
          },
          {
            title: '日期',
            key: 'rq',
            align: 'center',
          },
          {
            title: '备注',
            key: 'bz',
            align: 'center',
          },
          {
            title: '检验员',
            key: 'jyyxm',
            align: 'center',
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            fixed: 'right',
            width: 150,
            render: (h, params, index) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      for(let attr in this.clItem) {
                        this.clItem[attr] = params.row[attr];
                      }
                      this.clModal = true;
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.deleteCLRow(params.row);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        // 材料名称、数量、备注、说明、日期、检验员姓名

        jysmModal: false,
        ysdData: '',
        ysdList: '',
        jydData: '',
        jydList: '',
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
      deleteCLRow(row) {
        let params = {id: row.id};
        this.$fetch(this.$url.maintain_BYGL_CLBY_CL_delete, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('删除成功!');
            this.$emit('updateInfo');
          }else{
            this.$Message.error('删除失败, 请重试!');
          }
        })
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
      },
      configureData() {
        let ysdData = this.sourceData.pageYsd; // 验收单数据
        let jydData = this.sourceData.pageJyd; // 检验单数据
        let llmxListData = this.sourceData.pageLlmx; // 领料明细数据
        this.clList = llmxListData;
        this.clList.forEach(item=>{
          item.rq = DateTool.timesToDate(item.rq);
        })
      }
    },
    mounted () {

    },
    created () {
      this.jysmData = this.getJYSMData();
      this.ysxmData = this.getYSXMData();
    },
    watch: {
      sourceData(newData) {
        if (typeof newData.code !== undefined) {
          console.log('监听到数据发生改变并且有值, 处理数据!');
          this.configureData();
        }
      }
    }
  }
</script>

<!--商品编码、物品名称、物品分类名称、单位、计划价、供应商-->
<!--spbm、wpmc、wpflmc、dw、jhj、gys-->

<!---->

<!--
车号、车型、物品名称、领料数量、领料规格、供货单位、品牌型号、规格、计量单位、单价、金额、附记
-->

<!--
{
  "bz": "string",
  "clmc": "string",
  "dj": 0,
  "fj": "string",
  "gg": "string",
  "ghdw": "string",
  "je": 0,
  "jldw": "string",
  "jyyxm": "string",
  "ppxh": "string",
  "rq": "2018-08-10T08:33:35.729Z",
  "sl": 0,
  "sm": "string",
  "wpmc": "string",
  "yt": "string"
}
-->
