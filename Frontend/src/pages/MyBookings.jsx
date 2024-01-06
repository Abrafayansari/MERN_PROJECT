import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FaLongArrowAltRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

export default function MyBookings() {
  const navigate=useNavigate()
  const userstate=useSelector(state=>state.User)
  const [info,setinfo] = useState([])
  const Notanybookings=()=>{
    return(<>
    <div className='mt-16 text-[#415161] ml-[4vw]'><h1 className='text-2xl'>You don't have any booked places yet </h1>
    <button onClick={()=>navigate("/tour/all")} className='mt-8 text-white rounded-md p-2 flex items-center justify-between bg-[#ED1C24] '>
      Book Now<FaLongArrowAltRight  className='ml-3'/> 
      
    </button>
    </div>
    </>)
  }
const UserBookings=async()=>{
  
  
  
  await axios.post("http://localhost:5003/finduserplace",{
    user:userstate.loginuser?.userid
  }).then((res)=>{setinfo(res.data);console.log(info);}).catch((e)=>console.log(e))
}
useEffect(() => {
  UserBookings()
}, [])


  return (
    <div className='h-[100vh] w-[100vw] '>
         < h1 className=" text-[#415161] font-bold ml-[9vw] text-4xl " >My Bookings   </h1>
         
      <div className='flex gap-7 ml-[5vw]'>
{info.length>=1 ? info.map((item,index)=>{
  return(
  <div key={index} className='flex'>  

    <div style={{backgroundImage:`url(${item.place.photoone})`}} className='h-40 w-40 rounded-full ml-[5vw] bg-cover  mt-16 '>
        
        </div>
        <div className='h-40  flex flex-col  mt-16 gap-8'>
        <h1 className='text-[#415161] text-2xl font-bold'> Destination: <span className='text-xl font-normal'>{item.place.place}</span></h1>
        <h1 className='text-[#415161] text-2xl font-bold'> From:<span className='text-lg font-normal'>{item.checkIn}</span></h1>
        <h1 className='text-[#415161] text-2xl font-bold'> to:<span className='text-lg font-normal'>{item.checkOut}</span></h1>
        </div>
  
  
        </div>)

  
}):<Notanybookings/>}




    </div>  
    </div>
  )
}
