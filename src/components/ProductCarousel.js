import React from 'react'
import Carousel from "better-react-carousel";
function ProductCarousel(props) {
  return (
    <div className="mt-3">
      <div className="card py-3">
        <p className="text-xl font-bold text-left mb-2 p-2 ml-5">
          {props.title}
        </p>
        <Carousel cols={6} rows={1} gap={10} loop={true}>
          <Carousel.Item>
            <img width="100%" src={props.img1} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img2} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img3} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img4} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img5} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img6} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img7} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img8} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img9} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img10} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img11} style={{ height: "12rem" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" src={props.img12} style={{ height: "12rem" }} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ProductCarousel