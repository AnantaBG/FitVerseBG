import axios from "axios";


const axiosSecure = axios.create({
    baseURL:"https://fit-verse-server-kappa.vercel.app"
})
const UseAxiosSecure = () => {
    return axiosSecure
};

export default UseAxiosSecure;