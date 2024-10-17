import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import carouselStyles from "./index.module.css";

export const CarouselComponent = (props) => (
  <Carousel fade controls={false} indicators={false} interval={3000}>
    {props.imageSet
      ? props.imageSet.map((image) => (
          <Carousel.Item>
            <img key={image.title} src={image.url} alt={image.title} />
            <Carousel.Caption>
              <div className={carouselStyles.blurText}>
                <h3 className="text-shadow">{image.title}</h3>
                <p>{image.caption}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      : props.feedback.map((item) => (
          <Carousel.Item>
            <img
              className={carouselStyles.transparentImage}
              key={item.patient}
              src="https://res.cloudinary.com/do4v7miwh/image/upload/v1729175404/samples/Backgrounds/chris-appano-F59muNgxqlg-unsplash_pd4sb3.jpg"
              alt="bg"
            />
            <Carousel.Caption>
              <div className={carouselStyles.textContent}>
                <p className="text-shadow">{item.message}</p>
                <br />
                <h6>~ {item.patient}</h6>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
  </Carousel>
);
