<!--公用组件 下拉框-->
<template>
  <div >
    <Select v-if="isSelect" v-model="selectValue" style="width: 110px;" @on-change="selectOption">
      <Option v-for="(item, index) in sourceData" :key="item+index" :value="item.code">{{item.title}}</Option>
    </Select>
    <CheckboxGroup v-else v-model="selectValue">
      <Checkbox v-for="(item, index) in sourceData" :key="item+index" :value="item.code" :label="item.title"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>

  export default {
    name: 'CommonSelect',
    props: {
      type: String,
      selectValue: [String, Array],
      iviewType: String,
    },
    components: {
    },
    computed: {
      isSelect() {
        if (this.iviewType === '' || typeof this.iviewType == 'undefined') {
          return true;
        }

        if (this.iviewType === 'checkbox') {
          return false;
        }else{
          return true;
        }
      }
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
      console.log(this.iviewType);
      this.requestDictData();
    },
    created() {
    },
  }
</script>
