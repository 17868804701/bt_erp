<style>
  .wid {
    width: 180px;
  }

  .formItem {
    margin: 0px 0 10px 0;

  }
</style>

<template>
  <div>
    <div style="padding: 10px 10px 0 10px;">
      <Form :model="formItem" :label-width="80">
        <div style="display: flex;flex-wrap: wrap">
          <FormItem label="车号" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">1号</Option>
              <Option value="shanghai">2号</Option>
              <Option value="shenzhen">3号</Option>
            </Select>
          </FormItem>
          <FormItem label="车型" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">大型</Option>
              <Option value="shanghai">中型</Option>
              <Option value="shenzhen">小型</Option>
            </Select>
          </FormItem>
          <FormItem label="物品名称" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">轮胎</Option>
              <Option value="shanghai">润滑油</Option>
            </Select>
          </FormItem>
          <FormItem label="领料数量" class="formItem">
            <Input v-model="formItem.input" placeholder="请输入领料数量" class="wid"/>
          </FormItem>
          <FormItem label="领料时间" class="formItem">
            <DatePicker type="date" placeholder="选择领料时间" v-model="formItem.date" class="wid"></DatePicker>
          </FormItem>
          <FormItem label="领料规格" class="formItem">
            <Input v-model="formItem.input" placeholder="领料规格" class="wid"/>
          </FormItem>
          <FormItem label="供货单位" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">产品1公司</Option>
              <Option value="shanghai">产品2公司</Option>
              <Option value="shanghai1">产品3公司</Option>
            </Select>
          </FormItem>
          <FormItem label="品牌型号" class="formItem">
            <Input v-model="formItem.input" placeholder="品牌型号" class="wid"/>
          </FormItem>
          <FormItem label="规格" class="formItem">
            <Input v-model="formItem.input" placeholder="规格" class="wid"/>
          </FormItem>
          <FormItem label="计量单位" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">件</Option>
              <Option value="shanghai">台</Option>
              <Option value="shanghai1">提</Option>
            </Select>
          </FormItem>
          <FormItem label="单价" class="formItem">
            <Input v-model="formItem.input" placeholder="单价" class="wid"/>
          </FormItem>
          <FormItem label="金额" class="formItem">
            <Input v-model="formItem.input" placeholder="金额" class="wid"/>
          </FormItem>
          <FormItem label="状态" class="formItem">
            <Select v-model="formItem.select" class="wid">
              <Option value="beijing">采购</Option>
              <Option value="shanghai">派发</Option>
            </Select>
          </FormItem>
          <FormItem label="附记" class="formItem">
            <Input v-model="formItem.input" placeholder="附记" class="wid" style="width: 440px;"/>
          </FormItem>
        </div>
      </Form>
    </div>
  </div>


</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          date: '',
          select: '',
          Input: ''
        },
      }
    }
  }
</script>
