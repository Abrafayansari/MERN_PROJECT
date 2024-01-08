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
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US',options);
};

  return (
    <div className='h-screen w-screen '>
         < h1 className=" text-[#415161] font-bold ml-[9vw]  text-4xl " >My Bookings   </h1>
         
      <div className='flex flex-col gap-7 ml-[5vw] w-[40vw]'>
{info.length>=1 ? info.map((item,index)=>{
  return(
  <div key={index} className='flex  w-[50vw] shadow-2xl h-64 items-center rounded-lg border-[1px] mt-10 ml-[5vw]'>  

    <div style={{backgroundImage:`url(${item.place.photoone})`}} className='h-52 drop-shadow-2xl w-[20vw]  ml-[2vw] bg-cover     '> 
        
        </div>
        
        <div className='h-40  flex flex-col  ml-[4vw] mt-14 gap-2'>
        <ol>
        <li className='text-[#415161] text-2xl font-bold'> Destination: <span className='text-xl font-normal'>{item.place.place}</span></li>
        <li className='text-[#415161] text-2xl font-bold'> From:<span className='text-lg font-normal'>{formatDate(item.checkIn)}</span></li>
        <li className='text-[#415161] text-2xl font-bold'> to:<span className='text-lg font-normal'>{formatDate(item.checkOut)}</span></li>
        </ol>
        </div>
  
        
        </div>)

  
}):<Notanybookings/>}




    </div>  
    </div>
  )
}
