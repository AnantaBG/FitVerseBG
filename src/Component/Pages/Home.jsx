import { Helmet } from "react-helmet";
import About from "../Home/Body/About";
import LatestForums from "../Home/Body/Forums/LatestForums";
import Newsetllers from "../Home/Body/Newsetllers";
import PopularClasses from "../Home/Body/PopularClasses";
import Testimonials from "../Home/Body/Testimonials";
import TopTrainer from "../Home/Body/TopTrainer";
import Banner from "../Home/Header/Banner";
import Featured from "../Home/Header/Featured";
import { useContext } from "react";
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../../Provider/Loading";

const Home = () => {
    const { loading } = useContext(AuthC);
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="w-11/12 mx-auto mt-5">
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