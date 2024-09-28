import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default SearchBar;
