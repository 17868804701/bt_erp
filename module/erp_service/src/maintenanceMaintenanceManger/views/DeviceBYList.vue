<!--设备保养记录-->

<template>
  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Modal
        v-model="addModal"
        title="新增设备保养记录"
        width="50%">
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="confirmAddDeviceBY('deviceItem')">保存</Button>
          <Button type="primary" style="float: right;margin-right: 10px" @click="addModal=false">取消</Button>
        </div>
        <div>
          <Form ref="deviceItem" :model="deviceItem" :rules="ruleValidate" :label-width="180">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem prop="sbid" label="请根据设备编号选择设备:" style="margin-top: 0px;">
                <Select v-model="deviceItem.sbid" placeholder="请选择设备" style="width: 120px;" filterable>
                  <Option v-for="(item, index) in this.deviceData" :key="item+index" :value="item.id">{{item.sbbh}}</Option>
                </Select>
              </FormItem>
            </div>
          </Form>
          <Form ref="deviceItem" :model="deviceItem" :rules="ruleValidate" :label-width="100">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem prop="wxrq" label="养护日期:" style="margin-top: 0px;">
                <DatePicker
                  style="width: 120px;"
                  type="date"
                  placeholder="选择时间"
                  :transfer="true"
                  placement="bottom-end"
                  v-model="deviceItem.wxrq">
                </DatePicker>
              </FormItem>
              <FormItem prop="wxry" label="养护人员:" style="margin-top: 0px;">
                <Input v-model="deviceItem.wxry" style="width:120px;"></Input>
              </FormItem>
              <FormItem prop="wxnr" label="养护内容:" style="margin-top: 0px;">
                <Input v-model="deviceItem.wxnr" style="width:120px;"></Input>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        v-model="updateModal"
        title="更新设备保养记录"
        width="50%">
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="confirmUpdateDeviceBY('updateDeviceItem')">更新</Button>
          <Button type="primary" style="float: right;margin-right: 10px" @click="updateModal=false">取消</Button>
        </div>
        <div>
          <Form ref="updateDeviceItem" :model="updateDeviceItem" :rules="ruleValidate" :label-width="100">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem label="设备编号:" style="margin-top: 0px;">
                <div>{{updateDeviceItem.sbbh}}</div>
              </FormItem>
              <FormItem prop="wxrq" label="养护日期:" style="margin-top: 0px;">
                <DatePicker
                  style="width: 120px;"
                  type="date"
                  placeholder="选择时间"
                  :transfer="true"
                  placement="bottom-end"
                  v-model="updateDeviceItem.wxrq">
                </DatePicker>
              </FormItem>
              <FormItem prop="wxry" label="养护人员:" style="margin-top: 0px;">
                <Input v-model="updateDeviceItem.wxry" style="width:120px;"></Input>
              </FormItem>
              <FormItem prop="wxnr" label="养护内容:" style="margin-top: 0px;">
                <Input v-model="updateDeviceItem.wxnr" style="width:120px;"></Input>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>

      <Modal
        v-model="chooseDeviceModal"
        title="请选择设备"
        width="50%">
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="exportExcel('chooseDeviceItem')">导出</Button>
          <Button type="primary" style="float: right;margin-right: 10px" @click="chooseDeviceModal=false">取消</Button>
        </div>
        <div>
          <Form ref="chooseDeviceItem" :model="chooseDeviceItem" :rules="ruleValidate" :label-width="180">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem prop="sbbh" label="请根据设备编号选择设备:" style="margin-top: 0px;">
                <Select v-model="chooseDeviceItem.sbbh" placeholder="请选择设备" style="width: 120px;" filterable>
                  <Option v-for="(item, index) in this.deviceData" :key="item+index" :value="item.sbbh">{{item.sbbh}}</Option>
                </Select>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>

      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按养护日期查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                          v-model="formItem.wxrq"></DatePicker>
              <Button type="primary" icon="ios-search" @click="requestListData">搜索</Button>
              <Button type="primary" icon="android-download"
                      style="float: right;margin-right: 10px" @click="chooseDeviceModal=true">导出Excel
              </Button>
              <Button type="primary" icon="plus"
                      style="float: right;margin-right: 10px" @click="addModal=true">新增
              </Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="tableData" :columns="columns" border></Table>
      <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue';
  import CommonSelect from '../../components/common/CommonSelect.vue';
  import * as DateTool from '../../../utils/DateTool';
  export default {
    components: {
      canEditTable,
      CommonSelect,
    },
    data () {
      return {
        deviceData: [],
        formItem: {
          wxrq: '',
          currPage: 1,
          pageSize: 10,
        },
        totalSize: 0,
        deviceItem: {
          wxnr: '',
          wxrq: '',
          wxry: '',
          sbid: '',
        },
        updateDeviceItem: {
          id : '',
          wxnr: '',
          wxrq: '',
          wxry: '',
          sbid: '',
          sbbh: '',
        },
        chooseDeviceItem: {
          sbbh: '',
        },
        ruleValidate: {
          sbid: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          sbbh: [
            { required: true, message: '请选择设备', trigger: 'blur' },
          ],
          wxnr: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          wxrq: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' },
          ],
          wxry: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
        },
        addModal: false,
        updateModal: false,
        chooseDeviceModal: false,
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '设备编号',
            key: 'sbbh',
            align: 'center',
            width: 150,
          },
          {
            title: '养护内容',
            key: 'wxnr',
            align: 'center',
            width: 150,
          },
          {
            title: '养护日期',
            key: 'wxrq',
            align: 'center',
            width: 150,
          },
          {
            title: '养护人员',
            key: 'wxry',
            align: 'center',
            width: 150,
          },
          {
            title: '设备名称',
            key: 'sbmc',
            align: 'center',
            width: 150,
          },
          {
            title: '规格型号',
            key: 'ggxh',
            align: 'center',
            width: 150,
          },
          {
            title: '复杂系数',
            key: 'fzxs',
            align: 'center',
            width: 150,
          },
          {
            title: '制造厂名',
            key: 'zzcm',
            align: 'center',
            width: 150,
          },
          {
            title: '出厂编号',
            key: 'ccbh',
            align: 'center',
            width: 150,
          },
          {
            title: '出厂日期',
            key: 'ccrq',
            align: 'center',
            width: 150,
          },
          {
            title: '开始使用日期',
            key: 'kssyrq',
            align: 'center',
            width: 150,
          },
          {
            title: '安装地点',
            key: 'azdd',
            align: 'center',
            width: 150,
          },
          {
            title: '责任人',
            key: 'zrr',
            align: 'center',
            width: 150,
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            fixed: 'right',
            align: 'center',
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
                  on: {
                    click: () => {
                      this.deleteRow(params);
                    }
                  }
                }, '删除'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.clickUpdateBtn(params);
                    }
                  }
                }, '修改')
              ]);
            }
          },
        ],
        tableData: [],
      }
    },
    computed: {

    },
    methods: {
      requestDeviceData() {
        console.log('请求设备列表');
        let params = {
          currPage: 1,
          pageSize: 10,
        };
        this.$fetch(this.$url.maintain_DEVICE_list, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            res.page.records.forEach(item => {
              item.ccrq = DateTool.timesToDate(item.ccrq);
              item.kssyrq = DateTool.timesToDate(item.kssyrq);
            })
            this.deviceData = res.page.records;
            console.log(this.deviceData);
          }
        })
      },
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        console.log(this.formItem);
        let params = {};
        for (let attr in this.formItem) {
          params[attr] = this.formItem[attr];
        }
        params.wxrq = DateTool.yyyymmddFormatDate(params.wxrq);
        this.$fetch(this.$url.maintain_DEVICEBY_list, params)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            res.page.list.forEach(item => {
              item.ccrq = DateTool.timesToDate(item.ccrq);
              item.kssyrq = DateTool.timesToDate(item.kssyrq);
              item.wxrq = DateTool.timesToDate(item.wxrq);
            })
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      },
      deleteRow(params) {
        let p = {id : params.row.id};
        this.$fetch(this.$url.maintain_DEVICEBY_delete, p)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('删除成功!');
            this.requestListData();
          }else {
            this.$Message.error('删除失败, 请重试!');
          }
        })
      },
      saveRow() { // 新增
        console.log(this.deviceItem);
        console.log('新增设备保养记录');
        this.$post(this.$url.maintain_DEVICEBY_save, this.deviceItem)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.addModal = false;
            this.$Message.success('操作成功!');
            this.deviceItem = {
              id : '',
              wxnr: '',
              wxrq: '',
              wxry: '',
              sbid: '',
            }
            this.requestListData();
          }else{
            this.$Message.error('操作失败, 请重试!');
          }
        })
      },
      clickUpdateBtn(params) {
        console.log(params.row);
        for (let attr in this.updateDeviceItem) {
          this.updateDeviceItem[attr] = params.row[attr];
        }
        this.updateModal = true;
      },
      updateRow() {
        console.log(this.updateDeviceItem);
        console.log('更新设备保养记录');
        this.$post(this.$url.maintain_DEVICEBY_update, this.updateDeviceItem)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.updateModal = false;
            this.$Message.success('操作成功!');
            this.updateDeviceItem = {
              id : '',
              wxnr: '',
              wxrq: '',
              wxry: '',
              sbid: '',
              sbbh: '',
            }
            this.requestListData();
          }else{
            this.$Message.error('操作失败, 请重试!');
          }
        })
      },
      confirmUpdateDeviceBY(name) { // 更新保养记录
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.updateRow();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      confirmAddDeviceBY(name) { // 添加保养记录
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.saveRow();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      exportExcel(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.chooseDeviceItem.sbbh);
            console.log('导出');
            let url = this.$url.maintain_DEVICEBY_exportExcel;
            url = url + '?sbbh=' + this.chooseDeviceItem.sbbh;
            this.$getExcel(url);
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      }
    },
    mounted () {
      this.requestDeviceData();
    }
  }
</script>


