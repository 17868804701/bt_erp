<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container {
    padding: 10px;
  }

  .container h2 {
    margin-left: 15px;
  }

  .search_btn {
    margin-left: 10px;
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

  .btn {
    position: absolute;
    right: 20px;
  }
</style>
<template>
  <div class="container">
    <h2>能耗里程台账</h2>
    <Tabs value="name1">
      <TabPane label="集团公司能耗里程台账" name="name1">
        <Card>
          <Form :model="formItem" :label-width="80">
            <div class="search">
              <FormItem label="备用" style="margin: 0">
                <Input v-model="formItem.input" placeholder="备用字段" class="text_width"/>
              </FormItem>
              <FormItem label="选择时间" style="margin: 0">
                <DatePicker type="daterange" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择年份" style="margin: 0">
                <DatePicker type="year" placeholder="选择时间" :transfer="true" v-model="formItem.date"
                            class="text_width"></DatePicker>
              </FormItem>
              <FormItem label="选择公司" style="margin: 0">
                <Select v-model="formItem.select" :transfer="true" style="width: 195px;">
                  <Option value="beijing">公交一公司</Option>
                  <Option value="shanghai">公交二公司</Option>
                  <Option value="shenzhen">公交三公司</Option>
                </Select>
              </FormItem>
              <Button type="primary" icon="ios-search" class="search_btn">查询</Button>
              <div class="btn">
                <Button type="primary" icon="android-upload">导入</Button>
                <Button type="ghost" icon="android-download">导出Excel</Button>
              </div>
            </div>
          </Form>
        </Card>
      </TabPane>
      <TabPane label="分公司车次线路收入台账" name="name2">分公司车次线路收入台账</TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          date:''
        }
      }
    },
    methods: {}
  }
</script>
