
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
            <Row>
              <Col span="8" style="height: 60px;">
              <FormItem prop="djbh" label="登记编号" style="margin-top: 0px;">
                <Input v-model="basicData.djbh" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="clzbh" label="车辆自编号" style="margin-top: 0px;">
                <Input v-model="basicData.clzbh" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="cph" label="车牌号" style="margin-top: 0px;">
                <Input v-model="basicData.cph" style="width: 100px;"></Input>
              </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="8" style="height: 60px;">
              <FormItem prop="clxh" label="车辆型号" style="margin-top: 0px;">
                <Input v-model="basicData.clxh" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="xl" label="线路" style="margin-top: 0px;">
                <Input v-model="basicData.xl" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="fgs" label="分公司" style="margin-top: 0px;">
                <Input v-model="basicData.fgs" style="width: 100px;"></Input>
              </FormItem>
              </Col>
            </Row>

            <Row align="middle" style="flex-wrap: wrap">
              <Col span="8" style="height: 60px;">
              <FormItem prop="jcsj" label="进厂时间" style="margin-top: 0px;">
                <Input v-model="basicData.jcsj" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="sxr" label="送修人" style="margin-top: 0px;">
                <Input v-model="basicData.sxr" style="width: 100px;"></Input>
              </FormItem>
              </Col>
              <Col span="8" style="height: 60px;">
              <FormItem prop="jyy" label="检验员" style="margin-top: 0px;">
                <Input v-model="basicData.jyy" style="width: 100px;"></Input>
              </FormItem>
              </Col>
            </Row>

            <Row align="middle" style="flex-wrap: wrap">
              <Col span="8" style="height: 60px;">
              <FormItem prop="bylb" label="保养类别" style="margin-top: 0px;">
                <Input v-model="basicData.bylb" style="width: 100px;"></Input>
              </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal>
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按进厂时间查询" style="margin: 0;">
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end"
                          v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
              <Button type="primary" icon="plus" style="float: right;margin-right: 10px;" @click="newRecordModal = true">新增</Button>
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
        basicData: {
          djbh: '',
          clzbh: '',
          cph: '',
          clxh: '',
          xl: '',
          gfs: '',
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
          clxh: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          xl: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          fgs: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
          ],
          jcsj: [
            { required: true, message: '此项为必填字段', trigger: 'blur' },
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
                      console.log('查看详情');
                      this.$router.push({
                        path: '/MMDetail'
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
                      console.log('删除');
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
        newRecordModal: false,
        loading: true,
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
            djbh: '登记编号'+ i,
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

      startMaintain(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登记成功, 请在列表查看!');
            this.newRecordModal = false;
            this.basicData = {
              djbh: '',
                clzbh: '',
                cph: '',
                clxh: '',
                xl: '',
                gfs: '',
                jcsj: '',
                sxr: '',
                jyy: '',
                bylb: '',
                switchValue: false,
                dsjSwitchValue: false,
            }
          } else {
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      cancle() {
        this.newRecordModal = false;
      }
    },
    mounted () {

    }
  }
</script>
