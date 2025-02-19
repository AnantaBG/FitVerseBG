import axios from "axios";
import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";
const AllTrainerAd = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/allTrainers'); 
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      const handleDeleteTrainer = async (trainerId) => {
        try {
          const response = await axios.delete(`https://fit-verse-server-kappa.vercel.app/trainers/${trainerId}`);
    
          if (response.status === 200) {
            Swal.fire({
                          icon: 'success',
                          title: 'Success!',
                          text: 'Removed As A Trainer Successfully',
                        }); 
            // Update client-side data after successful server-side deletion
            setData((prevData) => prevData.filter((trainer) => trainer._id !== trainerId)); 
            console.log("Trainer deleted successfully");
          } else {
            console.error("Error deleting trainer:", response.data);
          }
        } catch (error) {
          console.error("Error deleting trainer:", error);
        }
      };
    return (
      <section>
        <Helmet>
            <title>Dashboard || All Trainer Management</title>
            </Helmet>
                    <h2 className="text-3xl flex justify-center font-bold mb-4 font-mono mt-20">All trainers</h2>
        <div className=" max-h-screen overflow-scroll scroll-smooth sm:max-w-sm md:max-w-md mx-auto lg:max-w-xl max-w-xs mt-10">
            
                    {data?.map((feat) => (
                    <Table className="mb-4 min-w-96 overflow-auto bg-blue-100" key={feat._id} hoverable>
                        <Table.Body className="divide-y">
                        <Table.Row className="bg-teal-100 dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {feat?.name}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {/* {feat?.speciality || feat?.speciality[1]} */}
                            {Array.isArray(feat?.speciality) && feat?.speciality.length > 0 ? (
                            <span>{feat?.speciality[0]?.charAt(0).toUpperCase() + feat?.speciality[0]?.slice(1)}</span> 
                            ) : (
                                feat?.speciality || 'N/A'
                            )}
                                            
                             </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <Button
                                 onClick={() => handleDeleteTrainer(feat._id)} 
                                className=" flex justify-self-end">
                                    <BiTrash></BiTrash>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                    ))}
        </div>
      </section>

    );
};

export default AllTrainerAd;