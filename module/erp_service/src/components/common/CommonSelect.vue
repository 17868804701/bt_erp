<!--公用组件 下拉框-->
<template>
  <div >
    <Select v-model="selectValue" style="width: 110px;" @on-change="selectOption">
      <Option v-for="(item, index) in sourceData" :key="item+index" :value="item.code">{{item.title}}</Option>
    </Select>
  </div>
</template>

<script>

  export default {
    name: 'CommonSelect',
    props: {
      type: String,
      selectValue: String,
    },
    components: {
    },
    computed: {
    },
    data () {
      return {
        sourceData: [],
      }
    },
    methods: {
      selectOption(val) {
        console.log(val);
      },
      requestDictData() {
        console.log(this.type);
        console.log('根据type请求数据!');
        let params = {code: this.type}
        this.$fetch(this.$url.common_getDictListDataWithCode, params)
        .then(res => {
          console.log(res);
          if (res.success === true && res.cDic.length > 0) {
            this.sourceData = res.cDic;
          }
        })
      }
    },
    mounted () {
      this.requestDictData();
    },
    created() {
    },
  }
</script>
