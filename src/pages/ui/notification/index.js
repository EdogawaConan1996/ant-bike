import React from "react";
import './index.less';
import {Button, Card, notification, Row} from "antd";

class UiNotificationPage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title='通知提醒框'>
            <Button type='primary' onClick={this.handleOpenNotification}>通知提醒框</Button>
          </Card>
        </Row>
        <Row className='row'>
          <Card title='各种类型通知框'>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleOpenTypeNotification('info')}}>Info Notification</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleOpenTypeNotification('success')}}>Success Notification</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleOpenTypeNotification('warning')}}>Warning Notification</Button>
            <Button type='primary' style={{marginRight: '10px'}} onClick={() => {this.handleOpenTypeNotification('error')}}>Error Notification</Button>
          </Card>
        </Row>
      </div>
    )
  };

  handleOpenNotification = () => {
    const key = '1';
    const btn = (<Button type='primary' onClick={() => notification.close(key)}>Confirm</Button>);
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration: 0,
      btn,
      key
    })
  };

  handleOpenTypeNotification = (type) => {
    notification[type]({
      message: `${type} notification`,
      description: `${type} contents`
    })
  }
}

export default UiNotificationPage;
