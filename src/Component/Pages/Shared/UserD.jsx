import { useQuery } from '@tanstack/react-query';
import { AuthC } from '../../../Provider/AuthProviderx';
import { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
const UserD = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthC);

    const { refetch, data: auser=[]} = useQuery({
        queryKey: ['auser', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/auser?email=${user.email}`)
            return res.data;
        }
    })
    return [auser, refetch];
};

export default UserD;