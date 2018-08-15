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
        :columnsList="clColumns">
      </can-edit-table>
    </Card>
    <!--新增领料备料-->
    <Modal
      v-model="clModal"
      title="新增领料备料"
      width="50%"
      :mask-closable="false"
      :closable="false">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="addLLBL('clItem')">保存</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancleAddLLBL">取消</Button>
      </div>
      <div >
        <Form :model="clItem" :label-width="80" ref="clItem" :rules="ruleValidate">
          <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
            <FormItem prop="wpmc" label="物品名称" style="margin-top: 0px;">
              <Input v-model="clItem.wpmc" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="rq" label="领料日期" style="margin-top: 0px;">
              <DatePicker
                style="width: 120px;"
                type="date"
                placeholder="选择时间"
                :transfer="true"
                placement="bottom-end"
                v-model="clItem.rq">
              </DatePicker>
            </FormItem>
            <FormItem prop="ghdw" label="供货单位" style="margin-top: 0px;">
              <div style="width: 120px;">掌握公司</div>
            </FormItem>
            <FormItem prop="jldw" label="计量单位" style="margin-top: 0px;">
              <Input v-model="clItem.jldw" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="gg" label="规格" style="margin-top: 0px;">
              <Input v-model="clItem.gg" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="ppxh" label="品牌型号" style="margin-top: 0px;">
              <Input v-model="clItem.ppxh" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="sl" label="数量" style="margin-top: 0px;">
              <Input v-model="clItem.sl" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="dj" label="单价" style="margin-top: 0px;">
              <Input v-model="clItem.dj" style="width:120px;"></Input>
            </FormItem>
            <FormItem prop="je" label="金额" style="margin-top: 0px;">
              <Input v-model="clItem.je" style="width:120px;"></Input>
            </FormItem>

            <FormItem prop="yt" label="用途" style="margin-top: 0px;">
              <Select v-model="clItem.yt" style="width: 120px;">
                <Option value="发动机大修">发动机大修</Option>
                <Option value="底盘维修">底盘维修</Option>
                <Option value="其他">其他</Option>
              </Select>
            </FormItem>
            <FormItem prop="fj" label="附记" style="margin-top: 0px;">
              <Input v-model="clItem.fj" style="width:120px;"></Input>
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
      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <div v-for="(item, itemIndex) in jydData" :key="itemIndex">
          <Tooltip v-for="(subItem, subItemIndex) in item" :key="subItem+subItemIndex">
            <div slot="content">{{jydList[itemIndex].title}}</div>
            <Tag style="margin-bottom: 10px;margin-right: 20px;" type="dot" color="green">{{jydTmpData[subItem]}}</Tag>
          </Tooltip>
        </div>
      </div>
    </Card>
    <Modal
      v-model="jysmModal"
      title="新增维护过程检验记录"
      width="50%"
      :mask-closable="false"
      :closable="false">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="addJYSM">保存</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancleAddJYSM">取消</Button>
      </div>
      <div>
        <Form :label-width="50">
          <Tabs style="margin-top: 5px;" type="card">
            <TabPane v-for="(item, index) in jydList" :label="item.title" :key="item.title+index">
              <CheckboxGroup v-model="jydData[index]">
                <Checkbox v-for="(subItem, index) in item.children" :key="subItem.title+index" :label="subItem.code">{{subItem.title}}</Checkbox>
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
        <Panel v-for="(item, index) in YSXMOptions" :name="item+index" :key="item+index">
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
          cph: "",
          wpmc: "",
          ghdw: "",
          jldw: "",
          gg: "",
          ppxh: "",
          sl: "",
          dj: "",
          je: "",
          rq: "",
          yt: "",
          fj: "",
          id: "",
          byid: "",
        },
        ruleValidate: {
          wpmc: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          sl: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          dj: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          yt: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          rq: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
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
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
          },
          {
            title: '供货单位',
            key: 'ghdw',
            align: 'center',
          },
          {
            title: '计量单位',
            key: 'jldw',
            align: 'center',
          },
          {
            title: '规格',
            key: 'gg',
            align: 'center',
          },
          {
            title: '品牌型号',
            key: 'ppxh',
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
            title: '领料日期',
            key: 'rq',
            align: 'center',
          },
          {
            title: '用途',
            key: 'yt',
            align: 'center',
          },
          {
            title: '附记',
            key: 'fj',
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
                      this.clItem.sl = params.row.sl.toString();
                      this.clItem.dj = params.row.dj.toString();
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


        jysmModal: false,
        jydData: [],  // 存放选中的数据
        jydList: [],  // 存放检验单原始数据
        jydTmpData: {},

        ysdData: '',
        ysdList: '',
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
      // *********  领料备料   ********** //
      addLLBL(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.saveOrUpdateRow();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      saveOrUpdateRow() {
        if (this.clItem.id !== '') {
          this.$post(this.$url.maintain_BYGL_CLBY_CL_update, this.clItem)
          .then(res => {
            console.log(res);
            if (res.code === 0) {
              this.$Message.success('更新成功!');
              this.clModal = false;
              this.clItem = {
                cph: "",
                wpmc: "",
                ghdw: "",
                jldw: "",
                gg: "",
                ppxh: "",
                sl: "",
                dj: "",
                je: "",
                rq: "",
                yt: "",
                fj: "",
                id: "",
                byid: "",
              }
              this.$emit('updateInfo');
            }else{
              this.$Message.error('更新失败!');
            }
          })
          console.log('更新领料备料记录');
        }else{
          this.$post(this.$url.maintain_BYGL_CLBY_CL_save, this.clItem)
          .then(res => {
            if (res.code === 0) {
              this.$Message.success('保存成功!');
              this.clModal = false;
              this.clItem = {
                cph: "",
                wpmc: "",
                ghdw: "",
                jldw: "",
                gg: "",
                ppxh: "",
                sl: "",
                dj: "",
                je: "",
                rq: "",
                yt: "",
                fj: "",
                id: "",
                byid: "",
              }
              this.$emit('updateInfo');
            }else{
              this.$Message.error('保存失败!');
            }
          })
          console.log('添加领料备料记录');
        }
      },
      cancleAddLLBL() {
        this.clModal = false;
        this.clItem = {
          cph: "",
          wpmc: "",
          ghdw: "",
          jldw: "",
          gg: "",
          ppxh: "",
          sl: "",
          dj: "",
          je: "",
          rq: "",
          yt: "",
          fj: "",
          id: "",
          byid: "",
        }
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
      // *********  领料备料   ********** //

      // *********  检验单   ********** //
      checkJYD(e) {
        console.log(this.jyd);
      },
      addJYSM() {
        console.log(this.jydData);
        console.log(this.jydList);
        console.log('确认添加维修养护过程检验项目记录');
        let itemStringArr = [];
        // 深拷贝数组
        let deepCopyArray = JSON.parse(JSON.stringify(this.jydData));
        // 根据页面匹配的源数据进行包装后台存储json字符串
        for (let i = 0; i < deepCopyArray.length; i++) {
          // 对应的源数据
          let sourceObj = this.jydList[i];
          // 选中的数据
          let selectObjectArray = deepCopyArray[i];
          let selectObj = {
            title: sourceObj.title,
            code: sourceObj.code,
            selectValues: selectObjectArray,
          }
          itemStringArr.push(selectObj);
        }

        let result = JSON.stringify(itemStringArr);
        console.log(result);
        
        let params = {
          id: '',
          ysxmmc: result,
          byid: this.sourceData.clby.id,
        };
        if (this.sourceData.pageJyd !== null && typeof this.sourceData.pageJyd.id !== undefined) {
          params.id = this.sourceData.pageJyd.id;
        }
        
        debugger;
        this.$post(this.$url.maintain_BYGL_CLBY_JYD_saveOrUpdate, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.jysmModal = false;
          }else{
            this.$Message.error('保存失败!');
          }
        })
      },
      cancleAddJYSM() {
        console.log('取消添加维修养护过程检验项目记录');
        this.jysmModal = false;
      },
      // *********  检验单   ********** //

      // *********  验收单   ********** //

      // *********  验收单   ********** //
      checkJYXMChange(e) {
        console.log(e);
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
        this.clItem.cph = this.sourceData.clby.cph;
        this.clItem.rq = new Date();


        let ysdData = this.sourceData.pageYsd; // 验收单数据
        let jydData = this.sourceData.pageJyd; // 检验单数据

        let llmxListData = this.sourceData.pageLlmx; // 领料明细数据
        this.clList = llmxListData;
        this.clList.forEach(item=>{
          item.rq = DateTool.timesToDate(item.rq);
        })
      },
      initData() { // 初始化验收单和检验单项目明细
        let jydSourceData = [];
        let params = {code : 'JYXM'};
        var that = this;
        this.$fetch(this.$url.common_getAllDictListDataWithCode, params)
        .then(res => {
          if (res.success === true) {
            let data = res.data[0].children;
            console.log(data);
            // 简化数据
            data.forEach(item => {
              let obj = {
                title: item.title,
                code: item.code,
                children: [],
              }
              item.children.forEach(subItem => {
                that.jydTmpData[subItem.code] = subItem.title;
                let subObj = {
                  title: subItem.title,
                  code: subItem.code,
                }
                obj.children.push(subObj);
              })
              jydSourceData.push(obj);
            })
            
            debugger;
            
            // 初始化绑定的数据, 默认为空
            that.jydList = jydSourceData;
            for (let i = 0; i < that.jydList.length; i++){
              that.jydData.push([]);
            }
          }
        })
      }
    },
    mounted () {
      this.initData();
    },
    created () {
      this.jysmData = this.getJYSMData();
      this.ysxmData = this.getYSXMData();
    },
    watch: {
      sourceData(newData) {
        if (typeof newData.code !== undefined) {
//          console.log('监听到数据发生改变并且有值, 处理数据!');
          this.configureData();
        }
      }
    }
  }
</script>

<!--商品编码、物品名称、物品分类名称、单位、计划价、供应商-->
<!--spbm、wpmc、wpflmc、dw、jhj、gys-->

<!--
{
	"gg": "规格1",             规格，	  手动输入
	"ghdw": "供货单位1",        供货单位， 默认是 掌握 公司；
	"ppxh": "品牌型号1",        品牌型号， 手动输入
	"jldw": "计量单位1",        计量单位， 手动输入
	"fj": "附记1",              附记，	  手动输入，
	"dj": 100.0,               单价，       手动输入
	"wpmc": "物品名称",         物品名称,   从配件信息列表中选取;
	"sl": 100,                 数量，	  手动输入
	"cph": "陕A1111",          车号，
	"id": "15dac5464f7e4c909d5baf7fbc6c6277",
	"je": 500.0,              金额，        数量*单价
	"yt": "用途1",             用途，        (发动机大修、底盘维修、其他）选择
	"byid": "d0de126b196649bcbffc0f48828e7136",
	"rq": 1533021291000       领料日期，
}
-->

<!--
车号、车型、物品名称、领料数量、领料规格、供货单位、品牌型号、规格、计量单位、单价、金额、附记
-->

<!--












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
