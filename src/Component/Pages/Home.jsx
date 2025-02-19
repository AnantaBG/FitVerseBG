import { Helmet } from "react-helmet";
import About from "../Home/Body/About";
import LatestForums from "../Home/Body/Forums/LatestForums";
import Newsetllers from "../Home/Body/Newsetllers";
import PopularClasses from "../Home/Body/PopularClasses";
import Testimonials from "../Home/Body/Testimonials";
import TopTrainer from "../Home/Body/TopTrainer";
import Banner from "../Home/Header/Banner";
import Featured from "../Home/Header/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fitverse || Home</title>
            </Helmet>
        <Banner></Banner>
        <Featured></Featured>
        <About></About>
        <PopularClasses></PopularClasses>
        <Testimonials></Testimonials>
        <LatestForums></LatestForums>
        <Newsetllers></Newsetllers>
        <TopTrainer></TopTrainer>
        </div>
    );
};

export default Home;