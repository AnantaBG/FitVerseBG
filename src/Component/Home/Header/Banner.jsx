import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/1.jpeg"
import img2 from "../../../assets/2.jpeg"
import img3 from "../../../assets/3.jpeg"
import img4 from "../../../assets/4.jpeg"
import img5 from "../../../assets/5.jpeg"
import img6 from "../../../assets/6.jpeg"
const Banner = () => {
    return (
        <div className="">
            <Carousel>
        <div>
            <img className="brightness-95" src={img1}/>
            <p className="legend">Sweat, Smile and Repeat</p>
        </div>
        <div>
            <img className="brightness-95" src={img2} />
            <p className="legend">Awesome Exercises</p>
        </div>
        <div>
            <img className="brightness-95" src={img3} />
            <p className="legend">Target Muscles</p>
        </div>
        <div>
            <img className="brightness-95" src={img4} />
            <p className="legend">At least 3 Times a Week</p>
        </div>
        <div>
            <img className="brightness-95" src={img5} />
            <p className="legend">Strength Training</p>
        </div>
        <div>
            <img className="brightness-95" src={img6}/>
            <p className="legend">Interact With Others</p>
        </div>
        </Carousel>
        </div>
    );
};

export default Banner;