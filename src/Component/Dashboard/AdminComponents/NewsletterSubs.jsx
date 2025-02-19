import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
const NewsletterSubs = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://fit-verse-server-kappa.vercel.app/newsletters`); 

            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
      <section className="mt-20">
        <Helmet>
            <title>Dashboard || Newsletters</title>
            </Helmet>
            <h2 className=" md:text-3xl lg:text-4xl text-2xl flex justify-center font-bold mb-4 font-mono">Newsetller Subscribers</h2>
        <div className="max-h-screen overflow-scroll scroll-smooth sm:max-w-sm md:max-w-md mx-auto lg:max-w-xl max-w-xs mt-10">
            {data?.map((feat) => (
            <Table className="mb-4 bg-blue-100" key={feat._id} hoverable>
                <Table.Body className="divide-y">
                <Table.Row className="bg-teal-100 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {feat?.email}
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            ))}
        </div>
      </section>

    );
};

export default NewsletterSubs;