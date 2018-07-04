<template>
  <div style="height:450px;overflow-y: scroll;overflow-x: hidden">
    <Form :model="formItem" :label-width="90">
      <div style="display: flex;flex-wrap: wrap">
        <FormItem class="formItem" label="年份">
          <DatePicker type="year" placeholder="选择年份" v-model="formItem.date"></DatePicker>
        </FormItem>
        <FormItem class="formItem" label="路别">
          <Select v-model="formItem.select" style="width: 195px;">
            <Option value="beijing">1路</Option>
            <Option value="shanghai">2路</Option>
            <Option value="shenzhen">3路</Option>
          </Select>
        </FormItem>
        <FormItem class="formItem" label="班车数量">
          <Input v-model="formItem.input" placeholder="班车数量" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="备用">
          <Input v-model="formItem.input" placeholder="备用" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="合计">
          <Input v-model="formItem.input" placeholder="合计" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="日车次">
          <Input v-model="formItem.input" placeholder="日车次" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="年度车次">
          <Input v-model="formItem.input" placeholder="年度车次" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="路线长度">
          <Input v-model="formItem.input" placeholder="路线长度" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="运营日里程">
          <Input v-model="formItem.input" placeholder="运营日里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="运营年度里程">
          <Input v-model="formItem.input" placeholder="运营年度里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="日出入库里程">
          <Input v-model="formItem.input" placeholder="日出入库里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="年度里程">
          <Input v-model="formItem.input" placeholder="年度里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="日加气里程">
          <Input v-model="formItem.input" placeholder="日加气里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="年度里程">
          <Input v-model="formItem.input" placeholder="年度里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="小计">
          <Input v-model="formItem.input" placeholder="小计" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="备用年度里程">
          <Input v-model="formItem.input" placeholder="备用车年度里程" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="合计">
          <Input v-model="formItem.input" placeholder="合计" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="说明">
          <Input v-model="formItem.input" placeholder="说明" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="出入库">
          <Input v-model="formItem.input" placeholder="出入库" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="加气台数">
          <Input v-model="formItem.input" placeholder="加气台数" style="width: 195px;"/>
        </FormItem>
        <FormItem class="formItem" label="出入库说明">
          <Input v-model="formItem.textarea" style="width: 600px;" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="出入库说明"></Input>
        </FormItem>
      </div>
    </Form>
  </div>
</template>
<script>
  export default {
    components: {},
    data () {
      return {
        formItem:{
          input:'',
          textarea:'',
          date:'',
          select:''
        }
      }
    },
    methods: {},
    mounted () {
    }
  }
</script>
<style>
.formItem{
  margin: 0 0 12px 0
}
</style>

