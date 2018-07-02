<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

  .inputBorderStyle {
    width: 180px;
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
              <Col span="6">
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
              <Col span="6">
              <FormItem label="按岗位查询" style="margin-left: -50px;">
                <Select v-model="jccxFormItem.gw_select" style="width:180px" @on-change="sxResultChange">
                  <Option v-for="item in postList" :value="item" :key="item">{{ item }}</Option>
                </Select>
              </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span="6">
              <FormItem label="合同自起" style="margin-left: -50px;">
                <DatePicker style="width: 180px;" v-model="gdsxFormItem.htzq_date" type="date"
                            placeholder="请选择合同自起时间"></DatePicker>
              </FormItem>
              </Col>
              <Col span="6">
              <FormItem label="合同终止" style="margin-left: -50px;">
                <DatePicker style="width: 180px;" v-model="gdsxFormItem.htzz_date" type="date"
                            placeholder="请选择合同终止时间"></DatePicker>
              </FormItem>
              </Col>
            </Row>
            <FormItem label="按单位查询" style="margin-left: -50px;">
              <CheckboxGroup v-model="jccxFormItem.dw_radio" @on-change="sxResultChange">
                <Checkbox label="维修公司"></Checkbox>
                <Checkbox label="集团公司"></Checkbox>
                <Checkbox label="公交一公司"></Checkbox>
                <Checkbox label="公交二公司"></Checkbox>
                <Checkbox label="公交三公司"></Checkbox>
                <Checkbox label="公交四公司"></Checkbox>
                <Checkbox label="公交五公司"></Checkbox>
                <Checkbox label="公交六公司"></Checkbox>
                <Checkbox label="公交七公司"></Checkbox>
                <Checkbox label="公交八公司"></Checkbox>
              </CheckboxGroup>
            </FormItem>
          </Form>
        </div>

        <!--筛选结果-->
        <div style="width: 100%; text-align: center">
          <Button style="margin-right: 10px;" type="primary" slot="extra" @click="search">
            <Icon type="search"></Icon>
            重置
          </Button>
          <Button type="primary" slot="extra" @click="search">
            <Icon type="search"></Icon>
            搜索
          </Button>
        </div>

        <Row type="flex" align="middle" justify="center">

        </Row>

      </div>
    </Card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        props: {
          row: Object
        },
        modal1: false,
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
