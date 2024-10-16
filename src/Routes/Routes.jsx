import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Main/Main";
import Register from "../Authentication/Register";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import WishList from "../pages/WishList";
import Cart from "../pages/Cart";
import PlaceOrder from "../pages/PlaceOrder";
import Orders from "../pages/Orders";
import Login from "../Authentication/Login";
import TermsAndConditions from "../pages/TermsAndConditions";
import ReturnPolicy from "../pages/ReturnPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";

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
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/wishlist",
        element : <WishList/>
      },
      {
        path : "/place-order",
        element : <PlaceOrder />
      },
      {
        path : "/orders",
        element : <Orders />
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/termsAndConditions",
        element : <TermsAndConditions/>
      },
      {
        path : "/return-policy",
        element : <ReturnPolicy/>
      },
      {
        path : "/privacy-policy",
        element : <PrivacyPolicy/>
      },
    ],
  },
]);
export default router;
