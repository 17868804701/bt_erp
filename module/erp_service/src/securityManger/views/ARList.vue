<!--立案事故管理-->

<template>
  <div style="padding: 20px; height: 100%;">
    <Row type="flex" justify="space-between" style="border-bottom: 1px solid #e9eaec; padding-bottom: 5px;">
      <h2>
        立案事故管理
      </h2>
    </Row>
    <Modal
      v-model="accidentModal"
      title="新增立案事故登记"
      width="50%">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="confirmAddAccident">保存</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancleAddAccident">取消</Button>
      </div>
      <AddAccidentDiv ref="AddAccidentDiv" :formValidate="formValidate"/>
    </Modal>
    <Modal
      v-model="lossModal"
      title="追加事故经损"
      width="50%">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="confirmAddLoss">追加经损</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancleAddLoss">取消</Button>
      </div>
      <AddLossDiv ref="AddLossDiv" :lossForm="lossForm"/>
    </Modal>
    <Card style="width:100%; margin-top: 20px;">
      <Form :model="searchOptions" :label-width="80">
        <div style="display: flex;flex-wrap: wrap; align-items: center">
          <FormItem label="车牌号" style="margin: 0px;">
            <Input v-model="searchOptions.pz" placeholder="请输入牌照查询..." clearable style="width: 180px"></Input>
          </FormItem>
          <FormItem label="驾驶员姓名" style="margin: 0px;">
            <Input v-model="searchOptions.jsyxm" placeholder="请输入驾驶员姓名查询..." clearable style="width: 180px"></Input>
          </FormItem>
          <FormItem label="立案时间" style="margin: 0px;" >
            <DatePicker v-model="searchOptions.date" style="width: 180px;" type="date"
                        placeholder="请选择立案时间"></DatePicker>
          </FormItem>
          <Button style="margin-left: 20px;" type="primary" icon="ios-search" @click="requestListData">搜索</Button>
          <div style="position: absolute;right: 20px;">
            <Button type="primary" icon="android-download" style="margin-right: 10px" @click="exportExcel">导出Excel</Button>
            <Button type="primary" icon="plus" style="margin-right: 10px;" @click="accidentModal=true">新增</Button>
          </div>
        </div>
      </Form>
    </Card>
    <!--表格-->
    <Table style="margin-top: 10px;" :row-class-name="rowColor" :data="tableData" border :columns="initTableColumns" border></Table>
    <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
  </div>
