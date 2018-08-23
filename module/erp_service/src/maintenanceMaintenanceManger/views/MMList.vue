
<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <!--新增进场登记弹框-->
      <Modal
        ok-text="登记进场"
        v-model="newRecordModal"
        title="新增车辆基本信息"
        width="50%">
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="startMaintain('basicData')">登记进场</Button>
          <Button type="primary" style="float: right;margin-right: 10px" @click="cancle">取消</Button>
        </div>
        <div style="padding: 0px; height: 100%;">
          <Form :model="basicData" ref="basicData" :rules="ruleValidate" :label-width="90">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem prop="djbh" label="登记编号" style="margin-top: 0px;">
                <Input v-model="basicData.djbh" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="clzbh" label="车辆自编号" style="margin-top: 0px;">
                <Input v-model="basicData.clzbh" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="cph" label="车牌号" style="margin-top: 0px;">
                <Input v-model="basicData.cph" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="cx" label="车型" style="margin-top: 0px;">
                <Input v-model="basicData.cx" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="xl" label="线路" style="margin-top: 0px;">
                <Input v-model="basicData.xl" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="fgs" label="分公司" style="margin-top: 0px;">
                <Select v-model="basicData.fgs" style="width: 110px;">
                  <Option value="公交一公司">公交一公司</Option>
                  <Option value="公交二公司">公交二公司</Option>
                  <Option value="公交三公司">公交三公司</Option>
                  <Option value="公交四公司">公交四公司</Option>
                </Select>
              </FormItem>
              <FormItem prop="jcsj" label="进厂时间" style="margin-top: 0px;">
                <DatePicker
                  style="width: 110px;"
                  type="date"
                  placeholder="选择时间"
                  :transfer="true"
                  placement="bottom-end"
                  v-model="basicData.jcsj">
                </DatePicker>
              </FormItem>
              <FormItem prop="sxr" label="送修人" style="margin-top: 0px;">
                <Input v-model="basicData.sxr" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="jyy" label="检验员" style="margin-top: 0px;">
                <Input v-model="basicData.jyy" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="bylb" label="保养类别" style="margin-top: 0px;">
                <Input v-model="basicData.bylb" style="width: 110px;"></Input>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按进厂时间查询" style="margin: 0;">
              <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end"
                          v-model="formItem.date" style="width: 130px;"></DatePicker>
              <Button type="primary" icon="ios-search" @click="requestListData">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px;" @click="newRecordModal = true">新增</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="tableData" border :columns="columns" border></Table>
      <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
    },
    data () {
      return {

        basicData: {
          djbh: '',
          clzbh: '',
          cph: '',
          cx: '',
          xl: '',
          fgs: '',
          jcsj: '',
          sxr: '',
          jyy: '',
          bylb: '',
        },
        ruleValidate: {
          djbh: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          clzbh: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          cph: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          cx: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          xl: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          fgs: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          jcsj: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          sxr: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          jyy: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          bylb: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
        },
        columns: [
          {
            title: '序号',
            align: 'center',
            type: 'index'
          },
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
            title: '车型',
            align: 'center',
            key: 'cx'
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
            width: 150,
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
                      console.log('查看详情');
                      this.$router.push({
                        path: '/MMDetail',
                        query: {row: params.row}
                      })
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
                      this.deleteRow(params.row);
                    }
                  }
                }, '删除')
              ]);
            }
          },
        ],

        tableData:[],
        formItem: {
          date: '',
          currPage: 1,
          pageSize: 10,
        },
        totalSize: 0,
        newRecordModal: false,
        loading: true,
      }
    },
    computed: {

    },
    methods: {
      startMaintain(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.saveRow();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      cancle() {
        this.newRecordModal = false;
      },
      saveRow() {
        let params = {};
        for (let attr in this.basicData) {
          params[attr] = this.basicData[attr];
        }
        params.jcsj = DateTool.yyyymmddFormatDate(this.basicData.jcsj);
        console.log(params);
        var that = this;
        this.$post(this.$url.maintain_BYGL_CLBY_saveRecord, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.newRecordModal = false;
            this.$Message.success('登记成功, 请在列表查看!');
            this.basicData = {
              djbh: '',
              clzbh: '',
              cph: '',
              clxh: '',
              cx: '',
              xl: '',
              gfs: '',
              jcsj: '',
              sxr: '',
              jyy: '',
              bylb: '',
            };
            that.requestListData();
          }else{
            this.$Message.error('登记失败, 请重试!');
          }
        })
      },
      deleteRow(row) {
        var that = this;
        console.log('删除进场登记');
        console.log(row);
        let params = {id : row.id};
        this.$fetch(this.$url.maintain_BYGL_CLBY_deleteRecord, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('删除成功!');
            that.requestListData();
          }else{
            this.$Message.error('删除失败!');
          }
        });
      },
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        let params = {};
        params.date = DateTool.yyyymm01FormatDate(this.formItem.date);
        params.currPage = this.formItem.currPage;
        params.pageSize = this.formItem.pageSize;
        console.log(params);
        this.$fetch(this.$url.maintain_BYGL_CLBY_recordList, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            res.page.list.forEach(item => {
              item.jcsj = DateTool.timesToDate(item.jcsj);
            })
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('请求成功!');
          }else{
            this.$Message.error('获取数据失败!');
          }
        })
      },
      exportExcel() {
        let url = this.$url.maintain_BYGL_CLBY_exportExcel;
        url = url + '?currPage='+this.formItem.currPage+'&pageSize='+this.formItem.pageSize;
        if (this.formItem.date instanceof Date) {
          url = url + '&date=' + this.formItem.date;
        }
        this.$getExcel(url);
      },
    },
    mounted () {
      this.requestListData();
    }
  }
</script>
