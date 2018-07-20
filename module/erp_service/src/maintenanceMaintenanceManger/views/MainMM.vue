<!--保养管理-->

<template>
  <div >
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <h2 style="margin-left: 15px;">
        保养管理
      </h2>
      <Tabs value="name1" style="margin-top: 5px;">
        <TabPane label="车辆保养" name="name1">
          <MMList></MMList>
        </TabPane>
        <TabPane label="检验单管理" name="name2">
          <MMJYDList></MMJYDList>
        </TabPane>
        <TabPane label="验收单管理" name="name3">
          <MMYSDList></MMYSDList>
        </TabPane>
        <TabPane label="维修领料管理" name="name4">
          <MMCLList></MMCLList>
        </TabPane>
        <TabPane label="返修管理" name="name5">
          <MMBackList></MMBackList>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import MMList from './MMList.vue'; // 车辆保养
  import MMJYDList from './MMJYDList.vue'; // 检验单管理
  import MMYSDList from './MMYSDList.vue'; // 验收单管理
  import MMCLList from './MMCLList.vue'; // 维修领料管理
  import MMBackList from './MMBackList.vue'; // 返修管理
  export default {
    components: {
      MMList,
      MMJYDList,
      MMYSDList,
      MMCLList,
      MMBackList,
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
