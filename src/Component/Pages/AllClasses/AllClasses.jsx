import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const AllClasses = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fit-verse-server-kappa.vercel.app/allClasses");
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all classes
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterClasses = () => {
      if (searchTerm.trim() === "") {
        // If search term is empty, show all classes
        setFilteredData(data);
      } else {
        const filteredClasses = data.filter((classe) => {
          // Check for matches in class name, effects, and trainer names (case-insensitive)
          const lowerCaseSearchTerm = searchTerm.toLowerCase();
          return (
            classe.className.toLowerCase().includes(lowerCaseSearchTerm) ||
            classe.effects.toLowerCase().includes(lowerCaseSearchTerm) ||
            classe.trainers.some((trainer) =>
              trainer.trainerName.toLowerCase().includes(lowerCaseSearchTerm)
            )
          );
        });
        setFilteredData(filteredClasses);
      }
    };

    filterClasses();
  }, [searchTerm, data]); // Re-run the effect whenever searchTerm or data changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="my-20">
      <Helmet>
                <title>Fitverse || All Classes</title>
      </Helmet>
      <h2 className="mb-5 text-6xl text-center font-bold font-mono">Our Classes</h2>
      <input
        type="text"
        placeholder="Search Classes..."
        className="mb-5 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredData?.map((feat) => (
          <div key={feat._id}>
            <Card className="min-h-[440px] max-h-[440px]" imgAlt={feat.className}>
              <img src={feat.img} alt={feat.className} className="md:max-h-52 max-h-52 mx-auto md:mx-0 md:max-w-80 max-w-60" />
              <h5 className="text-2xl font-bold font-mono tracking-tight overflow-auto text-gray-900 dark:text-white">
                {feat.className}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {feat.effects}
              </p>
              <div className="flex gap-1 justify-center">
                {feat?.trainers?.map((trainer) => (
                  <span className="flex" key={trainer.trainerId}>
                    <Link to={`/trainer-details/${trainer.trainerId}`}>
                      <Tooltip anchorSelect="#ab" place="top">
                        {trainer.trainerName}
                      </Tooltip>
                      <img
                        id="ab"
                        src={trainer.trainerImg}
                        alt={trainer.trainerName || "Trainer"}
                        className="w-12 h-12 rounded-full"
                      />
                    </Link>
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;