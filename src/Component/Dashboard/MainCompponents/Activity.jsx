import axios from "axios";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import { Helmet } from "react-helmet";

const Activity = () => {
    const [data, setData] = useState([]);
    const {user} = useContext(AuthC);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://fit-verse-server-kappa.vercel.app/onepaymentHistory?email=${user.email}`); 

            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        
                                

            <div className="overflow-x-auto mt-3">
            <Helmet>
                <title>Dashboard || Activity</title>
      </Helmet>
            <Table  hoverable>
                <Table.Head>
                <Table.HeadCell>Trainer name</Table.HeadCell>
                <Table.HeadCell>Classes</Table.HeadCell>
                <Table.HeadCell>Boking Date</Table.HeadCell>
                <Table.HeadCell>Fee</Table.HeadCell>
                <Table.HeadCell>
                    Status
                </Table.HeadCell>
                </Table.Head>
                {data?.map((feat) => (
                <Table.Body key={feat._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {feat?.BookedTrainers[0]} <br />{feat?.BookedTrainers[1]}
                    </Table.Cell>
                    <Table.Cell>
                    {feat?.BookedClasses[0]} <br />{feat?.BookedClasses[1]}
                    </Table.Cell>
                    <Table.Cell>{feat?.date}</Table.Cell>
                    <Table.Cell>{feat?.price}$</Table.Cell>
                    <Table.Cell>
                    {feat?.status}
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
                ))}
            </Table>
            
            </div>
        
    );
};

export default Activity;