import React from "react";
import './index.less';
import {Card, Carousel, Row} from "antd";
import carouselImg1 from '../../../resource/carousel-img/carousel-1.jpg';
import carouselImg2 from '../../../resource/carousel-img/carousel-2.jpg';
import carouselImg3 from '../../../resource/carousel-img/carousel-3.jpg';

class UiCarouselPage extends React.Component {
  render() {
    return (
      <div>
        <Row className='row'>
          <Card title='文字背景轮播'>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Card>
        </Row>
        <Row className='row'>
          <Card title='图片轮播'>
            <Carousel className='img-carousel' autoplay>
              <div>
                <img className='carousel-img' src={carouselImg1} alt=''/>
              </div>
              <div>
                <img className='carousel-img' src={carouselImg2} alt=''/>
              </div>
              <div>
                <img className='carousel-img' src={carouselImg3} alt=''/>
              </div>
            </Carousel>
          </Card>
        </Row>
      </div>
    )
  }
}

export default UiCarouselPage;
