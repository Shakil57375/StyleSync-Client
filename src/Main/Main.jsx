import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import SearchBar from "../Components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
