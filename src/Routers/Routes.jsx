import {
  createBrowserRouter,
} from "react-router-dom";
import MainHome from "../Components/MainHome";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/", 
        element: <Home></Home>,
      },
    ],
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Register></Register>
  }
]);

export default router;
