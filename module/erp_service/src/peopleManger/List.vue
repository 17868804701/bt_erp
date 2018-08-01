<style>
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
  <div style="padding: 20px; height: 100%">
    <h2>
      人员信息管理
    </h2>
    <Tabs style="margin-top: 10px;" @on-click="changeTab" v-model="tabValue">
      <Modal
        v-model="modal2"
        width="550"
        style="height: auto"
        :mask-closable="false"
        title="选择要显示的列字段">
        <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
          <Checkbox label="cym">曾用名</Checkbox>
          <Checkbox label="xb">性别</Checkbox>
          <Checkbox label="mz">民族</Checkbox>
          <Checkbox label="xmdx">姓名首字母</Checkbox>
          <Checkbox label="csny">出生年月</Checkbox>
          <Checkbox label="jg">籍贯</Checkbox>
          <Checkbox label="zzmm">政治面貌</Checkbox>
          <Checkbox label="gh">工号</Checkbox>
          <Checkbox label="rybh">人员编号</Checkbox>
          <Checkbox label="sfzh">身份证号</Checkbox>
          <Checkbox label="bxdh">保险档号</Checkbox>
          <Checkbox label="bm">部门</Checkbox>
          <Checkbox label="gjjzh">公积金账号</Checkbox>
          <Checkbox label="gjjdh">公积金档号</Checkbox>
          <Checkbox label="gjjzt">公积金状态</Checkbox>
          <Checkbox label="gjjjcbz">公积金缴存情况备注</Checkbox>
          <Checkbox label="gjjkhsj">公积金开户时间</Checkbox>
          <Checkbox label="ylbx">医疗保险</Checkbox>
          <Checkbox label="ylzh">养老证号</Checkbox>
          <Checkbox label="fby">服兵役</Checkbox>
          <Checkbox label="rdsj">入党时间</Checkbox>
          <Checkbox label="gzsj">工作时间</Checkbox>
          <Checkbox label="bdwgzsj">本单位工作时间</Checkbox>
          <Checkbox label="txsj">退休时间</Checkbox>
          <Checkbox label="txdz">通讯地址</Checkbox>
          <Checkbox label="lxdh">联系电话</Checkbox>
          <Checkbox label="dw">单位</Checkbox>
          <Checkbox label="bm">部门</Checkbox>
          <Checkbox label="zyjszc">专业技术职称</Checkbox>
          <Checkbox label="qdsj">取得时间</Checkbox>
          <Checkbox label="xl">学历</Checkbox>
          <Checkbox label="byyx">毕业院校</Checkbox>
          <Checkbox label="sxzy">所学专业</Checkbox>
          <Checkbox label="zc">职称</Checkbox>
          <Checkbox label="txlb">退休类别</Checkbox>
          <Checkbox label="gzzw">公种职务</Checkbox>
          <Checkbox label="gzzh">工作证号</Checkbox>
          <Checkbox label="zyzgjn">职业资格技能</Checkbox>
          <Checkbox label="jkzk">健康状况</Checkbox>
          <Checkbox label="gsbx">工伤保险</Checkbox>
          <Checkbox label="gwzt">岗位状态</Checkbox>
          <Checkbox label="rybgqk">人员变更情况</Checkbox>
          <Checkbox label="zgsf">职工身份</Checkbox>
          <Checkbox label="poqk">配偶情况</Checkbox>
          <Checkbox label="htkssj">合同开始时间</Checkbox>
          <Checkbox label="htjssj">合同结束时间</Checkbox>
          <Checkbox label="lrsj">录入时间</Checkbox>
          <Checkbox label="bz">备注</Checkbox>
          <Checkbox label="ld">路队</Checkbox>
          <Checkbox label="zzqk">在职情况</Checkbox>
          <Checkbox label="sscj">所属车间</Checkbox>
          <Checkbox label="wxbz">维修班组</Checkbox>
        </Checkbox-group>
      </Modal>
      <TabPane label="集团人员查询" name="name1">
        <Card style="width:100%">
          <p slot="title">员工列表查询</p>
          <div>
            <div>
              <Form :model="cxItem" :label-width="120">
                <div style="display: flex;flex-wrap: wrap">
                  <FormItem label="首字母查询" style="margin-left: -50px;">
                    <input v-model="cxItem.xmszm" type="text" @focus="modal1 = true" placeholder="按照姓名首字母查询"
                           class="select_name">
                  </FormItem>
                  <Modal
                    v-model="modal1"
                    width="300"
                    @on-ok="ok"
                    :mask-closable="false"
                    title="选择姓名首字母" style="text-align: center">
                    <Button type="primary" size="small" v-for="(item,index) in letterArray" :key="item+index"
                            id="letter"
                            @click="getLetter(item)">{{item}}
                    </Button>
                  </Modal>
                  <FormItem label="在职情况" style="margin-left: 10px;">
                    <Select v-model="cxItem.zzqk" style="width:180px">
                      <Option value="">全部</Option>
                      <Option value="在职">在职</Option>
                      <Option value="离职">离职</Option>
                    </Select>
                  </FormItem>
                </div>
                <div style="display: flex;flex-wrap: wrap">
                  <FormItem label="合同自起" style="margin-left: -50px;">
                    <DatePicker style="width: 180px;" v-model="cxItem.htkssj" type="date"
                                placeholder="请选择合同自起时间"></DatePicker>
                  </FormItem>
                  <FormItem label="合同终止" style="margin-left: 10px;">
                    <DatePicker style="width: 180px;" v-model="cxItem.htjssj" type="date"
                                placeholder="请选择合同终止时间"></DatePicker>
                  </FormItem>
                </div>
                <FormItem label="岗位状态" style="margin-left: -50px;">
                  <CheckboxGroup v-model="cxItem.gwzt">
                    <Checkbox v-for="(item, index) in postList" :key="item" :label="item"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                <FormItem label="按单位查询" style="margin-left: -50px;">
                  <CheckboxGroup v-model="cxItem.dw">
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
              <Button type="primary" size="default" @click="daochu" slot="extra" style="float: right;">
                <Icon type="android-download"></Icon>
                导出Excel
              </Button>
              <Button type="primary" size="default" slot="extra" style="float: right;margin-right: 10px;"
                      @click="exports=true">
                <Icon type="android-upload"></Icon>
                导入Excel
              </Button>
              <Button type="primary" size="default" slot="extra" style="float: right;margin-right: 10px;"
                      @click="addPerson">
                <Icon type="plus"></Icon>
                新建
              </Button>
              <!--报表导入-->
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
        <Table style="margin-top: 10px;" size="small" :data="tableData2" :columns="tableColumns2" border></Table>
        <Page :total="totalPage" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
      </TabPane>
      <TabPane label="人员岗位统计" name="name2">
        <UserStatistics/>
      </TabPane>
      <!--<Button type="primary" size="small" slot="extra"  @click="tj" style="margin-right: 10px;">人员分布</Button>-->

      <Button v-if="tabValue === 'name1'" type="primary" size="default" slot="extra" @click="modal2 = true">列表字段扩展</Button>
      <!--<Button type="primary" size="default" slot="extra">临时退出</Button>-->
    </Tabs>
  </div>
