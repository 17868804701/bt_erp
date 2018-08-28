<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        计划管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane v-if="$showMenu('集团公司运营计划管理')" label="集团公司运营计划管理" name="name1">
            <jtgsyy></jtgsyy>
        </TabPane>
        <TabPane v-if="$showMenu('分公司运营计划管理')" label="分公司运营计划管理" name="name2">
          <fgsyy></fgsyy>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import jtgsyy from './jtgsyy.vue'
  import fgsyy from './fgsyy.vue'
  export default {
    data () {
      return {
        formItem: {
          select: '',
          date: ''
        },
      }
    },
    components:{
      jtgsyy,
      fgsyy,
    },
    mounted () {
    }
  }
</script>
