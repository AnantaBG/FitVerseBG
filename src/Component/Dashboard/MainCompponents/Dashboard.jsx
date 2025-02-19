import { Link, Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { BiAddToQueue, BiBuoy, BiHistory, BiMessageX, BiUser, BiUserPlus } from "react-icons/bi";
import {  HiCreditCard, HiViewBoards } from "react-icons/hi";
import { RiAppsLine } from "react-icons/ri";

import {  BsMenuApp, BsPerson } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { FcAddColumn, FcAddDatabase, FcManager } from "react-icons/fc";
import UserD from "../../Pages/Shared/UserD";
import { Helmet } from "react-helmet";
import DashBar from "../DashBar";

const Dashboard = () => {
    const [auser] = UserD();
    const userR = auser?.map(item => item.role);
    const isAdmin = userR?.includes('admin');
    const isTrainer = userR?.includes('trainer');
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="flex">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="">
                <Sidebar aria-label="Sidebar with content separator example" className="min-h-screen max-w-40  sm:max-w-60 md:max-w-64">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {isAdmin && (
                                <div className="overflow-auto">
                                  <Sidebar.Item href="/dashboard/overview" icon={RiAppsLine} className={isActive("/dashboard/overview") ? "text-green-500 bg-blue-100" : ""}>
                                        Dashboard
                                    </Sidebar.Item>
                                    <Sidebar.Item href="profile" icon={BsPerson} className={isActive("/dashboard/profile") ? "text-green-500 bg-blue-100" : ""}>
                                        My Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/newslsub" icon={BiMessageX} className={isActive("/dashboard/newslsub") ? "text-green-500 bg-blue-100" : ""}>
                                        Newsletter subscribers
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/allTrainerAd" icon={BiUser} className={isActive("/dashboard/allTrainerAd") ? "text-green-500 bg-blue-100" : ""}>
                                        All Trainers
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/applied" icon={BiUserPlus} className={isActive("/dashboard/applied") ? "text-green-500 bg-blue-100" : ""}>
                                        Applied Trainer
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/balance" icon={FaBalanceScale} className={isActive("/dashboard/balance") ? "text-green-500 bg-blue-100" : ""}>
                                        Balance
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/addclass" icon={BiAddToQueue} className={isActive("/dashboard/addclass") ? "text-green-500 bg-blue-100" : ""}>
                                        Add new Class
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/addforum" icon={FcAddDatabase} className={isActive("/dashboard/addforum") ? "text-green-500 bg-blue-100" : ""}>
                                        Add new Forum
                                    </Sidebar.Item>
                                </div>
                            )}

                            {isTrainer && (
                                <div>
                                  <Sidebar.Item href="/dashboard/overview" icon={BsMenuApp} className={isActive("/dashboard/overview") ? "text-green-500 bg-blue-100" : ""}>
                                        Dashboard
                                    </Sidebar.Item>
                                    <Sidebar.Item href="profile" icon={BsPerson} className={isActive("/dashboard/profile") ? "text-green-500 bg-blue-100" : ""}>
                                        My Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/manageslot" icon={FcManager} className={isActive("/dashboard/manageslot") ? "text-green-500 bg-blue-100" : ""}>
                                        Manage Slots
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/addslot" icon={FcAddColumn} className={isActive("/dashboard/addslot") ? "text-green-500 bg-blue-100" : ""}>
                                        Add New slot
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/addforum" icon={FcAddDatabase} className={isActive("/dashboard/addforum") ? "text-green-500 bg-blue-100" : ""}>
                                        Add new Forum
                                    </Sidebar.Item>
                                </div>
                            )}

                            {!isAdmin && !isTrainer && (
                                <div>
                                  <Sidebar.Item href="/dashboard/overview" icon={BsMenuApp} className={isActive("/dashboard/overview") ? "text-green-500 bg-blue-100" : ""}>
                                        Dashboard
                                    </Sidebar.Item>
                                    <Sidebar.Item href="profile" icon={BsPerson} className={isActive("/dashboard/profile") ? "text-green-500 bg-blue-100" : ""}>
                                        My Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/bookedTrainer" icon={HiViewBoards} className={isActive("/dashboard/bookedTrainer") ? "text-green-500 bg-blue-100" : ""}>
                                        Booked Trainer
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/bookedTrainer/payment" icon={HiCreditCard} className={isActive("/dashboard/bookedTrainer/payment") ? "text-green-500 bg-blue-100" : ""}>
                                        Make Payment
                                    </Sidebar.Item>
                                    <Sidebar.Item href="/dashboard/activityhistory" icon={BiHistory} className={isActive("/dashboard/activityhistory") ? "text-green-500 bg-blue-100" : ""}>
                                        Activity Log
                                    </Sidebar.Item>
                                </div>
                            )}
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className="flex flex-col mx-auto justify-center lg:w-full max-w-screen">
                <DashBar />
                <div className="flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;