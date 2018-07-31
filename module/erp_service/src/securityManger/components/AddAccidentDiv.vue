<!--添加立案事故登记-->
<template>
  <div style="height:auto">
    <Form ref="addAccident" :model="formValidate" :rules="ruleValidate" :label-width="150">

      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <!--<FormItem prop="larq" label="立案日期">-->
          <!--<div style="width: 120px">{{formValidate.larq}}</div>-->
        <!--</FormItem>-->
        <FormItem label="事故性质">
          <div style="width: 120px">{{formValidate.sgxz}}</div>
        </FormItem>
        <FormItem label="事故总损失(元)">
          <div style="width: 120px">{{SGZSS}}</div>
        </FormItem>
        <FormItem label="公积金定损金额合计(元)">
          <div style="width: 120px">{{GJJHJ}}</div>
        </FormItem>
        <FormItem prop="sgsx" label="事故属性">
          <CheckboxGroup v-model="formValidate.sgsx">
            <Checkbox label="交强"></Checkbox>
            <Checkbox label="车损"></Checkbox>
            <Checkbox label="车内"></Checkbox>
            <Checkbox label="三者"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem prop="xczrsgfl" label="行车责任">
          <Select v-model="formValidate.xczrsgfl" style="width: 120px;">
            <Option value="QBZR">全部责任</Option>
            <Option value="ZYZR">主要责任</Option>
            <Option value="TDZR">同等责任</Option>
            <Option value="SJQW">次要责任</Option>
          </Select>
        </FormItem>
        <FormItem prop="jafy" label="结案费用">
          <Input v-model="formValidate.jafy" placeholder="结案费用..." style="width: 120px"></Input>
        </FormItem>
      </div>

      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <FormItem prop="dw" label="登记单位">
          <Select v-model="formValidate.dw" style="width: 120px;">
            <Option value="公交一公司">公交一公司</Option>
            <Option value="公交二公司">公交二公司</Option>
            <Option value="公交三公司">公交三公司</Option>
            <Option value="公交四公司">公交四公司</Option>
          </Select>
        </FormItem>
        <FormItem prop="pz" label="牌照">
          <Input v-model="formValidate.pz" placeholder="请输入牌照..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="zbh" label="自编号">
          <Input v-model="formValidate.zbh" placeholder="请输入车辆自编号..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="lb" label="路别">
          <Input v-model="formValidate.lb" placeholder="请输入路别..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="jsyxm" label="驾驶员姓名">
          <Input v-model="formValidate.jsyxm" placeholder="驾驶员姓名..." style="width: 120px"></Input>
        </FormItem>

        <FormItem prop="dd" label="地点">
          <Input v-model="formValidate.dd" placeholder="地点..." style="width: 120px"></Input>
        </FormItem>
        <!--<FormItem prop="lasj" label="立案时间">-->
          <!--<DatePicker v-model="formValidate.lasj" type="date" placeholder="Select date" style="width: 120px"></DatePicker>-->
        <!--</FormItem>-->
        <FormItem prop="lalx" label="立案状态">
          <Input v-model="formValidate.lalx" placeholder="立案状态..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="bar" label="报案人">
          <Input v-model="formValidate.bar" placeholder="报案人..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="kcr" label="勘察人">
          <Input v-model="formValidate.kcr" placeholder="勘察人..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="ssrs" label="受伤人数">
          <Input v-model="formValidate.ssrs" placeholder="受伤人数..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="swrs" label="死亡人数">
          <Input v-model="formValidate.swrs" placeholder="死亡人数..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="kf" label="追加扣分">
          <Input v-model="formValidate.kf" placeholder="追加扣分..." style="width: 120px"></Input>
        </FormItem>
      </div>

      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <FormItem prop="gjjcs" label="公积金车损">
          <Input v-model="formValidate.gjjcs" placeholder="公积金车损..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="gjjcn" label="公积金车内">
          <Input v-model="formValidate.gjjcn" placeholder="公积金车内..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="gjjsz" label="公积金三者">
          <Input v-model="formValidate.gjjsz" placeholder="公积金三者..." style="width: 120px"></Input>
        </FormItem>
        <FormItem prop="jqxss" label="交强险损失">
          <Input v-model="formValidate.jqxss" placeholder="交强险损失..." style="width: 120px"></Input>
        </FormItem>
      </div>

      <FormItem prop="bz" label="备注">
        <Input style="width: 50%" v-model="formValidate.bz" type="textarea" :autosize="{minRows: 2,maxRows: 4}" placeholder="请输入说明备注..."></Input>
      </FormItem>

    </Form>
  </div>
