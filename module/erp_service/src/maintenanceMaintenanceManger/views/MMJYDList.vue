<!--检验单管理-->

<template>
  <div>
    <Modal
      v-model="showDetailModal"
      title="查看检验项目"
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
            <FormItem label="按检验时间进行查询" style="margin: 0;">
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
  import  * as DateTool from '../../../utils/DateTool'
  export default {
    components: {
    },
    data () {
      return {
        showDetailModal: false,
        formItem: {
          date: '',
          currPage: 1,
          pageSize: 10,
        },
        showDetailItem: [],
        totalSize: 0,
        tableData: [],
        columns: [
          {
            type: 'index',
            align: 'center',
            width: 60,
          },
          {
            title: '车牌号',
            key: 'cph',
            align: 'center',
          },
          {
            title: '车型',
            key: 'cx',
            align: 'center',
          },
          {
            title: '送修人',
            key: 'sxr',
            align: 'center',
          },
          {
            title: '检验员',
            key: 'jyy',
            align: 'center',
          },
          {
            title: '检验时间',
            key: 'jjcsj',
            align: 'center',
          },
          {
            title: '保养类别',
            key: 'bylb',
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
                }, '查看')
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
        let params = {id : row.byid};
        this.$fetch(this.$url.maintain_BYGL_JYDGL_listDetail, params)
        .then(res => {
          console.log(res);
        })
      },
      setPage(page) {
        this.formItem.currPage = page;
        this.requestListData();
      },
      requestListData() {
        this.$fetch(this.$url.maintain_BYGL_JYDGL_recordList, this.formItem)
        .then(res=>{
          console.log(res);
          if (res.code === 0) {
            res.page.list.forEach(item => {
              item.jjcsj = DateTool.timesToDate(item.jjcsj);
              item.scsj = DateTool.timesToDate(item.scsj);
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
        let url = this.$url.maintain_BYGL_JYDGL_exportExcel;
        url = url + '?currPage='+this.formItem.currPage+'&pageSize='+this.formItem.pageSize;
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

