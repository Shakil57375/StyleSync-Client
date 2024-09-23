import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import ActiveLink from '../Components/ActiveLink/ActiveLink';
const Navbar = () => {
  return (
    <nav className="w-full py-8 flex items-center justify-between ">
      {/* Logo */}
      <Link to={"/"} className="flex items-center space-x-2 text-xl font-semibold">
        <img src={assets.logo} alt="" className='w-16 h-16' />
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm font-medium">
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
      </div>

      {/* Admin Panel Button */}
      <div className="flex items-center space-x-6">
        <button className="border rounded-full py-1 px-4 font-medium text-sm hover:bg-gray-100">
          Admin Panel
        </button>

        {/* Icons */}
        <div className="flex space-x-6 text-lg">
          <FaSearch className="hover:text-gray-500 cursor-pointer" />
          <FaUser className="hover:text-gray-500 cursor-pointer" />
          <div className="relative">
            <FaShoppingBag className="hover:text-gray-500 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
