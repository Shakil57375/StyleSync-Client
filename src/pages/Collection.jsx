import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../Components/Title";

const Collection = () => {
  const { prodcuts } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col justify-between items-start sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter Options */}
      <div className="basis-2/12">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS{" "}
          <IoIosArrowDown
            className={`text-2xl sm:hidden ${showFilter ? "rotate-180" : ""}`}
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 mt-6 py-3 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} /> Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div
          className={`border border-gray-300 pl-5 my-5 py-3 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium"> TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topware"} />{" "}
              Topware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomware"} />{" "}
              Bottomware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterware"} />{" "}
              Winterware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Fullbodyware"} />{" "}
              Fullbodyware
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Summerware"} />{" "}
              Summerware
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="basis-10/12">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title title={"All Collections"} subtitle={"Checkout our collections"}></Title>
          {/* Product Sort */}
          <select className="border-2 border-gray-300 text-sm px-2  h-8">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort By : Low to High</option>
            <option value="high-low">Sort By : High to Low</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Collection;
