import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { CgViewCols } from "react-icons/cg";

const DashBar = () => {
    const [activeNav, setaActiveNav] = useState('#');
    return (
        <nav className="bg-[rgba(0,0,0,1)]  w-max opacity-60 flex py-3 px-7 z-10 justify-center mx-auto  rounded-[3rem] backdrop-blur-3xl ">
            <div className="bg-transparent p-1 rounded-[50%]  flex gap-6 text-white text-xl ">
            <a onClick={()=> setaActiveNav('#')} className={activeNav === '#' ? 'active':''} href="#"><AiOutlineHome/> </a>
            <a onClick={()=> setaActiveNav('#about')} className={activeNav === '#about' ? 'active':''} href="#about"><AiOutlineUser/></a>
            <a onClick={()=> setaActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''} href="#experience"><BiBook/> </a>
            <a onClick={()=> setaActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''} href="#portfolio"><CgViewCols/> </a>
            <a onClick={()=> setaActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''} href="#contact"><BiMessageSquareDetail/></a>
            </div>
        </nav>
    );
};

export default DashBar;