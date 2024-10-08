import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import WishList from "../pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/register",
        element : <Register/>
      },
      {
        path : "/collection",
        element : <Collection/>
      },
      {
        path : "/product/:productId",
        element : <Product/>
      },
      {
        path : "/wishlist",
        element : <WishList/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
    ],
  },
]);
export default router;
