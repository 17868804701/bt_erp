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
    border: 1px solid red;
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
              <Option value="beijing">修理公司2018年4月经营业绩星级考核表</Option>
              <Option value="shanghai">稽查队2018年4月经营业绩星级考核表</Option>
              <Option value="shenzhen">票款结算中心2018年4月经营业绩星级考核表</Option>
            </Select>
          </FormItem>
          <FormItem label="选择时间" style="margin: 0">
            <DatePicker type="date" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                        class="text_width"></DatePicker>
          </FormItem>
          <Button type="primary" icon="eye" style="margin-left: 120px;">查看预览</Button>
          <Button type="primary" icon="android-download" style="margin-left: 10px;">导出表格</Button>
        </div>
      </Form>
    </Card>
    <Collapse v-model="value1" style="width: 98%;margin-left: 1%;margin-top: 10px;">
      <Panel name="1">
        企管部
        <div slot="content">
          <table cellspacing="0">
            <tr>
              <td style="width: 100px;">序号</td>
              <td style="width: 200px;">所属表单</td>
              <td style="width: 200px;">指标项</td>
              <td style="width: 200px;">得分</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </Panel>
      <Panel name="2">
        运营部
        <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
      </Panel>
      <Panel name="3">
        安全部
        <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value1:1,
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
