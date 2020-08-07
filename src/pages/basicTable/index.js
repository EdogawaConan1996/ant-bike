import React from "react";
import {Card, Table} from "antd";

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
    key: 'status',
    dataIndex: 'status',
    title: '状态',
    align: 'center'
  },
  {
    key: 'hobby',
    dataIndex: 'hobby',
    title: '爱好',
    align: 'center'
  },
  {
    key: 'birthDay',
    dataIndex: 'birthDay',
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
    key: 'getUpTime',
    dataIndex: 'getUpTime',
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
      tableData1: [],
      tableData2: []
    }
  }

  render() {
    return (
      <div>
        <Card title="基础表格">
          <Table bordered columns={columns} dataSource={this.state.tableData1}/>
        </Card>
        <Card title="带选择框" style={{marginTop: '30px'}}>
          <Table bordered rowSelection={rowSelection} columns={columns} dataSource={this.state.tableData2}/>
        </Card>
      </div>
    )
  }
}

export default BasicTable;