</template>
<script>
  import UserStatistics from './UserStatistics.vue'
  export default {
    components: {
      UserStatistics
    },
    data () {
      return {
//          查询区域
        exports: false,
        modal1: false,
        postList: ['全部', '公司领导', '二级', '三级', '主任科员', '一般管理', '辅助', '司机', '修理', '其他在岗', '内退', '病假', '产假', '女工长假', '下岗', '工伤', '待岗', '停薪', '外借', '其他不在岗',],
        getLetters: [],
        letterArray: ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '清除'],
        cxItem: {
          xmszm: '',
          zzqk: '',
          htkssj: '',
          htjssj: '',
          gwzt: [],
          dw: [],
          current: 1,
          size: 10
        },
//        主内容
        tableData2: [],
        totalPage: 0,
        tableColumns2: [],
        tableColumnsChecked: ['cym', 'xb', 'mz', 'xmdx', 'csny', 'jg', 'zzmm', 'gh', 'rybh', 'sfzh', 'bxdh', 'gjjzh', 'gjjdh', 'bm', 'zyjszc',
          'qdsj',
          'xl',
          'byyx',
          'gjjjcbz',
          'sxzy',
          'zc',
          'txlb',
          'gzzw',
          'gzzh',
          'zyzgjn',
          'jkzk',
          'gsbx',
          'gwzt',
          'rybgqk',
          'zgsf',
          'poqk',
          'htkssj',
          'gjjkhsj',
          'ylbx',
          'ylzh',
          'fby',
          'rdsj',
          'gzsj',
          'bdwgzsj',
          'txsj',
          'txdz',
          'lxdh',
          'gjjzt',
          'dw',
          'htjssj',
          'lrsj',
          'bz',
          'ld',
          'zzqk',
          'sscj',
          'cz',
          'wxbz'],
        modal2: false,
        tabValue: 'name1'
      }
    },
    methods: {
      changeTab() {
        console.log(this.tabValue);
      },
      getTable2Columns () {
        const table2ColumnList = {
          xm: {
            title: '姓名',
            key: 'xm',
            width: 100,
          },
          cym: {
            title: '曾用名',
            key: 'cym',
            width: 150,
            sortable: true
          },
          xb: {
            title: '性别',
            key: 'xb',
            width: 150,
            sortable: true
          },
          mz: {
            title: '民族',
            key: 'mz',
            width: 150,
            sortable: true
          },
          xmdx: {
            title: '姓名首字母',
            key: 'xmdx',
            width: 150,
            sortable: true
          },
          csny: {
            title: '出生年月',
            key: 'csny',
            width: 150,
            sortable: true
          },
          jg: {
            title: '籍贯',
            key: 'jg',
            width: 150,
            sortable: true
          },
          zzmm: {
            title: '政治面貌',
            key: 'zzmm',
            width: 150,
            sortable: true
          },
          gh: {
            title: '工号',
            key: 'gh',
            width: 150,
            sortable: true
          },
          rybh: {
            title: '人员编号',
            key: 'rybh',
            width: 150,
            sortable: true
          },
          sfzh: {
            title: '身份证号',
            key: 'sfzh',
            width: 150,
            sortable: true
          },
          bxdh: {
            title: '保险档号',
            key: 'bxdh',
            width: 150,
            sortable: true
          },
          gjjzh: {
            title: '公积金账号',
            key: 'gjjzh',
            width: 150,
            sortable: true
          },
          gjjdh: {
            title: '公积金档号',
            key: 'gjjdh',
            width: 150,
            sortable: true
          },
          gjjzt: {
            title: '公积金状态',
            key: 'gjjzt',
            width: 150,
            sortable: true
          },
          gjjjcbz: {
            title: '公积金缴存情况备注',
            key: 'gjjjcbz',
            width: 150,
            sortable: true
          },
          gjjkhsj: {
            title: '公积金开户时间',
            key: 'gjjkhsj',
            width: 150,
            sortable: true
          },
          ylbx: {
            title: '医疗保险',
            key: 'ylbx',
            width: 150,
            sortable: true
          },
          ylzh: {
            title: '养老证号',
            key: 'ylzh',
            width: 150,
            sortable: true
          },
          fby: {
            title: '服兵役',
            key: 'fby',
            width: 150,
            sortable: true
          },
          rdsj: {
            title: '入党时间',
            key: 'rdsj',
            width: 150,
            sortable: true
          },
          gzsj: {
            title: '工作时间',
            key: 'gzsj',
            width: 150,
            sortable: true
          },
          bdwgzsj: {
            title: '本单位工作时间',
            key: 'gzsj',
            width: 150,
            sortable: true
          },
          txsj: {
            title: '退休时间',
            key: 'txsj',
            width: 150,
            sortable: true
          },
          txdz: {
            title: '通讯地址',
            key: 'txsj',
            width: 150,
            sortable: true
          },
          lxdh: {
            title: '联系电话',
            key: 'lxdh',
            width: 150,
            sortable: true
          },
          dw: {
            title: '单位',
            key: 'dw',
            width: 150,
            sortable: true
          },
          bm: {
            title: '部门',
            key: 'bm',
            width: 150,
            sortable: true
          },
          zyjszc: {
            title: '专业技术职称',
            key: 'zyjszc',
            width: 150,
            sortable: true
          },
          qdsj: {
            title: '取得时间',
            key: 'qdsj',
            width: 150,
            sortable: true
          },
          xl: {
            title: '学历',
            key: 'xl',
            width: 150,
            sortable: true
          },
          byyx: {
            title: '毕业院校',
            key: 'byyx',
            width: 150,
            sortable: true
          },
          sxzy: {
            title: '所学专业',
            key: 'sxzy',
            width: 150,
            sortable: true
          },
          zc: {
            title: '职称',
            key: 'zc',
            width: 150,
            sortable: true
          },
          txlb: {
            title: '退休类别',
            key: 'txlb',
            width: 150,
            sortable: true
          },
          gzzw: {
            title: '工种职务',
            key: 'gzzw',
            width: 150,
            sortable: true
          },
          gzzh: {
            title: '工作证号',
            key: 'gzzh',
            width: 150,
            sortable: true
          },
          zyzgjn: {
            title: '职业资格技能',
            key: 'zyzgjn',
            width: 150,
            sortable: true
          },
          jkzk: {
            title: '健康状况',
            key: 'jkzk',
            width: 150,
            sortable: true
          },
          gsbx: {
            title: '工伤保险',
            key: 'gsbx',
            width: 150,
            sortable: true
          },
          gwzt: {
            title: '岗位状态',
            key: 'gwzt',
            width: 150,
            sortable: true
          },
          rybgqk: {
            title: '人员变更情况',
            key: 'rybgqk',
            width: 150,
            sortable: true
          },
          zgsf: {
            title: '职工身份',
            key: 'zgsf',
            width: 150,
            sortable: true
          },
          poqk: {
            title: '配偶情况',
            key: 'poqk',
            width: 150,
            sortable: true
          },
          htkssj: {
            title: '合同开始时间',
            key: 'htkssj',
            width: 150,
            sortable: true
          },
          htjssj: {
            title: '合同结束时间',
            key: 'htjssj',
            width: 150,
            sortable: true
          },
          lrsj: {
            title: '录入时间',
            key: 'lrsj',
            width: 150,
            sortable: true
          },
          bz: {
            title: '备注',
            key: 'bz',
            width: 150,
            sortable: true
          },
          ld: {
            title: '路队',
            key: 'ld',
            width: 150,
            sortable: true
          },
          zzqk: {
            title: '在职情况',
            key: 'zzqk',
            width: 150,
            sortable: true
          },
          sscj: {
            title: '所属车间',
            key: 'sscj',
            width: 150,
            sortable: true
          },
          wxbz: {
            title: '维修班组',
            key: 'wxbz',
            width: 150,
            sortable: true
          },
          cz: {
            title: '操作',
            key: 'month20',
            align: 'center',
            fixed: 'right',
            width: 150,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        path: '/ListInfo',
                        query: {row: params.row}
                      })
                    }
                  }
                }, '详情'),
