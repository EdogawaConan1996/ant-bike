import React from "react";
import './index.less';
import {Card, Col, Row, Icon, Avatar} from "antd";
import temp1Img from '../../../resource/gallery/1.png';

class UiGalleryPage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Col span={6}>
            <Card hoverable style={{width: '240px'}}>
              <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{width: '240px'}} cover={<img src={temp1Img}  alt='example'/> }>
              <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{width: '240px'}}
              cover={<img src={temp1Img}  alt='example'/>}
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}>
              <Card.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Europe Street beat"
                description="www.instagram.com"/>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UiGalleryPage;
