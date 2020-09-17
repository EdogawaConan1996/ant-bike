import React from "react";
import {Pagination, Table} from "antd";

class TableComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pageNo: 1,
      pageSize: 10,
    }
  }

  showTotal = (total, range) => {
    return `共 ${total} 条数据`
  }

  handlePageChange = (page,size) => {
    this.setState({
      pageNo: page
    })
    this.props.onSearch(page, size)
  }

  handlePageSizeChange = (current,size) => {
    this.setState({
      pageSize: size
    })
    this.props.onSearch(current, size)
  }

  componentDidMount() {
    const {pageNo, pageSize} = this.state
    this.props.onSearch(pageNo, pageSize)
  }

  render() {
    return (
      <div>
        <Table bordered rowKey='id' columns={this.props.columns} dataSource={this.props.tableData} loading={this.props.loading} pagination={false} scroll={{y: 300}}/>
        <Pagination
          style={{marginTop: '10px'}}
          current={this.state.pageNo}
          pageSize={this.state.pageSize}
          total={this.props.total}
          showTotal={this.showTotal}
          showSizeChanger
          showQuickJumper
          onChange={this.handlePageChange}
          onShowSizeChange={this.handlePageSizeChange}/>
      </div>
    )
  }
}

export default TableComponent
