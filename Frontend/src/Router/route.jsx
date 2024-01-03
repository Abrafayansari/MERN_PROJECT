import {Routes, createBrowserRouter,Route, Outlet, useLocation} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About"
import Careers from "../pages/Careers";
import Magic from   "../pages/Magic";
import Task from "../pages/Task";
import Signup from "../components/Sign up";
import Contactus from "../pages/Contact";
import Responsive from "../components/Responsive";
import Navbar from "../components/Navbar";
import Form from "../todo/Form";
import Login from "../pages/Login/Login" 
import Calculator from "../components/Calculator"
import Cart from "../pages/Cart";
//  const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />
//     },
//     {
//       path:"/about",
//       element:<About/>
//     },
//     {
//       path:"/login",
//       element:<Login/>
//     },
//     {
//       path:"/navbar",
//       element:<Navbar/>
//     },
//     {
//       path:"/careers",
//     element:<Careers/>

//     },
//     {
//       path:"/magic",
//     element:<Magic/>

//     },
//     {
//       path:"/task",
//     element:<Task/>

//     },
//     {
//       path:"/signup",
//     element:<Signup/>

//     },
//     {
//       path: "/contact",
//       element: <Contactus />
//     },
//     {
//       path:"/responsive",
//     element:<Responsive/>

//     },
//     {
//       path: "/form",
//       element: <Form />
  //   },


  // ]);
  import React from 'react'
import Leader from "../components/Leader";
import Nowloggedin from "../pages/Nowloggedin";
import Home from "../pages/HomePage/Home";
import Account from "../pages/Account";
import Tour from "../pages/Tour";
// import Notauthorized from "../pages/Notauthorized";
import Protected from "./protectedroute";
import Notauthorized from "../pages/Notauthorized";
import Profile from "../pages/Profile";
import Acco from "../pages/Acco";

import MyBookings from "../pages/MyBookings"
import { Bookings } from "../pages/Bookings";
import All from "../pages/Tours/All";
import Cultural from "../pages/Tours/Cultural";
import Sightseeing from "../pages/Tours/Sightseeing";
import Walking from "../pages/Tours/Walking";
import { useNavigate } from "react-router-dom";
import BookingForm from "../pages/BookingForm";

  export default function Router() {
    const location=useLocation()
    const Navigate=useNavigate()
    return (<>
      <Routes>
      <Route path="/app" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/task" element={<Task />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/calculator" element={<Calculator />}></Route>
      <Route path="/cart" element={<Cart 
      />}></Route>
      <Route path="/leader" element={<Leader />}></Route>
      <Route path="/bookform" element={<BookingForm />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/nowloggedin" element={<Nowloggedin />}></Route>

      {/* <Route path="/account" element={<Account />}></Route> */}
      <Route path="/notauthorized" element={<Notauthorized />}></Route>
      {/* <Route path="/tour" element={<Tour />}></Route> */}
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/Bookings" element={<Bookings />}></Route>



//===============================protected routes============================================//
      
      <Route path="/account" Component={Protected}>
          <Route path="" element={<Account />} />
        </Route>



        <Route path="/account" element={<Account/>}>
        <Route
            path="profile"
            element={<Profile/>}
          ></Route>
           <Route
          path="accomodations"
          element={<Acco/>}
        ></Route>
         <Route
          path="bookings"
          element={<MyBookings/>}
        ></Route>

        </Route>
        <Route path="/tour" element={<Tour/>}>
       
<Route path="all" element={<All/>}></Route>
<Route path="cultural" element={<Cultural/>}></Route>
<Route path="sightseeing" element={<Sightseeing/>}></Route>
<Route path="walking" element={<Walking/>}></Route>
        </Route >
        </Routes>
    
    
    </>
        
      
    )
  }
  

  