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
const rowRadioSelection= {
  type: 'radio',
  columnTitle: '选择',
  columnWidth: '80px',
  onSelect: (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys, selectedRows)
  }
}
const rowSelection = {
  type: 'checkbox',
  columnTitle: '选择',
  columnWidth: '80px',
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
      tableData3: [],
      dataTotal2: 0,
      currentPage2: 1,
      currentPageSize2: 10,
      tableData4: [],
      dataTotal3: 0,
      currentPage3: 1,
      currentPageSize3: 10,
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
        dataTotal1: response.totalCount,
        tableData3: response.list,
        dataTotal2: response.totalCount,
        tableData4: response.list,
        dataTotal3: response.totalCount
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handlePageChange1 = (page, pageSize) => {
    this.setState({
      currentPage1: page
    })
    this.getTableData()
  }

  handlePageSizeChange1 = (current, size) => {
    this.setState({
      currentPageSize1: size
    })
    this.getTableData()
  }

  handlePageChange2 = (page, pageSize) => {
    this.setState({
      currentPage2: page
    })
    this.getTableData()
  }

  handlePageSizeChange2 = (current, size) => {
    this.setState({
      currentPageSize2: size
    })
    this.getTableData()
  }

  handlePageChange3 = (page, pageSize) => {
    this.setState({
      currentPage3: page
    })
    this.getTableData()
  }

  handlePageSizeChange3 = (current, size) => {
    this.setState({
      currentPageSize3: size
    })
    this.getTableData()
  }

  render() {
    return (
      <div>
        <Card title="基础表格">
          <Table bordered columns={columns} dataSource={this.state.tableData1} rowKey='id'/>
        </Card>
        <Card title="Mock表格" style={{marginTop: '30px'}}>
          <Table bordered columns={columns} pagination={false} rowKey='id' dataSource={this.state.tableData2} />
          <Pagination
            style={{marginTop: '10px'}}
            total={this.state.dataTotal1}
            showTotal={(total, range) => (<span>共 {total} 条数据</span>)}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            showQuickJumper
            showSizeChanger
            onChange={this.handlePageChange1}
            onShowSizeChange={this.handlePageSizeChange1}/>
        </Card>
        <Card title="Mock表格-单选" style={{marginTop: '30px'}}>
          <Table bordered columns={columns} pagination={false} rowSelection={rowRadioSelection} rowKey='id' dataSource={this.state.tableData3} />
          <Pagination
            style={{marginTop: '10px'}}
            total={this.state.dataTotal2}
            showTotal={(total, range) => (<span>共 {total} 条数据</span>)}
            current={this.state.currentPage2}
            pageSize={this.state.currentPageSize2}
            showQuickJumper
            showSizeChanger
            onChange={this.handlePageChange2}
            onShowSizeChange={this.handlePageSizeChange2}/>
        </Card>
        <Card title="Mock表格-多选" style={{marginTop: '30px'}}>
          <Table bordered columns={columns} pagination={false} rowSelection={rowSelection} rowKey='id' dataSource={this.state.tableData4} />
          <Pagination
            style={{marginTop: '10px'}}
            total={this.state.dataTotal3}
            showTotal={(total, range) => (<span>共 {total} 条数据</span>)}
            current={this.state.currentPage3}
            pageSize={this.state.currentPageSize3}
            showQuickJumper
            showSizeChanger
            onChange={this.handlePageChange3}
            onShowSizeChange={this.handlePageSizeChange3}/>
        </Card>
      </div>
    )
  }

}

export default BasicTable;
