import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation

const NavBar = () => {
    const { user, logOut } = useContext(AuthC);
    const location = useLocation(); // Get the current location

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="sticky z-50 backdrop:blur-3xl top-0">
            <Navbar fluid rounded className="bg-teal-200">
                <Navbar.Brand href="/">
                    <img src="https://i.ibb.co.com/WHZTbYL/Gemini-Generated-Image-xrjo6vxrjo6vxrjo-removebg-preview.png" className="mr-3 bg-teal-500 rounded-sm h-6 sm:h-9" alt="Fitverse" />
                </Navbar.Brand>
                <div className="flex lg:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<Avatar alt="User settings" img={user?.photoURL} rounded />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">{user?.displayName}</span>
                            <span className="block truncate text-sm font-medium">{user?.email}</span>
                        </Dropdown.Header>

                        {user && user?.email ? (
                            <div>
                                <Dropdown.Item href="/dashboard/overview">Dashboard</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
                            </div>
                        ) : (
                            <Dropdown.Item href="/login">Login</Dropdown.Item>
                        )}
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {/* Use NavLink instead of Navbar.Link */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                        Home
                    </NavLink>
                    <NavLink to="/trainers" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                        All Trainer
                    </NavLink>
                    <NavLink to="/allClasses" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                        All Classes
                    </NavLink>
                    <NavLink to="/allForums" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                        Community/Forums
                    </NavLink>
                    {user && user?.email ? (
                        <NavLink to="/dashboard/overview" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                            Dashboard
                        </NavLink>
                    ) : null} {/* Use null to avoid rendering an empty element */}
                    {user && user?.email ? (
                        <div onClick={logOut}>
                            <NavLink to="#" className={({ isActive }) => isActive ? "text-black" : ""}>
                                LogOut
                            </NavLink>
                        </div>
                    ) : (
                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-green-500" : ""}>
                            Login
                        </NavLink>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;