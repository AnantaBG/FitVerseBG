import { Button, Card,  TextInput } from "flowbite-react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import BeATrainer from "./BeATrainer";
import { useContext, useEffect, useState } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import Loading from "../../../Provider/Loading";
import Select from 'react-select';
import Swal from "sweetalert2";
import { FcAddColumn, FcAddDatabase, FcManager } from "react-icons/fc";
import { FaCross, FaDoorClosed } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { Helmet } from "react-helmet";




const TrainerDetails = () => {
    const trainer = useLoaderData();
    const {_id, trainerImg, name, speciality, biography, availableSlot, experience, certifications} = trainer;
    const {user, loading} = useContext(AuthC);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    // const [option, setOption] = useState([]);

    const handleBookTrainer = (trainer) => {
      setSelectedTrainer(trainer);
      
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  const options = availableSlot?.map((slot) => ({
    value: slot, 
    label: slot 
  }));
  const specialities = speciality?.map((slot) => ({
    value: slot, 
    label: slot 
  }));
  const availablePakage = [
    { value: 10, label: 'Basic Membership' },
    { value: 50, label: 'Standard Membership' },
    { value: 100, label: 'Premium Membership' }
  ]
  // console.log(availablePakage)
  // console.log(options)


  const handleBookedTrainer = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    // const email = form.email.value;
    const Name = form.TName.value;
    const Slot = form.Slot.value;
    const Package = parseInt(form.Package.value);
    const Specialty = form.Specialty.value;
    const UName = form.UName.value;
    const email = form.UEmail.value;
    const BookedTrainer = {Name, UName, email, Package, Slot, Specialty}
    console.log(BookedTrainer)
    try {
      const response = await fetch(`https://fit-verse-server-kappa.vercel.app/BookedTrainer`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(BookedTrainer),
      });
 (response)
      if (response.ok) { 
        const data = await response.json();
         (data)
          Swal.fire({
            icon: 'success',
            title: 'Congratualtions!',
            text: 'Trainer Booking Successsfull!',
          });

                setIsModalOpen(false);

      }
      else {
          Swal.fire({
              icon: 'error',
              title: 'Booking Error',
              text: 'An error occurred while booking the Trainer. Please try again later.',
            });
        } 
    } catch (error) {
      console.error("Error booking room:", error);
      Swal.fire({
        icon: 'error',
        title: 'You have Already Booked',
        text: 'Cannot book again',
      });
      setIsModalOpen(false)
    }
 
    };

    if (loading) {
      return <Loading></Loading>;
    }
    return (
        <div className="my-20">
          <Helmet>
                <title>Trainer {name} Details</title>
      </Helmet>
            <h2 className="text-3xl my-5 text-center font-bold font-mono uppercase">Trainer {name} Details</h2>

        <div className="mx-auto flex justify-center">
            <Card
              className="max-w-md"
              renderImage={() => <img width={500} height={500} src={trainerImg} alt="image 1" />}
            >
              <h5 className="text-3xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h5>
              
              <Button.Group>
              <Button color="gray">{speciality[0]}</Button>
              <Button color="gray">{speciality[1]}</Button>
              <Button color="gray">{speciality[2]}</Button>
            </Button.Group>
            <p className="font-normal flex flex-col text-gray-700 dark:text-gray-400"><span className="text-2xl font-mono font-bold">Biography:</span>
                {biography}
            </p>
            <p className="font-normal flex flex-col text-gray-700 dark:text-gray-400"><span className="text-2xl font-mono font-bold">Experience:</span>
                {experience}
            </p>
            <div className="font-normal flex flex-col text-gray-700 dark:text-gray-400"><span className="text-2xl font-mono font-bold">Certifications:</span>
            <Button.Group>
              <Button color="gray">{certifications[0]}</Button>
              <Button color="gray">{certifications[1]}</Button>
            </Button.Group>
                
            </div>

            <div className="flex flex-col flex-wrap gap-2">
            <h5 className="text-3xl font-mono mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
                Available Slots:
              </h5>
              <Button.Group  className="grid gap-2" >
                  <Button className="rounded-xl" gradientDuoTone="cyanToBlue">{availableSlot[0]}</Button>
                  <Button className="rounded-xl" gradientDuoTone="cyanToBlue">{availableSlot[1]}</Button>
                  <Button className="rounded-xl" gradientDuoTone="cyanToBlue">{availableSlot[2]}</Button>
                </Button.Group>
              {
                user ?
                <Link onClick={() => handleBookTrainer(trainer)}>
                <Button>
                 Book now</Button></Link>
                : <Link to="/login">
                  <Button>
                  Login to Book now</Button></Link>

              }
              
                
            </div>
            </Card>
            {isModalOpen && (
                <div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px]  h-auto  flex flex-col text-center ">
                  <Helmet>
                <title>Book {name}</title>
      </Helmet>
                    <Card>
                    <form onSubmit={handleBookedTrainer} >
                    <TextInput
                    type="text" readOnly
                    defaultValue={name}
                    name="TName"
                    ></TextInput>
                    <Select
                        options={options}
                        required
                        placeholder="Select A Slot"
                        name="Slot"
                    />
                    <Select
                        options={specialities}
                        required
                        placeholder="Select A Specialty"
                        name="Specialty"
                    />
                    <Select
                        options={availablePakage}
                        required
                        placeholder="Select A Package"
                        name="Package"
                    />
                    <TextInput
                    type="text" readOnly
                    defaultValue={user?.displayName}
                    name="UName"
                    ></TextInput>
                    <TextInput
                    type="text" readOnly
                    defaultValue={user?.email}
                    name="UEmail"
                    ></TextInput>


                        <TextInput type="submit"  value="Book" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5" />
                        <p>To learn more about Packages <Link to="/membership"><span className="underline text-red-600"> click</span></Link></p>
                        
                        
                    </form>
                    <p className="underline font-bold font-mono text-lg">Visit Dashboard to Confirm Booking Detals and Payment</p>

                    <button  className=" flex text-5xl justify-center bottom-0" onClick={handleCloseModal}>
                      <BiX></BiX>
                    </button>
                    
                    
                    </Card>
                    
    
                </div>
                        )}
                    
            </div>
      <BeATrainer></BeATrainer>
        </div>

    );
};

export default TrainerDetails;