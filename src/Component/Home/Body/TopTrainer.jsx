import axios from "axios";
import { Button, Card } from "flowbite-react";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TopTrainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/topTrainers'); 

            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="my-20">
            <h2 className="mb-5 text-6xl text-center font-bold font-mono">Our Team</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {data?.map((feat) => (
                <div key={feat._id}>
                    <Link to={`/trainer-details/${feat._id}`}>
                    <Card
                    className="max-w-md h-[400px]"
                    renderImage={() => <img width={200} height={200} className="mx-auto rounded-full min-h-48 max-h-48" src={feat.trainerImg} alt="image 1" />}
                    >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {feat.name}
                    </h5>
                    <p className="font-bold font-mono uppercase text-lg text-gray-700 dark:text-gray-400">
                        Booked more than:{feat.bookedCount} times
                    </p>
                        <Button.Group>
                          <Button color="gray">{feat.speciality[0]}</Button>
                          <Button color="gray">{feat.speciality[1]}</Button>
                          <Button color="gray">{feat.speciality[2]}</Button>
                        </Button.Group>
                    </Card>
                    </Link>
                </div>

                    ))}
        </div>
        </div>
    );
};

export default TopTrainer;