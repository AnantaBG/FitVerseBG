import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import Loading from "../../../Provider/Loading";
import UseAxiosPublic from "../../Pages/Shared/UseAxiosPublic";
import Swal from "sweetalert2";
const Newsetllers = () => {
      const [message, setMessage] = useState('');
      const axiosPublic = UseAxiosPublic();

          const { loading } = useContext(AuthC);
      const handleSubmit = (event) => {
          event.preventDefault();
          const Newsetllers = {
              email: event.target.email.value,
              message
            };
            axiosPublic.post('/newsletters', Newsetllers)
          .then(res =>
          {
          if(res.data.insertedId){
          Swal.fire({
              icon: 'success',
              title: 'Awesome!',
              text: 'Subscribed for Newsletters',
            });                            
                        }
          })
          setMessage(''); 
        };
        if (loading) {
            return <Loading></Loading>;
        }
    return (
        
        <div>
            <Card className="max-w-3xl flex justify-center mx-auto ">
                <div className=" md:flex  justify-center grid gap-12">
                <div className="max-w-sm ">
                    <h1 className="text-3xl font-bold font-mono">Subscribe to our NewsLetters!! </h1>
                    <p className="mt-5">Over 1,000 others are already enjoying the benefits!

                    Don't miss out on:
                    <span className="font-bold mt-5">
                    <br></br>
                    1. Exclusive content and updates
                    <br></br>
                    2. Special offers for subscribers
                    </span>
                    
                    </p>
                </div>
            <div className="max-w-md">
            <form onSubmit={handleSubmit} className="flex min-w-96 flex-col gap-4">
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Message" value="Your message" />
                    </div>
                    <Textarea 
                    required rows={4}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                     id="Message" name="message" placeholder="Your Message" />
                    </div>
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
                </div>
            
      
    </Card>
        </div>
    );
};

export default Newsetllers;