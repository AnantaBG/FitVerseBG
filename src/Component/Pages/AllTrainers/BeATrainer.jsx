import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const BeATrainer = () => {
    return (
        <div className="flex justify-center mt-20 mx-auto">
            <Card className="max-w-3xl bg-slate-100 ">
                <div className=" grid">
                    <div className="flex flex-col min-w-96">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Become an Trainer</h5>
            <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            "Ready to turn your fitness knowledge into a rewarding career? Become an instructor and empower others to achieve their health goals. We provide the platform, you bring the expertise."
            </p>
                    </div>
                <div className="min-w-full">
                <Button><Link to="/beTrainer">Be A Trainer</Link></Button>
                </div>
            
                </div>
            
            </Card>
            
        </div>
    );
};

export default BeATrainer;