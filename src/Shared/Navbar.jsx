import { FaUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenuOpen } from "react-icons/md";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { IoIosArrowBack } from "react-icons/io";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="w-full py-8 flex items-center justify-between ">
      {/* Logo */}
      <Link
        to={"/"}
        className="flex items-center space-x-2 text-xl font-semibold"
      >
        <img src={assets.logo} alt="" className="w-16 h-16" />
      </Link>

      {/* Navigation Links */}
      <div className=" hidden space-x-8 text-sm font-medium lg:items-center  lg:flex">
        <ActiveLink to={"/"} className="hover:text-gray-500">
          HOME
        </ActiveLink>
        <ActiveLink to={"/collection"} className="hover:text-gray-500">
          COLLECTION
        </ActiveLink>
        <ActiveLink to={"/about"} className="hover:text-gray-500">
          ABOUT
        </ActiveLink>
        <ActiveLink to={"/contact"} className="hover:text-gray-500">
          CONTACT
        </ActiveLink>
        <button className="border rounded-full py-1 px-4 font-medium text-sm hover:bg-gray-100">
          Admin Panel
        </button>
      </div>
      <div className="flex items-center space-x-6">
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <CiSearch className="hover:text-gray-500 cursor-pointer text-3xl" />
          <div className="group relative">
            <FaUser className="hover:text-gray-500 cursor-pointer text-3xl" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to={"/cart"} className="relative">
            <IoBagOutline className="hover:text-gray-500 cursor-pointer text-3xl relative" />
            <span className="absolute bottom-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              5
            </span>
          </Link>
          <MdOutlineMenuOpen
            onClick={() => setVisible(true)}
            className="hover:text-gray-500 cursor-pointer text-3xl sm:hidden"
          />
        </div>
      </div>
      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 left-0 overflow-hidden bg-white transition-all cursor-pointer ${
          visible ? "w-full h-screen" : "w-0"
        } z-50`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <IoIosArrowBack className="hover:text-gray-500 cursor-pointer text-3xl sm:hidden rotate-180" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to={"/"} className="hover:text-gray-500 py-6 pl-6 border ">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/collection"} className="hover:text-gray-500 py-6 pl-6 border ">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/about"} className="hover:text-gray-500 py-6 pl-6 border ">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} to={"/contact"} className="hover:text-gray-500 py-6 pl-6 border ">
            CONTACT
          </NavLink>
          <button className="border rounded-full px-4 font-medium text-sm hover:bg-gray-100 py-6 pl-6 ">
            Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
