import React from "react";
import './index.less';
import {Button, Card, Icon, Row} from "antd";


class UiButtonsPage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title="按钮类型">
            <Button type='primary' style={{marginRight: '10px'}}>Primary</Button>
            <Button style={{marginRight: '10px'}}>Default</Button>
            <Button type='dashed' style={{marginRight: '10px'}}>Dashed</Button>
            <Button type='danger' style={{marginRight: '10px'}}>Danger</Button>
            <Button type='link' style={{marginRight: '10px'}}>Link</Button>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="图标按钮">
            <Button type='primary' shape='circle' icon='search' style={{marginRight: '10px'}}/>
            <Button type='dashed' shape='circle' icon='user' style={{marginRight: '10px'}}/>
            <Button type='danger' shape='circle' icon='warning' style={{marginRight: '10px'}}/>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="按钮大小">
            <Button type='primary' size='large' style={{marginRight: '10px'}}>Large</Button>
            <Button type='primary' style={{marginRight: '10px'}}>Default</Button>
            <Button type='primary' size='small' style={{marginRight: '10px'}}>Small</Button>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="按钮状态">
            <Button type='primary' style={{marginRight: '10px'}}>Normal</Button>
            <Button type='primary' disabled={true} style={{marginRight: '10px'}}>Disabled</Button>
            <Button type='primary' loading={true} style={{marginRight: '10px'}}>Loading</Button>
          </Card>
        </Row>
        <Row className='row'>
          <Card title="组合按钮">
            <Button.Group>
              <Button type="primary">
                <Icon type="left" />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <Icon type="right" />
              </Button>
            </Button.Group>
          </Card>
        </Row>
      </div>
    )
  }
}

export default UiButtonsPage;
