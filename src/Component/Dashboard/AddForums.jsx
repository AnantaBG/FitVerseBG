import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Pages/Shared/UseAxiosPublic";
import { useContext } from "react";
import { AuthC } from "../../Provider/AuthProviderx";
import { Helmet } from "react-helmet";
const AddForums = () => {
    const {user} = useContext(AuthC);
    console.log(user)
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
              event.preventDefault();
              const username = user.displayName;
              const form = event.target;
              const title = form.title.value;
              const postData = form.postData.value;
              
              
    
              const newForum = {
                username,
                title,
                postData
                
            }
                
                console.log(newForum)
            axiosPublic.post('/newforum', newForum)
              .then(res =>
              {
              if(res.data.insertedId){
              console.log(res.data)
              Swal.fire({
                  icon: 'success',
                  title: 'Wow!',
                  text: 'New Forum Posted Successfully',
                }); 
                navigate('/allForums')                           
                            }
              })
            };
    return (
        <div className="my-0 flex mx-auto max-h-[420px]">
            <Helmet>
                <title>Dashboard || Add Forum</title>
      </Helmet>
            <Card>
            <h2 className="text-3xl flex justify-center font-bold mb-4 font-mono">Write New Forum</h2>

            <form onSubmit={handleSubmit} className="grid max-w-full  grid-cols-2 gap-4">
            <div className="col-span-2">
                <div className="mb-2 block">
                <Label htmlFor="speciality" value="Forum Title" />
                </div>
                <TextInput id="speciality" type="text" placeholder="Forum Title" name="title" required />
            </div>
            
            <div className="col-span-2">
                <div className="mb-2 block">
                <Label htmlFor="biography" value="Write Forum" />
                </div>
                <Textarea id="biography" rows={5} name="postData" placeholder="Write Forum" type="text" required />
            </div>
            <Button className="col-span-2" type="submit">Post</Button>
            </form>
            </Card>
            
        </div>
    );
};

export default AddForums;