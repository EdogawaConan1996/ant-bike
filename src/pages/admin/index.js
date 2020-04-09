import React, { Component } from "react";
import {Col, Row} from "antd";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NavLeft from "../../components/nav-left";
import './index.less';

class AdminPage extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={'admin'}>
        <Row>
          <Col span={4}>
            <NavLeft />
          </Col>
          <Col span={20} className={'main'}>
            <Header />
            <Row className={'content'}>
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default AdminPage;
