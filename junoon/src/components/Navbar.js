import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <div className="slider">
      <Carousel fade>
      <Carousel.Item
        className="slide"
        style={{
          backgroundImage: `url("images/cover9.jpg")`,
        }}
      >
        <div className="slide-center">
          <h2>JUNOON</h2>
          <p>The Photography society of NSUT</p>
          <button type="button">Watch Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slide"
        style={{
          backgroundImage: `url("images/cover4.jpeg")`,
        }}
      >
        <div className="slide-center">
          <h2>JUNOON</h2>
          <p>The Photography society of NSUT</p>
          <button type="button">Watch Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slide"
        style={{
          backgroundImage: `url("images/cover6.jpg")`,
        }}
      >
        <div className="slide-center">
          <h2>JUNOON</h2>
          <p>The Photography society of NSUT</p>
          <button type="button">Watch Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slide"
        style={{
          backgroundImage: `url("images/cover7.jpeg")`,
        }}
      >
        <div className="slide-center">
          <h2>JUNOON</h2>
          <p>The Photography society of NSUT</p>
          <button type="button">Watch Now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item
        className="slide"
        style={{
          backgroundImage: `url("images/cover9.jpg")`,
        }}
      >
        <div className="slide-center">
          <h2>JUNOON</h2>
          <p>The Photography society of NSUT</p>
          <button type="button">Watch Now</button>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
