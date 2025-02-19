import { Button, Card, Textarea, TextInput } from "flowbite-react";
import {  useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthC } from "../../../Provider/AuthProviderx";
import Loading from "../../../Provider/Loading";
import UseBookings from "../Shared/UseBookings";
import Swal from "sweetalert2";
import UseAxiosPublic from "../Shared/UseAxiosPublic";
import { Helmet } from "react-helmet";
const TrainerBooked = () => {
    const axiosPublic = UseAxiosPublic();

    const { user, loading } = useContext(AuthC);
    const [booking] = UseBookings();
  const [review, setReview] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
        username: user.displayName,
        review
      };
      axiosPublic.post('/reviews', newReview)
    .then(res =>
    {
    if(res.data.insertedId){
    Swal.fire({
        icon: 'success',
        title: 'Awesome!',
        text: 'Review Successfully Added',
      });                            
                  }
    })
    setReview(''); 
    setIsModalOpen(false);
  };
  const handleReview = (review) => {
    setSelectedTrainer(review);

      setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
};


    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className="my-20 w-11/12 mx-auto">
            <h2 className="text-3xl my-5 text-center font-bold font-mono uppercase">Booked Trainer By {user?.displayName }</h2>
            <Helmet>
                <title>Booked Trainer By {user?.displayName }</title>
      </Helmet>

            {booking?.map((feat) => (
                <div key={feat._id}>

                <Card className="sm:max-w-sm md:max-w-md lg:max-w-xl max-w-xs flex flex-col justify-center mx-auto">
                    <div className="mb-4 flex items-center justify-between">
                    </div>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <p className="text-center text-2xl font-bold font-mono">{feat.Specialty}</p>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                            <div className="shrink-0">
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{feat.Name} at {feat.Slot}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{feat.email}</p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">${feat.Package}</div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="flex justify-between">
                    <Link to="payment"><Button>Join Now</Button></Link>
                    <Link><Button onClick={() => handleReview()}>Review</Button>
                    </Link>
                    </div>
                    
                </Card>
                {isModalOpen && (
                <div className="fixed justify-center mx-auto top-32 z-50 right-0 left-0 bottom-32 rounded-xl w-[400px] md:w-[500px] lg:w-[600px]  h-auto  flex flex-col text-center ">
                    <Card>
                    <form onSubmit={handleSubmit} >
                    <TextInput
                    type="text" readOnly
                    defaultValue={user.displayName}
                    name="name"
                    ></TextInput>

                    <Textarea
                    type="textarea"
                    value={review} 
                    onChange={(e) => setReview(e.target.value)}
                    required rows={3}
                    name="review"
                    ></Textarea>


                    <Button 
                    type="submit" 
                    value="Review" className="flex w-1/2 justify-center mx-auto bottom-0 mt-5">Review</Button>
                        
                        
                    </form>

                    <input type="submit" value="Close" className="btn  btn-primary flex  justify-center bottom-0" onClick={handleCloseModal}  /> 
                    
                    
                    </Card>
                    
    
                </div>
                        )}
                    
                </div>

            ))}

        </div>
    );
};

export default TrainerBooked;