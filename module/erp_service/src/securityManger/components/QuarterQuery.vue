<!-- 季度查询 -->
<template>
  <div >
    <RadioGroup v-model="quarter" style="margin-top: -5px;">
      <Radio label="第一季度"></Radio>
      <Radio label="第二季度"></Radio>
      <Radio label="第三季度"></Radio>
      <Radio label="第四季度"></Radio>
    </RadioGroup>
  </div>
</template>

<script>

  export default {
    name: 'QuarterQuery',
    components: {

    },
    computed: {

    },
    data () {
      return {
        quarter: '',
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
