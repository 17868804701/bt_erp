<template>
  <div style="margin-top: 40px;">
    <Card style="margin-top: 20px;">
      <p slot="title" >
        出厂合格登记
      </p>
      <Button slot="extra" type="primary" size="small" style="margin-right: 10px;" :icon="ccEditIcon" @click="ccDataIsEdit = !ccDataIsEdit">{{ccEditText}}</Button>
      <Button v-if="ccDataIsEdit" slot="extra" type="success" size="small" style="margin-right: 10px;" icon="checkmark" @click="saveCCData">保存</Button>
      <Form v-model="ccData" :label-width="80">
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
          <FormItem v-for="(item, index) in ccDataColumns" :key="item+index" :label="ccDataColumns[index].nameText" style="margin-top: 0px;">
            <Input v-if="ccDataIsEdit" v-model="ccDataColumns[index].value" style="width:100px;"></Input>
            <div style="width: 100px;" v-else>{{ccDataColumns[index].value}}</div>
          </FormItem>
        </div>
      </Form>
      <Form v-model="ccData" :label-width="80">
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
          <FormItem label="出厂说明:" style="margin-top: 0px;">
            <Input style="width: 100%;" v-if="ccDataIsEdit" v-model="ccData.bz" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入出厂说明..."></Input>
            <div v-else>{{ccData.bz}}</div>
          </FormItem>
        </div>
      </Form>
    </Card>



  </div>
</template>
<script>
  export default {
    name: 'AddMMStepThree',
    components: {
    },
    data () {
      return {
        ccData: {
          ch: '1-2188',
          cx: '中型客车',
          xb: '三养',
          fdjdx: '是',
          cxdw: '修理公司',
          ccrq: '2019-09-09',
          bz: '无',
          jyy: '小黄',
        },
        ccDataColumns: [
          {
            nameCode: 'ch',
            nameText: '车号:',
            value: '1-2188'
          },
          {
            nameCode: 'cx',
            nameText: '车型:',
            value: '中型客车'
          },
          {
            nameCode: 'xb',
            nameText: '修别:',
            value: '三养'
          },
          {
            nameCode: 'fdjdx',
            nameText: '发动机大修:',
            value: '是'
          },
          {
            nameCode: 'cxdw',
            nameText: '承修单位:',
            value: '修理公司'
          },
          {
            nameCode: 'ccrq',
            nameText: '出厂日期:',
            value: '2019-09-09'
          },
          {
            nameCode: 'jyy',
            nameText: '检验员:',
            value: '小黄'
          },
        ],
        ccDataIsEdit: false,
      }
    },
    computed: {
      ccEditText() {
        if (!this.ccDataIsEdit) {
          return '编辑';
        }else{
          return '取消';
        }
      },
      ccEditIcon() {
        if (!this.ccDataIsEdit) {
          return 'edit';
        }else{
          return 'close';
        }
      }
    },
    methods: {
      saveCCData() {
        console.log('保存信息');
        this.ccDataIsEdit = false;
      }
    },
    mounted () {

    }
  }
</script>
