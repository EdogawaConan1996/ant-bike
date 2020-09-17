import React from "react";
import {Button, Card, Form, Input, Select} from "antd";
import {getCityList} from "../../../api/city";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: []
    }
  }

  handleSubmit = () => {

  }

  handleGetCityList = () => {
    getCityList().then(response => {
      this.setState({
        cityList: response
      })
    }).catch(error => {

    })
  }

  componentDidMount() {
    this.handleGetCityList()
  }

  renderCityList = () => {
    return this.state.cityList.map(item => (
      <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
    ))
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Card>
        <Form layout='inline' onSubmit={this.handleSubmit}>
          <Form.Item label='城市'>
            {
              getFieldDecorator('city', {})(
                <Select style={{width: '160px'}} placeholder={'全部'}>{this.renderCityList()}</Select>
              )
            }
          </Form.Item>
          <Form.Item label='用车模式'>
            {
              getFieldDecorator('city', {})(
                <Select style={{width: '160px'}} placeholder={'全部'}>
                  <Select.Option value={1}>指定停车点模式</Select.Option>
                  <Select.Option value={2}>禁停点模式</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item label='营运模式'>
            {
              getFieldDecorator('city', {})(
                <Select style={{width: '160px'}} placeholder={'全部'}>
                  <Select.Option value={1}>自营</Select.Option>
                  <Select.Option value={2}>加盟</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item label='加盟商授权状态'>
            {
              getFieldDecorator('city', {})(
                <Select style={{width: '160px'}} placeholder={'全部'}>
                  <Select.Option value={1}>已授权</Select.Option>
                  <Select.Option value={2}>未授权</Select.Option>
                </Select>
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type='primary'>搜索</Button>
            <Button style={{marginLeft: '10px'}}>重置</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

const FilterFormComponent = Form.create({name: 'filterForm'})(FilterForm)

export default FilterFormComponent
