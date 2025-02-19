import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Pagination } from 'swiper/modules';
import axios from "axios";
import { Card } from "flowbite-react";
import {  useEffect, useState } from "react";

const Testimonials = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-verse-server-kappa.vercel.app/allTestimony');
            
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}

        className="mySwiper"
      >
            <h2 className="mb-20 lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center font-bold font-mono">Our Testimonials/Reviews</h2>

        
                            {data?.map((feat) => (
                        <div key={feat._id}>
                            <SwiperSlide className='min-h-96'>
                                <Card className='min-h-60 max-w-80'>
                                <p className='md:text-2xl sm:text-xl font-bold font-mono'>{feat.username}</p>
                                <p className='text-gray-600 p-0 md:p-4'>{feat.review}</p>
                                </Card>
                                
                                
                                </SwiperSlide>
                        </div>
        
                            ))}
      </Swiper>
        </div>
    );
};

export default Testimonials;