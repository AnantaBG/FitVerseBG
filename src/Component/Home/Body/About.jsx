import Reveal, { Slide } from "react-awesome-reveal";
import img1 from '../../../assets/abo.jpeg'

const About = () => {
    return (
        <div className="lg:w-full mb-8 w-4/5 min-h-[400px] lg:min-h-[500px] mx-auto justify-center flex">
            <Reveal right>
            <div className=" flex justify-end ">
            <div className="lg:w-96 w-48">
                <h1 className="md:text-3xl text-blue-800 text-2xl font-bold font-mono">The FitVerse Journey</h1>
                <p className="lg:text-2xl mr-3  opacity-50">At FitVerse, we believe that fitness is more than just exercise; it's a journey of self-discovery and personal growth. We're here to support you every step of the way, providing access to expert trainers, inspiring classes, and a supportive community to help you reach your full potential.</p>

            </div>
            
            </div>

            
            <div className=" flex justify-start  ">
            <img className="lg:min-w-96 w-48 lg:max-h-[400px]" src={img1} alt="" />
            </div>
            </Reveal>

            
        </div>
    );
};

export default About;