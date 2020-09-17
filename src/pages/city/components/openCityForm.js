import React from "react";
import {Form, Select} from "antd";

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 4}
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
}

class OpenCityForm extends React.Component {
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <Form {...formItemLayout}>
        <Form.Item label='选择城市'>
          {
            getFieldDecorator('city', {
              rules: [
                {required: true, message: '城市必填'}
              ]
            })(
              <Select style={{width: '160px'}} placeholder='全部' allowClear>
                <Select.Option value={0}>北京市</Select.Option>
                <Select.Option value={1}>天津市</Select.Option>
              </Select>
            )
          }
        </Form.Item>
        <Form.Item label='用车模式'>
          {
            getFieldDecorator('model', {})(
              <Select style={{width: '160px'}} placeholder='全部' allowClear>
                <Select.Option value={1}>指定停车点模式</Select.Option>
                <Select.Option value={2}>禁停点模式</Select.Option>
              </Select>
            )
          }
        </Form.Item>
        <Form.Item label='选择城市'>
          {
            getFieldDecorator('open_model', {})(
              <Select style={{width: '160px'}} placeholder='全部' allowClear>
                <Select.Option value={1}>自营</Select.Option>
                <Select.Option value={2}>加盟</Select.Option>
              </Select>
            )
          }
        </Form.Item>
      </Form>
    )
  }
}

const OpenCityFormComponent = Form.create({name: 'openCity'})(OpenCityForm)

export default OpenCityFormComponent;
