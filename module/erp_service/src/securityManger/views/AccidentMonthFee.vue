<!--事故情况汇总-->

<template>
  <div >
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        事故情况报表管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="集团公司事故情况月汇总表" name="name1">
          <JTAccidentMonthFee/>
        </TabPane>
        <TabPane label="各分公司交通事故月报表" name="name2">
          <FGSAccidentMonthFee/>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import JTAccidentMonthFee from './JTAccidentMonthFee.vue';
  import FGSAccidentMonthFee from './FGSAccidentMonthFee.vue';

  export default {
    components: {
      JTAccidentMonthFee,
      FGSAccidentMonthFee
    },
    data () {
      return {

      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
