<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        计划管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="分公司收入计划制定" name="name1">
          <fgssrjh></fgssrjh>
        </TabPane>
          <TabPane label="市内公交总收入计划制定" name="name2">
            <sngjzsrjh></sngjzsrjh>
          </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
  import fgssrjh from './fgssrjh.vue'
  import sngjzsrjh from './sngjzsrjh.vue'
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
      fgssrjh,
      sngjzsrjh
    },
    mounted () {
    }
  }
</script>
