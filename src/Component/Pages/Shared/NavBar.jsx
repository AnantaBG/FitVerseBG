import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthC } from "../../../Provider/AuthProviderx";
import UseBookings from "./UseBookings";

const NavBar = () => {
    const {user, logOut} = useContext(AuthC);
    const [, refetch] = UseBookings();
    
    refetch();
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
                label={
                    <Avatar alt="User settings" img={user?.photoURL}rounded />
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                </Dropdown.Header>
                
                {
                user && user?.email ?
                
                <div >
                <Dropdown.Item href="/dashboard/profile">Dashboard</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
                </div>:<Dropdown.Item href="/login">Login</Dropdown.Item>
                }
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                Home
                </Navbar.Link>
                <Navbar.Link href="/trainers">All Trainer</Navbar.Link>
                <Navbar.Link href="/allClasses">All Classes</Navbar.Link>
                <Navbar.Link href="/allForums"className="">Community/Forums</Navbar.Link>
                {
                user && user?.email ?
                <Navbar.Link href="/dashboard/profile">Dashboard</Navbar.Link>
                : ''
                }
                {
                user && user?.email ?
                <div onClick={logOut}><Navbar.Link href="#">LogOut</Navbar.Link></div>
                : <Navbar.Link href="/login">Login</Navbar.Link>
                }
            </Navbar.Collapse>
            </Navbar> 
        </div>
    );
};

export default NavBar;