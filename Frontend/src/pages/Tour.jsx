import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import place from './Tours/Allplace.json'
import { NavLink,Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PLACE } from '../../redux/actions'
export default function Tour() {
  const normal="text-2xl  text-gray-600 hover:text-[#ED1C24]"
  const active="text-2xl  text-[#ED1C24]"
 const dispatch=useDispatch()
  return (
    <div className=''>
        <Navbar/>
      <div className='flex w-[100vw] flex-wrap gap- h-[100vh]'>
<div className="text-4xl h-[90vh] w-[100vw] mb-36 bg-cover bg-[url('https://wallpaper.dog/large/17164900.jpg')]"><h1 className='text-white text-7xl mt-52 ml-24 font-bold  '>Tours</h1></div>
<div className='h-40  ml-24 mb-14 content-center text-left   w-[50vw]'>
  <h1 className='text-5xl text-[#161c2f] font-bold mb-6'>Our tours</h1>
  <p className='text-lg mb-28 text-[#415162]'>The lively and glamorous cities of San Francisco and Los Angeles contrast with the rugged beauty of the California coast and grandeur of Yosemite National Park.</p>
</div>
<div className='w-1/2  h-12 flex justify-between ml-24'>
  
  <NavLink to={"/tour/all"} className={({ isActive }) => isActive ? active : normal}>All</NavLink>
  <NavLink to={"/tour/cultural"} className={({ isActive }) => isActive ? active : normal}>Cultural</NavLink>
  <NavLink to={"/tour/sightseeing"} className={({ isActive }) => isActive ? active : normal}>Sightseeing</NavLink>
  <NavLink to={"/tour/walking"} className={({ isActive }) => isActive ? active : normal}>Walking</NavLink>
</div>
<div className=' '>
  <Outlet/> 
  {/* <div className='flex flex-wrap justify-evenly gap-y-3 w-[87vw] ml-[6vw]  '>
      {place.map((item)=>{
    return(
        
<div className='h-[550px] rounded-2xl mt-9 w-[365px]  flex flex-col bg-white'>
  <Link 
  to={"/bookings"}
  onClick={()=>{
dispatch({
  type:PLACE,
  payload:{ tourid:item.id, tourname:item.name,price:item.price,place:item.place,photoone:item.photoone}
})
  }}
  className='h-64 rounded-t-2xl bg-cover '>
    <img className='h-64  w-[45vw] content-center' src={item.photo} />
  </Link> 
  <div className='flex flex-col w-[350px]'>
<div className='flex text-[21.6px] font-bold mt-11 text-[#415161]'><h1>{item.name} in {"    "}{item.place}</h1></div>
<div className='flex items-center  text-[#ED1C24] mt-5'> <span className='text-lg'>{item.price}$</span> <h1 className='text-xs mt-2' >/Person</h1></div>
<div className='mt-3'><p>{item.description}</p></div>
  </div> 
</div>


    )
  })}
    </div> */}
</div>
      </div>
    </div>
  )
}
