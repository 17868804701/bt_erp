<!-- 进厂登记阶段-->
<template>
  <div>

    <Card style="margin-top: 20px;">
      <p slot="title" >
        车辆保养基本信息
      </p>
      <Form v-model="basicData" :label-width="120">
        <Row align="middle" style="flex-wrap: wrap">
          <Col span="6" style="height: 40px;">
            <FormItem label="登记编号" style="margin-top: 0px;">
              <Input v-model="basicData.djbh" style="width: 150px;"></Input>
            </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
          <FormItem label="车辆自编号" style="margin-top: 0px;">
            <Input v-model="basicData.clzbh" style="width: 150px;"></Input>
          </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
          <FormItem label="车牌号" style="margin-top: 0px;">
            <Input v-model="basicData.cph" style="width: 150px;"></Input>
          </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
          <FormItem label="线路" style="margin-top: 0px;">
            <Input v-model="basicData.xl" style="width: 150px;"></Input>
          </FormItem>
          </Col>
        </Row>

        <Row align="middle" style="flex-wrap: wrap">
          <Col span="6" style="height: 40px;">
            <FormItem label="分公司" style="margin-top: 0px;">
              <Input v-model="basicData.fgs" style="width: 150px;"></Input>
            </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
            <FormItem label="进厂时间" style="margin-top: 0px;">
              <Input v-model="basicData.jcsj" style="width: 150px;"></Input>
            </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
            <FormItem label="送修人" style="margin-top: 0px;">
              <Input v-model="basicData.sxr" style="width: 150px;"></Input>
            </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
            <FormItem label="检验员" style="margin-top: 0px;">
              <Input v-model="basicData.jyy" style="width: 150px;"></Input>
            </FormItem>
          </Col>
        </Row>

        <Row align="middle" style="flex-wrap: wrap">
          <Col span="6" style="height: 40px;">
            <FormItem label="保养类别" style="margin-top: 0px;">
              <Input v-model="basicData.bylb" style="width: 150px;"></Input>
            </FormItem>
          </Col>
          <Col span="6" style="height: 40px;">
            <FormItem label="发动机是否需要维修" style="margin-top: 0px;" >
              <i-switch v-model="basicData.switchValue">
                <span slot="open">是</span>
                <span slot="close">否</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>

    <!--丢失件修配记录-->
    <Card style="margin-top: 20px;">
      <p slot="title" >
        丢失件修配记录
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="clickAddDSJAction">添加</Button>
      <Row align="middle" style="flex-wrap: wrap">
        <can-edit-table style="margin-top: 10px;" v-model="dsjList" :columnsList="dsjColumns" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
        </can-edit-table>
      </Row>
    </Card>

    <Modal
      v-model="dsjModal"
      title="新增丢失件修配记录"
      width="50%"
      @on-ok="addDSJ"
      @on-cancel="cancleAddDSJ">
      <div>
        <Form v-model="dsj" :label-width="60">
          <Row>
            <Col span="8">
              <FormItem label="名称">
                <Input v-model="dsj.mc" placeholder="名称..." style="width: 100px"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="数量">
                <Input v-model="dsj.sl" placeholder="数量..." style="width: 100px"></Input>
              </FormItem>
            </Col>
            <Col span="8">
              <FormItem label="修配结果">
                <Input v-model="dsj.xpjg" placeholder="修配结果..." style="width: 100px"></Input>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>

    <!--发动机进厂技术记录-->
    <Card v-if="basicData.switchValue" style="margin-top: 20px;">
      <p slot="title" >
        发动机进厂技术记录
      </p>
      <!--<Button slot="extra" type="primary" size="small" style="margin-right: 10px;" icon="plus" @click="clickAddFDJAction">添加</Button>-->
        <Form v-model="fdjData" :label-width="80">
          <Row>
            <Col span="8">
            <FormItem label="机厂车号:">{{fdjData.jcch}}</FormItem>
            </Col>
            <Col span="8">
            <FormItem label="发动机号:">{{fdjData.fdjh}}</FormItem>
            </Col>
            <Col span="8">
            <FormItem label="车型:">{{fdjData.cx}}</FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="8">
            <FormItem label="进厂时间:">{{fdjData.jcsj}}</FormItem>
            </Col>
            <Col span="8">
            <FormItem label="是否镶接:">{{fdjData.sfxj}}</FormItem>
            </Col>
            <Col span="8">
            <FormItem label="承修人:">{{fdjData.cxr}}</FormItem>
            </Col>
          </Row>
        </Form>
    </Card>

  </div>
</template>
<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  export default {
    name: 'AddMMStepOne',
    components: {
      canEditTable
    },
    data () {
      return {
        basicData: {
          djbh: '',
          clzbh: '',
          cph: '',
          xl: '',
          gfs: '',
          jcsj: '',
          sxr: '',
          jyy: '',
          bylb: '',
          switchValue: false,
        },
        fdjData: {
          jcch: '1-2188',
          fdjh: '559',
          cx: '141',
          jcsj: '2017-04-17',
          sfxj: '下套+0.00',
          cxr: '李光'
        },
        dsjColumns: [
          {
            key: 'mc',
            title: '名称',
            editable: true
          },
          {
            key: 'sl',
            title: '数量',
            editable: true
          },
          {
            key: 'xpjg',
            title: '修配结果',
            editable: true
          }
        ],
        dsjList: [],
        dsj: {
          mc: '',
          sl: '',
          xpjg: '',
        },
        dsjModal: false,
      }
    },
    computed: {

    },
    methods: {
      clickAddDSJAction() {
        this.dsjModal = true;
      },
      addDSJ() {
        this.dsjList.push(this.dsj);
        this.dsj = {
          mc: '',
          sl: '',
          xpjg: '',
        };
        console.log('确认添加');
      },
      cancleAddDSJ() {
        console.log('取消添加');
      },
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      },
      clickAddFDJAction() {
      }
    },
    mounted () {

    }
  }
</script>
