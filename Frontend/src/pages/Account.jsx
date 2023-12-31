import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector } from 'react-redux'
import Template from '../components/Template';
import { LOGOUT } from '../../redux/actions';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Account() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const globalState = useSelector((state) => state);
  const acitvelink= "bg-[#ED1C24] text-white p-2 px-5 transition-all rounded-full    font-medium"
  const normallink = " text-white p-2 px-5 hover:text-[#ED1C24]  font-medium"
  return (<>    <Helmet>
    <style>

      {"body{background-image: url('https://wallpaperbat.com/img/54482-full-screen-wallpaper-desktop.jpg')}"}
    </style>
  </Helmet> <Template>
    
     
     <div className='flex flex-col mt-12 '>
      <div className='flex  gap-x- mt-10   justify-center items-stretch  '>
      <NavLink  to={"/account/profile"} className={({isActive})=> isActive ? acitvelink:normallink} >My profile</NavLink>
      <NavLink
    to={"/account/bookings"} className={({isActive})=> isActive ? acitvelink:normallink}>My bookings </NavLink>
      </div>
      <div className=' h-96 mt-16 w-[100vw]'><Outlet/></div>
     </div>
     
   
    
    </Template>
     </>

  )
}
