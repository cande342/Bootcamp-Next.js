import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carrousel = () => {
    return (
        <Carousel showThumbs={false}>
          <div>
            <img src="src/assets/imagen1.jpg" alt="Slide 1" style={{ height: "300px" }} />
          </div>
          <div>
            <img src="src/assets/imagen2.png" alt="Slide 2" style={{ height: "300px" }} />
          </div>
          <div>
            <img src="src/assets/imagen3.jpg" alt="Slide 3" style={{ height: "300px" }} />
          </div>
        </Carousel>
      );
      
    }
export default Carrousel;
