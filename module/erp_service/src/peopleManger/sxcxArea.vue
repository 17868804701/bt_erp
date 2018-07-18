<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sxrowStyle {
    margin-bottom: 20px
  }

  .sxcolStyle {
    margin-left: -20px
  }

  .sxradioStyle {
    margin-top: 10px;
    margin-left: 5px;
  }

  .select_name {
    width: 180px;
    border: 1px solid #dddee1;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
  }

  .select_name::-webkit-input-placeholder {
    color: #bbbec4;
  }

  #letter {
    margin-right: 10px;
    width: 50px;
    margin-bottom: 10px;
  }
</style>

<template>
  <div>
    <Card style="width:100%">
      <p slot="title">员工列表查询</p>
      <div>

        <!--基础查询-->
        <div>
          <Form :model="jccxFormItem" :label-width="120">
            <Row>
              <Col span="7">
              <FormItem label="首字母查询" style="margin-left: -50px;">
                <input v-model="jccxFormItem.szm_select" type="text" @focus="modal1 = true" placeholder="按照姓名首字母查询"
                       class="select_name">
              </FormItem>
              <Modal
                v-model="modal1"
                width="300"
                @on-ok="ok"
                :mask-closable="false"
                title="选择姓名首字母" style="text-align: center">
                <Button type="primary" size="small" v-for="(item,index) in letterArray" :key="item+index" id="letter"
                        @click="getLetter(item)">{{item}}
                </Button>
              </Modal>
              </Col>

              <Col span="7">
              <FormItem label="按岗位状态查询" style="margin-left: -50px;">
                <Select v-model="jccxFormItem.gw_select1" style="width:180px" @on-change="sxResultChange">
                  <Option value="beijing">在职</Option>
                  <Option value="shanghai">离职</Option>
                </Select>
              </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="7">
              <FormItem label="合同自起" style="margin-left: -50px;">
                <DatePicker style="width: 180px;" v-model="gdsxFormItem.htzq_date" type="date"
                            placeholder="请选择合同自起时间"></DatePicker>
              </FormItem>
              </Col>
              <Col span="7">
              <FormItem label="合同终止" style="margin-left: -50px;">
                <DatePicker style="width: 180px;" v-model="gdsxFormItem.htzz_date" type="date"
                            placeholder="请选择合同终止时间"></DatePicker>
              </FormItem>
              </Col>
            </Row>
            <FormItem label="按岗位查询" style="margin-left: -50px;">
              <CheckboxGroup v-model="jccxFormItem.gw_select" @on-change="sxResultChange">
                <Checkbox v-for="(item, index) in postList" :key="item" :label="item"></Checkbox>
              </CheckboxGroup>
            </FormItem>
            <FormItem label="按单位查询" style="margin-left: -50px;">
              <CheckboxGroup v-model="jccxFormItem.dw_radio" @on-change="sxResultChange">
                <Checkbox label="集团公司"></Checkbox>
                <Checkbox label="公交一公司"></Checkbox>
                <Checkbox label="公交二公司"></Checkbox>
                <Checkbox label="公交三公司"></Checkbox>
                <Checkbox label="公交四公司"></Checkbox>
                <Checkbox label="公交五公司"></Checkbox>
                <Checkbox label="公交六公司"></Checkbox>
                <Checkbox label="长客公司"></Checkbox>
                <Checkbox label="点钞中心"></Checkbox>
                <Checkbox label="培训中心"></Checkbox>
                <Checkbox label="稽查大队"></Checkbox>
                <Checkbox label="站管中心"></Checkbox>
                <Checkbox label="维修公司"></Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Form>
        </div>
        <!--筛选结果-->
        <div style="width: 100%; text-align: center">
          <Button type="primary" slot="extra" @click="search">
            <Icon type="search"></Icon>
            搜索
          </Button>
          <Button type="primary" size="default" slot="extra" style="float: right;"><Icon type="android-download"></Icon>导出Excel</Button>
          <Button type="primary" size="default" slot="extra" style="float: right;margin-right: 10px;"
                  @click="exports=true"><Icon type="android-upload"></Icon>导入Excel
          </Button>
          <Button type="primary" size="default" slot="extra" style="float: right;margin-right: 10px;"
                  @click="addPerson"> <Icon type="plus"></Icon>新建
          </Button>
          <Modal
            v-model="exports"
            title="导入计划表"
            width="400"
            :mask-closable="false"
            style="height:auto;">
            <Steps :current="0" direction="vertical">
              <Step title="第一步" content="下载导入报表模板"></Step>
              <Step title="第二步" content="上传报表"></Step>
              <Step title="第三部" content="系统自动导入"></Step>
            </Steps>
            <div style="display: flex;flex-direction: column;position: absolute;top:90px;margin-left: 240px;">
              <Button type="dashed" icon="android-download"
                      style="margin-bottom: 10px;margin-top: -15px;width: 110px;">下载
              </Button>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="primary" icon="ios-cloud-upload-outline" style="width: 110px;margin-top: 17px;">上传
                </Button>
              </Upload>
            </div>
          </Modal>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        gw_select1:'',
        exports: false,
        props: {
          row: Object
        },
        modal1: false,
        jccxFormItem: {
          szm_select: [],
          gw_select: [],
          gw_select1:[],
          dw_radio: [],
          htzq_date: '',
          htzz_date: '',
        },
        gdsxFormItem: {
          mz_radios: '',
          bm_radios: [],
          gjj_radios: '',
          xb_radios: '',
          xueli_radios: [],
          gzzw_radios: [],
          gzlx_radios: '',
          xl_radios: [],
        },
        sxResult: [],
        postList: ['全部', '公司领导', '二级', '三级', '主任科员', '一般管理', '辅助', '司机', '修理', '其他在岗', '内退', '病假', '产假', '女工长假', '下岗', '工伤', '待岗', '停薪', '外借', '其他不在岗',],
        getLetters: [],
        letterArray: ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '清除'],
        searchOption: '',
        postValue: '',
      }
    },
    computed: {
      gwSource() {

      }
    },
    methods: {
      ok: function () {

      },
      addPerson: function () {
        this.$router.push({path: '/ListInfo'});
      },
      extensionOptions() {
        this.sxExtension = (this.sxExtension === false) ? true : false;
      },
      getLetter: function (item) {
        if (item === '清除') {
          this.jccxFormItem.szm_select = '';
          this.getLetters = []
        } else {
          this.getLetters.push(item);
          let letter = this.getLetters.toString().replace(/,/g, '');
          this.jccxFormItem.szm_select = letter;
        }
      },
      sxResultChange(e) {
        console.log('处理选中的数据');

        let data = {
          jccxFormItem: {
            szm_select: [],
            gw_select: '',
            dw_radio: [],
            htzq_date: '',
            htzz_date: '',
          },
          gdsxFormItem: {
            mz_radios: '',
            bm_radios: [],
            gjj_radios: '',
            xb_radios: '',
            xueli_radios: [],
            gzzw_radios: [],
            gzlx_radios: '',
            xl_radios: [],
          },
        };

        let tmp1 = [];
        if (this.jccxFormItem.szm_select.length >= 0) {
          tmp1.push(...this.jccxFormItem.szm_select)
        }
        ;
        if (this.jccxFormItem.dw_radio.length >= 0) {
          tmp1.push(...this.jccxFormItem.dw_radio)
        }
        ;
        if (this.jccxFormItem.gw_select !== '') {
          tmp1.push(this.jccxFormItem.gw_select)
        }
        ;
        if (this.jccxFormItem.htzq_date !== '') {
          tmp2.push(this.jccxFormItem.htzq_date)
        }
        ;
        if (this.jccxFormItem.htzz_date !== '') {
          tmp2.push(this.jccxFormItem.htzz_date)
        }
        ;

        let tmp2 = [];
        if (this.gdsxFormItem.mz_radios !== '') {
          tmp2.push(this.gdsxFormItem.mz_radios)
        }
        ;
        if (this.gdsxFormItem.gjj_radios !== '') {
          tmp2.push(this.gdsxFormItem.gjj_radios)
        }
        ;
        if (this.gdsxFormItem.xb_radios !== '') {
          tmp2.push(this.gdsxFormItem.xb_radios)
        }
        ;
        if (this.gdsxFormItem.gzlx_radios !== '') {
          tmp2.push(this.gdsxFormItem.gzlx_radios)
        }
        ;
        if (this.gdsxFormItem.bm_radios.length >= 0) {
          tmp2.push(...this.gdsxFormItem.bm_radios)
        }
        ;
        if (this.gdsxFormItem.xueli_radios.length >= 0) {
          tmp2.push(...this.gdsxFormItem.xueli_radios)
        }
        ;
        if (this.gdsxFormItem.gzzw_radios.length >= 0) {
          tmp2.push(...this.gdsxFormItem.gzzw_radios)
        }
        ;
        if (this.gdsxFormItem.xl_radios.length >= 0) {
          tmp2.push(...this.gdsxFormItem.xl_radios)
        }
        ;

        this.sxResult = [];
        if (tmp1 >= 0) {
          this.sxResult.push(...tmp1)
        }
        ;
        if (tmp2.length >= 0) {
          this.sxResult.push(...tmp2)
        }
        ;

        console.log(this.sxResult);

      },
      deleteOptions(event, name) {
        const index = this.sxResult.indexOf(name);
        this.sxResult.splice(index, 1);
      },
      ok() {

      },
      search() {

      }
    }
  }
</script>
