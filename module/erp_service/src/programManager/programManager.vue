<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        计划管理
        <span style="color: red;font-size: 12px;">出入库说明、出入库台数、加气台数有修改功能</span>
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="集团公司运营计划管理" name="name1">
            <jtgsyy></jtgsyy>
        </TabPane>
        <TabPane label="分公司运营计划管理" name="name2">
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
