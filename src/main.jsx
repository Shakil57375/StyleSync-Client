import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";
import ShopContextProvider from "./context/ShopContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <div className="max-w-7xl mx-auto px-10 lg:px-0">
        <RouterProvider router={router} />
      </div>
    </ShopContextProvider>
  </React.StrictMode>
);
