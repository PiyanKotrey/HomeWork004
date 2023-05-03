import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function SlideFc() {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://www.scisports.com/wp-content/uploads/2019/06/Bayern-visual-1920-logo-1280x720.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1600,c_fill/q_auto/v1665661847/cms/public/images/fcbayern-com/homepage/Teamfoto/Teamfoto.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://acefootball.com/wp-content/uploads/2022/09/Bayern.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
