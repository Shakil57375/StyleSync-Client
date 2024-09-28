import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import SearchBar from "../Components/SearchBar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
