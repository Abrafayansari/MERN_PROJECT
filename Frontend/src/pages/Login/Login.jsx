import React, {  useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios"
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN } from "../../../redux/actions";
import Footer from "../../components/Footer";
import "../Style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from "react-toastify";



export default function Login() {
  useEffect(() => {
    AOS.init({duration: 2000,
    easing: 'ease-out-back', 
    offset: 120,});
  }, []);
const dispatch=useDispatch()
const globalState = useSelector((state)=>state)
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [login,setlogin]=useState(null)

  const [User,setuser]=useState({})
const navigate=useNavigate()
  const handler =async (e) => {
    e.preventDefault();
   
   
    await axios.post("http://localhost:5003/find",{
   Email:Email,
   Password:Password
    }).then(response => {
  
        console.log(response)
        setlogin(true)
        const Users=response.data
        const User=Users[0]
       const Username=User.Username
       const userid=User._id
       console.log(Username)
               dispatch({
          type:LOGIN,
          payload: {Username:Username,Email:Email,Password:Password,userid:userid }
          
        })
        navigate("/")
      }
      )
    
    .catch((e)=>{console.log(e);setlogin(false);toast.error("Invalid Email or password")})
  //   login === true? "successfully loggined":"Invalid Username or Password"
   
   
};

<style>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@600&display=swap');
</style>

  return (
    <>
    
    <Navbar/>
 
    <div data-aos="zoom-out" className="flex flex-col items-center justify-between
    ">
    <Helmet> 
      <style>

        {"body{background-image: url('https://cdn.wallpapersafari.com/16/36/Qu70Zb.jpg')}"}
      </style>
    </Helmet>
  
      <form  className="h-96 bg-[url('')] bg-cover w-96 bg-opacity- bg-white bg-opacity- rounded-2xl" onSubmit={handler}>
      

        <div className=" flex flex-col gap-2 items-center ">
          <h2 style={{fontFamily:""}} className="text-4xl text-black  font-bold text-center  mt-10  ">Login</h2>
          
         
         
      
         
        <div className="flex justify-center mb-7 mt-16"> <label className=" " htmlFor="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>
</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-b border-gray-500 focus:outline-none focus:border-blue-500 w-[]"
          /></div>
          <div className="flex">
          <label  className="" htmlFor="Pass"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
</svg>
</label>
          <input
            type="password"
            required
            name="pass"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
            className=" border-b border-gray-500 focus:outline-none focus:border-blue-500"
          /></div>
          <button type="submit"  className="  w-[150px] p-1 text-lg mt-8 mb-4 text-white bg-[#ED1C24]   border-1 border-black rounded-[19px]">
            Login
          </button>
          {login === true? <div className="text-green-600">login sucessfully,back to <Link to={"/"}  >home page</Link> </div>: "" }
        </div>
      </form>
     
      </div>
<div className="w-full" style={{position:"fixed", bottom:"0", left:"0" }}>
      <Footer/>
      </div>
     
      
    </>
  )}

