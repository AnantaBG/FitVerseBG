import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2 for confirmation
import { AuthC } from "../../../Provider/AuthProviderx";
import { Button, Card } from 'flowbite-react';
import {  FaRegTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const ManageSlot = () => {
  const [aTrainer, setATrainer] = useState(null);
  const { user } = useContext(AuthC);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user?.email) {
          return;
        }

        const response = await axios.get('https://fit-verse-server-kappa.vercel.app/allTrainers'); 
        const filteredTrainer = response.data.find(trainer => trainer.email === user?.email); 
        setATrainer(filteredTrainer); 
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchData();
  }, [user?.email]); 

  const handleSlotDelete = async (slotToDelete) => {
    try {
      if (!aTrainer || !aTrainer._id) {
        return;
      }
      // Using a constant for better readability
      const deleteUrl = `https://fit-verse-server-kappa.vercel.app/allTrainers/${aTrainer._id}/availableSlot/${slotToDelete}`; 
      const response = await axios.delete(deleteUrl);

      if (response.status === 200) {
        Swal.fire('Success', 'Slot deleted successfully!', 'success');
      } else {
        Swal.fire('Error', 'Failed to delete slot', 'error');
      }
    } catch (error) {
      console.error('Error deleting slot:', error);
      Swal.fire('Error', 'An error occurred while deleting slot');
    }
  };

  return (
    <div>
        <Helmet>
                <title>Dashboard || Manage Slot</title>
      </Helmet>
      <h2 className="text-2xl flex justify-center font-bold mb-4 font-mono uppercase">All available Slot</h2>
      {aTrainer ? (
        <Card>
          {aTrainer.availableSlot?.map((slot, index) => (
            <div className='flex' key={index}>
<Button className='flex max-w-32 justify-between mx-auto'>
              {slot} 
            </Button>
            <button onClick={() => handleSlotDelete(slot)}><FaRegTrashAlt></FaRegTrashAlt></button>
            </div>
          ))}
        </Card>
      ) : (
        <p>No Slot found matching your email.</p>
      )}
    </div>
  );
};

export default ManageSlot;