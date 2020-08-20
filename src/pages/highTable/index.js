import React from "react";
import {Card, Table, Button, Popconfirm, Pagination} from "antd";
import {getTableHigh} from "../../api/table";

const columns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'id',
    width: 80,
    align: 'center'
  },
  {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    width: 150,
    align: 'center'
  },
  {
    key: 'sex',
    title: '性别',
    width: 100,
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
    width: 100,
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
    width: 100,
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
    width: 200,
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
    width: 200,
    align: 'center'
  },
]

const columns1 = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'id',
    width: 80,
    align: 'center',
    fixed: 'left'
  },
  {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    width: 200,
    align: 'center',
    fixed: 'left'
  },
  {
    key: 'sex',
    title: '性别',
    width: 100,
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
    width: 100,
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
    width: 100,
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
    width: 200,
    align: 'center'
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: '地址',
    width: 300,
    align: 'center',
    fixed: 'right'
  },
  {
    key: 'time',
    dataIndex: 'time',
    title: '早起时间',
    width: 200,
    align: 'center',
    fixed: 'right'
  }
]

const columns2 = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'id',
    width: 80,
    align: 'center'
  },
  {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    width: 150,
    align: 'center'
  },
  {
    key: 'sex',
    title: '性别',
    width: 100,
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
    key: 'age',
    title: '年龄',
    dataIndex: 'age',
    width: 100,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    align: 'center'
  },
  {
    key: 'state',
    title: '状态',
    width: 100,
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
    width: 100,
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
    width: 200,
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
    width: 200,
    align: 'center'
  },
]

const columns3 = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'id',
    width: 80,
    align: 'center',
    fixed: 'left'
  },
  {
    key: 'username',
    dataIndex: 'username',
    title: '用户名',
    width: 150,
    align: 'center',
    fixed: 'left'
  },
  {
    key: 'sex',
    title: '性别',
    width: 100,
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
    width: 100,
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
    width: 100,
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
    width: 200,
    align: 'center'
  },
  {
    key: 'address',
    dataIndex: 'address',
    title: '地址',
    width: 200,
    align: 'center'
  },
  {
    key: 'time',
    dataIndex: 'time',
    title: '早起时间',
    width: 200,
    align: 'center'
  },
  {
    key: 'operation',
    title: '操作',
    width: 200,
    align: 'center',
    fixed: 'right',
    render: (text, record) => {
      return (
        <Popconfirm title='确定要删除吗?' okText='确定' cancelText='取消'>
          <Button size='small'>删除</Button>
        </Popconfirm>
      )
    }
  }
]

class HighTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData1: [],
      dataTotal1: 0,
      currentPage1: 1,
      currentPageSize1: 10
    }
  }

  componentDidMount() {
    this.getTableData()
  }

  showTotal = (total, range) => {
    return `共 ${total} 条数据`
  }

  getTableData = () => {
    const params = {
      pageNo: this.state.currentPage1,
      pageSize: this.state.currentPageSize1
    }
    getTableHigh(params).then(response => {
      this.setState({
        tableData1: response.list,
        dataTotal1: response.totalCount
      })
    }).catch(error => {
      console.log(error)
    })
  }

  handlePageChange = (page,pageSize) => {
    this.setState({
      currentPage1: page
    })
    this.getTableData()
  }

  handlePageSizeChange = (current,size) => {
    this.setState({
      currentPageSize1: size
    })
    this.getTableData()
  }

  render() {
    return (
      <div>
        <Card title='头部固定'>
          <Table bordered columns={columns} rowKey='id' dataSource={this.state.tableData1} pagination={false} scroll={{y: 300}}/>
          <Pagination
            style={{marginTop: '10px'}}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            total={this.state.dataTotal1}
            showTotal={this.showTotal}
            showSizeChanger
            showQuickJumper
            onChange={this.handlePageChange}
            onShowSizeChange={this.handlePageSizeChange}/>
        </Card>
        <Card title='左侧固定' style={{marginTop: '30px'}}>
          <Table bordered columns={columns1} rowKey='id' dataSource={this.state.tableData1} pagination={false} scroll={{x: 800,y: 300}}/>
          <Pagination
            style={{marginTop: '10px'}}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            total={this.state.dataTotal1}
            showTotal={this.showTotal}
            showSizeChanger
            showQuickJumper
            onChange={this.handlePageChange}
            onShowSizeChange={this.handlePageSizeChange}/>
        </Card>
        <Card title='表格排序' style={{marginTop: '30px'}}>
          <Table bordered columns={columns2} rowKey='id' dataSource={this.state.tableData1} pagination={false}/>
          <Pagination
            style={{marginTop: '10px'}}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            total={this.state.dataTotal1}
            showTotal={this.showTotal}
            showSizeChanger
            showQuickJumper
            onChange={this.handlePageChange}
            onShowSizeChange={this.handlePageSizeChange}/>
        </Card>
        <Card title='操作按钮' style={{marginTop: '30px'}}>
          <Table bordered columns={columns3} rowKey='id' dataSource={this.state.tableData1} pagination={false} scroll={{x: 800,y: 300}}/>
          <Pagination
            style={{marginTop: '10px'}}
            current={this.state.currentPage1}
            pageSize={this.state.currentPageSize1}
            total={this.state.dataTotal1}
            showTotal={this.showTotal}
            showSizeChanger
            showQuickJumper
            onChange={this.handlePageChange}
            onShowSizeChange={this.handlePageSizeChange}/>
        </Card>
      </div>
    )
  }
}

export default HighTable;
