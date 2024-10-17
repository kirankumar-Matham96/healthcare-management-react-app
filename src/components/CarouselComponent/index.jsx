import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import carouselStyles from "./index.module.css";

export const CarouselComponent = (props) => (
  <Carousel fade controls={false} indicators={false} interval={3000}>
    {props.imageSet.map((image) => (
      <Carousel.Item>
        <img key={image.title} src={image.url} alt={image.title} />
        <Carousel.Caption>
          <div className={carouselStyles.blurText}>
            <h3 className="text-shadow">{image.title}</h3>
            <p>{image.caption}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);
