<!--添加维修养护 , 还未出厂页面-->
<template>
  <div style="padding: 20px; height: 100%;">
    <h2>
      新增车辆维修养护
      <router-link to="/MMList">
        <Button type="primary" size="small" style="margin-right: 10px;"><<返回列表页</Button>
      </router-link>
    </h2>
    <div style="margin-top: 20px;">
      <Steps :current="currentStep">
        <Step title="进厂检验接单">
        </Step>
        <Step title="维修养护测试阶段"></Step>
        <Step title="出厂"></Step>
      </Steps>
    </div>

    <AddMMStepOne v-if="this.currentStep === 0 || this.currentStep === 1 || this.currentStep === 2"></AddMMStepOne>

    <div style="margin-top: 20px;width: 100%;display: flex;justify-content: center">
      <Button type="primary" @click="nextStep">开始维修</Button>
    </div>

  </div>
</template>
<script>
  import AddMMStepOne from '../components/AddMMStepOne.vue'
  export default {
    components: {
      AddMMStepOne,
    },
    data () {
      return {
        currentStep: 0,
      }
    },
    computed: {

    },
    methods: {
      nextStep() {
        if (this.currentStep === 0) {
          this.currentStep = 1;
        } else if (this.currentStep === 1) {
          this.currentStep = 2;
        } else {

        }
      }
    },
    mounted () {

    }
  }
</script>
