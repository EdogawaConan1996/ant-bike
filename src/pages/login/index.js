import React from "react";
import {Card, Form, Input, Row, Button, Icon, Checkbox} from "antd";
import "./index.less";

class LoginFormWrapper extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row className='row'>
          <Card title='登录行内表单'>
            <Form layout='inline'>
              <Form.Item>
                {
                  getFieldDecorator('inlineUsername',{
                    validateTrigger: 'onBlur',
                    rules: [
                      {required: true, message: '用户名必填'},
                      {min: 6, message: '长度不能小于6个字符'},
                      {max: 20, message: '长度不能大于20个字符'}
                    ]
                  })(
                    <Input placeholder='请输入用户名' />
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('inlinePassword',{
                    validateTrigger: 'onBlur',
                    rules: [
                      {required: true, message: '密码必填'},
                      {min: 6, message: '长度不能小于6个字符'}
                    ]
                  })(
                    <Input type='password' placeholder='请输入密码' />
                  )
                }
              </Form.Item>
              <Form.Item>
                <Button type='primary' onClick={this.handleSubmit}>登录</Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
        <Row className='row'>
          <Card title='登录水平表单'>
            <Form>
              <Form.Item style={{width: '260px'}}>
                {
                  getFieldDecorator('userName',{
                    validateTrigger: 'onBlur',
                    rules: [
                      {required: true, message: '用户名必填'},
                      {min: 6, message: '长度不能小于6个字符'},
                      {max: 20, message: '长度不能大于20个字符'}
                    ]})(
                    <Input prefix={<Icon type={'user'} />} placeholder='请输入用户名' />
                  )
                }
              </Form.Item>
              <Form.Item style={{width: '260px'}}>
                {
                  getFieldDecorator('password',{
                    validateTrigger: 'onBlur',
                    rules: [
                      {required: true, message: '密码必填'},
                      {min: 6, message: '长度不能小于6个字符'}
                    ]})(
                    <Input type="password" prefix={<Icon type={'lock'} />} placeholder='请输入密码' />
                  )
                }
              </Form.Item>
              <Form.Item style={{width: '260px'}}>
                <Checkbox>Remember Me</Checkbox>
                <Button type='link' style={{float: 'right'}}>忘记密码？</Button>
              </Form.Item>
              <Form.Item>
                <Button type='primary' onClick={this.handleSubmit}>登录</Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, values) => {
      if (error) return;
      console.log(values);
    });
  }
}

const LoginFormPage = Form.create({name: 'InlineLogin-form'})(LoginFormWrapper);

export default LoginFormPage;
