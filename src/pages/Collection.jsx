import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoIosArrowDown } from "react-icons/io";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  // Toggle selection for categories
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories(
      (prevCategories) =>
        prevCategories.includes(category)
          ? prevCategories.filter((item) => item !== category) // Remove if already selected
          : [...prevCategories, category] // Add if not selected
    );
  };

  // Toggle selection for subcategories
  const handleSubCategoryChange = (e) => {
    const subCategory = e.target.value;
    setSelectedSubCategories(
      (prevSubCategories) =>
        prevSubCategories.includes(subCategory)
          ? prevSubCategories.filter((item) => item !== subCategory) // Remove if already selected
          : [...prevSubCategories, subCategory] // Add if not selected
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    if (selectedSubCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedSubCategories.includes(item.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedSubCategories, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col justify-between items-start sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
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
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Men"
                onChange={handleCategoryChange}
              />{" "}
              Men
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Women"
                onChange={handleCategoryChange}
              />{" "}
              Women
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Kids"
                onChange={handleCategoryChange}
              />{" "}
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 my-5 py-3 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Topware"
                onChange={handleSubCategoryChange}
              />{" "}
              Topware
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Bottomware"
                onChange={handleSubCategoryChange}
              />{" "}
              Bottomware
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Winterware"
                onChange={handleSubCategoryChange}
              />{" "}
              Winterware
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Fullbodyware"
                onChange={handleSubCategoryChange}
              />{" "}
              Fullbodyware
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Summerware"
                onChange={handleSubCategoryChange}
              />{" "}
              Summerware
            </label>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="basis-10/12">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title title="All Collections" subtitle="Checkout our collections" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 h-8"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {filteredProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
