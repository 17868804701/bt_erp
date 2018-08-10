<!--维修工信息管理-->

<template>

  <div>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <!--新增维修工-->
      <Modal
        v-model="addModal"
        title="新增配件信息"
        width="50%"
        :mask-closable="false"
        :closable="false">
        <div slot="footer" style="height: 30px;">
          <Button type="primary" style="float: right;margin-right: 10px" @click="clickSaveBtn('pjxx')">保存</Button>
          <Button type="primary" style="float: right;margin-right: 10px" @click="cancle">取消</Button>
        </div>
        <div style="padding: 0px; height: 100%;">
          <Form :model="pjxx" ref="pjxx" :rules="ruleValidate" :label-width="90">
            <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
              <FormItem prop="spbm" label="商品编码" style="margin-top: 0px;">
                <Input v-model="pjxx.spbm" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="wpmc" label="物品名称" style="margin-top: 0px;">
                <Input v-model="pjxx.wpmc" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="wpflmc" label="物品分类名称" style="margin-top: 0px;">
                <Select v-model="pjxx.wpflmc" style="width: 110px;">
                  <Option value="清洗类">清洗类</Option>
                  <Option value="轮胎">轮胎</Option>
                </Select>
              </FormItem>
              <FormItem prop="dw" label="单位" style="margin-top: 0px;">
                <Input v-model="pjxx.dw" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="jhj" label="计划价" style="margin-top: 0px;">
                <Input v-model="pjxx.jhj" style="width: 110px;"></Input>
              </FormItem>
              <FormItem prop="gys" label="供应商" style="margin-top: 0px;">
                <Input v-model="pjxx.gys" style="width: 110px;"></Input>
              </FormItem>
            </div>
          </Form>
        </div>
      </Modal>
      <Card>
        <Form :model="formItem">
          <FormItem label="按物品名称查询" style="margin: 0;">
            <Input v-model="formItem.wpmc" style="width: 120px;"></Input>
            <Button type="primary" icon="ios-search" @click="requestListData">搜索</Button>
            <Button type="primary" icon="plus" style="float: right;margin-right: 10px;" @click="addModal=true">新增</Button>
          </FormItem>
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
        formItem: {
          wpmc: '',
          currPage: 1,
          pageSize: 10,
        },
        totalSize: 0,
        addModal: false,
        pjxx: {
          id: "",
          dw: "",
          gys: "",
          jhj: "",
          spbm: "",
          wpflmc: "",
          wpmc: ""
        },
        ruleValidate: {
          dw: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          gys: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          jhj: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          spbm: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          wpflmc: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          wpmc: [
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
            title: '商品编码',
            key: 'spbm',
            align: 'center',
          },
          {
            title: '物品名称',
            key: 'wpmc',
            align: 'center',
          },
          {
            title: '物品分类名称',
            key: 'wpflmc',
            align: 'center',
          },
          {
            title: '单位',
            key: 'dw',
            align: 'center',
          },
          {
            title: '计划价',
            key: 'jhj',
            align: 'center',
          },
          {
            title: '供应商',
            key: 'gys',
            align: 'center',
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '10px'
                  },
                  on: {
                    click: () => {
                      for (let attr in this.pjxx) {
                        this.pjxx[attr] = params.row[attr];
                      }
                      this.addModal = true;
                    }
                  }
                }, '修改'),
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
                }, '删除')
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
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        this.$fetch(this.$url.maintain_BYGL_DATA_PGXX_list, this.formItem)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.tableData = res.page.records;
            this.totalSize = res.page.total;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      },
      clickSaveBtn(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.saveOrUpdate();
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      cancle() {
        this.addModal = false;
        this.pjxx = {
          id: "",
          dw: "",
          gys: "",
          jhj: "",
          spbm: "",
          wpflmc: "",
          wpmc: ""
        }
      },
      saveOrUpdate() {
        console.log(this.pjxx);
        this.$post(this.$url.maintain_BYGL_DATA_PGXX_saveOrUpdate, this.pjxx)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('保存成功!');
            this.addModal = false;
            this.pjxx = {
              id: "",
              dw: "",
              gys: "",
              jhj: "",
              spbm: "",
              wpflmc: "",
              wpmc: ""
            }
            this.requestListData();
          }else{
            this.$Message.error('保存失败, 请重试!');
          }
        })
      },
      deleteRow(params) {
        let p = {id : params.row.id};
        this.$post(this.$url.maintain_BYGL_DATA_PGXX_delete, p)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$Message.success('删除成功!');
            this.requestListData();
          } else {
            this.$Message.error('删除失败, 请重试!');
          }
        })
      },
    },
    mounted () {

    }
  }
</script>


<!--商品编码、物品名称、物品分类名称、单位、计划价、供应商-->
