import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CgClose } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  // Check if the current route is 'collection'
  useEffect(() => {
    if (location.pathname.startsWith("/collection")) {
      setVisible(true);
    } else {
      setVisible(false);
      setShowSearch(false); // Ensure modal is closed when not in the collection route
    }
  }, [location, setShowSearch]);

  // Don't render the search bar modal if not on the collection route
  if (!visible) {
    return null;
  }

  return (
    <div>
      {/* Search modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-300 ${
          showSearch ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white rounded-lg p-5 shadow-lg w-11/12 sm:w-1/2 lg:w-1/3 transition-transform transform duration-300 ease-in-out ${
            showSearch ? "translate-y-0" : "-translate-y-10"
          }`}
        >
          <div className="flex items-center justify-between">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none bg-inherit text-sm p-2 border-b border-gray-400"
              type="text"
              placeholder="Search for products"
            />
            <BiSearch className="w-5 h-5 ml-2 text-gray-500" />
            <CgClose
              onClick={() => setShowSearch(false)}
              className="ml-3 cursor-pointer w-5 h-5 text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
