<!--安全管理月考核表管理-->
<template>
  <div>
    <Modal
      v-model="editModal"
      title="编辑运营安全体系执行规范"
      width="50%">
      <div slot="footer" style="height: 30px;">
        <Button type="primary" style="float: right;margin-right: 10px" @click="saveAQData">保存</Button>
        <Button type="primary" style="float: right;margin-right: 10px" @click="cancle">取消</Button>
      </div>
      <EditSafeExamineArea :formItem="editRow"/>
    </Modal>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按月查询" style="margin: 0;">
            <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search" @click="searchData" v-has="'aqglykhbgl_aqglykhb_search'">搜索</Button>
            <Button type="primary" icon="android-download"
                    style="float: right;margin-right: 10px" @click="exportExcel" v-has="'aqglykhbgl_aqglykhb_export'">导出Excel
            </Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
    <Table border style="margin-top: 10px;" :data="tableData" :columns="columns11">
      <div slot="header" style="height: 50px;font-size: 18px;text-align: center">
        {{tableTitle}}
      </div>
    </Table>
  </div>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  import EditSafeExamineArea from '../components/EditSafeExamineArea.vue'
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components:{
      canEditTable,
      EditSafeExamineArea
    },
    data () {
      return {
        editModal: false,
        formItem: {
          date: this.initDate(),
          lasjStart: '',
          lasjEnd: ''
        },
        tableTitle: '',
        columns11: [
          {
            title: '行车事故',
            align: 'center',
            children: [
              {
                title: '单位',
                key: 'dw',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '运营里程(公里)',
                key: 'yylc',
                align: 'center',
                width: 150,
                sortable: true
              },
              {
                title: '行车责任事故',
                align: 'center',
                children: [
                  {
                    title: '一般',
                    key: 'ybsg',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '一级轻微',
                    key: 'yjqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '二级轻微',
                    key: 'ejqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '三级轻微',
                    key: 'sjqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '扣分',
                    key: 'xczrsgKf',
                    align: 'center',
                    width: 90,
                  },
                ]
              },
              {
                title: '事故损失',
                align: 'center',
                children: [
                  {
                    title: '经损含追加(元)',
                    key: 'js',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '经损率(元/万公里)',
                    key: 'jsl',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '扣分',
                    key: 'sgssKf',
                    align: 'center',
                    width: 90,
                  },
                ]
              },
              {
                title: '运营安全体系执行规范',
                align: 'center',
                children: [
                  {
                    title: '安全教育及管理制度落实',
                    align: 'center',
                    children: [
                      {
                        title: '职工安全教育',
                        key: 'zgaqjy',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全宣传',
                        key: 'aqxc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全例会',
                        key: 'aqlh',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '线路安全稽查',
                        key: 'xlanqjc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '酒精检测',
                        key: 'jjjc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '四不放过',
                        key: 'sbfg',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全标准化',
                        key: 'aqbzh',
                        align: 'center',
                        width: 80,
                      },
                    ]
                  },
                  {
                    title: '驾驶员安全管理',
                    align: 'center',
                    children: [
                      {
                        title: '吸烟',
                        key: 'xy',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '接打手机',
                        key: 'jdsj',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '闯信号',
                        key: 'cxh',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '未礼让斑马线',
                        key: 'wlrbmx',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '超速行驶',
                        key: 'csxs',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '驾驶中闲谈',
                        key: 'jszxt',
                        align: 'center',
                        width: 90,
                      },
                    ]
                  },
                  {
                    title: '车辆安全管理',
                    align: 'center',
                    children: [
                      {
                        title: '行车十检',
                        key: 'xcsj',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '车辆安全设施抽检',
                        key: 'claqsscj',
                        align: 'center',
                        width: 90,
                      },
                    ]
                  },
                ]
              },
              {
                title: '单位',
                key: 'dw',
                align: 'center',
                width: 100,
                sortable: true
              },
              {
                title: '运营里程(公里)',
                key: 'yylc',
                align: 'center',
                width: 150,
                sortable: true
              },
              {
                title: '行车责任事故',
                align: 'center',
                children: [
                  {
                    title: '一般',
                    key: 'ybsg',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '一级轻微',
                    key: 'yjqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '二级轻微',
                    key: 'ejqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '三级轻微',
                    key: 'sjqw',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '扣分',
                    key: 'xczrsgKf',
                    align: 'center',
                    width: 90,
                  },
                ]
              },
              {
                title: '事故损失',
                align: 'center',
                children: [
                  {
                    title: '经损含追加(元)',
                    key: 'js',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '经损率(元/万公里)',
                    key: 'jsl',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '扣分',
                    key: 'sgssKf',
                    align: 'center',
                    width: 90,
                  },
                ]
              },
              {
                title: '运营安全体系执行规范',
                align: 'center',
                children: [
                  {
                    title: '安全教育及管理制度落实',
                    align: 'center',
                    children: [
                      {
                        title: '职工安全教育',
                        key: 'zgaqjy',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全宣传',
                        key: 'aqxc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全例会',
                        key: 'aqlh',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '线路安全稽查',
                        key: 'xlanqjc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '酒精检测',
                        key: 'jjjc',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '四不放过',
                        key: 'sbfg',
                        align: 'center',
                        width: 80,
                      },
                      {
                        title: '安全标准化',
                        key: 'aqbzh',
                        align: 'center',
                        width: 80,
                      },
                    ]
                  },
                  {
                    title: '驾驶员安全管理',
                    align: 'center',
                    children: [
                      {
                        title: '吸烟',
                        key: 'xy',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '接打手机',
                        key: 'jdsj',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '闯信号',
                        key: 'cxh',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '未礼让斑马线',
                        key: 'wlrbmx',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '超速行驶',
                        key: 'csxs',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '驾驶中闲谈',
                        key: 'jszxt',
                        align: 'center',
                        width: 90,
                      },
                    ]
                  },
                  {
                    title: '车辆安全管理',
                    align: 'center',
                    children: [
                      {
                        title: '行车十检',
                        key: 'xcsj',
                        align: 'center',
                        width: 90,
                      },
                      {
                        title: '车辆安全设施抽检',
                        key: 'claqsscj',
                        align: 'center',
                        width: 90,
                      },
                    ]
                  },
                ]
              },
              {
                title: '总计扣分(含追加扣分及加分)',
                key: 'zjkf',
                align: 'center',
                width: 120,
                sortable: true
              },
              {
                title: '操作',
                key: 'action',
                width: 90,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      on: {
                        click: () => {
//                          console.log('编辑运营安全体系执行规范');
//                          console.log(params.row);
                          this.editRow = params.row;
                          this.editModal = true;
                        }
                      },
                      directives: [
                        {
                          name: 'has',
                          value: 'aqglykhbgl_aqglykhb_update',
                        }
                      ],
                    }, '编辑')
                  ]);
                }
              }
            ]
          },
        ],
        tableData: [],
        editRow: {},
      }
    },
    methods:{
      initDate() {
        let now = new Date();
        return now;
      },
      getTableTitle() {
        let year = this.formItem.date.getFullYear();
        let month = this.formItem.date.getMonth() + 1;
        let title = year+'年'+month+'月安全管理月考核表';
        this.tableTitle = title;
      },
      cancle() {
        this.editModal = false;
      },
      saveAQData() {
        let params = {
          aqbzh: 0,
          aqlh: 0,
          aqxc: 0,
          claqsscj: 0,
          csxs: 0,
          cxh: 0,
          dw: "",
          jdsj: 0,
          jjjc: 0,
          jszxt: 0,
          khsj: "",
          sbfg: 0,
          wlrbmx: 0,
          xcsj: 0,
          xlanqjc: 0,
          xy: 0,
          zgaqjy: 0
        }

        for (let attr in params) {
          if (typeof this.editRow[attr] == 'undefined' || this.editRow[attr] == null || this.editRow[attr] == "") {
            params[attr] = 0;
          }else{
            params[attr] = this.editRow[attr];
          }
        }

        var that = this;
        if (typeof this.editRow['id'] === 'undefined' || this.editRow['id'] === null || this.editRow['id']=="") {
//          console.log('没有id, 新增保存');
          params.khsj = DateTool.yyyymm01FormatDate(this.formItem.date);
//          console.log(params);
          this.$post(this.$url.security_AQGLYKH_save, params)
          .then(res => {
            if (res.success === true) {
              this.$Message.success('保存成功!');
              that.editModal = false;
              that.requestListData();
            }else{
              that.$Message.error('保存失败!');
            }
          })
        }else{
          params.khsj = DateTool.yyyymm01FormatDate(this.formItem.date);
          params.gxsj = DateTool.yyyymm01FormatDate(this.formItem.date);
//          console.log('有id, 更新');
//          console.log(params);
          params.id = this.editRow.id;
          this.$post(this.$url.security_AQGLYKH_update, params)
          .then(res => {
            if (res.success === true) {
              that.$Message.success('更新成功!');
              that.editModal = false;
              that.requestListData();
            }else{
              that.$Message.error('更新失败!');
            }
          })
        }


      },
      searchData() {
        this.requestListData();
      },
      requestListData() {
        let year = this.formItem.date.getFullYear();
        let month = this.formItem.date.getMonth()+1;
        let params = {
          year: year,
          month: month
        }
        this.getTableTitle();
        let that = this;
        this.$fetch(this.$url.security_AQGLYKH_list, params)
        .then(res => {
          if (res.success === true) {
            res.data.forEach(item => {
              item.gxsj = DateTool.timesToDate(item.gxsj);
              item.khsj = DateTool.timesToDate(item.khsj);
            })
            that.tableData = res.data;
          }else{
            that.$Message.error('数据获取失败, 请重试!');
          }
        })
      },
      exportExcel() {
        let url = this.$url.security_AQGLYKH_exportExcel;
        if (this.formItem.date instanceof Date) {
          let year = this.formItem.date.getFullYear();
          let month = this.formItem.date.getMonth()+1;
          let params = {
            year: year,
            month: month
          }
          url = url + '?year=' + year + '&month=' + month;
        }
        this.$getExcel(url);
      }
    },
    mounted () {
      this.getTableTitle();
    }
  }
</script>


