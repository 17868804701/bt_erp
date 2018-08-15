<!--检验单管理-->

<template>
  <div>
    <Modal
      v-model="showDetailModal"
      title="查看验收项目"
      width="50%"
      @on-ok="showDetailModal = false"
      @on-cancel="showDetailModal = false">
      <div style="display: flex;flex-wrap: wrap;justify-content: flex-start;">
        <div v-for="(item, itemIndex) in showDetailItem" :key="item+itemIndex">
          <Tooltip v-for="(subItem, subItemIndex) in item.subItems" :key="subItem+subItemIndex">
            <div slot="content">{{item.title}}</div>
            <Tag style="margin-bottom: 10px;margin-right: 20px;" type="dot" color="green">{{subItem}}</Tag>
          </Tooltip>
        </div>
      </div>
    </Modal>
    <div style="padding: 20px 10px 0 10px; height: 100%;width: 100%;border-bottom: 0px solid #f5f5f5">
      <Card>
        <Form :model="formItem">
          <Row>
            <Col span="24">
            <FormItem label="按验收时间进行查询" style="margin: 0;">
              <DatePicker type="month" placeholder="选择月份" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search" @click="this.requestListData">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px" @click="exportExcel">导出Excel</Button>
            </FormItem>
            </Col>
          </Row>
        </Form>
      </Card>
      <Table style="margin-top: 10px;" :data="tableData" :columns="columns" border></Table>
      <Page :total="totalSize" show-total style="margin-top: 10px;" @on-change="setPage"></Page>
    </div>
  </div>
</template>
<script>
  import * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
    },
    data () {
      return {
        showDetailModal: false,
        formItem: {
          date: '',
          currPage: 1,
          pageSize: 10
        },
        tableData: [],
        totalSize: 0,
        showDetailItem: [],
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '车号',
            key: 'cph',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
          },
          {
            title: '报修人',
            key: 'sxr',
            align: 'center',
          },
          {
            title: '检验员',
            key: 'jyy',
            align: 'center',
          },
          {
            title: '验收时间',
            key: 'scsj',
            align: 'center',
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.showDetail(params.row);
                    }
                  }
                }, '查看验收项目')
              ]);
            }
          },
        ],
      }
    },
    computed: {

    },
    methods: {
      showDetail(row) {
        // 需要修改接口
        console.log(row);
//        let params = {id : row.id};
//        this.$fetch(this.$url.maintain_BYGL_YSDGL_listDetail, params)
//        .then(res => {
//          console.log(res);
//        })
      },
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        this.$fetch(this.$url.maintain_BYGL_YSDGL_recordList, this.formItem)
        .then(res=>{
          console.log(res);
          if (res.code === 0) {
            res.page.list.forEach(item => {
              item.scsj = DateTool.timesToDate(item.scsj);
              console.log(item.scsj);
            })
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      },
      exportExcel() {
        let url = this.$url.maintain_BYGL_YSDGL_exportExcel;
        url = url + '?currPage='+this.formItem.current+'&&pageSize='+this.formItem.size;
        if (this.formItem.date instanceof Date) {
          url = url + '&date=' + this.formItem.date;
        }
        this.$getExcel(url);
      },
    },
    mounted () {

    }
  }
</script>

<!--
ysxm: [
              {
                title: '项目1',
                subItems: ['子项目11', '子项目12', '子项目13', '子项目14', '子项目15']
              },
              {
                title: '项目2',
                subItems: ['子项目21', '子项目22', '子项目23', '子项目24', '子项目25']
              }
            ],
-->

