import {
  createBrowserRouter,
} from "react-router-dom";
import MainHome from "../Components/MainHome";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import JobDetails from "../Components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../Components/MyApplications";
import NotFound from "../Components/NotFound";
import AddJob from "../Components/AddJob";
import MyPostedJobs from "../Components/MyPostedJobs";
import ViewApplications from "../Components/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/", 
        element: <Home></Home>,
      },
      {
        path:"/jobs/:id",
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:"/myApplications",
        element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
      },
      {
        path:"/addJob",
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path:"/myPostedJobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/ViewApplications/:job_id",
        element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      }
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
