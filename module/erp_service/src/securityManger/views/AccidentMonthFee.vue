<!--事故情况汇总-->

<template>
  <div >
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        事故情况报表管理
      </h2>
      <Tabs v-model="tabValue" style="margin-top: 5px;" @on-click="clickTab">
        <TabPane v-has:menu="'集团公司事故情况月汇总表'" label="集团公司事故情况月汇总表">
          <JTAccidentMonthFee ref="JTAccidentMonthFee"/>
        </TabPane>
        <TabPane v-has:menu="'各分公司交通事故月报表1111'" label="各分公司交通事故月报表">
          <FGSAccidentMonthFee ref="FGSAccidentMonthFee"/>
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
        tabValue: 0
      }
    },
    methods: {
      clickTab(name) {
        if (name === '0') {
          this.$refs['JTAccidentMonthFee'].requestListData();
        } else {
          this.$refs['FGSAccidentMonthFee'].requestListData();
        }
      }
    },
    mounted () {
      this.$refs['JTAccidentMonthFee'].requestListData();
    }
  }
</script>
