<template>
  <div>
    <!--<router-link to="/addProgram">-->
    <!--</router-link>-->
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="Select date" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search">搜索</Button>


            <Button type="primary" icon="android-download" @click="exports=true"
                    style="float: right;margin-right: 10px;">导入计划表
            </Button>
            <Button type="primary" icon="android-download"
                    style="float: right;margin-right: 10px">导出Excel
            </Button>
            <Button type="primary" icon="plus" @click="addProgram=true"
                    style="float: right;margin-right: 10px;">新增
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
      width="350"
      :mask-closable="false"
      style="height: 500px;"
      @on-cancel="cancel">
      <div style="height:auto">
        <Form :model="formItem" :label-width="100">
          <FormItem class="formItem" label="单位">
            <Select v-model="formItem.select" style="width: 195px;">
              <Option value="beijing">一公司</Option>
              <Option value="shanghai">二公司</Option>
            </Select>
          </FormItem>
          <FormItem class="formItem" label="车辆类别">
            <Select v-model="formItem.select" style="width: 195px;">
              <Option value="beijing">中型</Option>
              <Option value="shanghai">大型</Option>
            </Select>
          </FormItem>
          <FormItem class="formItem" label="年度计划收入">
            <Input v-model="formItem.input" placeholder="年度计划" style="width: 195px;"/>
          </FormItem>

        </Form>
      </div>
    </Modal>
    <Table stripe :columns="columns1" :data="data1" size="small" style="margin-top: 10px;"></Table>
    <!--<Page :total="100" show-total style="margin-top: 10px;"></Page>-->
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
            title: '年份',
            key: 'year'
          },
          {
            title: '类别',
            key: 'type'
          },
          {
            title: '年度计划（万元）',
            key: 'ndjh'
          },

          {
            title: '编制单位',
            key: 'bzdw'
          },
          {
            title: '制定时间',
            key: 'zdTime'
          }

          ,
          {
            title: '计划时间',
            key: 'jhTime'
          },
          {
            title: '操作',
            key: 'cz',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                }, '删除'),
              ]);
            }
          }
        ],
        data1: [
          {
            danwei: '公交一公司',
            year:'2018',
            type: '--',
            ndjh: '200',
            zdTime: '2016-10-03',
            bzdw: '公交总公司',
            jhTime: '2017-10-03',
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

