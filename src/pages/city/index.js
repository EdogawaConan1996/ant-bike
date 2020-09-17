import React from "react";
import FilterFormComponent from "./components/filter-form";
import {Button, Card, Pagination, Table} from "antd";
import './index.less';
import {getOpenCityList} from "../../api/city";
import moment from "moment";
import OpenCityModal from "./modals/openCity";

const tableColumns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: '城市id',
    width: 80,
    align: 'center'
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: '城市名称',
    width: 100,
    align: 'center'
  },
  {
    key: 'model',
    title: '用车模式',
    width: 100,
    align: 'center',
    render: (text, record) => {
      const modelMap = {
        1: '指定停车点模式',
        2: '禁停点模式'
      }
      return (
        <span>{modelMap[record.model]}</span>
      )
    }
  },
  {
    key: 'op_model',
    title: '营运模式',
    width: 100,
    align: 'center',
    render: (text, record) => {
      const opModelMap = {
        1: '自营',
        2: '加盟'
      }
      return (
        <span>{opModelMap[record.op_model]}</span>
      )
    }
  },
  {
    key: 'franchisee_name',
    dataIndex: 'franchisee_name',
    title: '加盟商名称',
    width: 150,
    align: 'center'
  },
  {
    key: 'city_admins',
    title: '管理员名称',
    width: 100,
    align: 'center',
    render: (text, record) => {
      const admins = record.city_admin.map(item => item.user_name).join(',')
      return (
        <span>{admins}</span>
      )
    }
  },
  {
    key: 'open_time',
    dataIndex: 'open_time',
    title: '城市开通时间',
    width: 100,
    align: 'center'
  },
  {
    key: 'update_time',
    title: '更新时间',
    width: 100,
    align: 'center',
    render: (text, record) => {
      return (
        <span>{moment(new Date(record.update_time)).format('yyyy-MM-DD HH:mm:ss')}</span>
      )
    }
  },
  {
    key: 'sys_user_name',
    dataIndex: 'sys_user_name',
    title: '操作人',
    width: 100,
    align: 'center'
  }
]


class CityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      loading: false,
      dataTotal: 0,
      pageNo: 1,
      pageSize: 10,
      openCityModal: false
    }
  }

  getTableData = () => {
    this.setState({
      loading: true
    })
    getOpenCityList().then(response => {
      this.setState({
        tableData: response.list,
        dataTotal: response.totalCount
      })
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      this.setState({
        loading: false
      })
    })
  }

  showTotal = (total, range) => {
    return `共 ${total}条数据`
  }

  handlePageChange = (page,size) => {
    this.setState({
      pageNo: page
    })
    this.getTableData()
  }

  handlePageSizeChange = (page,size) => {
    this.setState({
      pageSize: size
    })
    this.getTableData()
  }

  handleOpenCityModal = () => {
    this.setState({openCityModal: true})
  }

  handleCloseCityModal = () => {
    this.setState({openCityModal: false})
  }

  componentDidMount() {
    this.getTableData()
  }

  render() {
    return (
      <div>
        <FilterFormComponent />
        <Card className={'operation-wrapper'}>
          <Button type='primary' onClick={this.handleOpenCityModal}>开通城市</Button>
        </Card>
        <Table bordered rowKey='id' columns={tableColumns} dataSource={this.state.tableData} loading={this.state.loading} pagination={false}/>
        <Pagination
          style={{marginTop: '10px'}}
          current={this.state.pageNo}
          pageSize={this.state.pageSize}
          total={this.state.dataTotal}
          showTotal={this.showTotal}
          showQuickJumper
          showSizeChanger
          onChange={this.handlePageChange}
          onShowSizeChange={this.handlePageSizeChange} />
          <OpenCityModal show={this.state.openCityModal} close={this.handleCloseCityModal}/>
      </div>
    )
  }
}

export default CityPage;
