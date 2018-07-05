<!--添加立案事故登记-->
<!--单位、牌照、自编号、路别、时间、地点、姓名、报案人、事故属性、事故性质、立案日期、勘查人、立案、估损、责任、备注-->
<template>
  <div style="height:auto">
    <Form v-model="formValidate" :rules="ruleValidate" :label-width="80">
      <Row>
        <Col span="12">
          <FormItem label="登记单位">
            <Input v-model="formValidate.zjgs" placeholder="请输入登记单位..." style="width: 180px"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="立案时间">
            <DatePicker v-model="formValidate.lasj" type="date" placeholder="Select date" style="width: 180px"></DatePicker>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="牌照">
            <Input v-model="formValidate.pz" placeholder="请输入牌照..." style="width: 180px"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="自编号">
            <Input v-model="formValidate.zbh" placeholder="请输入车辆自编号..." style="width: 180px"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="驾驶员姓名">
            <Input v-model="formValidate.jsyxm" placeholder="驾驶员姓名..." style="width: 180px"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="路别">
            <Input v-model="formValidate.lb" placeholder="请输入路别..." style="width: 180px"></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="报案人">
          <Input v-model="formValidate.bar" placeholder="报案人..." style="width: 180px"></Input>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="勘察人">
          <Input v-model="formValidate.kcr" placeholder="勘察人..." style="width: 180px"></Input>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="事故属性">
          <Select v-model="formValidate.sgsx" style="width: 180px;">
            <Option value="jq">交强</Option>
            <Option value="cs">车损</Option>
            <Option value="cn">车内</Option>
            <Option value="sz">三者</Option>
          </Select>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="事故性质">
          <Select v-model="formValidate.sgxz" style="width: 180px;">
            <Option value="tdsg">特大事故</Option>
            <Option value="zdsg">重大事故</Option>
            <Option value="jdsg">较大事故</Option>
            <Option value="ybsg">一般事故</Option>
            <Option value="yjsg">一级轻微</Option>
            <Option value="ejsg">二级轻微</Option>
            <Option value="sjsg">三级轻微</Option>
          </Select>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="追加车内">
          <Input v-model="formValidate.zjcn" placeholder="追加车内..." style="width: 180px"></Input>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="追加车损">
          <Input v-model="formValidate.zjcs" placeholder="追加车损..." style="width: 180px"></Input>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="三者">
          <Input v-model="formValidate.sz" placeholder="三者..." style="width: 180px"></Input>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="合计追加">
          <Input v-model="formValidate.hjzj" placeholder="合计追加..." style="width: 180px"></Input>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="预估经损">
          <Input v-model="formValidate.ygjs" placeholder="预估经损..." style="width: 180px"></Input>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="结案经损">
          <Input v-model="formValidate.jajs" placeholder="结案经损..." style="width: 180px"></Input>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="追加扣分">
          <Input v-model="formValidate.zjkf" placeholder="追加扣分..." style="width: 180px"></Input>
        </FormItem>
        </Col>
      </Row>

      <FormItem label="备注">
        <Input v-model="formValidate.bz" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入说明备注..."></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>

  export default {
    name: 'AddAccidentDiv',
    components: {
    },
    data () {
      return {
        formValidate: {
          zjgs: '',
          lasj: '',
          pz: '',
          zbh: '',
          jsyxm: '',
          lb: '',
          bar: '',
          kcr: '',
          sgsx: '交强、车损、车内',
          sgxz: '重大事故',
          ygjs: '100万元',
          jajs: '80万元',
          zjcn: '20万元',
          zjcs: '40万元',
          sz: '20万元',
          hjzj: '100万元',
          zjkf: '10分',
          bz: ''
        },
        ruleValidate: {
          zjgs: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          pz: [
            { required: true, message: '此项不能为空', trigger: 'blur' },
          ],
          lb: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          lasj: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          jsyxm: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          sgsx: [
            { required: true, message: '此项不能为空', trigger: 'change' }
          ],
          sgxz: [
            { required: true, message: '此项不能为空', trigger: 'change' }
          ],
          ygjs: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          jajs: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          zjcn: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          zjcs: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          sz: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          hjzj: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
          zjkf: [
            { required: true, message: '此项不能为空', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style>
  .formItem {
    width: 180px;
  }
</style>
