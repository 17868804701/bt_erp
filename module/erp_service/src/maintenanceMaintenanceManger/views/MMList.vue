<!--保养管理-->

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <div style="border-bottom: 1px solid #eae9ec;padding-bottom: 10px;margin-bottom: 15px;">
        <h2 style="margin-left: 15px;">
          车辆保养
        </h2>
      </div>
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按进厂时间查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                          v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px">新增</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" height="521px" :data="tableData" border :columns="columns" border></Table>
      <Page :total="100" show-total style="margin-top: 10px;"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        columns: [
          {
            title: '登记编号',
            align: 'center',
            key: 'djbh'
          },
          {
            title: '车辆自编号',
            align: 'center',
            key: 'clzbh'
          },
          {
            title: '车牌号',
            align: 'center',
            key: 'cph'
          },
          {
            title: '线路',
            align: 'center',
            key: 'xl'
          },
          {
            title: '分公司',
            align: 'center',
            key: 'fgs'
          },
          {
            title: '进厂时间',
            align: 'center',
            key: 'jcsj'
          },
          {
            title: '送修人',
            align: 'center',
            key: 'sxr'
          },
          {
            title: '检验员',
            align: 'center',
            key: 'jyy'
          },
          {
            title: '保养类别',
            align: 'center',
            key: 'bylb'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {

                    }
                  }
                }, '删除')
              ]);
            }
          },
        ],
        tableData:this.mockTableData(),
        formItem: {
          date: '',
        },
      }
    },
    computed: {

    },
    methods: {

      mockTableData () {
        let data = [];
        function getNum() {
          return Math.floor(Math.random () * 100 + 1);
        }
        for (let i = 0; i < 10; i++) {
          data.push({
            djbh: '单位'+ i,
            clzbh: 'XS332',
            cph: '蒙A123456',
            xl: '706路',
            fgs: '公交'+ i + '公司',
            jcsj: '2018-09-10',
            sxr: '大黄',
            jyy: '大黄',
            bylb: '三养',
          })
        }
        return data;
      },
    },
    mounted () {

    }
  }
</script>
