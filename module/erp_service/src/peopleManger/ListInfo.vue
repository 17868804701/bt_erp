<template>
  <div class="main">
    <Button type="primary" icon="paper-airplane" size="small">人员详细信息</Button>
    <router-link to="/">
      <span class="back">返回列表页>></span>
    </router-link>
    <Form :model="formItem" :label-width="80" style="margin-top:10px;">
      <Card class="card_file">
        <p slot="title">人员基本信息</p>
        <div slot="extra">
          <Button type="primary" size="small" :icon="this.isEdit_jbxx==false?'checkmark-circled':'edit'" @click="jbxx">
            {{this.isEdit_jbxx == false ? '保存' : '修改'}}
          </Button>
        </div>
        <Form :model="formItem" ref="formItem" :rules="ruleValidate" :label-width="80" style="margin-top:10px;">
          <div style="display: flex">
            <div class="jbxx_left">
              <FormItem :label-width="120" label="姓名" prop="xm">
                <Input v-model="formItem.xm" :disabled="isEdit_jbxx" placeholder="姓名" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="曾用名">
                <Input :disabled="isEdit_jbxx" v-model="formItem.cym" placeholder="曾用名" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="性别">
                <RadioGroup v-model="formItem.xb" :disabled="isEdit_jbxx" style="width: 170px;">
                  <Radio label="男">男</Radio>
                  <Radio label="女">女</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem :label-width="120" label="民族">
                <Select v-model="formItem.mz" :disabled="isEdit_jbxx" style="width: 170px;">
                  <Option value="汉族">汉族</Option>
                  <Option value="满族">满族</Option>
                </Select>
              </FormItem>
              <FormItem :label-width="120" label="出生年月">
                <DatePicker type="date" style="width: 170px;" :disabled="isEdit_jbxx" placeholder="Select date"
                            v-model="formItem.csny"></DatePicker>
              </FormItem>
              <FormItem :label-width="120" label="籍贯">
                <Input :disabled="isEdit_jbxx" v-model="formItem.jg" placeholder="陕西汉中" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="姓名首字母">
                <Input :disabled="isEdit_jbxx" v-model="formItem.xmdx" placeholder="姓名首字母" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="联系电话">
                <Input :disabled="isEdit_jbxx" v-model="formItem.lxdh" placeholder="联系电话" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="政治面貌">
                <Select v-model="formItem.zzmm" :disabled="isEdit_jbxx" style="width: 170px;">
                  <Option value="共青团员">共青团员</Option>
                  <Option value="中共党员">中共党员</Option>
                </Select>
              </FormItem>
              <FormItem :label-width="120" label="学历">
                <Input :disabled="isEdit_jbxx" v-model="formItem.xl" placeholder="学历" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="毕业院校">
                <Input :disabled="isEdit_jbxx" v-model="formItem.byyx" placeholder="毕业院校" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="所学专业">
                <Input :disabled="isEdit_jbxx" v-model="formItem.sxzy" placeholder="所学专业" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="职称">
                <Input :disabled="isEdit_jbxx" v-model="formItem.zc" placeholder="职称" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="职业资格技能">
                <Input :disabled="isEdit_jbxx" v-model="formItem.zyzgjn" placeholder="职业资格技能" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="录入时间">
                <DatePicker type="date" style="width: 170px;" :disabled="isEdit_jbxx" placeholder="Select date"
                            v-model="formItem.lrsj"></DatePicker>
              </FormItem>
              <FormItem :label-width="120" label="配偶情况">
                <Input :disabled="isEdit_jbxx" v-model="formItem.poqk" placeholder="配偶情况" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="身份证号">
                <Input :disabled="isEdit_jbxx" v-model="formItem.sfzh" placeholder="身份证号" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="健康状况">
                <Input :disabled="isEdit_jbxx" v-model="formItem.jkzk" placeholder="健康状况" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="服兵役">
                <Input :disabled="isEdit_jbxx" v-model="formItem.fby" placeholder="服兵役" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="通讯地址">
                <Input :disabled="isEdit_jbxx" v-model="formItem.txdz" placeholder="通讯地址" class="input_item"/>
              </FormItem>
              <FormItem :label-width="120" label="入党时间">
                <DatePicker type="date" :disabled="isEdit_jbxx" style="width: 170px;" placeholder="Select date"
                            v-model="formItem.rdsj"></DatePicker>
              </FormItem>
              <FormItem :label-width="120" label="备注">
                <Input :disabled="isEdit_jbxx" v-model="formItem.bz" placeholder="备注" class="input_item"/>
              </FormItem>
            </div>
            <div class="head jbxx_right">
              <img class="head_img"
                   src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530166672360&di=0d3b017d5285bae86c811371eca9cd11&imgtype=0&src=http%3A%2F%2Fpic14.photophoto.cn%2F20100127%2F0036036848818577_b.jpg"
                   alt="">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="primary" icon="ios-cloud-upload-outline">更改头像</Button>
              </Upload>
            </div>
          </div>
        </Form>
      </Card>
      <Card class="card_file" style="margin-top: 10px;">
        <p slot="title">附件查看</p>
        <Icon type="document-text" class="file"></Icon>
        <span class="a_pdf"
              @click="modalPdf=true">附件：员工资料.pdf</span><br>
        <Button type="primary" icon="ios-cloud-upload-outline" style="margin-top: 10px;">上传员工资料PDF</Button>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">公积金基本信息</Button>-->
      <Card class="card_file" style="margin-top: 10px">
        <p slot="title">公积金基本信息</p>
        <div slot="extra">
          <Button type="primary" size="small" :icon="this.isEdit_gjj==false?'checkmark-circled':'edit'" @click="gjj">
            {{this.isEdit_gjj == false ? '保存' : '修改'}}
          </Button>
        </div>
        <div style="display: flex;flex-wrap: wrap">
          <FormItem :label-width="120" label="公积金账号">
            <Input :disabled="isEdit_gjj" v-model="formItem.gjjzh" placeholder="公积金账号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="公积金开户时间">
            <DatePicker :disabled="isEdit_gjj" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.gjjkhsj"></DatePicker>
          </FormItem>
          <FormItem :label-width="160" label="公积金缴存情况备注">
            <Input :disabled="isEdit_gjj" v-model="formItem.gjjjcbz" placeholder="公积金缴存情况备注" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="公积金档号">
            <Input :disabled="isEdit_gjj" v-model="formItem.gjjdh" placeholder="公积金档号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="公积金状态">
            <RadioGroup :disabled="isEdit_gjj" v-model="formItem.gjjzt" style="width: 170px;">
              <Radio label="已交">已交</Radio>
              <Radio label="未交">未交</Radio>
            </RadioGroup>
          </FormItem>
        </div>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">单位基本信息</Button>-->
      <Card class="card_file" style="margin-top: 10px;">
        <p slot="title">单位基本信息</p>
        <div slot="extra">
          <Button type="primary" size="small" :icon="this.isEdit_dwxx==false?'checkmark-circled':'edit'" @click="dwxx">
            {{this.isEdit_dwxx == false ? '保存' : '修改'}}
          </Button>
        </div>
        <div style="display: flex;flex-wrap: wrap">
          <FormItem :label-width="120" label="人员编号">
            <Input :disabled="isEdit_dwxx" v-model="formItem.rybh" placeholder="人员编号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="单位">
            <Input :disabled="isEdit_dwxx" v-model="formItem.dw" placeholder="单位" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="部门">
            <Input :disabled="isEdit_dwxx" v-model="formItem.bm" placeholder="部门" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="工号">
            <Input :disabled="isEdit_dwxx" v-model="formItem.gh" placeholder="工号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="专业技术职称">
            <Input :disabled="isEdit_dwxx" v-model="formItem.ztjszc" placeholder="专业技术职称" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="取得时间">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.qdsj"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="退离类别">
            <Input :disabled="isEdit_dwxx" v-model="formItem.txlb" placeholder="退离类别" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="工种职务">
            <Input :disabled="isEdit_dwxx" v-model="formItem.gzzw" placeholder="工种" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="工作证号">
            <Input :disabled="isEdit_dwxx" v-model="formItem.gzzh" placeholder="工作证号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="路队">
            <Input :disabled="isEdit_dwxx" v-model="formItem.ld" placeholder="路队" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="工伤保险">
            <Input :disabled="isEdit_dwxx" v-model="formItem.gsbx" placeholder="工伤保险" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="所属车间">
            <Select :disabled="isEdit_dwxx" v-model="formItem.sscj" style="width: 170px;">
              <Option value="正式">第一车间</Option>
              <Option value="试用">第二车间</Option>
              <Option value="退休">第三车间</Option>
              <Option value="离职">第四车间</Option>
            </Select>
          </FormItem>
          <FormItem :label-width="120" label="在职情况">
            <Select :disabled="isEdit_dwxx" v-model="formItem.zzqk" style="width: 170px;">
              <Option value="正式">正式</Option>
              <Option value="试用">试用</Option>
              <Option value="退休">退休</Option>
              <Option value="离职">离职</Option>
            </Select>
          </FormItem>
          <FormItem :label-width="120" label="岗位状态">
            <Select :disabled="isEdit_dwxx" v-model="formItem.gwzt" style="width: 170px;">
              <Option value="一般管理">一般管理</Option>
              <Option value="辅助">辅助</Option>
              <Option value="司机">司机</Option>
              <Option value="修理">修理</Option>
            </Select>
          </FormItem>
          <FormItem :label-width="120" label="维修班组">
            <Select :disabled="isEdit_dwxx" v-model="formItem.wxbz" style="width: 170px;">
              <Option value="正式">一组</Option>
              <Option value="试用">二组</Option>
              <Option value="退休">三组</Option>
              <Option value="离职">四组</Option>
            </Select>
          </FormItem>
          <FormItem :label-width="120" label="职工身份">
            <Input :disabled="isEdit_dwxx" v-model="formItem.zgsf" placeholder="职工身份" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="保险档号">
            <Input :disabled="isEdit_dwxx" v-model="formItem.bxdh" placeholder="保险档号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="医疗保险">
            <Input :disabled="isEdit_dwxx" v-model="formItem.ylbx" placeholder="医疗保险" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="养老证号">
            <Input :disabled="isEdit_dwxx" v-model="formItem.ylzh" placeholder="养老证号" class="input_item"/>
          </FormItem>
          <FormItem :label-width="120" label="工作时间">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.gzsj"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="本单位工作时间">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.bdwgzsj"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="退休时间">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.txsj"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="公积金开户时间">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="合同自起">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.htkssj"></DatePicker>
          </FormItem>
          <FormItem :label-width="120" label="合同止">
            <DatePicker :disabled="isEdit_dwxx" type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.htjssj"></DatePicker>
          </FormItem>
        </div>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">其他信息</Button>-->
      <Card class="card_file" style="margin-top: 10px;">
        <p slot="title">人员变更记录</p>
        <div>
          <Table stripe :columns="columns1" :data="data1" border></Table>
          <!--<FormItem :label-width="120" label="人员变更情况">-->
          <!--<Input v-model="formItem.input" placeholder="人员变更情况" class="input_item"/>-->
          <!--</FormItem>-->
          <!--<FormItem :label-width="120" label="变更原因">-->
          <!--<Input v-model="formItem.input" placeholder="变更原因" class="input_item"/>-->
          <!--</FormItem>-->
          <!--<FormItem :label-width="120" label="变更时间">-->
          <!--<DatePicker type="date" style="width: 170px;" placeholder="Select date"-->
          <!--v-model="formItem.date"></DatePicker>-->
          <!--</FormItem>-->
          <!--<FormItem :label-width="120" label="变更内容">-->
          <!--<Input v-model="formItem.input" placeholder="变更内容" class="input_item"/>-->
          <!--</FormItem>-->
        </div>
      </Card>
      <div style="width: 100%;text-align: center;padding: 20px;">
        <Button type="primary" icon="checkmark-circled" @click="save">提交保存</Button>
      </div>
      <Modal
        v-model="modalPdf"
        width="70%"
        title="查看pdf">
        <vuePdfjs url="http://cdn.mozilla.net/pdfjs/tracemonkey.pdf" :type="0">111111111111111111111</vuePdfjs>
      </Modal>


      <!--填写变更原因-->
      <Modal
        v-model="bgyy"
        title="填写变更原因">
        <Form :model="formItem" :label-width="80">
          <FormItem label="变更原因">
            <Input v-model="formItem.rybgqk" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="填写变更原因，70字以内"></Input>
          </FormItem>
        </Form>
      </Modal>
    </Form>
  </div>
