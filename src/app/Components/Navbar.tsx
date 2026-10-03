import React from "react";
import Image from "next/image";
import logo from "../assets/logo.webp";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="bg-white ">
      <div className="navbar bg-base-100  flex justify-between container mx-auto">
        
          <div className="flex gap-2 relative left-130">
            <Image src={logo} alt="logo" height={40} width={50} />
            <div>
              <a className="text-[1.5rem] font-bold text-red-800">Bangla News 24</a>
              <p className="text-xs text-shadow-gray-500">{date}</p>
            </div>
          </div>
        

        <div className="navbar-end flex gap-2">
          <a className="btn">সাইন ইন</a>
          <a><button className="btn bg-red-700 text-white rounded-1xl">সাইন আপ</button></a>
        </div>
      </div>
      <div>
        <NavLinks/>
      </div>
    </div>
  );
};

export default Navbar;
