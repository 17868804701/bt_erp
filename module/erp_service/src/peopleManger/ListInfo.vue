<template>
  <div class="main">
    <Button type="primary" icon="paper-airplane" size="small">人员详细信息</Button>
    <router-link to="/">
      <span class="back">返回列表页>></span>
    </router-link>
    <Form :model="formItem" :label-width="80" style="margin-top:10px;">
      <Card class="card_file">
        <p slot="title">人员基本信息</p>
        <Form :model="formItem" :label-width="80" style="margin-top:10px;">
          <div style="display: flex">
            <div class="jbxx_left">
              <Row type="flex" justify="start" class="code-row-bg">
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="姓名">
                  <Input v-model="formItem.input" placeholder="姓名" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="曾用名">
                  <Input v-model="formItem.input" placeholder="曾用名" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="性别">
                  <RadioGroup v-model="formItem.radio" style="width: 170px;">
                    <Radio label="男">男</Radio>
                    <Radio label="女">女</Radio>
                  </RadioGroup>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="民族">
                  <Select v-model="formItem.select" style="width: 170px;">
                    <Option value="汉族">汉族</Option>
                    <Option value="满族">满族</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="start" class="code-row-bg">
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="出生年月">
                  <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                              v-model="formItem.date"></DatePicker>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="籍贯">
                  <Input v-model="formItem.input" placeholder="陕西汉中" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="联系电话">
                  <Input v-model="formItem.input" placeholder="联系电话" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="政治面貌">
                  <Select v-model="formItem.select" style="width: 170px;">
                    <Option value="共青团员">共青团员</Option>
                    <Option value="中共党员">中共党员</Option>
                  </Select>
                </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="start" class="code-row-bg">
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="学历">
                  <Input v-model="formItem.input" placeholder="学历" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="毕业院校">
                  <Input v-model="formItem.input" placeholder="毕业院校" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="所学专业">
                  <Input v-model="formItem.input" placeholder="所学专业" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="职称">
                  <Input v-model="formItem.input" placeholder="职称" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="职业资格技能">
                  <Input v-model="formItem.input" placeholder="职业资格技能" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="配偶情况">
                  <Input v-model="formItem.input" placeholder="配偶情况" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="身份证号">
                  <Input v-model="formItem.input" placeholder="身份证号" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="健康状况">
                  <Input v-model="formItem.input" placeholder="健康状况" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="服兵役">
                  <Input v-model="formItem.input" placeholder="服兵役" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="通讯地址">
                  <Input v-model="formItem.input" placeholder="通讯地址" class="input_item"/>
                </FormItem>
                </Col>
                <Col span="6">
                <FormItem class="formItem" :label-width="120" label="入党时间">
                  <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                              v-model="formItem.date"></DatePicker>
                </FormItem>
                </Col>
              </Row>
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
        <vueshowpdf @closepdf="closepdf"
                    v-show="isshowpdf"
                    pdfurl="http://cdn.mozilla.net/pdfjs/tracemonkey.pdf"
                    @pdferr="pdferr"
                    :maxscale='4'
                    :minscale='0.6'
                    :scale='1.2'></vueshowpdf>
        <Icon type="document-text" class="file"></Icon>
        <span class="a_pdf"
              @click="modalPdf=true">附件：员工资料.pdf</span><br>
        <Button type="primary" icon="ios-cloud-upload-outline" style="margin-top: 10px;">上传员工资料PDF</Button>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">公积金基本信息</Button>-->
      <Card class="card_file" style="margin-top: 10px">
        <p slot="title">公积金基本信息</p>
        <div style="display: flex;flex-wrap: wrap">
          <FormItem class="formItem" :label-width="120" label="公积金账号">
            <Input v-model="formItem.input" placeholder="公积金账号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="公积金开户时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="160" label="公积金缴存情况备注">
            <Input v-model="formItem.input" placeholder="公积金缴存情况备注" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="公积金档号">
            <Input v-model="formItem.input" placeholder="公积金档号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="公积金状态">
            <RadioGroup v-model="formItem.radio" style="width: 170px;">
              <Radio label="已交">已交</Radio>
              <Radio label="未交">未交</Radio>
            </RadioGroup>
          </FormItem>
        </div>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">单位基本信息</Button>-->
      <Card class="card_file" style="margin-top: 10px;">
        <p slot="title">单位基本信息</p>
        <div style="display: flex;flex-wrap: wrap">
          <FormItem class="formItem" :label-width="120" label="人员编号">
            <Input v-model="formItem.input" placeholder="人员编号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="统计号">
            <Input v-model="formItem.input" placeholder="统计号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="统计">
            <Input v-model="formItem.input" placeholder="统计" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="单位">
            <Input v-model="formItem.input" placeholder="单位" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="单位号">
            <Input v-model="formItem.input" placeholder="单位号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="部门">
            <Input v-model="formItem.input" placeholder="部门" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="专业技术职称">
            <Input v-model="formItem.input" placeholder="专业技术职称" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="取得时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="退离类别">
            <Input v-model="formItem.input" placeholder="退离类别" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="临时工">
            <Input v-model="formItem.input" placeholder="临时工" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="待遇">
            <Input v-model="formItem.input" placeholder="待遇" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="工种">
            <Input v-model="formItem.input" placeholder="工种" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="职务">
            <Input v-model="formItem.input" placeholder="职务" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="工作证号">
            <Input v-model="formItem.input" placeholder="工作证号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="证件情况">
            <Input v-model="formItem.input" placeholder="证件情况" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="工作类型">
            <RadioGroup v-model="formItem.radio" style="width: 170px;">
              <Radio label="实习">实习</Radio>
              <Radio label="试用">试用</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="路队">
            <Input v-model="formItem.input" placeholder="路队" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="工伤保险">
            <Input v-model="formItem.input" placeholder="工伤保险" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="岗位状态">
            <RadioGroup v-model="formItem.radio" style="width: 170px;">
              <Radio label="在职">在职</Radio>
              <Radio label="离职">离职</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="职工身份">
            <Input v-model="formItem.input" placeholder="职工身份" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="保险档号">
            <Input v-model="formItem.input" placeholder="保险档号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="医疗保险">
            <Input v-model="formItem.input" placeholder="医疗保险" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="养老证号">
            <Input v-model="formItem.input" placeholder="养老证号" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="工作时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="本单位工作时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="退休时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="公积金开户时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="合同自起">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="合同止">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
        </div>
      </Card>
      <!--<Button type="primary" icon="paper-airplane" size="small" style="margin-top:10px;">其他信息</Button>-->
      <Card class="card_file" style="margin-top: 10px;">
        <p slot="title">其他信息</p>
        <div style="display: flex;flex-wrap: wrap">
          <FormItem class="formItem" :label-width="120" label="人员变更情况">
            <Input v-model="formItem.input" placeholder="人员变更情况" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="变更原因">
            <Input v-model="formItem.input" placeholder="变更原因" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="变更时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="录入时间">
            <DatePicker type="date" style="width: 170px;" placeholder="Select date"
                        v-model="formItem.date"></DatePicker>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备注">
            <Input v-model="formItem.input" placeholder="变更原因" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备用字段1">
            <Input v-model="formItem.input" placeholder="备用字段1" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备用字段2">
            <Input v-model="formItem.input" placeholder="备用字段2" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备用字段3">
            <Input v-model="formItem.input" placeholder="备用字段3" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备用字段4">
            <Input v-model="formItem.input" placeholder="备用字段4" class="input_item"/>
          </FormItem>
          <FormItem class="formItem" :label-width="120" label="备用字段5">
            <Input v-model="formItem.input" placeholder="备用字段5" class="input_item"/>
          </FormItem>
        </div>
      </Card>
      <Modal
        v-model="modalPdf"
        width="70%"
        title="查看pdf">
        <vuePdfjs url="http://cdn.mozilla.net/pdfjs/tracemonkey.pdf" :type="0">111111111111111111111</vuePdfjs>
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
        modalPdf: false,
        pdfurls: '',
        isshowpdf: false,
        value: '1',
        formItem: {
          input: '',
          radio: '',
          select: '',
          date: ''
        }
      }
    },
    methods: {
      showPdf: function () {
        this.isshowpdf = true;
      },
      closepdf(){
        this.isshowpdf = false;
      },
      pdferr(errurl) {
//        console.log(errurl);
      }
    },
    components: {
      vuePdfjs
    },
    mounted () {

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
    width: 80%;
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
