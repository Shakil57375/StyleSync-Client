import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
      }
    ],
  },
]);
export default router;
