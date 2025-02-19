import axios from "axios";

const axiosPublic = axios.create({
    baseURL:"https://fit-verse-server-kappa.vercel.app"
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;