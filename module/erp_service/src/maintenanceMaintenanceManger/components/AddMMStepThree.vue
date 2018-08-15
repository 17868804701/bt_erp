<template>
  <div style="margin-top: 40px;">
    <Card style="margin-top: 20px;">
      <p slot="title" >
        出厂合格登记
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" :icon="editIcon" @click="clickEditCCInfo">{{editText}}</Button>
      <Button v-if="ccDataIsEdit" slot="extra" type="success" size="small" style="margin-right: 10px;" icon="checkmark" @click="saveCCData">保存</Button>
      <Form v-model="ccData" :label-width="100">
        <div style="display: flex;flex-wrap: wrap;">
          <FormItem label="车辆自编号:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.clzbh" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.clzbh}}</div>
          </FormItem>
          <FormItem label="车型:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.cx" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.cx}}</div>
          </FormItem>
          <FormItem label="送修人:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.sxr" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.sxr}}</div>
          </FormItem>
          <FormItem label="检验员:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.jyy" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.jyy}}</div>
          </FormItem>
          <FormItem label="修别:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.xb" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.xb}}</div>
          </FormItem>
          <FormItem label="发动机:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.fdjdx" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.fdjdx}}</div>
          </FormItem>
          <FormItem label="承修公司:" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccData.cxgs" style="width:120px;"></Input>
            <div style="width: 120px;" v-else>{{ccData.cxgs}}</div>
          </FormItem>
          <FormItem label="出厂日期:" style="margin-top: 0px;">
            <DatePicker type="date" placeholder="选择月份"  :transfer="true" placement="bottom-end" v-if="ccDataIsEdit" v-model="ccData.ccrq"></DatePicker>
            <div style="width: 120px;" v-else>{{ccData.ccrq}}</div>
          </FormItem>
        </div>
      </Form>
      <Form v-model="ccData" :label-width="100">
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
          <FormItem label="出厂说明:" style="margin-top: 0px;">
            <Input style="width:300px;" v-if="ccDataIsEdit" v-model="ccData.ccsm" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入出厂说明..."></Input>
            <div style="width: 120px;" v-else>{{ccData.ccsm}}</div>
          </FormItem>
        </div>
      </Form>
    </Card>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    name: 'AddMMStepThree',
    components: {
    },
    props: {
      sourceData: Object,
    },
    data () {
      return {
        ccData: {
          id: "82de0dcd408d486f8d3f16c338b736cf",
          clzbh: "",
          cx: "",
          sxr: "",
          jyy: "",
          xb: '',
          fdjdx: '',
          cxgs: '',
          ccrq: '',
          ccsm: '',
        },
        ccDataColumns: [
          {
            nameCode: 'ch',
            nameText: '车号:',
            value: '1-2188'
          },
          {
            nameCode: 'cx',
            nameText: '车型:',
            value: '中型客车'
          },
          {
            nameCode: 'xb',
            nameText: '修别:',
            value: '三养'
          },
          {
            nameCode: 'fdjdx',
            nameText: '发动机大修:',
            value: '是'
          },
          {
            nameCode: 'cxdw',
            nameText: '承修单位:',
            value: '修理公司'
          },
          {
            nameCode: 'ccrq',
            nameText: '出厂日期:',
            value: '2019-09-09'
          },
          {
            nameCode: 'jyy',
            nameText: '检验员:',
            value: '小黄'
          },
        ],
        ccDataIsEdit: false,
      }
    },
    computed: {
      editText() {
        if (!this.ccDataIsEdit) {
          return '编辑';
        }else{
          return '取消';
        }
      },
      editIcon() {
        if (!this.ccDataIsEdit) {
          return 'edit';
        }else{
          return 'close';
        }
      },
      formatCCRQ() {
        if (typeof this.ccData.ccrq === 'date'){
          return DateTool.yyyymmddFormatDate(this.ccData.ccrq);
        }else{
          return this.ccData.ccrq;
        }
      }
    },
    methods: {
      clickEditCCInfo() { // 编辑车辆基本信息
        console.log('点击了取消或者编辑');
        // 点击取消后还原数据
        if (this.ccDataIsEdit === true) {
          let clbyBasicData = this.sourceData.clby;
          for (let attr in clbyBasicData) {
            this.ccData[attr] = clbyBasicData[attr];
          }
          this.ccData.ccrq = DateTool.timesToDate(this.ccData.ccrq);
        }
        this.ccDataIsEdit = !this.ccDataIsEdit;

      },
      saveCCData() { // 保存修改车辆基本信息
        console.log('保存信息');
        this.$post(this.$url.maintain_BYGL_CLBY_updateRecord, this.ccData)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.ccDataIsEdit = false;
            this.$Message.success('更新成功!');
            this.$emit('updateInfo');
          }else{
            this.$Message.error('更新失败, 请重试!');
          }
        })
      },

      // *********  初始化数据   ********** //
      configureData() {
        console.log(this.sourceData);
        let clbyBasicData = this.sourceData.clby;
        for (let attr in clbyBasicData) {
          this.ccData[attr] = clbyBasicData[attr];
        }
        this.ccData.ccrq = DateTool.timesToDate(this.ccData.ccrq);
      }
      // *********  初始化数据   ********** //
    },
    mounted () {

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

<!--
  车辆自编号、车型、修别、发动机大修、承修单位、出厂日期、出厂说明、接车检验司机、检验员
-->

<!--
{
	"clzbh": "Y3211",     车辆自编号
	"cx": "大车",          车型
	"sxr": "谢忠华",       送修人
	"jyy": "谢忠华",       检验员
	"xb": null,           修别
	"fdjdx": null,        发动机大修
	"cxgs": null,         承修单位
	"ccrq": 1534298842000,出厂日期
	"ccsm": null,         出厂说明
}
-->
