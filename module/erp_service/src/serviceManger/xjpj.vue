<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
  .container {
    padding: 10px 10px 10px 0;
    border-bottom: 1px solid #eae9ec;
    width: 98%;
    margin-left: 1%;
  }

  .container h2 {
    margin-left: 15px;
  }
  td{
    text-align: center;
    width: 120px;
    height: 30px;
  }
</style>
<template>
  <div>
    <div class="container">
      <h2>星级评价</h2>
    </div>
    <Card style="margin-top: 10px;width: 98%;margin-left: 1%">
      <p slot="title">导出表格</p>
      <Form :model="formItem" :label-width="110">
        <div style="display: flex;flex-wrap: wrap">
          <FormItem label="选择要导出的报表" style="margin: 0">
            <Select v-model="formItem.select" :transfer="true" style="width:300px;">
              <Option value="beijing">修理公司经营业绩星级考核表</Option>
              <Option value="shanghai">稽查队经营业绩星级考核表</Option>
              <Option value="shenzhen">票款结算中心经营业绩星级考核表</Option>
            </Select>
          </FormItem>
          <FormItem label="选择时间" style="margin: 0">
            <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="eye" style="margin-left: 120px;" @click="modal1=true">查看预览</Button>
          <Modal
            v-model="modal1"
            width="700"
            title="预览表单">
            <TPL></TPL>
          </Modal>
          <Button type="primary" icon="android-download" style="margin-left: 10px;">导出表格</Button>
        </div>
      </Form>
    </Card>
    <Collapse v-model="value1" style="width: 98%;margin-left: 1%;margin-top: 10px;">
      <Panel v-for="(item, index) in XJPJ_QG_DATA" :name="item+index" :kye="item+index">
        {{item.tableTitle}}
        <table slot="content">
          <tr>
            <td style="width: 120px;">序号</td>
            <td style="width: 120px;">考核指标</td>
            <td style="width: 120px;">实际得分</td>
            <td style="width: 120px;">总分分值</td>
          </tr>
          <tr v-for="(subOption, subOptionIndex) in item.options.subOptions" :key="subOption+subOptionIndex">
            <td>{{subOptionIndex+1}}</td>
            <td>{{subOption.subOptionName}}</td>
            <td>
              <InputNumber v-model="subOption.score" :max="20" :min="0" style="width: 50px"></InputNumber>&nbsp;&nbsp;分
            </td>
            <td>{{subOption.maxScore}}分</td>
          </tr>
          <tr>
            <td>
              <Button type="primary" icon="checkmark-circled" style="margin-left: 40px;">提交</Button>
            </td>
          </tr>
        </table>
      </Panel>
    </Collapse>

  </div>
</template>
<script>
  import XJPJData from './XJPJData.js';
  import TPL from './tableTemp.vue';
  export default {
    components: {
      TPL,
    },
    data () {

      return {
        modal1:false,
        value1:1,
        formItem: {
          input: '',
          select: '',
          date: ''
        },
        XJPJ_QG_DATA: XJPJData.XJPJ_QG_DATA,
      }
    },
    methods: {}
  }
</script>
