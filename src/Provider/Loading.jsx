import { Helmet } from "react-helmet";
import L from "../A.json"
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Helmet>
                <title>Loading</title>
            </Helmet>
            <Lottie animationData={L}></Lottie>

        </div>
    );
};

export default Loading;