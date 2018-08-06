<!--返修管理-->

<template>
  <div>
    <Modal
      v-model="backModal"
      title="新增返修记录"
      width="50%">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="confirmFX('backItem')">保存</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancle">取消</Button>
      </div>
      <div>
        <Form :model="backItem" ref="backItem" :rules="ruleValidate" :label-width="100">
          <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <FormItem prop="ch" label="车号" style="margin-top: 0px;">
              <Input v-model="backItem.ch" style="width:110px;"></Input>
            </FormItem>
            <FormItem prop="cx" label="车型" style="margin-top: 0px;">
              <Input v-model="backItem.cx" style="width:110px;"></Input>
            </FormItem>
            <FormItem prop="fxjcsj" label="返修进厂时间" style="margin-top: 0px;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="backItem.fxjcsj" style="width:110px;"></DatePicker>
            </FormItem>
            <FormItem prop="fxccsj" label="返修出厂时间" style="margin-top: 0px;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="backItem.fxccsj" style="width:110px;"></DatePicker>
            </FormItem>
            <FormItem prop="fxxm" label="返修项目" style="margin-top: 0px;">
              <Input v-model="backItem.fxxm" style="width:110px;"></Input>
            </FormItem>
            <FormItem prop="fxyy" label="返修原因" style="margin-top: 0px;">
              <Input v-model="backItem.fxyy" style="width:110px;"></Input>
            </FormItem>
            <FormItem prop="bz" label="备注" style="margin-top: 0px;">
              <Input v-model="backItem.bz" style="width:110px;"></Input>
            </FormItem>
          </div>
        </Form>
      </div>
    </Modal>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按返修进场时间查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px" @click="backModal=true">新增</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <can-edit-table style="margin-top: 10px;" v-model="data1" :columnsList="columns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
      </can-edit-table>
      <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
      canEditTable
    },
    data () {
      return {
        // 车号、车型、返修进厂时间、返修出厂时间、返修项目以及返修原因、备注
        backModal: false,
        formItem: {
          date: '',
          currPage: 1,
          pageSize: 10,
        },
        totalSize: 0,
        tableData: [],
        backItem: {
          ch: '',
          cx: '',
          fxjcsj: '',
          fxccsj: '',
          fxxm: '',
          fxyy: '',
          bz: '',
        },
        ruleValidate: {
          ch: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          cx: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          fxjcsj: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          fxccsj: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          fxyy: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          bz: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
        },
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '车号',
            key: 'ch',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',

          },
          {
            title: '返修进厂时间',
            key: 'fxjcsj',
            align: 'center',
          },
          {
            title: '返修出厂时间',
            key: 'fxccsj',
            align: 'center',
          },
          {
            title: '返修项目',
            key: 'fxxm',
            align: 'center',
          },
          {
            title: '返修原因',
            key: 'fxyy',
            align: 'center',
            editable: true
          },
          {
            title: '备注',
            key: 'bz',
            align: 'center',
            editable: true
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.clickAction(params, 'delete')
                    }
                  }
                }, '删除')
              ]);
            }
          },
        ],
        data1: [
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
          {
            ch: '蒙A123456',
            cx: '中型客车',
            jcsj: '2018-07-07',
            ccsj: '2018-07-08',
            fxyy: '就是跑着不得劲',
            bz: '没啥毛病',
          },
        ]
      }
    },
    computed: {

    },
    methods: {
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        this.$fetch(this.$url.maintain_BYGL_FXGL_recordList, this.formItem)
        .then(res=>{
          console.log(res);
          if (res.code === 0) {
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      },
      confirmFX(name) {
        debugger;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.saveRow();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      saveRow() {
        let params = {};
        for (let attr in this.backItem) {
          params[attr] = this.backItem[attr];
        }
        params.fxjcsj = DateTool.yyyymmddFormatDate(params.fxjcsj);
        params.fxccsj = DateTool.yyyymmddFormatDate(params.fxccsj);
        console.log(params);
        this.$post(this.$url.maintain_BYGL_FXGL_save, this.backItem)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('保存成功, 请在列表查看!');
            this.backModal = false;
            this.backItem = {
              ch: '',
              cx: '',
              fxjcsj: '',
              fxccsj: '',
              fxxm: '',
              fxyy: '',
              bz: '',
            };
            this.requestListData();
          }else{
            this.$Message.error('保存失败, 请重试!');
          }
        })
      },
      cancle() {
        this.backModal = false;
      },
      clickAction(params, type) {
        console.log('操作返修记录');
        console.log(params + type);
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      }
    },
    mounted () {

    }
  }
</script>

<!--
{
  "byid": "string",
  "bz": "string",
  "ch": "string",
  "cx": "string",
  "fxccsj": "2018-08-03T07:54:28.494Z",
  "fxjcsj": "2018-08-03T07:54:28.494Z",
  "fxxm": "string",
  "fxyy": "string",
  "id": "string"
}
-->
