<!--公用组件 下拉框-->
<template>
  <Tabs>
    <TabPane :label="label" :name="name">
    </TabPane>
  </Tabs>
</template>

<script>

  export default {
    name: 'MyTabPane',
    props: {
      label: String,
      name: String,
    },
    components: {
    },
    data () {
      return {
          isShow: false,
      }
    },
    methods: {

    },
    computed:{
    },
    mounted () {
      console.log(this.label);
      // 获取用户按钮权限
      let menuList = this.$store.state.userAuth.menuList;
      for (let i = 0; i < menuList.length; i++) {
        let menu = menuList[i];
        if (menu.mname === this.label) {
          this.isShow = true;
        }
      }
      debugger;
    },
    created() {
    },
  }
</script>
