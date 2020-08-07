import React from "react";
import './index.less';
import {
  Card,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  Checkbox, Button
} from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      loading: false
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 18}
    }
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const offsetLayout = {
      wrapperCol:{
        span: 18,
        offset: 6
      }
    }
    return (
      <div>
        <Row className='row'>
          <Card title='注册表单'>
            <Form {...formItemLayout} style={{width: '700px'}}>
              <Form.Item label='用户名'>
                {
                  getFieldDecorator('username',{})(
                    <Input placeholder='请输入用户名' />
                  )
                }
              </Form.Item>
              <Form.Item label='密码'>
                {
                  getFieldDecorator('password',{})(
                    <Input type='password' placeholder='请输入密码' />
                  )
                }
              </Form.Item>
              <Form.Item label='性别'>
                {
                  getFieldDecorator('sex',{
                    initialValue: 2
                  })(
                    <Radio.Group>
                      <Radio value={0}>男</Radio>
                      <Radio value={1}>女</Radio>
                      <Radio value={2}>保密</Radio>
                    </Radio.Group>
                  )
                }
              </Form.Item>
              <Form.Item label='年龄'>
                {
                  getFieldDecorator('age',{})(
                    <InputNumber min={0} step={1} />
                  )
                }
              </Form.Item>
              <Form.Item label='当前状态'>
                {
                  getFieldDecorator('status',{})(
                    <Select>
                      <Select.Option value={0}>咸鱼一条</Select.Option>
                      <Select.Option value={1}>风华浪子</Select.Option>
                      <Select.Option value={2}>北大才子一枚</Select.Option>
                      <Select.Option value={3}>百度FE</Select.Option>
                      <Select.Option value={4}>创业者</Select.Option>
                    </Select>
                  )
                }
              </Form.Item>
              <Form.Item label='爱好'>
                {
                  getFieldDecorator('hobby',{})(
                    <Select mode='multiple'>
                      <Select.Option value={0}>游泳</Select.Option>
                      <Select.Option value={1}>打篮球</Select.Option>
                      <Select.Option value={2}>踢足球</Select.Option>
                      <Select.Option value={3}>跑步</Select.Option>
                      <Select.Option value={4}>爬山</Select.Option>
                      <Select.Option value={5}>骑行</Select.Option>
                      <Select.Option value={6}>桌球</Select.Option>
                      <Select.Option value={7}>麦霸</Select.Option>
                    </Select>
                  )
                }
              </Form.Item>
              <Form.Item label='是否已婚'>
                {
                  getFieldDecorator('isMarried',{
                    initialValue: true
                  })(
                    <Switch defaultChecked />
                  )
                }
              </Form.Item>
              <Form.Item label='生日'>
                {
                  getFieldDecorator('birthDay',{})(
                    <DatePicker />
                  )
                }
              </Form.Item>
              <Form.Item label='地址'>
                {
                  getFieldDecorator('address',{})(
                    <Input.TextArea autoSize={{maxRows: 5, minRows: 5}}/>
                  )
                }
              </Form.Item>
              <Form.Item label='早起时间'>
                {
                  getFieldDecorator('getUpTime',{})(
                    <TimePicker />
                  )
                }
              </Form.Item>
              <Form.Item label='用户头像'>
                {
                  getFieldDecorator('avatar',{})(
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={this.handleChange}
                    >
                      {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                  )
                }
              </Form.Item>
              <Form.Item {...offsetLayout}>
                {
                  getFieldDecorator('isRead', {})(
                    <Checkbox>
                      我已阅读过
                      <a href='#'>慕课协议</a>
                    </Checkbox>
                  )
                }
              </Form.Item>
              <Form.Item {...offsetLayout}>
                <Button type='primary' onClick={this.handleSubmit}>提交</Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </div>
    )
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((error, values) => {
      if (error) return;
      console.log(values);
    });
  }
}

const RegFormPage = Form.create({name: 'regForm'})(RegisterForm);

export default RegFormPage;
