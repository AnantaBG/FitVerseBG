import axios from "axios";
import { Button, Card } from "flowbite-react";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PopularClasses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/popularClasses'); 

            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="my-20">
            <h2 className="mb-5 text-6xl text-center font-bold font-mono">Our Popular Classes</h2>
                    <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {data?.map((feat) => (
                <div key={feat?._id}>
                    <Card
                    className=" min-h-[440px] max-h-[440px]"
                    imgAlt={feat?.className}
                    >
                        <img src={feat.img}alt={feat?.className} className="md:max-h-52 max-h-52 mx-auto md:mx-0  md:max-w-80 max-w-60 " />
                    <h5 className="text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
                        {feat?.className}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {feat?.effects}
                    </p>
                    <p className="flex gap-1 justify-center">
                    
                    {feat?.trainers?.map((trainer) => (
                      <span className="flex" key={trainer?.trainerId}>
                        
                          <Link to={`/trainer-details/${trainer?.trainerId}`}>
                          <img id="ab" 
                            src={trainer?.trainerImg} 
                            alt={trainer?.trainerName || 'Trainer'} 
                            className='w-12 h-12 rounded-full'
                            
                          />
                          </Link>                    
                        
                    </span>
                    ))}
                  </p>

                    </Card>
                    

                </div>

                    ))}
                    
        </div>
        <Link to="/allClasses">
            <Button className="flex w-full mt-5 justify-center mx-auto">See All Classes</Button>
        </Link>
        </div>
    );
};

export default PopularClasses;