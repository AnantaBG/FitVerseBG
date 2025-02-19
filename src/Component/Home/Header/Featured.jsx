import axios from "axios";
import { Card } from "flowbite-react";
import {  useEffect, useState } from "react";

const Featured = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/allFeatures');
            
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="my-20">
            <h2 className="mb-5 text-6xl text-center font-bold font-mono">Our Features</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {data?.map((feat) => (
                <div key={feat._id}>
                    <Card
                    className=" "
                    imgAlt={feat.title}
                    imgSrc={feat.icon}
                    >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {feat.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {feat.description}
                    </p>
                    </Card>
                </div>

                    ))}
        </div>
        </div>

    );
};

export default Featured;