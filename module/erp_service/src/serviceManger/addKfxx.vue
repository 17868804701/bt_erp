<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    padding: 10px;
  }

  .container h2 {
    margin-left: 15px;
  }

  .text_width {
    width: 195px;
  }

  .search {
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    align-items: center;
  }

</style>
<template>
  <div class="container">
    <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;">
      <h2>添加客服信息
        <router-link to="/kfxxList">
          <!--icon="chevron-left" -->
          <Button type="primary" size="small"><
            <返回列表
          </Button>
        </router-link>
      </h2>
    </div>
    <Steps :current="0" style="margin-top: 10px;">
      <Step title="第一步" content="添加客服信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>

    <Card style="padding-left: 15px;margin-top: 20px;">
      <Form :model="formItem" :label-width="80">
        <div class="search">
          <FormItem label="投诉时间" style="margin-bottom: 15px">
            <DatePicker type="daterange" placeholder="投诉时间" :transfer="true" v-model="formItem.date"
                        class="text_width"></DatePicker>
          </FormItem>
          <FormItem label="线路" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="线路" class="text_width"/>
          </FormItem>
          <FormItem label="车号" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="车号" class="text_width"/>
          </FormItem>
          <FormItem label="投诉人姓名" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="投诉人姓名" class="text_width"/>
          </FormItem>
          <FormItem label="联系电话" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="联系电话" class="text_width"/>
          </FormItem>
          <FormItem label="类别" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="类别" class="text_width"/>
          </FormItem>
          <FormItem label="记录人" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="类别" class="text_width"/>
          </FormItem>

          <FormItem label="处理结果" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="处理结果" class="text_width"/>
          </FormItem>
          <FormItem label="备注" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="备注" class="text_width"/>
          </FormItem>
          <FormItem label="事件类别" style="margin-bottom: 15px">
            <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
              <Option value="责任性投诉">责任性投诉</Option>
              <Option value="疑难性问题">疑难性问题</Option>
            </Select>
          </FormItem>
          <FormItem label="来电/来访" style="margin-bottom: 15px">
            <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
              <Option value="来电">来电</Option>
              <Option value="来访">来访</Option>
            </Select>
          </FormItem>
          <FormItem label="状态" style="margin-bottom: 15px">
            <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
              <Option value="来电">已接收</Option>
              <Option value="处理中">处理中</Option>
              <Option value="处理完成">处理完成</Option>
            </Select>
          </FormItem>
          <FormItem label="选择公司" style="margin-bottom: 15px">
            <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
              <Option value="beijing">公交一公司</Option>
              <Option value="shanghai">公交二公司</Option>
              <Option value="shenzhen">公交三公司</Option>
            </Select>
          </FormItem>
          <FormItem label="事由" style="margin-bottom: 15px">
            <Input v-model="formItem.input" placeholder="事由" style="width: 470px;"/>
          </FormItem>
          <FormItem>
            <Button type="primary">下一步</Button>
            <router-link to="/kfxxList">
              <Button type="ghost" style="margin-left: 8px">返回</Button>
            </router-link>
          </FormItem>
        </div>
      </Form>
    </Card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          date: ''
        }
      }
    },
    methods: {}
  }
</script>