</template>
<script>
  import AddAccidentDiv from '../components/AddAccidentDiv.vue'
  import AddLossDiv from '../components/AddLossDiv.vue';
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
      AddLossDiv,
      AddAccidentDiv
    },
    data () {
      return {
        //   jafy 结案费用   swrs 死亡人数  ssrs  受伤人数  kf  扣分  xczrsgfl ??
        columnsTitle: ['单位','自编号', '路别', '立案时间', '地点', '驾驶员姓名', '报案人', '事故属性', '事故性质', '立案日期', '勘查人', '立案类型', '责任','备注'],
        columnsCode: ['dw','zbh','lb','lasj','dd','jsyxm','bar','sgsx','sgxz','larq','kcr','lalx','zr','bz'],
        gsColumnsTitle: ['公积金车损', '公积金车内', '公积金三者', '公积金定损金额合计', '交强险损失', '事故总损失'],
        gsColumnsCode: [ 'gjjcs', 'gjjcn', 'gjjsz', 'gjjhj', 'jqxss', 'sgzss'],
        tableData: [],
        searchOptions: {
          current: 1,
          size: 10,
          pz: '',
          dw: '',
          jsyxm: '',
          date: '',
          lasjStart: '',
          lasjEnd: '',
        },
        totalSize: 0,
        accidentModal: false,
        lossModal: false,
        formValidate: {
          dw: '',
          dd: '',
          pz: '',
          zbh: '',
          jsyxm: '',
          lb: '',
          lalx: '立案',
          bar: '',
          kcr: '',
          sgsx: [],
          sgxz: '',
          kf: '',
          bz: '',
          swrs: 0,
          qsrs: 0,
          zsrs: 0,
          gjjcs: 0,
          gjjcn: 0,
          gjjsz: 0,
          gjjhj: 0,
          jqxss: 0,
          sgzss: 0,
          zr: '责任',
          jafy: 0,
          xczrsgfl: '',
        },
        lossForm: {
          jsyxm: "",
          laid: "",
          lb: "",
          pz: "",
          jajs: 0,
          ygjs: 0,
          hjzj: 0,
          zjcn: 0,
          zjcs: 0,
          zjgs: "",
          zjkf: 0,
          zjsz: 0,
          bz: 0,
        },
        LALXDict: {},
      }
    },
    computed: {
      initTableColumns() {
        let coulumns = [
          {
            title: '牌照',
            key: 'pz',
            width: 150,
            align: 'center'
          },
        ];
        for (let i = 0; i < this.columnsTitle.length; i++) {
          coulumns.push({
            title: this.columnsTitle[i],
            key: this.columnsCode[i],
            width: 120,
            align: 'center'
          });
        }
        let gsCoulumns = [];
        for (let i = 0; i < this.gsColumnsTitle.length; i++) {
          gsCoulumns.push({
            title: this.gsColumnsTitle[i],
            key: this.gsColumnsCode[i],
            width: 120,
            align: 'center',
            sortable: true
          });
        }
        coulumns.push({
          title: '估损',
          align: 'center',
          children: gsCoulumns
        });
        let newColumns = [
          {
            title: '集团公司立按事故表',
            align: 'center',
            children: coulumns,
          }
        ];
        newColumns.push({
          title: '操作',
          width: 240,
          fixed: 'right',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.showDetail(params.row)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '20px'
                },
                on: {
                  click: () => {
                    this.lossForm.laid = params.row.id;
                    this.lossForm.jsyxm = params.row.jsyxm;
                    this.lossForm.lb = params.row.lb;
                    this.lossForm.pz = params.row.pz;
                    this.lossModal = true;
                  }
                }
              }, '追加经损'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.deleteLASG(params.row);
                  }
                }
              }, '删除'),
            ]);
          }
        });

        return newColumns;
      },
    },
    methods: {
      rowColor(row, index) {
        if (row.lalx === '结案') {
          return 'status-ja';
        } else if (row.lalx === '销案') {
          return 'status-xa';
        } else {
          return 'status-la';
        }
        return 'status-la';
      },
      search() {
        console.log('搜索查询');
        this.requestListData();
      },
      confirmAddLoss() {
        let addLossDiv = this.$refs.AddLossDiv;
        addLossDiv.$refs['lossForm'].validate(valid=>{
          if (valid) {
            this.addLASGZJSG();
          }else{
            this.$Message.error('请按照规则来填写内容!');
          }
        })
      },
      cancleAddLoss() {
        this.lossModal = false;
      },
      confirmAddAccident() {
        let addAccidentDiv = this.$refs.AddAccidentDiv;
        addAccidentDiv.$refs['addAccident'].validate(valid=>{
          if(valid) {
            this.addLASG();
          }else{
            this.$Message.error('请按照规则来填写内容!');
          }
        });
      },
      cancleAddAccident() {
        this.accidentModal = false;
      },
      showDetail(rowData) {
        console.log('查看详情');
        this.$router.push({
          path: '/AccidentDetail',
          query: {
            rowData: rowData
          }
        })
      },
      formatDate(time) {
        let date =  new Date(time);
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },

      // ***********  network ********** //
      requestLALXDict() {
        this.$fetch(this.$url.common_getDictListDataWithCode, {code: 'LALX'})
        .then(res => {
          console.log(res);
          if (res.success === true) {
            let dicts = {};
            res.cDic.forEach(item => {
              dicts[item.code] = item.title;
            })
            this.LALXDict = dicts;
          }
        })
      },
      requestListData() {
        let params = {};
        console.log(this.searchOptions);
        for (let attr in this.searchOptions) {
          params[attr] = this.searchOptions[attr];
        }
        params.lasjStart = DateTool.yyyymmddFormatDate(this.searchOptions.date);
        params.lasjEnd = params.lasjStart;
        console.log(params);
        this.$fetch(this.$url.security_LASG_list, params)
        .then(res => {
          console.log(res);
          res.data.records.forEach(item=>{
            item.lasj = this.formatDate(item.lasj);
            item.larq = this.formatDate(item.larq);
          })
          this.tableData = res.data.records;
          this.totalSize = res.data.total;
          this.searchOptions.current = res.data.current;
          this.tableData.forEach(item => {
            item.lalx = this.LALXDict[item.lalx];
          })
        })
      },
      setPage(page) {
        this.searchOptions.current = page;
        this.requestListData();
      },
      addLASG() {

        var params = {};
        for (let attr in this.formValidate) {
          params[attr] = this.formValidate[attr];
        }

        params.sgsx = this.formValidate.sgsx.join('、');
        params.zr = '责任';
        params.gjjhj = params.gjjsz+params.gjjcn+params.gjjcs;
        params.sgzss = params.gjjhj+params.jqxss;
        params.sgxz = this.SGXZ();

        console.log(params);
        debugger;
        this.$post(this.$url.security_LASG_add, params)
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.accidentModal = false;
            this.requestListData();
          }else{
            this.$Message.error('未知错误, 添加失败!');
          }
        })
      },
      deleteLASG(rowData) {
        this.$fetch(this.$url.security_LASG_delete, {id: rowData.id})
        .then(res => {
          console.log(res);
          if (res.success === true) {
            this.requestListData();
          }else{
            this.$Message.error('删除失败,请重试!');
          }
        })
      },
      addLASGZJSG() {
        this.$post(this.$url.security_LASG_addLoss, this.lossForm)
        .then(res => {
          if (res.success === true) {
            this.$Message.success('添加成功!');
            this.lossModal = false;
            this.lossForm = {
              jsyxm: "",
              laid: "",
              lb: "",
              pz: "",
              jajs: 0,
              ygjs: 0,
              hjzj: 0,
              zjcn: 0,
              zjcs: 0,
              zjgs: "",
              zjkf: 0,
              zjsz: 0,
              bz: 0,
            }
          }else{
            this.$Message.error('添加失败!');
          }
        })

      },
      exportExcel() {
        let url = this.$url.security_LASG_exportExcel;
        url = url + '?current='+this.searchOptions.current+'&&size='+this.searchOptions.size;
        if (this.searchOptions.date instanceof Date) {
          let firstDay = DateTool.getFirstDay(this.searchOptions.date);
          let lastDay = DateTool.getLastDay(this.searchOptions.date);
          url = url + '&&lasjStart=' + firstDay + '&&lasjEnd=' + lastDay;
        }
        this.$getExcel(url);
      },
      // action
      SGXZ() {
        let qsrs = Number(this.formValidate.qsrs);
        let zsrs = Number(this.formValidate.zsrs);
        let swrs = Number(this.formValidate.swrs);
        let sgzss = Number(this.formValidate.gjjcs)+Number(this.formValidate.gjjcn)+Number(this.formValidate.gjjsz)+Number(this.formValidate.jqxss);
        let result = '';

        if (sgzss >= 10000 && sgzss < 50000 && qsrs > 0 && qsrs <= 3) {
          result = '三级轻微事故';
          result = 'SJQW';
        }

        if (sgzss >= 50000 && sgzss < 300000 && qsrs > 3 && qsrs <= 10) {
          result = '二级轻微事故';
          result = 'EJQW';
        }

        if (sgzss >= 300000 && sgzss < 500000 && qsrs > 10 && qsrs <= 50) {
          result = '三级轻微事故';
          result = 'YJQW';
        }

        if ((zsrs > 0 && zsrs <= 10) || (swrs > 0 && swrs <= 3) || (sgzss >= 500000 && sgzss <10000000)) {
          result = '一般事故';
          result = 'YBSG';
        }

        if ((zsrs > 10 && zsrs <= 50) || (swrs > 3 && swrs <= 10) || (sgzss >= 10000000 && sgzss <50000000)) {
          result = '较大事故';
          result = 'JDSG';
        }

        if ((zsrs > 50 && zsrs <= 100) || (swrs > 10 && swrs <= 30) || (sgzss >= 50000000 && sgzss <100000000)) {
          result = '重大事故';
          result = 'ZDSG';
        }

        if (zsrs > 100 || swrs > 30 || sgzss >= 100000000) {
          result = '特别重大事故';
          result = 'TDSG';
        }
        return result;
      }
    },
    mounted () {
      this.requestListData();
      this.requestLALXDict();
    },
    watch: {
      LALXDict() {
        console.log('立案状态的数据字典更新了');
        this.tableData.forEach(item => {
          item.lalx = this.LALXDict[item.lalx];
        })
      }
    }
  }
</script>

<style>
  .ivu-table .status-ja td{
    background-color: #19be6b;
    color: #fff;
  }
  .ivu-table .status-xa td{
    background-color: #fff;
  }
  .ivu-table .status-la td{
    background-color: #5cadff;
    color: #fff
  }
</style>
