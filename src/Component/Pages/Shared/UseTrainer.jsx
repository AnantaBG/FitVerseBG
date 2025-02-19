import { useQuery } from '@tanstack/react-query';
import { AuthC } from '../../../Provider/AuthProviderx';
import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';

const UseTrainer = () => {
 
    

    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthC);

    const { refetch, data: aTrainer=[]} = useQuery({
        queryKey: ['aTrainer', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/aTrainer?email=${user.email}`)
            return res.data;
        }
    })
    return [aTrainer, refetch];


};
export default UseTrainer;