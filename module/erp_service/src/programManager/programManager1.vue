<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        计划管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="运营计划调整管理" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
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

    },
    mounted () {
    }
  }
</script>
