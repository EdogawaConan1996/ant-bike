import React from "react";
import './index.less';
import {Button, Card, Modal, Row} from "antd";

class UiModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseModal: false,
      asyncModal: false,
      confirmLoading: false,
      footConfigModal: false
    }
  }
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title="基本使用">
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowBaseModal}>基本使用</Button>
            <Modal title='基本使用' visible={this.state.baseModal} onOk={this.handleConfirm} onCancel={this.handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowAsyncModal}>异步关闭</Button>
            <Modal title='异步关闭' visible={this.state.asyncModal} confirmLoading={this.state.confirmLoading} onOk={this.handleConfirmAsync} onCancel={this.handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="自定义页脚">
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowFootConfig}>自定义页脚</Button>
            <Modal title='底部自定义配置' visible={this.state.footConfigModal} footer={this.handleRenderFooter()} onCancel={this.handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="确认对话框">
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowConfirmModal}>Confirm Modal</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleMessageModal('info')}}>Info Modal</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleMessageModal('success')}}>Success Modal</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleMessageModal('error')}}>Error Modal</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleMessageModal('warning')}}>Warning Modal</Button>
          </Card>
        </Row>
      </div>
    )
  }

  handleShowBaseModal = () => {
    this.setState({
      baseModal: true
    })
  }
  handleShowAsyncModal = () => {
    this.setState({
      asyncModal: true
    })
  }
  handleConfirm = () => {
    this.setState({
      baseModal: false
    })
  }
  handleConfirmAsync = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        confirmLoading: false,
        asyncModal: false
      });
    }, 5000)
  }
  handleCancel = () => {
    this.setState({
      baseModal: false,
      asyncModal: false,
      footConfigModal: false
    })
  }
  handleShowFootConfig = () => {
    this.setState({
      footConfigModal: true
    })
  }
  handleRenderFooter = () => {
    return [
      <Button key='save' style={{marginRight: '10px'}} type='primary'>保存</Button>,
      <Button key='cancel' onClick={this.handleCancel}>取消</Button>
    ]
  }
  handleShowConfirmModal = () => {
    Modal.confirm({
      title: '提示下',
      content: '我是江户川',
      okText: '确认',
      cancelText: '取消'
    })
  }
  handleMessageModal = (type) => {
    switch(type) {
      case 'info': Modal.info({title: 'info', content: 'info content'}); break;
      case 'success': Modal.success({title: 'success', content: 'success content'}); break;
      case 'error': Modal.error({title: 'error', content: 'error content'}); break;
      case 'warning': Modal.warning({title: 'warning', content: 'warning content'}); break;
      default: break;
    }
  }
}

export default UiModalPage;
