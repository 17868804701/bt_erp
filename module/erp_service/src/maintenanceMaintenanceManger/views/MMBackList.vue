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
              <Button type="primary" icon="ios-search" @click="this.requestListData">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出Excel</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px" @click="backModal=true">新增</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <can-edit-table style="margin-top: 10px;" v-model="tableData" :columnsList="columns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange">
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
                h('Poptip', {
                  props: {
                    confirm: true,
                    title: '您确定要删除这条数据吗?',
                    transfer: true
                  },
                  on: {
                    'on-ok': () => {
                      this.deleteRow(params);
                    }
                  }
                }, [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small',
                      placement: 'top'
                    },
                  }, '删除')
                ])
              ]);
            }
          },
        ],
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
        let params = {};
        params.date = DateTool.yyyymm01FormatDate(this.formItem.date);
        params.currPage = this.formItem.currPage;
        params.pageSize = this.formItem.pageSize;
        this.$fetch(this.$url.maintain_BYGL_FXGL_recordList, params)
        .then(res=>{
          console.log(res);
          if (res.code === 0) {
            res.page.list.forEach(item => {
              item.fxccsj = DateTool.timesToDate(item.fxccsj);
              item.fxjcsj = DateTool.timesToDate(item.fxjcsj);
            })
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
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
      deleteRow(params) {
        var that = this;
        let p = {id : params.row.id};
        let url = this.$url.maintain_BYGL_FXGL_delete + '?id=' +params.row.id ;
        this.$post(url)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('删除成功!');
            that.requestListData();
          }else{
            this.$Message.error('删除失败!');
          }
        })
      },
      inputCallBack(data) {
        console.log(data);
      },
      handleCellChange (val, index, key) {
        let row = val[index];
        this.updateRow(row);
      },
      updateRow(row) {
        console.log(row);
        var that = this;
        this.$post(this.$url.maintain_BYGL_FXGL_update, row)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('修改成功!');
          } else{
            this.$Message.error('修改失败!');
          }
          this.requestListData();
        })
      },
      exportExcel() {
        let url = this.$url.maintain_BYGL_FXGL_exportExcel;
        url = url + '?currPage='+this.formItem.currPage+'&pageSize='+this.formItem.pageSize;
        if (this.formItem.date instanceof Date) {
          url = url + '&date=' + this.formItem.date;
        }
        this.$getExcel(url);
      },
    },
    mounted () {

    }
  }
</script>
