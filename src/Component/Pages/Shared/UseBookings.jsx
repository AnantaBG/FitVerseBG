import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";

const UseBookings = () => {
    const axiosSecure = UseAxiosSecure();
    const {user, loading} = useContext(AuthC);
    
    const { refetch, data: booking=[]} = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/BookedTrainer?email=${user.email}`)
            return res.data;
        }
    })
    return [booking, refetch];
};

export default UseBookings;