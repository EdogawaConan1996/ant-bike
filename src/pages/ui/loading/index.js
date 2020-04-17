import React from "react";
import './index.less';
import {Alert, Card, Row, Spin} from "antd";

class UiLoadingPage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title='Spin组件使用'>
            <Spin spinning={true}>
              <Alert message='Alert message title'
                     description='Further details about the context of this alert.'
                     type='info'>
              </Alert>
            </Spin>
          </Card>
        </Row>
      </div>
    )
  }
}

export default UiLoadingPage;
