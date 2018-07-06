<template>
  <div>
    <!--</router-link>-->
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="Select date" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search">搜索</Button>


            <Button type="primary" icon="android-download" @click="exports=true"
                    style="float: right">导入计划表
            </Button>
            <Button type="primary" icon="android-download"
                    style="float: right;margin-right: 10px">导出Excel
            </Button>
            <Button type="primary" icon="android-download" @click="addProgram=true"
                    style="float: right;margin-right: 10px;">计划生成
            </Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
    <!--上传-->
    <Modal
      v-model="exports"
      title="导入计划表"
      @on-ok="ok"
      width="400"
      :mask-closable="false"
      style="height: 500px;"
      @on-cancel="cancel">
      <Steps :current="0" direction="vertical">
        <Step title="第一步" content="下载收入计划报表模板"></Step>
        <Step title="第二步" content="上传报表"></Step>
        <Step title="第三部" content="系统自动导入"></Step>
      </Steps>
      <div style="display: flex;flex-direction: column;position: absolute;top:90px;margin-left: 240px;">
        <Button type="dashed" icon="android-download"
                style="margin-bottom: 10px;margin-top: -15px;width: 110px;">下载
        </Button>
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <Button type="primary" icon="ios-cloud-upload-outline" style="width: 110px;margin-top: 17px;">上传</Button>
        </Upload>
      </div>
    </Modal>
    <!--新增计划-->
    <Modal
      v-model="addProgram"
      title="新增计划"
      @on-ok="ok"
      width="400"
      :mask-closable="false"
      style="height: 500px;"
      @on-cancel="cancel">
      <div style="height:auto">
        <Form :model="formItem" :label-width="120">
          <FormItem label="单位">
            <Input v-model="formItem.input" placeholder="单位" style="width: 195px;"/>
          </FormItem>
          <FormItem label="时间">
            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem label="路别">
            <Select v-model="formItem.select" style="width: 195px;">
              <Option value="beijing">102路</Option>
              <Option value="shanghai">103路</Option>
              <Option value="shenzhen">286路</Option>
            </Select>
          </FormItem>
          <FormItem label="各年计划收入">
            <Input v-model="formItem.input" placeholder="各年计划收入" style="width: 195px;"/>
          </FormItem>
          <FormItem label="各年实际收入">
            <Input v-model="formItem.input" placeholder="各年实际收入" style="width: 195px;"/>
          </FormItem>
          <FormItem label="各年客运量">
            <Input v-model="formItem.input" placeholder="各年客运量" style="width: 195px;"/>
          </FormItem>
          <FormItem label="每车次客运量">
            <Input v-model="formItem.input" placeholder="每车次客运量" style="width: 195px;"/>
          </FormItem>
        </Form>
      </div>
    </Modal>
    <Table stripe :columns="columns1" :data="data1" size="small" style="margin-top: 10px;"></Table>
    <Page :total="100" show-total style="margin-top: 10px;"></Page>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        addProgram: false,
        exports:false,
        formItem: {
          input: '',
          date:''
        },
        columns1: [
          {
            title: '单位',
            key: 'danwei'
          },
          {
            title:'时间',
            key:'sj'
          },
          {
            title: '路别',
            key: 'lubie'
          },
          {
            title: '各年计划收入（万元）',
            key: 'gnjhsr'
          },
          {
            title: '各年实际收入（万元）',
            key: 'gnsjsr'
          },

          {
            title: '各年客运量（万）',
            key: 'gnkyl'
          },
          {
            title: '每车次客运量（万）',
            key: 'mcckyl'
          }
        ],
        data1: [
          {
            sj: '2016-10-03',
            danwei: '公交一公司',
            lubie: '102路',
            gnjhsr: '200',
            gnsjsr: '10',
            gnkyl: '1.5',
            mcckyl: '0.5',
          },
          {
            sj: '2016-10-03',
            danwei: '公交一公司',
            lubie: '102路',
            gnjhsr: '200',
            gnsjsr: '10',
            gnkyl: '1.5',
            mcckyl: '0.5',
          },
          {
            sj: '2016-10-03',
            danwei: '公交一公司',
            lubie: '102路',
            gnjhsr: '200',
            gnsjsr: '10',
            gnkyl: '1.5',
            mcckyl: '0.5',
          },
          {
            sj: '2016-10-03',
            danwei: '公交一公司',
            lubie: '102路',
            gnjhsr: '200',
            gnsjsr: '10',
            gnkyl: '1.5',
            mcckyl: '0.5',
          },
          {
            sj: '2016-10-03',
            danwei: '公交一公司',
            lubie: '102路',
            gnjhsr: '200',
            gnsjsr: '10',
            gnkyl: '1.5',
            mcckyl: '0.5',
          }
        ]
      }
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      },
    }
  }
</script>

