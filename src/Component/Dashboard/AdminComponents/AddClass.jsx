import { Button, Card, Label, Textarea, TextInput } from "flowbite-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../../Pages/Shared/UseAxiosPublic";
import { Helmet } from "react-helmet";
const AddClass = () => {
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
              event.preventDefault();
              const form = event.target;
              const img = form.img.value;
              const className = form.className.value;
              const effects = form.effects.value;
              const subject = form.subject.value;
              
    
              const newClass = {
                img,
                className,
                effects,
                subject
                
            }
                
                console.log(newClass)
            axiosPublic.post('/newclass', newClass)
              .then(res =>
              {
              if(res.data.insertedId){
              console.log(res.data)
              Swal.fire({
                  icon: 'success',
                  title: 'Wow!',
                  text: 'New Class Added Successfully',
                }); 
                navigate('/allClasses')                           
                            }
              })
            };
    return (
        <div className="my-0 flex mx-auto max-h-[520px]">
            <Helmet>
            <title>Dashboard || Add Class</title>
            </Helmet>
            
            <Card>
            <h2 className="text-3xl flex justify-center font-bold mb-4 font-mono">Add New Class</h2>

            <form onSubmit={handleSubmit} className="grid max-w-full  grid-cols-2 gap-4">
            <div className="col-span-2">
                <div className="mb-2  block">
                <Label htmlFor="ImgURL" value="Image Url" />
                </div>
                <input id="ImgURL" placeholder="Class Image Url" name="img" required className="w-full col-span-2  rounded-lg" type="url"></input>
            </div>
            <div>
                <div className="mb-2 col-span-1 block">
                <Label htmlFor="speciality" value="Class Name" />
                </div>
                <TextInput id="speciality" type="text" placeholder="Class Name" name="className" required />
            </div>
            <div>
                <div className="mb-2 col-span-1 block">
                <Label htmlFor="name" value="Subject" />
                </div>
                <TextInput id="name" name="subject" type="text" placeholder="Subject name" required />
            </div>
            
            <div className="col-span-2">
                <div className="mb-2 block">
                <Label htmlFor="biography" value="Write About effects" />
                </div>
                <Textarea id="biography" rows={5} name="effects" placeholder="Write About effects" type="text" required />
            </div>
            <Button className="col-span-2" type="submit">Add</Button>
            </form>
            </Card>
            
        </div>
    );
};

export default AddClass;