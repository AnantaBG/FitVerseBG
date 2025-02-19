import { useEffect, useState } from "react";
import UseAxiosSecure from "../../Pages/Shared/UseAxiosSecure";
import { Card } from "flowbite-react";
import BalancePie from "./BalancePie";
import { Helmet } from "react-helmet";

const Balance = () => {
    const axiosSecure = UseAxiosSecure();
    const [ndata, setnData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosSecure.get('/newsletters') 
            setnData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosSecure.get('/allpay') 
            setData(response.data[0]);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className="grid justify-center mx-auto w-11/12 mt-20 ">
    <Helmet>
            <title>Dashboard || Balane</title>
            </Helmet>
    <Card href="#" className="">
      <h5 className="text-2xl font-extrabold text-center tracking-tight font-mono text-gray-900 dark:text-white">
        Total Balance
      </h5>
      <p className="font-extrabold text-4xl text-center text-gray-700 dark:text-gray-400">
        {data.revenue}
      </p>
    </Card>
    <BalancePie news={ndata?.length} pay={data.quantitity} />
        </div>
    );
};

export default Balance;