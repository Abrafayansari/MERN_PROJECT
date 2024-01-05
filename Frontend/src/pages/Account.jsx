import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import Template from '../components/Template';
import { LOGOUT } from '../../redux/actions';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Profile from './Profile';
import MyBookings from './MyBookings';


export default function Account() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const globalState = useSelector((state) => state);
  const acitvelink= "bg-[#ED1C24] text-white p-2 px-5 transition-all rounded-full    font-medium"
  const normallink = " text-[#ED1C24] p-2 px-5 hover:text-[#ED1C24]  font-medium"
  return (<>    <Helmet>
    <style>

      {"body{background-image: url('')}"}
    </style>
  </Helmet> <Navbar/>
    
     
     <div className='flex flex-col mt-12 '>
      <div className='flex  gap-x- mt-28 ml-[9vw]   justify-start  '>
     < h1 className=" text-[#415161] font-bold text-4xl " >My profile</h1>
      {/* <NavLink
    to={"/account/bookings"} className={({isActive})=> isActive ? acitvelink:normallink}>My bookings </NavLink> */}
      </div>
      <div className=' h-96 mt-16 w-[100vw]'>
       <div className='flex justify-start ml-[9vw]'> <Profile/></div>
       <div className=''><MyBookings/></div>
      
      </div>
     
     </div>
   
   
    
    
     </>

  )
}
