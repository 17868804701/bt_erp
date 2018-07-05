<!--追加事故经损记录-->
<!--追加公司、追加车内、追加车损、三者、合计追加、追加扣分、备注-->
<template>
  <div >
    <Form v-model="formValidate" :rules="ruleValidate" :label-width="80">
      <Row>
        <Col span="12">
        <FormItem label="追加公司">
          <Input v-model="formValidate.zjgs" placeholder="请输入追加公司..." style="width: 180px"></Input>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="合计追加">
          {{hjzj}}
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="追加车内">
          <InputNumber v-model="formValidate.zjcn" placeholder="追加车内..." style="width: 180px"></InputNumber>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="追加车损">
          <InputNumber v-model="formValidate.zjcs" placeholder="追加车损..." style="width: 180px"></InputNumber>
        </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
        <FormItem label="三者">
          <InputNumber v-model="formValidate.sz" placeholder="三者..." style="width: 180px"></InputNumber>
        </FormItem>
        </Col>
        <Col span="12">
        <FormItem label="追加扣分">
          <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.zjkf" placeholder="追加扣分..." style="width: 180px"></InputNumber>
        </FormItem>
        </Col>
      </Row>

      <FormItem label="备注">
        <Input v-model="formValidate.bz" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入追加说明..."></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>

  export default {
    name: 'AddLossDiv',
    components: {
    },
    computed: {
      hjzj: function() {
        return parseFloat(this.formValidate.zjcs) + parseFloat(this.formValidate.zjcn) + parseFloat(this.formValidate.sz);
      }
    },
    data () {
      return {
        formValidate: {
          zjgs: '',
          zjcn: 0,
          zjcs: 0,
          sz: 0,
          hjzj: '',
          zjkf: 0,
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
