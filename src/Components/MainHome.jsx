import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainHome() {
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}
