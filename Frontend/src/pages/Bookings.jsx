import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const Bookings = () => {
const globalState=useSelector(state=>state)
const bgpicture=globalState.Place.currentplace.photoone
  return (<div>
  <Navbar/>
  <div className='h-[100vh]'>
     <div style={{backgroundImage:`url(${globalState.Place.currentplace.photoone})`}} className="h-[90vh]  w-[100vw] bg-cover flex flex-col justify-center">
      <div className='h-[90vh] w-[100vw] bg-black bg-opacity-50 flex flex-col justify-center'>
     <h1 className='text-white text-7xl ml-[5vw]  font-medium '>{globalState.Place.currentplace.place}</h1>
      <h1 className='text-white text-5xl ml-[8vw]'>{globalState.Place.currentplace.tourname}</h1>
     </div></div>
     <div className='flex flex-col ml-[8vw]  mt-20'>
      <h1 className='text-3xl'>Booking details </h1>
      <div className='flex gap-4'><h1>Name</h1><span>{globalState.User.loginuser?.Username}</span></div>
     </div>
     </div>
    </div>) 
}
