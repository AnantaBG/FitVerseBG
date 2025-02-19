import { Button, Card, FileInput, Label, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
// import { useEffect, useState } from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import UseAxiosPublic from "../Shared/UseAxiosPublic";
import Swal from "sweetalert2";
import { AuthC } from "../../../Provider/AuthProviderx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const BeATrainerForm = () => {
    const animatedComponents = makeAnimated();
    const {user} = useContext(AuthC);
      const Days = [ 
        { value: 'Saturday', label: 'Saturday' },
        { value: 'Sunday', label: 'Sunday' },
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' }
        ];
    const [selectedDays, setSelectedDays] = useState([]); 
    const axiosPublic = UseAxiosPublic();
        const navigate = useNavigate();

    const handleChange = (Days) => {
        setSelectedDays(Days); 
    };
const handleSubmit = (event) => {
          event.preventDefault();
          const selectedDayValues = selectedDays?.map((option) => option.value);
          const form = event.target;
          const email = user.email;
          const trainerImg = form.image.value;
          const speciality = form.speciality.value;
          const name = form.name.value;
          const biography = form.biography.value;
          const experience= form.experience.value;
          const certifications = form.certifications.value;

          const Trainer = {
            availableSlot: selectedDayValues,
            trainerImg,
            speciality,
            name,
            biography,
            experience,
            certifications,
            email
        }
            
            console.log(Trainer)
        axiosPublic.post('/newtrainer', Trainer)
          .then(res =>
          {
          if(res.data.insertedId){
          console.log(res.data)
          Swal.fire({
              icon: 'success',
              title: 'Wow!',
              text: 'Applied Successfully',
            }); 
            navigate('/')                           
                        }
          })
        };
    
    return (
        <div className="my-5 w-11/12 mx-auto">
            <Helmet>
                <title>Fitverse || Be A Trainer</title>
      </Helmet>
            <Card>

            <form onSubmit={handleSubmit} className="grid max-w-full  grid-cols-2 gap-4">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="ImgURL" value="Image Url" />
                </div>
                <input id="ImgURL" placeholder="Image Url" name="image" required className="w-full rounded-lg" type="url"></input>
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="speciality" value="Your speciality" />
                </div>
                <TextInput id="speciality" type="text" placeholder="Write your speciality" name="speciality" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput id="name" type="text" placeholder="Your name" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="Days" value="Your Work Days" />
                </div>
                <Select
                
                        options={Days}
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        required
                        placeholder="Select WorkDay"
                        name="day"
                        onChange={handleChange} 
                        id="Days"

                        
                    />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="certifications" value="Your certifications" />
                </div>
                <TextInput id="certifications" type="text" name="certifications" placeholder="Your certifications" required />
            </div>
            
            <div>
                <div className="mb-2 block">
                <Label htmlFor="experience" value="Your experience" />
                </div>
                <TextInput id="experience" type="text" placeholder="Your experience" name="experience" required />
            </div>
            <div className="col-span-2">
                <div className="mb-2 block">
                <Label htmlFor="biography" value="Write About yourself" />
                </div>
                <Textarea id="biography" name="biography" type="text" required />
            </div>
            <Button className="col-span-2" type="submit">Submit</Button>
            </form>
            </Card>
            
        </div>
    );
};

export default BeATrainerForm;