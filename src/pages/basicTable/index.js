import React from "react";
import {Card, Pagination, Select, Table} from "antd";
import {getTableList1} from "../../api/table";

const columns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'id',
    align: 'center'
  },
  {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    align: 'center'
  },
  {
    key: 'sex',
    title: '性别',
    align: 'center',
    render: (text,record) => {
      let res = ''
      switch (record.sex) {
        case 1: res = '男'; break;
        case 2: res = '女'; break;
        default: res = '保密'
      }
      return (
        <span>{res}</span>
      )
    }
  },
  {
    key: 'state',
    title: '状态',
    align: 'center',
    render: (text, record) => {
      const stateMap = {
        1: '咸鱼一条',
        2: '风华浪子',
        3: '北大才子一枚',
        4: '百度FE',
        5: '创业者'
      }
      return (
        <span>{stateMap[record.state]}</span>
      )
    }
  },
  {
    key: 'interest',
    title: '爱好',
    align: 'center',
    render: (text,record) => {
      const interestMap = {
        0: '游泳',
        1: '打篮球',
        2: '踢足球',
        3: '跑步',
        4: '爬山',
        5: '骑行',
        6: '桌球',
        7: '麦霸'
      }
      return (
        <span>{interestMap[record.interest]}</span>
      )
    }
  },
  {
    key: 'birthday',
    dataIndex: 'birthday',
    title: '生日',
    align: 'center'
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: '地址',
    align: 'center'
  },
  {
    key: 'time',
    dataIndex: 'time',
    title: '早起时间',
    align: 'center'
  },
]
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows);
  },
  getCheckboxProps: records => ({
    disabled: records.name === 'disabled name',
    name: records.name
  })
}

class BasicTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData1: [
        {
          id: 0,
          username: '张朱磊',
          state: 2,
          interest: 6,
          birthday: '1997-06-02',
          address: '北京市海淀区西北旺镇',
          time: '09:00:00'
        }
      ],
      tableData2: [],
      dataTotal1: 0,
      currentPage1: 1,
      currentPageSize1: 10,
    }
  }

  componentDidMount() {
    this.getTableData()
  }

  getTableData() {
    const params = {
      page: this.state.currentPage1,
      pageSize: this.state.currentPageSize1
    }
    getTableList1(params).then(response => {
      this.setState({
        tableData2: response.list,
        dataTotal1: response.totalCount
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handlePageChange = (page, pageSize) => {
    this.setState({
      currentPage1: page
    })
    this.getTableData()
  }

  handlePageSizeChange = (current, size) => {
    this.setState({
      currentPageSize1: size
    })
    this.getTableData()
  }

  render() {
    return (
      <div>
        <Card title="基础表格">
          <Table bordered columns={columns} dataSource={this.state.tableData1} rowKey='id'/>
        </Card>
        <Card title="动态渲染数据表格" style={{marginTop: '30px'}}>
          <Table bordered columns={columns} pagination={false} rowKey='id' dataSource={this.state.tableData2} />
          <Pagination
            style={{marginTop: '10px'}}
            total={this.state.dataTotal1}
            showTotal={(total, range) => (<span>共 {total} 条数据</span>)}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            showQuickJumper
            showSizeChanger
            onChange={this.handlePageChange}
            onShowSizeChange={this.handlePageSizeChange}/>
        </Card>
      </div>
    )
  }

}

export default BasicTable;
