import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { CgViewCols } from "react-icons/cg";
import { RiApps2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const DashBar = () => {
    const location = useLocation(); // Get current location
    const activeNav = location.pathname; // Active link based on pathname

    return (
        <nav className="bg-blue-100 sticky top-0 w-max opacity-100 flex py-3 px-7 z-10 justify-center mx-auto rounded-[3rem] backdrop-blur-3xl">
            <div className="bg-transparent p-1 rounded-[50%] flex gap-6 text-black text-xl">
                <Link to="/" className={activeNav === '/' ? 'active' : ''}> {/* Use Link */}
                    <AiOutlineHome />
                </Link>
                <Link to="/dashboard/overview" className={activeNav === '/dashboard/overview' ? 'active' : ''}> {/* Use Link and correct path */}
                    <RiApps2Line />
                </Link>
                <Link to="/dashboard/profile" className={activeNav === '/dashboard/profile' ? 'active' : ''}> {/* Use Link */}
                    <BiUser />
                </Link>
            </div>
        </nav>
    );
};

export default DashBar;