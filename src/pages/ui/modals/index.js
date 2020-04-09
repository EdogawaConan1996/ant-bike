import React from "react";
import './index.less';
import {Button, Card, Modal, Row} from "antd";

class UiModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseModal: false,
      asyncModal: false,
      confirmLoading: false
    }
  }
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title="基本使用">
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowBaseModal}>基本使用</Button>
            <Modal
              title='基本使用'
              visible={this.state.baseModal}
              onOk={this.handleConfirm}
              onCancel={this.handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Button type='primary' style={{marginRight: '10px'}} onClick={this.handleShowAsyncModal}>异步关闭</Button>
            <Modal
              title='异步关闭'
              visible={this.state.asyncModal}
              confirmLoading={this.state.confirmLoading}
              onOk={this.handleConfirmAsync}
              onCancel={this.handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
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
      asyncModal: false
    })
  }
}

export default UiModalPage;
