import { Link, Outlet } from "react-router-dom";

import { Sidebar } from "flowbite-react";
import { BiAddToQueue, BiBuoy, BiHistory, BiMessageX, BiUser, BiUserPlus } from "react-icons/bi";
import { HiChartPie, HiCreditCard, HiViewBoards } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { FcAddColumn, FcAddDatabase, FcManager } from "react-icons/fc";
import UserD from "../../Pages/Shared/UserD";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [auser] = UserD();
  const userR = auser?.map(item => item.role)
  const isAdmin = userR?.includes('admin'); 
  const isTrainer = userR?.includes('trainer'); 
console.log(auser)

if (isAdmin) {
  console.log("User has admin role.");
} else if (isTrainer){
  console.log("User have trainer role.");
}
else{
  console.log("putki mara")
}

    return (
        <div className="flex max-w-full">
          <Helmet>
                <title>Dashboard</title>
      </Helmet>
        <div className="">
    <Sidebar aria-label="Sidebar with content separator example" className="min-h-screen bg-blue-400 max-w-40 sm:max-w-60 md:max-w-64">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {
            isAdmin &&
            (
            <div className="overflow-auto">
            <Sidebar.Item href="/dashboard/newslsub" icon={BiMessageX}>
            Newsletter subscribers
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/allTrainerAd" icon={BiUser}>
          All Trainers
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/applied" icon={BiUserPlus}>
          Applied Trainer
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/balance" icon={FaBalanceScale}>
          Balance
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/addclass" icon={BiAddToQueue}>
          Add new Class
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/addforum" icon={FcAddDatabase}>
          Add new Forum
          </Sidebar.Item>
            </div>)

          }
          {
            isTrainer && 
            (
            <div>
            <Sidebar.Item href="/dashboard/manageslot" icon={FcManager}>
            Manage Slots
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/addslot" icon={FcAddColumn}>
            Add New slot
            </Sidebar.Item>
            <Sidebar.Item href="/dashboard/addforum" icon={FcAddDatabase}>
            Add new Forum
            </Sidebar.Item>
            
            </div>
            )
          }
          {
            !isAdmin && !isTrainer &&
            (
              <div>
              <Sidebar.Item icon={BsPerson}>
            <Link to="profile">
            My Profile</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
          <Link to="bookedTrainer">
          Booked Trainer</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCreditCard}>
          <Link to="bookedTrainer/payment">
          Make Payment</Link>
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/activityhistory" icon={BiHistory}>
            Activity Log
          </Sidebar.Item>
            </div>
            )
          }
          
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiChartPie}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;