</template>
<script>
  import vuePdfjs from 'vue-pdfjs'
  import vueshowpdf from 'vueshowpdf'
  export default {
    data () {
      return {
        isEdit_jbxx: true,
        isEdit_dwxx: true,
        isEdit_gjj: true,
        bgyy: false,
        columns1: [
          {
            title: '人员变更原因',
            key: 'bgyy'
          },
          {
            title: '变更时间',
            key: 'bgsj'
          }
        ],
        data1: [
          {
            bgyy: '把职位换成主任',
            bgsj: '2018-10-10',
          },
        ],
        ruleValidate: {
          xm: [
            { required: true, message: '必填项不能为空', trigger: 'blur' }
          ],
        },
        formItem: {
          // 基本信息
          xm: "",
          cym: "",
          xb: "",
          mz: "",
          csny: "",
          jg: "",
          lxdh: "",
          zzmm: "",
          xmdx: '',
          xl: "",
          byyx: "",
          sxzy: "",
          zc: "",
          zyzgjn: "",
          lrsj: "",
          poqk: "",
          sfzh: "",
          jkzk: "",
          fby: "",
          txdz: "",
          rdsj: "",
          // 公积金信息
          gjjzh: "",
          gjjkhsj: "",
          gjjjcbz: "",
          gjjdh: "",
          gjjzt: "",
          // 单位信息
          rybh: "",
          gh: "", //
          sscj: "", //
          wxbz: "", //
          dw: "",
          bm: "",
          zyjszc: "",
          qdsj: "",
          txlb: "",
          gzzw: "",
          gzzh: "",
          //证件情况
          ld: "",
          gsbx: "",
          zzqk: "",
          gwzt: "",
          zgsf: "",
          bxdh: "",
          ylbx: "",
          ylzh: "",
          gzsj: "",
          bdwgzsj: "",
          txsj: "",
          htkssj: "",
          htjssj: "",
          bz: "", // 备注
          xmszm: "",
          ygfz: "", // 员工附件
          zpdz: "", // 照片地址
          bgyy: ''
        },
        modalPdf: false,
        pdfurls: '',
        isshowpdf: false,
        value: '1',
      }
    },
    methods: {
      showPdf: function () {
        this.isshowpdf = true;
      },
      closepdf(){
        this.isshowpdf = false;
      },
      gjj: function () {
        this.isEdit_gjj = !this.isEdit_gjj;
        if (this.isEdit_gjj === true) {
          this.bgyy = true
        }

      },
      jbxx: function () {
        this.isEdit_jbxx = !this.isEdit_jbxx;
        if (this.isEdit_jbxx === true) {
          this.bgyy = true
        }
      },
      dwxx: function () {
        this.isEdit_dwxx = !this.isEdit_dwxx;
        if (this.isEdit_dwxx === true) {
          this.bgyy = true
        }
      },
      save: function () {
          console.log('结果',this.formItem);
        this.$post(this.$url.userManager_saveUserInfo, this.formItem)
          .then(res => {
            if(res.success===true){
              this.$Message.info('添加成功');
            }else {
              this.$Message.error('添加失败')
            }
          })
      }
    },
    components: {
      vuePdfjs
    },
    mounted () {
      let tip = this.$route.query.tip;
      if(tip==='add'){
        this.isEdit_jbxx=false,
          this.isEdit_dwxx=false,
          this.isEdit_gjj=false
      }
    }
  }
</script>
<style>
  .main {
    padding: 20px;
  }

  .card_file {
    width: 99%;
  }

  .input_item {
    width: 170px !important;
  }

  .a_pdf {
    text-decoration: underline;
    margin-top: 7px;
    margin-left: 2px;
    position: absolute;
    color: blue;
    cursor: pointer;
  }

  .back {
    color: blue;
    position: absolute;
    margin-top: 4px;
    margin-left: 5px;
    cursor: pointer;
  }

  .file {
    font-size: 30px;
    color: #ed3f14;
    margin-left: 2px;
  }

  .jbxx_left {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
  }

  .jbxx_right {
    height: 300px;
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column
  }

  .head_img {
    width: 150px;
    height: 200px
  }
</style>

