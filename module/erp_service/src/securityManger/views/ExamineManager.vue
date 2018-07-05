<!--安全管理月考核表管理-->
<template>
  <div>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col span="24">
          <FormItem label="按年份查询" style="margin: 0;">
            <DatePicker type="year" placeholder="选择年份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
            <Button type="primary" icon="ios-search">搜索</Button>
            <Button type="primary" icon="android-download" style="position: absolute;right: 0">导出excel</Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
    <can-edit-table style="margin-top: 10px;" v-model="data10" :columnsList="columns11" :editIncell="true" :hoverShow="true" @on-cell-change="handleCellChange" @on-change="handleChange">
    </can-edit-table>
  </div>
</template>

<script>
  import canEditTable from '../../components/common/canEditTable.vue'
  export default {
    components:{
      canEditTable
    },
    data () {
      return {
        formItem: {
          select: '',
          date: ''
        },
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
                    key: 'sgjb_yb',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '一级轻微',
                    key: 'sgjb_yj',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '二级轻微',
                    key: 'sgjb_ej',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '三级轻微',
                    key: 'sgjb_sj',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '扣分',
                    key: 'sgjb_kf',
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
                    key: 'sgss_jshzj',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '经损率(元/万公里)',
                    key: 'sgss_jsl',
                    align: 'center',
                    width: 120,
                  },
                  {
                    title: '扣分',
                    key: 'sgss_kf',
                    align: 'center',
                    width: 90,
                  },
                ]
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
                    key: 'aqjy_zgaqjy',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '安全宣传',
                    key: 'aqjy_aqxc',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '安全例会',
                    key: 'aqjy_aqlh',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '线路安全稽查',
                    key: 'aqjy_xlaqjc',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '酒精检测',
                    key: 'aqjy_jjjc',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '四不放过',
                    key: 'aqjy_sbfg',
                    align: 'center',
                    width: 80,
                  },
                  {
                    title: '安全标准化',
                    key: 'aqjy_aqbzh',
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
                    key: 'jsyaq_xy',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '接打手机',
                    key: 'jsyaq_jdsj',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '闯信号',
                    key: 'jsyaq_cxh',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '未礼让斑马线',
                    key: 'jsyaq_wlrbmx',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '超速行驶',
                    key: 'jsyaq_csxs',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '驾驶中闲谈',
                    key: 'jsyaq_jszxt',
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
                    key: 'claqgl_xcsj',
                    align: 'center',
                    width: 90,
                  },
                  {
                    title: '车辆安全设施抽检',
                    key: 'claqgl_sscj',
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
            fixed: 'right',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 90,
            fixed: 'right',
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
                      console.log('编辑运营安全体系执行规范');
                    }
                  }
                }, '编辑')
              ]);
            }
          }
        ],
        data10: [],
      }
    },
    methods:{
      handleCellChange (val, index, key) {
        this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
      },
      handleChange (val, index) {
        this.$Message.success('修改了第' + (index + 1) + '行数据');
      }

    },
    mounted () {
      const data = [];
      for (let i = 0; i < 14; i++) {
        data.push({
          key: i,
          dw: '一公司',
          yylc: '1622141.4',
          sgjb_yb: '',
          sgjb_yj: '',
          sgjb_ej: '',
          sgjb_sj: '1',
          sgjb_kf: '0.1',
          sgss_jshzj: '72910',
          sgss_jsl: '449',
          sgss_kf: '0.0',

          aqjy_zgaqjy: '',
          aqjy_aqxc: '',
          aqjy_aqlh: '',
          aqjy_xlaqjc: '',
          aqjy_jjjc: '',
          aqjy_sbfg: '',
          aqjy_aqbzh: '',

          jsyaq_xy: '',
          jsyaq_jdsj: '',
          jsyaq_cxh: "",
          jsyaq_wlrbmx: '',
          jsyaq_csxs: '',
          jsyaq_jszxt: '',

          claqgl_xcsj: '',
          claqgl_sscj: '',

          zjkf: '0.1',

        });
        this.data10 = data;
      }
    }
  }
</script>

