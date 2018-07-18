<!-- 进厂登记阶段-->
<template>
  <div>

    <Card style="margin-top: 20px;">
      <p slot="title" >
        车辆保养基本信息
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" :icon="editIcon" @click="basicDataIsEdit = !basicDataIsEdit">{{editText}}</Button>
      <Button v-if="basicDataIsEdit" slot="extra" type="success" size="small" style="margin-right: 10px;" icon="checkmark" @click="saveBasicData">保存</Button>
      <Form v-model="basicData" :label-width="100">
        <div style="display: flex;flex-wrap: wrap;">
          <FormItem v-for="(item, index) in basicDatacolumns" :key="item+index" :label="basicDatacolumns[index].nameText" style="margin-top: 0px;">
            <Input v-if="basicDataIsEdit" v-model="basicDatacolumns[index].value" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{basicDatacolumns[index].value}}</div>
          </FormItem>
        </div>

        <div style="display: flex;flex-wrap: wrap;">
          <FormItem label="是否有丢失件:" style="margin-top: 0px;" >
            <i-switch v-model="basicData.dsjSwitchValue">
              <span slot="open">是</span>
              <span slot="close">否</span>
            </i-switch>
          </FormItem>
          <FormItem label="是否维修发动机:" style="margin-top: 0px;margin-left: 75px;" >
            <i-switch v-model="basicData.switchValue">
              <span slot="open">是</span>
              <span slot="close">否</span>
            </i-switch>
          </FormItem>
          <FormItem label="是否超养:" style="margin-top: 0px;margin-left: 75px;" >
            <i-switch v-model="basicData.cySwitchValue">
              <span slot="open">是</span>
              <span slot="close">否</span>
            </i-switch>
          </FormItem>
        </div>
      </Form>
    </Card>

    <!--丢失件修配记录-->
    <Card v-if="basicData.dsjSwitchValue" style="margin-top: 20px;">
      <p slot="title" >
        丢失件修配记录
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="dsjModal = true;">添加</Button>
      <Row align="middle" style="flex-wrap: wrap">
        <can-edit-table style="margin-top: 10px;" v-model="dsjList" :columnsList="dsjColumns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
        </can-edit-table>
      </Row>
    </Card>

    <Modal
      v-model="dsjModal"
      title="新增丢失件修配记录"
      width="50%"
      @on-ok="addDSJ"
      @on-cancel="cancleAddDSJ">
      <div>
        <Form v-model="dsj" :label-width="60">
          <Row>
            <Col span="8">
              <FormItem label="名称">
                <Input v-model="dsj.mc" placeholder="名称..." style="width: 100px"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="数量">
                <Input v-model="dsj.sl" placeholder="数量..." style="width: 100px"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="修配结果">
                <Input v-model="dsj.xpjg" placeholder="修配结果..." style="width: 100px"></Input>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>

    <!--发动机进厂技术记录-->
    <Card v-if="basicData.switchValue" style="margin-top: 20px;">
      <p slot="title" >
        发动机进厂技术记录
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" :icon="fdjEditIcon" @click="fdjDataIsEdit = !fdjDataIsEdit">{{fdjEditText}}</Button>
      <Button v-if="fdjDataIsEdit" slot="extra" type="success" size="small" style="margin-right: 10px;" icon="checkmark" @click="saveFDJData">保存</Button>
        <Form v-model="fdjData" :label-width="70">
          <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <FormItem v-for="(item, index) in fdjDataColumns" :key="item+index" :label="fdjDataColumns[index].nameText" style="margin-top: 0px;">
              <Input v-if="fdjDataIsEdit" v-model="fdjDataColumns[index].value" style="width:120px;"></Input>
              <div style="width: 120px;" v-else>{{fdjDataColumns[index].value}}</div>
            </FormItem>
          </div>
        </Form>
      <Input v-model="fdjData.bz" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入说明备注..."></Input>

      <Button type="primary" size="small" style="margin-top: 10px;position: absolute;right: 20px;" icon="plus" @click="fdjQGModal=true">添加</Button>
      <Table border style="margin-top: 50px;" :data="FDJ_QG_DATA" :columns="FDJ_QG_COLUMNS"></Table>

      <Button type="primary" size="small" style="margin-top: 10px;position: absolute;right: 20px;" icon="plus" @click="fdjQZModal=true">添加</Button>
      <Table border style="margin-top: 50px;" :data="FDJ_QZ_DATA" :columns="FDJ_QZ_COLUMNS"></Table>
    </Card>
    <!--新增气缸凸轮轴-->
    <Modal
      v-model="fdjQGModal"
      title="新增气缸凸轮轴检测数据"
      width="50%"
      @on-ok="addFDJQGData"
      @on-cancel="cancleAddFDJQGData">
      <AddFDJQGView :qgData="fdjQGData"/>
    </Modal>
    <!--新增曲轴-->
    <Modal
      v-model="fdjQZModal"
      title="新增曲轴检测数据"
      width="50%"
      @on-ok="addFDJQZData"
      @on-cancel="cancleAddFDJQZData">
      <AddFDJQZView :qzData="fdjQZData"/>
    </Modal>

    <!--超养作业记录-->
    <Card v-if="basicData.cySwitchValue" style="margin-top: 20px;">
      <p slot="title" >
        超养作业记录
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="cyModal=true">添加</Button>
      <Row align="middle" style="flex-wrap: wrap">
        <can-edit-table
          style="margin-top: 10px;"
          v-model="cyList"
          :columnsList="cyColumns"
          :editIncell="true"
          :hoverShow="true"
          @on-cell-change="handleCellChange"
          @on-change="handleChange">
        </can-edit-table>
      </Row>
    </Card>

    <Modal
      v-model="cyModal"
      title="新增超养作业记录"
      width="50%"
      @on-ok="addCYZY"
      @on-cancel="cancleAddCYZY">
      <div>
        <Form v-model="cyItem" :label-width="60">
          <Row>
            <Col span="8">
            <FormItem label="项目">
              <Input v-model="cyItem.xm" placeholder="项目..." style="width: 100px"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="数量">
              <Input v-model="cyItem.sl" placeholder="数量..." style="width: 100px"></Input>
            </FormItem>
            </Col>
            <Col span="8">
            <FormItem label="修复方法">
              <Input v-model="cyItem.xfff" placeholder="修复方法..." style="width: 100px"></Input>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>

  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import FDJData from './StepOneTableData'
  import AddFDJQZView from './AddFDJQZView.vue'
  import AddFDJQGView from './AddFDJQGView.vue'
  export default {
    name: 'AddMMStepOne',
    components: {
      canEditTable,
      AddFDJQZView,
      AddFDJQGView
    },
    data () {
      return {

        // **************** 车辆基本数据 ************** //
        basicData: {
          djbh: '20170909-011',
          clzbh: '3-231',
          cph: '蒙B12311',
          xl: '706路',
          fgs: '分公司',
          jcsj: '2017-09-09',
          sxr: '小黄',
          jyy: '小黄',
          bylb: '三养',
          switchValue: false,
          dsjSwitchValue: false,
          cySwitchValue: false,
        },
        dsjModal: false,
        cyModal: false,
        basicDataIsEdit: false,
        basicDatacolumns: [
          {
            nameCode: 'djbh',
            nameText: '登记编号:',
            value: '公交一公司'
          },
          {
            nameCode: 'clzbh',
            nameText: '车辆自编号:',
            value: '3-231'
          },
          {
            nameCode: 'cph',
            nameText: '车牌号:',
            value: '蒙B12311'
          },
          {
            nameCode: 'xl',
            nameText: '线路:',
            value: '706路'
          },
          {
            nameCode: 'fgs',
            nameText: '分公司:',
            value: '2018-09-10'
          },
          {
            nameCode: 'jcsj',
            nameText: '进厂时间:',
            value: '2017-09-09'
          },
          {
            nameCode: 'sxr',
            nameText: '送修人:',
            value: '小黄'
          },
          {
            nameCode: 'jyy',
            nameText: '检验员:',
            value: '小黄'
          },
          {
            nameCode: 'bylb',
            nameText: '保养类别:',
            value: '三养'
          },
        ],

        // **************** 发动机数据 ************** //
        FDJ_QG_COLUMNS: [],
        FDJ_QG_DATA: [],
        FDJ_QZ_COLUMNS: [],
        FDJ_QZ_DATA: [],
        fdjData: {
          jcch: '1-2188',
          fdjh: '559',
          cx: '141',
          jcsj: '2017-04-17',
          sfxj: '下套+0.00',
          cxr: '李光',
          bz: '',
          jyy: '小黄'
        },
        fdjQGData: {
          qg_sb_qh: '101.67',
          qg_sb_zy: '101.68',
          qg_zb_qh: '101.68',
          qg_zb_zy: '101.67',
          qg_xb_qh: '101.68',
          qg_xb_zy: '101.68',
          hscc: '101.59',
          tlz_jq: '7.24',
          tlz_pq: '7.23',
        },
        fdjQZData: {
          qz_qzj_zj: '74.991111111',
          qz_qzj_yd: '0.01',
          qz_qzj_yzd: '-',

          qz_lgj_zj: '61.99',
          qz_lgj_yd: '0.01',
          qz_lgj_yzd: '-',
        },
        fdjDataIsEdit: false,
        fdjQZModal: false,
        fdjQGModal: false,
        fdjDataColumns: [
          {
            nameCode: 'jcch',
            nameText: '机厂车号:',
            value: '1-2188'
          },
          {
            nameCode: 'fdjh',
            nameText: '发动机号:',
            value: '559'
          },
          {
            nameCode: 'cx',
            nameText: '车型:',
            value: '141'
          },
          {
            nameCode: 'sfxj',
            nameText: '是否镶嵌:',
            value: '下套+0.00'
          },
          {
            nameCode: 'cxr',
            nameText: '承修人:',
            value: '李光'
          },
          {
            nameCode: 'jyy',
            nameText: '检验员:',
            value: '小黄'
          },
        ],

        // **************** 丢失件修配数据 ************** //
        dsjColumns: [
          {
            key: 'mc',
            title: '名称',
            editable: true
          },
          {
            key: 'sl',
            title: '数量',
            editable: true
          },
          {
            key: 'xpjg',
            title: '修配结果',
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
                      console.log('删除');
                      this.dsjList.splice(index, 1);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        dsjList: [],
        dsj: {
          mc: '',
          sl: '',
          xpjg: '',
        },

        // **************** 超养作业记录数据 ************** //
        cyColumns: [
          {
            key: 'xm',
            title: '项目',
            editable: true
          },
          {
            key: 'sl',
            title: '数量',
            editable: true
          },
          {
            key: 'xfff',
            title: '修复方法',
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
                      this.cyList.splice(index, 1);
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        cyList: [],
        cyItem: {
          xm: '',
          sl: '',
          xfff: '',
        },
      }
    },
    computed: {
      editText() {
        if (!this.basicDataIsEdit) {
          return '编辑';
        }else{
          return '取消';
        }
      },
      editIcon() {
        if (!this.basicDataIsEdit) {
          return 'edit';
        }else{
          return 'close';
        }
      },
      fdjEditText() {
        if (!this.fdjDataIsEdit) {
          return '编辑';
        }else{
          return '取消';
        }
      },
      fdjEditIcon() {
        if (!this.fdjDataIsEdit) {
          return 'edit';
        }else{
          return 'close';
        }
      }
    },
    methods: {
      clickEditBasicData() { // 编辑车辆基本信息
        this.basicDataIsEdit = !this.basicDataIsEdit;
      },
      saveBasicData() { // 保存修改车辆基本信息
        console.log('保存信息');
        this.basicDataIsEdit = false;
      },
      clickAddDSJAction() {

      },
      addDSJ() { // 确认添加丢失件
        this.dsjList.push(this.dsj);
        this.dsj = {
          mc: '',
          sl: '',
          xpjg: '',
        };
        console.log('确认添加');
      },
      cancleAddDSJ() { // 取消添加丢失件
        console.log('取消添加');
      },
      addCYZY() { // 添加超养记录
        this.cyList.push(this.cyItem);
        this.cyItem = {
          xm: '',
          sl: '',
          xfff: '',
        };
        console.log('确认添加');
      },
      cancleAddCYZY() {
        console.log('取消添加超养作业记录');
      },

      saveFDJData() { // 修改保存 发动机基本信息
        this.fdjDataIsEdit = false;
      },
      addFDJQGData() {
        //FDJ_QZ_DATA
        //fdjQZData
        this.FDJ_QG_DATA.push(this.fdjQGData);
        this.fdjQGData = {
          qg_sb_qh: '101.67',
          qg_sb_zy: '101.68',
          qg_zb_qh: '101.68',
          qg_zb_zy: '101.67',
          qg_xb_qh: '101.68',
          qg_xb_zy: '101.68',
          hscc: '101.59',
          tlz_jq: '7.24',
          tlz_pq: '7.23',
        };
        console.log('添加气缸凸轮轴检测数据');
      },
      cancleAddFDJQGData() {
        console.log('取消添加气缸凸轮轴检测数据');
      },
      addFDJQZData() {
        //FDJ_QZ_DATA
        //fdjQZData
        this.FDJ_QZ_DATA.push(this.fdjQZData);
        this.fdjQZData = {
          qz_qzj_zj: '',
          qz_qzj_yd: '',
          qz_qzj_yzd: '',

          qz_lgj_zj: '',
          qz_lgj_yd: '',
          qz_lgj_yzd: '',
        };
        console.log('添加曲轴检测数据');
      },
      cancleAddFDJQZData() {
        console.log('取消添加曲轴检测数据');
      },

      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      clickAddFDJAction() {
      },

      getListData(item) {
        let dataArray = [];
        for (let i = 0; i < 6; i++) {
          dataArray.push(item);
        }
        return dataArray;
      },
      getData () {
        // 气缸
        this.FDJ_QG_COLUMNS = FDJData.FDJ_QG_COLUMNS;
        this.FDJ_QZ_COLUMNS = FDJData.FDJ_QZ_COLUMNS;
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      }
    },
    mounted () {

    },
    created () {
      this.getData();
    }
  }
</script>
