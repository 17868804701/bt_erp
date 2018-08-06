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
              <DatePicker type="date" placeholder="选择时间" :transfer="true" placement="bottom-end" v-model="formItem.date"></DatePicker>
              <Button type="primary" icon="ios-search">搜索</Button>
              <Button type="primary" icon="android-download" style="float: right;margin-right: 10px">导出Excel</Button>
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
        let url = this.$url.maintain_BYGL_JYDGL_listDetail + '/' + row.id;
        this.$fetch(url)
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
            this.tableData = res.page.list;
            this.totalSize = res.page.totalCount;
            this.$Message.success('获取数据成功!');
          }else{
            this.$Message.error('请求失败!');
          }
        })
      }
    },
    mounted () {

    }
  }
</script>

