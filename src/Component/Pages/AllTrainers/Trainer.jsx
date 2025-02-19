import axios from "axios";
import { Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthC } from "../../../Provider/AuthProviderx";
import Loading from "../../../Provider/Loading";

const Trainer = () => {
  const { loading } = useContext(AuthC);
  if (loading) {
      return <Loading></Loading>;
  }
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortOption, setSortOption] = useState('original');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fit-verse-server-kappa.vercel.app/allTrainers');
                setData(response.data);
                setSortedData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError("Error fetching trainer data. Please try again later.");
            }
        };

        fetchData();
    }, []);

    const sortData = (order) => {
        const newData = [...data];

        if (order === 'highest') {
            newData.sort((a, b) => (b.bookedCount || 0) - (a.bookedCount || 0));
        } else if (order === 'lowest') {
            newData.sort((a, b) => (a.bookedCount || 0) - (b.bookedCount || 0));
        }

        setSortedData(newData);
        setSortOption(order);
    };

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        sortData(selectedOption);
    };

    

    return (
        <div className="my-20 w-11/12 mx-auto">
            <Helmet>
                <title>Fitverse || All Trainers</title>
            </Helmet>
            <h2 className="mb-5 text-6xl text-center font-bold font-mono">Our Trainers</h2>

            <div className="mb-4 flex items-center">
                <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700">Sort By:</label>
                <select
                    id="sort-select"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="mt-1 ml-4 block w-[180px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm"
                >
                    <option value="original">Original Order</option>
                    <option value="highest">Highest Booked</option>
                    <option value="lowest">Lowest Booked</option>
                </select>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {sortedData?.map((feat) => (
                    <div key={feat._id}>
                        <Link to={`/trainer-details/${feat._id}`}>
                            <Card className="min-h-[440px] max-h-[440px]" imgAlt={feat.name}>
                                <img src={feat.trainerImg} alt={feat.name} className="md:max-h-52 max-h-52 mx-auto md:mx-0 md:max-w-80 max-w-60" />
                                <h5 className="text-2xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
                                    {feat.name}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {feat.biography}
                                </p>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainer;