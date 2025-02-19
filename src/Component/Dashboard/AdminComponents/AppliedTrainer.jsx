import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Card, Table } from 'flowbite-react';
import { BiTrash } from 'react-icons/bi';
import { HiUserAdd } from 'react-icons/hi';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AppliedTrainer = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedTrainer, setSelectedTrainer] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fit-verse-server-kappa.vercel.app/appliedtrainer');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePromoteTrainer = async (trainer) => {
    try {
      const response = await axios.post(
        'https://fit-verse-server-kappa.vercel.app/promotetrainer',
        { trainerEmail: trainer.email }
      );

      if (response.status === 200) {
        Swal.fire({
            icon: 'success',
            title: 'Awesome!',
            text: 'Trainer Added successfully',
          }); 
        // Re-fetch data after successful promotion
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/appliedtrainer');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          setIsModalOpen(false);
        };
        fetchData();
      } else {
        console.error("Error promoting trainer:", response.data);
      }
    } catch (error) {
      console.error("Error promoting trainer:", error);
    }
  };

  const handleCancelTrainer = async (trainer) => {
    setSelectedTrainer(trainer); 
    setIsModalOpen(true); 
  };

  const handleConfirmDelete = async () => {
    if (!selectedTrainer) {
      return; 
    }

    try {
      const response = await axios.delete(`https://fit-verse-server-kappa.vercel.app/appliedtrainer/${selectedTrainer._id}`);

      if (response.status === 200) {
        setData((prevData) => prevData.filter((t) => t._id !== selectedTrainer._id));
        setSelectedTrainer(null); 
        setIsModalOpen(false); 
        Swal.fire({
            icon: 'success',
            title: 'Awesome!',
            text: 'Trainer Application Canceled successfully',
          });
      } else {
        console.error("Error deleting trainer:", response.data);
      }
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null); 
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
        <Helmet>
            <title>Dashboard || Applied Trainer Management</title>
            </Helmet>
      <h2 className="text-3xl flex justify-center font-bold mb-4 font-mono">All Application</h2>
      {data?.map((trainer) => (
        <div key={trainer._id}>
      <Table >
        <thead className="border-b">
        </thead>
        <tbody>
            <tr  className="border-b">
              <td className="px-6 py-4">{trainer.name}</td>
              <td className="px-6 py-4">
                {trainer.speciality}
              </td>
              <td className="px-6 py-4">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handlePromoteTrainer(trainer)}
                >
                  <HiUserAdd />
                </button>
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                  onClick={() => handleCancelTrainer(trainer)} 
                >
                  <BiTrash />
                </button>
              </td>
            </tr>
        </tbody>
      </Table>
      <div>
        {isModalOpen &&
         ( // Render the Modal only when isModalOpen is true
        <Card className="md:min-w-[600px] max-h-[400px]">
            <div className="flex justify-end px-4 pt-4">

            </div>
            <div className="flex flex-col items-center pb-10">
                <img
                alt={trainer?.name}
                height="96"
                src={trainer?.trainerImg}
                width="96"
                className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{trainer?.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{trainer?.experience}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{trainer?.speciality}</span>
                <div className="mt-5">
                <p>About Me:<span className="text-sm text-gray-500 dark:text-gray-400">{trainer?.biography}</span></p>
                </div>
                
                <div className="mt-4 flex space-x-3 lg:mt-6">
                <Button color="green" onClick={handleCloseModal}>
              Close
            </Button>
            <Button color="red" onClick={handleConfirmDelete}>
              Cancel Application
            </Button>
                </div>
            </div>
      
            

        </Card>
      )} 
      </div>
      </div>

    ))}
    </div>
  );
};

export default AppliedTrainer;