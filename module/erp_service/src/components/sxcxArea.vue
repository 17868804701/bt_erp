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
  .select_name{
    width: 180px;
    border:1px solid  #dddee1;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
  }
  .select_name::-webkit-input-placeholder {
    color:#bbbec4;
  }
  #letter{
    margin-right: 10px;width: 50px;margin-bottom: 10px;
  }
</style>

<template>
  <div >
    <Card style="width:100%">
      <p slot="title">员工列表查询</p>
      <Button slot="extra" type="primary" @click.prevent="extensionOptions">更多筛选</Button>
      <div>

        <!--基础查询-->
        <div>
          <Form :model="jccxFormItem" :label-width="120">
            <FormItem label="首字母查询" style="margin-left: -50px;">
              <input v-model="jccxFormItem.szm_select" type="text" @focus="modal1 = true" placeholder="按照姓名首字母查询" class="select_name">
            </FormItem>
            <Modal
              v-model="modal1"
              width="300"
              @on-ok="ok"
              :mask-closable="false"
              title="选择姓名首字母" style="text-align: center">
              <Button type="primary" size="small" :key="index" v-for="(item,index) in letterArray"  id="letter" @click="getLetter(item)">{{item}}</Button>
            </Modal>
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
            <FormItem label="按岗位查询" style="margin-left: -50px;">
              <Select v-model="jccxFormItem.gw_select" style="width:100px" @on-change="sxResultChange">
                <Option v-for="item in postList" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </FormItem>
          </Form>
        </div>

        <!--更多筛选-->
        <div v-if="sxExtension" style="margin-top: 20px;">
          <hr style="height:1px;border:none;border-top:1px solid lightgrey;margin-bottom: 10px; margin-top: 10px"/>
          <Form :model="gdsxFormItem" :label-width="120">
            <FormItem label="键入搜索" style="margin-left: -50px;">
              <input v-model="gdsxFormItem.input" type="text" placeholder="请输入搜索内容" class="select_name"/>
            </FormItem>
            <Row>
              <Col span="6" >
                <FormItem label="合同自起" style="margin-left: -50px;">
                  <DatePicker v-model="gdsxFormItem.htzq_date" type="date" placeholder="请选择合同自起时间"></DatePicker>
                </FormItem>
              </Col>
              <Col span="6">
                <FormItem label="合同终止" style="margin-left: -50px;">
                  <DatePicker v-model="gdsxFormItem.htzz_date" type="date" placeholder="请选择合同终止时间"></DatePicker>
                </FormItem>
              </Col>
            </Row>
          </Form>

          <Tabs type="card">
            <!--<TabPane label="民族">-->
              <!--<CheckboxGroup v-model="gdsxFormItem.mz_radios">-->
                <!--<Checkbox v-for="item in mzList" :key="item">{{item.name}}</Checkbox>-->
              <!--</CheckboxGroup>-->
            <!--</TabPane>-->
            <TabPane label="部门">
              <CheckboxGroup v-model="gdsxFormItem.bm_radios" @on-change="sxResultChange">
                <Checkbox v-for="item in bmList" :label="item" :key="item"></Checkbox>
              </CheckboxGroup>
            </TabPane>
            <TabPane label="公积金状态">
              <Col span="22">
              <RadioGroup v-model="gdsxFormItem.gjj_radios" @on-change="sxResultChange">
                <Radio class="sxradioStyle" label="封存"></Radio>
                <Radio class="sxradioStyle" label="正常"></Radio>
              </RadioGroup>
              </Col>
            </TabPane>
            <TabPane label="性别">
              <RadioGroup v-model="gdsxFormItem.xb_radios" @on-change="sxResultChange">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="学历">
              <CheckboxGroup v-model="gdsxFormItem.xueli_radios" @on-change="sxResultChange">
                <Checkbox v-for="item in xueliList" :label="item" :key="item"></Checkbox>
              </CheckboxGroup>
            </TabPane>
            <TabPane label="工作类型">
              <RadioGroup v-model="gdsxFormItem.gzlx_radios" @on-change="sxResultChange">
                <Radio v-for="item in gzlxList" :key="item" :label="item"></Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="工种职务">
              <CheckboxGroup v-model="gdsxFormItem.gzzw_radios" @on-change="sxResultChange">
                <Checkbox v-for="item in gzzwList" :label="item" :key="item"></Checkbox>
              </CheckboxGroup>
            </TabPane>
            <TabPane label="路线">
              <CheckboxGroup v-model="gdsxFormItem.xl_radios" @on-change="sxResultChange">
                <Checkbox v-for="item in xlList" :label="item" :key="item"></Checkbox>
              </CheckboxGroup>
            </TabPane>
          </Tabs>
        </div>

        <!--筛选结果-->
        <div>
          <hr style="height:1px;border:none;border-top:1px solid lightgrey;margin-bottom: 10px; margin-top: 10px"/>
          <Row type="flex" align="middle">
            <Col>
              当前筛选条件:
            </Col>
            <Col v-for="(item, index) in jccxFormItem.dw_radio" :key="item">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>
            <Col v-for="(item, index) in jccxFormItem.szm_select" :key="item">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>
            <Col v-if="jccxFormItem.gw_select.length > 0">
              <Tag type="border" closable color="blue">{{jccxFormItem.gw_select}}</Tag>
            </Col>

            <Col v-if="gdsxFormItem.input.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.input}}</Tag>
            </Col>
            <Col v-if="gdsxFormItem.htzq_date.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.htzq_date}}</Tag>
            </Col>
            <Col v-if="gdsxFormItem.htzz_date.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.htzz_date}}</Tag>
            </Col>
            <Col v-if="gdsxFormItem.mz_radios.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.mz_radios}}</Tag>
            </Col>
            <Col v-for="(item, index) in gdsxFormItem.bm_radios" :key="item+index">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>

            <Col v-if="gdsxFormItem.gjj_radios.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.gjj_radios}}</Tag>
            </Col>
            <Col v-if="gdsxFormItem.xb_radios.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.xb_radios}}</Tag>
            </Col>
            <Col v-for="(item, index) in gdsxFormItem.xueli_radios" :key="item">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>
            <Col v-for="(item, index) in gdsxFormItem.gzzw_radios" :key="item">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>
            <Col v-if="gdsxFormItem.gzlx_radios.length > 0">
              <Tag type="border" closable color="blue">{{gdsxFormItem.gzlx_radios}}</Tag>
            </Col>
            <Col v-for="(item, index) in gdsxFormItem.xl_radios" :key="item">
              <Tag type="border" closable color="blue">{{item}}</Tag>
            </Col>
            
          </Row>
        </div>

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
        },
        gdsxFormItem: {
          input: '',
          htzq_date: '',
          htzz_date: '',
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
        nameSpell: '',
        xueliList: ['全部', '博士', '硕士', '大学', '大专', '中专中技', '技校', '高中', '职高', '初中', '小学', '文盲或半文盲',],
        postList: ['全部', '公司领导', '二级', '三级', '主任科员', '一般管理', '辅助', '司机', '修理', '其他在岗', '内退', '病假', '产假', '女工长假','下岗','工伤','待岗', '停薪', '外借','其他不在岗',],
        getLetters:[],
        letterArray:['全部','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','清除'],
        searchOption: '',
        postValue: '',
        sxExtension: false,
        mzList: [{"id":"01","name":"汉族"},{"id":"02","name":"蒙古族"},{"id":"03","name":"回族"},
          {"id":"04","name":"藏族"},{"id":"05","name":"维吾尔族"},{"id":"06","name":"苗族"},
          {"id":"07","name":"彝族"},{"id":"08","name":"壮族"},{"id":"09","name":"布依族"},
          {"id":"10","name":"朝鲜族"},{"id":"11","name":"满族"},{"id":"12","name":"侗族"},
          {"id":"13","name":"瑶族"},{"id":"14","name":"白族"},{"id":"15","name":"土家族"},
          {"id":"16","name":"哈尼族"},{"id":"17","name":"哈萨克族"},{"id":"18","name":"傣族"},
          {"id":"19","name":"黎族"},{"id":"20","name":"傈僳族"},{"id":"21","name":"佤族"},
          {"id":"22","name":"畲族"},{"id":"23","name":"高山族"},{"id":"24","name":"拉祜族"},
          {"id":"25","name":"水族"},{"id":"26","name":"东乡族"},{"id":"27","name":"纳西族"},
          {"id":"28","name":"景颇族"},{"id":"29","name":"柯尔克孜族"},{"id":"30","name":"土族"},
          {"id":"31","name":"达斡尔族"},{"id":"32","name":"仫佬族"},{"id":"33","name":"羌族"},
          {"id":"34","name":"布朗族"},{"id":"35","name":"撒拉族"},{"id":"36","name":"毛难族"},
          {"id":"37","name":"仡佬族"},{"id":"38","name":"锡伯族"},{"id":"39","name":"阿昌族"},
          {"id":"40","name":"普米族"},{"id":"41","name":"塔吉克族"},{"id":"42","name":"怒族"},
          {"id":"43","name":"乌孜别克族"},{"id":"44","name":"俄罗斯族"},{"id":"45","name":"鄂温克族"},
          {"id":"46","name":"崩龙族"},{"id":"47","name":"保安族"},{"id":"48","name":"裕固族"},
          {"id":"49","name":"京族"},{"id":"50","name":"塔塔尔族"},{"id":"51","name":"独龙族"},
          {"id":"52","name":"鄂伦春族"},{"id":"53","name":"赫哲族"},{"id":"54","name":"门巴族"},
          {"id":"55","name":"珞巴族"},{"id":"56","name":"基诺族"}],
        gzlxList: ['全部','实习', '试用'],
        bmList: ['全部','运营部', '企管部', '技术部', '劳动人事部', '安全部', '燃油供应中心', '信息中心', '运营检验处（技检处）', '车辆统计', '经营管理处', '保养车间', '钢瓶检测', '技术处'],
        gzzwList: ['全部','司机','站员', '清洁', '经警', '纪检委副书记', '监检室主任'],
        xlList: ['全部','21路','23路','24路','25路','26路','217','28路','34路','245路',],
      }
    },
    methods: {
        ok:function () {

        },
      extensionOptions() {
        this.sxExtension = (this.sxExtension === false) ? true : false;
      },
      getLetter:function (item) {
        if(item==='清除'){
          this.jccxFormItem.szm_select ='';
          this.getLetters = []
        }else {
          this.getLetters.push(item);
          let letter = this.getLetters.toString().replace(/,/g,'');
          this.jccxFormItem.szm_select = letter;
        }
      },
      sxResultChange(e) {
        console.log(e);
        console.log(this.jccxFormItem);
        console.log(this.gdsxFormItem);
        this.sxResult = [];
        this.sxResult.push(this.jccxFormItem.gw_select.length > 0);
        this.sxResult.push.apply(this.sxResult,this.jccxFormItem.dw_radio);
        
      },
      ok() {

      }
    }
  }
</script>
