import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const LatestForums = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/LatestForums'); 
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="my-20">
            <h2 className="mb-5 text-6xl text-center font-bold font-mono">Latest Forums</h2>
                    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {data?.map((feat) => (
                <div key={feat._id}>
                    <Link to={`/forum-details/${feat._id}`}>
                    <Card
                    className=" min-h-[240px] max-h-[240px]"
                    imgAlt={feat.className}
                    >
                        <img src={feat.img}alt={feat.className} className="md:max-h-52 max-h-52 mx-auto md:mx-0  md:max-w-80 max-w-60 " />
                    <h5 className="text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
                        {feat.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 p-4 mr-2">By,
                        <span className=" ml-2">{feat.username}</span>
                    </p>
                        
                    </Card>
                    </Link>

                </div>

                    ))}
        </div>
        </div>
    );
};

export default LatestForums;