import React from "react";
import {Row} from "antd";

import './index.less';

class Footer extends React.Component {
  render() {
    return (
      <Row className='footer'>
        版权所有：慕课网&河畔一角（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：河畔一角
      </Row>
    )
  }
}

export default Footer;
