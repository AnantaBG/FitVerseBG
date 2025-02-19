import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2 for confirmation
import { AuthC } from "../../../Provider/AuthProviderx";
import { FaBeer, FaRegTrashAlt } from 'react-icons/fa';
import { BiAddToQueue } from 'react-icons/bi';
import { Button, TextInput } from 'flowbite-react';
import { Helmet } from 'react-helmet';

const AddNewSlots = () => {
    const [aTrainer, setATrainer] = useState(null);
  const { user } = useContext(AuthC);
  const [newSlot, setNewSlot] = useState(''); 

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
  const handleSlotAdd = async () => {
    try {
      if (!aTrainer || !aTrainer._id) {
        return;
      }

      const updatedSlots = [...aTrainer.availableSlot, newSlot]; 

      const response = await axios.put(`https://fit-verse-server-kappa.vercel.app/allTrainers/${aTrainer._id}/availableSlot`, {
        availableSlot: updatedSlots,
      });

      if (response.status === 200) {
        Swal.fire('Success', 'Slot added successfully!', 'success');
        // Optionally, refetch trainer data to update the UI
        setNewSlot(''); 
      } else {
        Swal.fire('Error', 'Failed to add slot', 'error');
      }
    } catch (error) {
      console.error('Error adding slot:', error);
      Swal.fire('Error', 'An error occurred while adding slot');
    }
  };
    return (
        <div className='mt-20 w-11/12'>
            <Helmet>
                <title>Dashboard || Add Slot</title>
      </Helmet>
      <h2 className="text-2xl flex justify-center font-bold mb-4 font-mono uppercase">Add New Slot</h2>
      <div className='mx-auto flex justify-center gap-4'>
      <TextInput 
        type="text" 
        placeholder="Enter new slot" 
        value={newSlot} 
        onChange={(e) => setNewSlot(e.target.value)} 
        className="input input-bordered w-full max-w-xs" 
      />
      <Button  onClick={handleSlotAdd}><span className='text-xl'><BiAddToQueue></BiAddToQueue></span></Button>
      </div>
      
    </div>
    );
};

export default AddNewSlots;