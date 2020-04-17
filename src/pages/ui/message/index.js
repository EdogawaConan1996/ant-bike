import React from "react";
import {Button, Card, message, Row} from "antd";

class UiMessagePage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title='全局提示'>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleShowMessage()}}>全局提示</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleShowMessage('info')}}>Info Message</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleShowMessage('success')}}>Success Message</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleShowMessage('warning')}}>Warning Message</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleShowMessage('error')}}>Error Message</Button>
          </Card>
        </Row>
      </div>
    )
  }

  handleShowMessage = (type = 'info') => {
    message[type]({
      content: 'message content',
      duration: 3
    })
  }
}

export default UiMessagePage;
