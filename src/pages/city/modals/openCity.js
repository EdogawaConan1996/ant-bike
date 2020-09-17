import React from "react";
import {Modal} from "antd";
import OpenCityFormComponent from "../components/openCityForm";

class OpenCityModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleConfirm = () => {
    this.props.close()
  }

  handleCancel = () => {
    this.props.close()
  }

  render() {
    return (
      <Modal
        title='开通城市'
        visible={this.props.show}
        onOk={this.handleConfirm}
        onCancel={this.handleCancel}>
        <OpenCityFormComponent />
      </Modal>
    )
  }
}

export default OpenCityModal
