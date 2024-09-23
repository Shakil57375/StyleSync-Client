import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full py-4 flex items-center justify-between px-8 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-xl font-semibold">
        <span className="font-bold">FOREVER</span>
        <span className="text-pink-500">.</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm font-medium">
        <a href="#home" className="hover:text-gray-500">
          HOME
        </a>
        <a href="#collection" className="hover:text-gray-500">
          COLLECTION
        </a>
        <a href="#about" className="hover:text-gray-500">
          ABOUT
        </a>
        <a href="#contact" className="hover:text-gray-500">
          CONTACT
        </a>
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
