import React from "react";
import {Col, Row, message} from "antd";
import "./index.less";
import moment from "moment";
import {getWeatherDetail} from "../../api/admin";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '江户川',
      currentDate: '',
      weatherDetail: {},
      weatherImg: null,
      dateInterVal: null
    }
  }

  componentDidMount() {
    this.setState({
      dateInterVal: setInterval(() => {
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        this.setState({currentDate});
        if (this.state.weatherDetail) {
          const hour = moment().hour();
          const isNight = (hour >= 0 && hour < 6) || (hour >= 18 && hour <= 24 );
          if (isNight) {
            this.setState({
              weatherImg: this.state.weatherDetail.nightPictureUrl
            })
          } else {
            this.setState({
              weatherImg: this.state.weatherDetail.dayPictureUrl
            })
          }
        }
      }, 1000)
    });

    getWeatherDetail().then(response => {
      const weatherDetail = response.data.results[0].weather_data[0];
      this.setState({
        weatherDetail: response.data.results[0].weather_data[0]
      });
    }).catch(() => {
      message.error('获取天气失败');
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.dateInterVal)
  };

  render() {
    return (
      <Row className="header">
        <Row className="header-top">
          <div className="user-message">
            欢迎，<span>{this.state.userName}</span>
            <a href='/'>退出</a>
          </div>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.currentDate}</span>
            <img className="weather-img" src={this.state.weatherImg} alt="" />
            <span className="weather-detail">
              {this.state.weatherDetail ? `${this.state.weatherDetail.weather} ${this.state.weatherDetail.temperature}` : ''}
            </span>
          </Col>
        </Row>
      </Row>
    )
  }
}

export default Header;