</template>

<script>

  export default {
    name: 'AddAccidentDiv',
    props: {
      formValidate: {
        dw: String,
        pz: String,
        dd: String,
        lalx: String,
        zbh: String,
        jsyxm: String,
        lb: String,
        bar: String,
        kcr: String,
        sgsx: Array,
        sgxz: String,
        kf: String,
        bz: String,
        swrs: String,
        ssrs: String,
        gjjcs: String,
        gjjcn: String,
        gjjsz: String,
        gjjhj: String,
        jqxss: String,
        sgzss: String,
        zr: String,
        jafy: String,
        xczrsgfl: String,
      },
    },
    components: {

    },
    data () {
      return {
        ruleValidate: {
          dw: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          xczrsgfl: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          pz: [
            { required: true, message: '此项不能为空', trigger: 'blur' },
          ],
          dd: [
            { required: true, message: '此项不能为空', trigger: 'blur' },
          ],
          lalx: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          lb: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          zbh: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
//          lasj: [
//            { required: true, message: '此项不能为空', trigger: 'blur',type: 'date' }
//          ],
          jsyxm: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          sgsx: [
            { required: true, type: 'array', min: 1, message: '请至少选择一个', trigger: 'change' },
          ],
          zr: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      checkSGSX() {
        console.log('选择了事故属性');
      }
    },
    computed: {
      GJJHJ() {
        return Number(this.formValidate.gjjcs)+Number(this.formValidate.gjjcn)+Number(this.formValidate.gjjsz);
      },
      SGZSS() {
        return Number(this.formValidate.gjjcs)+Number(this.formValidate.gjjcn)+Number(this.formValidate.gjjsz)+Number(this.formValidate.jqxss);
      },
      SGXZ() {
        let swrs = Number(this.formValidate.swrs);
        let ssrs = Number(this.formValidate.ssrs);
        let sgzss = Number(this.formValidate.gjjcs)+Number(this.formValidate.gjjcn)+Number(this.formValidate.gjjsz)+Number(this.formValidate.jqxss);
        let result = '';
        if (swrs>=30 || ssrs>=100 || sgzss>=100000000) {
          result = '特别重大事故';
        } else if ((swrs>=10 && swrs<30) || (ssrs>=50 && ssrs<100) || (sgzss>=50000000 && sgzss<100000000)) {
          result = '重大事故';
        } else if ((swrs>=3 && swrs<10) || (ssrs>=10 && ssrs<50) || (sgzss>=10000000 && sgzss<50000000)) {
          result = '较大事故';
        } else if (1<=swrs<3 || 1<=ssrs<10 || (sgzss>=500000 && sgzss<10000000)) {
          result = '一般事故';
        }else if (swrs==0&&ssrs==0&&sgzss>=300000 && sgzss<500000) {
          result = '一级轻微事故';
        }else if (swrs==0&&ssrs==0&&sgzss>=50000 && sgzss<300000) {
          result = '二级轻微事故';
        }else if (swrs==0&&ssrs==0&&sgzss>=10000 && sgzss<500000) {
          result = '三级轻微事故';
        }else{
          result = '极其轻微事故';
        }
        return result;
      }
    },
    mounted () {

    }
  }
</script>

<style>
</style>