//                h('Button', {
//                  props: {
//                    type: 'error',
//                    size: 'small'
//                  },
//                  style: {
//                    marginLeft: '5px'
//                  },
//                  on: {
//                    click: () => {
//                      alert("删除成功")
//                    }
//                  }
//                }, '删除')
              ]);
            }
          }
        };
        let data = [table2ColumnList.xm];
        this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));
        return data;
      },
      changeTableColumns () {
        this.tableColumns2 = this.getTable2Columns();
      },
      tj() {
        this.$router.push({
          path: '/UserStatistics'
        })
      },
      setPage: function (current) {
        this.cxItem.current = current;
        this.getList();
      },
//      获取列表
      getList: function () {
        this.$fetch(this.$url.userManager_userList, this.cxItem)
          .then(res => {
            this.totalPage = res.data.total;
            this.tableData2 = res.data.records;
//            this.$Message.info('查询成功')
          })
      },


//      查询区域
      addPerson: function () {
        this.$router.push({path: '/ListInfo', query: {tip: 'add'}});
      },
      getLetter: function (item) {
        if (item === '清除') {
          this.cxItem.xmszm = '';
          this.getLetters = []
        } else {
          this.getLetters.push(item);
          let letter = this.getLetters.toString().replace(/,/g, '');
          this.cxItem.xmszm = letter;
        }
      },
      ok() {

      },
      search() {
        console.log(this.cxItem);
        this.getList();
      },
//      导出报表
      daochu: function () {
//          console.log(process.env.BASE_URL+this.$url.userManager_exportExcel+'?xmszm='+this.cxItem.xmszm+'&&dw='+this.cxItem.dw+'&&gwzt='+this.cxItem.gwzt+'&&zzqk='+this.cxItem.zzqk+'&&htkssj='+this.cxItem.htkssj+'&&htjssj='+this.cxItem.htjssj)
          window.open(process.env.BASE_URL+this.$url.userManager_exportExcel+'?xmszm='+this.cxItem.xmszm+'&&dw='+this.cxItem.dw+'&&gwzt='+this.cxItem.gwzt+'&&zzqk='+this.cxItem.zzqk+'&&htkssj='+this.cxItem.htkssj+'&&htjssj='+this.cxItem.htjssj)
      }
    },
    mounted () {
//        window.top.location.href='http://10.50.0.144:8702/login';
      this.changeTableColumns();
      this.getList();
    }
  }
</script>
