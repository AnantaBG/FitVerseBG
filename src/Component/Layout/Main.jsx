import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import FooTer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <FooTer></FooTer>
        </div>
    );
};

export default Main;