<!--编辑 运营安全体系执行规范-->
<template>
  <div >
    <Form v-model="formValidate" :label-width="120">

      <Tabs value="name1" style="margin-top: 5px;" type="card">
        <TabPane label="安全教育及管理制度落实" name="name1">
          <div>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="职工安全教育">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.zgaqjy" style="width: 4vw;"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="安全宣传">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.aqxc" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="安全例会">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.aqlh" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="线路安全稽查">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.xlaqjc" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="酒精检测">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.jjjc" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="四不放过">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.sbfg" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="安全标准化">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.aqbzh" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
          </div>
        </TabPane>

        <TabPane label="驾驶员安全管理" name="name2">
          <div>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="吸烟">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.xy" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="接打手机">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.jdsj" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="闯信号">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.cxh" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="未礼让斑马线">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.wlrbmx" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="超速行驶">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.csxs" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="驾驶中闲谈">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.jszxt" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
          </div>
        </TabPane>

        <TabPane label="车辆安全管理" name="name3">
          <div>
            <Row style="margin-left: -20px;">
              <Col span="8">
              <FormItem label="行车十检">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.xcsj" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="车辆安全设施抽检">
                <InputNumber :max="10" :min="0" :step="0.1"  v-model="formValidate.claqsscj" style="width: 4vw"></InputNumber>
              </FormItem>
              </Col>
            </Row>
          </div>
        </TabPane>
      </Tabs>

    </Form>
  </div>
</template>

<script>

  export default {
    name: 'EditSafeExamineArea',
    components: {
    },
    computed: {
    },
    data () {
      return {
        formValidate: {
          zgaqjy: '',
          aqxc: 0,
          aqlh: 0,
          xlaqjc: 0,
          jjjc: 0,
          sbfg: 0,
          aqbzh: 0,

          xy: 0,
          jdsj: 0,
          cxh: 0,
          wlrbmx: 0,
          csxs: 0,
          jszxt: 0,

          xcsj: 0,
          claqsscj: 0,
        },
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
