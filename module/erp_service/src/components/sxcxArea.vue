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
</style>

<template>
  <div >
    <Card style="width:100%">
      <div>
        <div>
          <Row class="sxrowStyle" type="flex" align="middle">
            <Col span="2">
            首字母:
            </Col>
            <Col span="2" class="sxcolStyle">
            <Input type="text" v-model="nameSpell" placeholder="请输入首字母..."></Input>
            </Col>
            <Col span="2" offset="18">
              <Button type="primary" @click="extensionOptions">
                更多筛选
              </Button>
            </Col>
          </Row>
          <Row class="sxrowStyle" type="flex" align="middle">
            <Col span="2">
            岗位查询:
            </Col>
            <Col span="8" class="sxcolStyle">
            <Select v-model="postValue" size="middle" style="width:100px">
              <Option v-for="item in postList" :value="item" :key="item">{{ item }}</Option>
            </Select>
            </Col>
          </Row>
          <Row>
            <Col span="2">
            单位查询:
            </Col>
            <Col span="22" class="sxcolStyle">
              <CheckboxGroup v-model="fruit">
                <Checkbox label="维修公司"></Checkbox>
                <Checkbox label="集团公司"></Checkbox>
                <Checkbox label="公交一公司"></Checkbox>
                <Checkbox label="公交二公司"></Checkbox>
                <Checkbox label="公交三公司"></Checkbox>
                <Checkbox label="公交死公司"></Checkbox>
                <Checkbox label="公交五公司"></Checkbox>
                <Checkbox label="公交六公司"></Checkbox>
                <Checkbox label="公交七公司"></Checkbox>
                <Checkbox label="公交八公司"></Checkbox>
              </CheckboxGroup>
            </Col>
          </Row>
        </div>
        <div v-if="sxExtension" style="margin-top: 20px;">
          <hr style="height:1px;border:none;border-top:1px solid lightgrey;margin-bottom: 10px; margin-top: 10px"/>
          <Row class="sxrowStyle" type="flex" align="middle">
            <Col span="2">
              键入搜索
            </Col>
            <Col span="8" class="sxcolStyle">
              <Input v-model="searchOption" placeholder="请输入搜索内容"></Input>
            </Col>
          </Row>
          <!--合同时间-->
          <Row class="sxrowStyle" type="flex" align="middle" justify="start">
            <Col span="2">合同自启</Col>
            <Col span="3" style="margin-left: -20px">
              <DatePicker type="date" placeholder="Select date"></DatePicker>
            </Col>
            <Col span="1" style="text-align: center">-</Col>
            <Col span="2" >合同终止</Col>
            <Col span="3" style="margin-left: -20px">
            <DatePicker type="date" placeholder=""></DatePicker>
            </Col>
          </Row>

          <Tabs type="card">
            <TabPane label="民族">
              <RadioGroup v-model="animal">
                <Radio size="large" v-for="item in mzList" :key="item">{{item}}</Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="部门">
              <RadioGroup v-model="animal">
                <Radio class="sxradioStyle" size="large" v-for="item in bmList" :key="item">{{item}}</Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="公积金状态">
              <Col span="22">
              <RadioGroup v-model="animal">
                <Radio class="sxradioStyle" label="封存"></Radio>
                <Radio class="sxradioStyle" label="正常"></Radio>
              </RadioGroup>
              </Col>
            </TabPane>
            <TabPane label="性别">
              <RadioGroup v-model="animal">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="学历">
              <RadioGroup v-model="animal">
                <Radio size="large" v-for="item in xueliList" :key="item">{{item}}</Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="工种职务">
              <RadioGroup v-model="animal">
                <Radio class="sxradioStyle" size="large" v-for="item in gzzwList" :key="item">{{item}}</Radio>
              </RadioGroup>
            </TabPane>
            <TabPane label="路线">
              <RadioGroup v-model="animal">
                <Radio class="sxradioStyle" size="large" v-for="item in xlList" :key="item">{{item}}</Radio>
              </RadioGroup>
            </TabPane>

          </Tabs>


        </div>
        <div>
          <hr style="height:1px;border:none;border-top:1px solid lightgrey;margin-bottom: 10px; margin-top: 10px"/>
          <Row type="flex" align="middle" gutter="16">
            <Col>
              筛选条件:
            </Col>
            <Col>
              <Tag type="border" closable color="blue">标签一</Tag>
            </Col>
            <Col>
              <Tag type="border" closable color="blue">标签一</Tag>
            </Col>
            <Col>
            <Tag type="border" closable color="blue">标签一</Tag>
            </Col>
            <Col>
            <Tag type="border" closable color="blue">标签一</Tag>
            </Col>
            <Col>
            <Tag type="border" closable color="blue">标签一</Tag>
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
        value: '哈哈',
        nameSpell: '',
        xueliList: [
        	'博士',
          '硕士',
          '大学',
          '大专',
          '中专中技',
          '技校',
          '高中',
          '职高',
          '初中',
          '小学',
          '文盲或半文盲',
        ],
        postList: [
        	'全部',
        	'公司领导',
          '二级',
          '三级',
          '主任科员',
          '一般管理',
          '辅助',
          '司机',
          '修理',
          '其他在岗',
          '内退',
          '病假',
          '产假',
          '女工长假',
          '下岗',
          '工伤',
          '待岗',
          '停薪',
          '外借',
          '其他不在岗',
        ],
        searchOption: '',
        bmList: [],
        postValue: '',
        sxExtension: false,
        mzList: ['汉族', '回族', '满族'],
        gzlxList: ['实习', '试用'],
        bmList: ['运营部', '企管部', '技术部', '劳动人事部', '安全部', '燃油供应中心', '信息中心', '运营检验处（技检处）', '车辆统计', '经营管理处', '保养车间', '钢瓶检测', '技术处', '技术处'],
        gzzwList: ['司机','站员', '清洁', '经警', '纪检委副书记', '监检室主任'],
        xlList: ['21路','23路','24路','25路','26路','217','28路','34路','245路',],
      }
    },
    methods: {
      extensionOptions() {
        this.sxExtension = (this.sxExtension === false) ? true : false;
      }
    }
  }
</script>
