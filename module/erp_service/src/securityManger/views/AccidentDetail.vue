<!--单位、牌照、自编号、路别、立案时间（年月日）、地点、驾驶员姓名、报案人、事故属性（分为交强、车损、车内、三者）、事故性质（分为特大事故、重大事故、较大事故、一般事故、一级轻微、二级轻微、三极轻微）、立案日期、勘查人、立案（分为立案、私了、销案）、估损（包括公积金车损、公积金车内、公积金三者、公积金定损金额合计、交强险损失、事故总损失）、责任、备注-->
<!--单位、牌照、自编号、路别、时间、地点、姓名、报案人、事故属性、事故性质、立案日期、勘查人、立案、估损、责任、备注-->
<template>
  <div style="padding: 20px; height: 100%;">
    <h2>
      事故详情
      <router-link to="/ARList">
        <Button type="primary" size="small" style="margin-right: 10px;"><<返回列表页</Button>
      </router-link>
    </h2>


    <Card style="margin-top: 20px;">
      <p slot="title" >
        车辆事故基本信息
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" @click="changeTextType">{{actionText}}</Button>
      <Form v-model="formDetail" :label-width="80">
        <Row align="middle" style="flex-wrap: wrap">
          <Col span="6" v-for="(item, index) in columns" :key="item+index" style="height: 40px;">
            <FormItem :label="columns[index].nameText" style="margin-top: 0px;">
              <Input v-if="isEdit" v-model="columns[index].value" style="width: 150px;"></Input>
              <div v-else>{{columns[index].value}}</div>
            </FormItem>
          </Col>
        </Row>

      </Form>
    </Card>
    <ARAddLossList/>
  </div>
</template>

<script>

  import ARAddLossList from '../components/ARAddLossList.vue'
  export default {
    components: {
      ARAddLossList,
    },
    data () {
      return {
        isEdit: false,
        actionText: '编辑',
        columns: [
          {
            nameCode: 'dw',
            nameText: '登记单位:',
            value: '公交一公司'
          },
          {
            nameCode: 'pz',
            nameText: '车牌号码:',
            value: '蒙A123456'
          },
          {
            nameCode: 'zbh',
            nameText: '自编号:',
            value: 'C3921'
          },
          {
            nameCode: 'lb',
            nameText: '路别:',
            value: '706路'
          },
          {
            nameCode: 'lasj',
            nameText: '立案时间:',
            value: '2018-09-10'
          },
          {
            nameCode: 'dd',
            nameText: '地点:',
            value: '南门公交站拐弯处'
          },
          {
            nameCode: 'jsyxm',
            nameText: '驾驶员姓名:',
            value: '小黄'
          },
          {
            nameCode: 'bar',
            nameText: '报案人:',
            value: '小黄'
          },
          {
            nameCode: 'sgsx',
            nameText: '事故属性:',
            value: '三者'
          },
          {
            nameCode: 'sgxz',
            nameText: '事故性质:',
            value: '重大事故'
          },
          {
            nameCode: 'kcr',
            nameText: '勘查人:',
            value: '阿俊'
          },
          {
            nameCode: 'la',
            nameText: '立案:',
            value: '立案'
          },
          {
            nameCode: 'gs',
            nameText: '估损:',
            value: '20万元'
          },
          {
            nameCode: 'zr',
            nameText: '责任:',
            value: '我司司机负全责'
          },
          {
            nameCode: 'bz',
            nameText: '备注:',
            value: '没办法, 被讹了'
          },
        ],
        formDetail: {
          dw: '公交一公司',
          pz: '蒙A123456',
          zbh: 'C3921',
          lb: '706路',
          lasj: '2018-09-10',
          dd: '南门公交站拐弯处',
          jsyxm: '小黄',
          bar: '小黄',
          sgsx: '三者',
          sgxz: '重大事故',
          kcr: '阿俊',
          la: '立案',
          gs: '20万元',
          zr: '我司司机负全责',
          bz: '没办法, 被讹了',
        }
      }
    },
    methods: {
      changeTextType() {
        this.isEdit = (this.isEdit === true) ? false : true;
        console.log(this.isEdit);
        this.actionText = (this.isEdit === true) ? '取消' : '编辑';
      }
    },
    mounted () {

    }
  }
</script>

<style>
  .back {
    color: blue;
    position: absolute;
    margin-top: 4px;
    margin-left: 5px;
    cursor: pointer;
  }
</style>
