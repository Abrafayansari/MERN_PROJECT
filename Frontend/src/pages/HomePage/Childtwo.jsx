import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Childtwo = () => {
  const globalState=useSelector(state=>state)
  useEffect(() => {
    AOS.init({duration: 2000,
    easing: 'ease-out-back', 
    offset: 120,});
  }, []);
  const navigate=useNavigate()
  
  return (
    <div className='h-[150vh] items-center w-screen justify-evenly flex  bg-white  '>
      <div className='bg-white  h-[900px] flex mt-6 flex-col items-center  w-[30vw]'>
<div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' mt-4 text-center w-[25vw]'>
  <h1 className='text-[#ED1C24] text-7xl font-bold mb-16 '>Know before you go</h1>
</div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className=" text-left p-2   " >
  <p className='text-[#415161]
   ml-[4vw] text-[20px]'>Explore the world with ease and excitement as you embark on unforgettable journeys with tourimo. Discover the beauty of diverse destinations, immerse yourself in unique cultures, and create memories that will last a lifetime.</p>
</div>
<div data-aos="zoom-out-down" className='mt-16 flex-col gap-7 text-[#415161]'>
  <h1 className='mb-3'>Los Angeles</h1>
  <h1 className='mb-3'>San Francisco </h1>
  <h1 className='mb-3'>Mexico </h1>
  <h1 className='mb-3'>Thailand</h1>
  <h1 className='mb-3'>Paris</h1>
  <h1 className='mb-3'>NangaParbat</h1>
</div>
<button data-aos="zoom-out-down" onClick={()=>{
  navigate("/tour/all")
}} className=' mt-14 bg-[#ED1C24]  rounded-lg flex items-center gap-5 p-4 text-white'> <h1>Explore more</h1><h1><HiArrowNarrowRight /></h1> </button>
      </div>
      <div className=' h-[800px] w-[750px] flex flex-col items-center '>
     <div data-aos="fade-down-left" className='bg-[url("https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1556016297737-7BZLAV83VOV0BS9VQUQH/_ABX2402.jpg?format=2500w")] bg-cover h-96 w-[600px]'> 

     </div>
     <div className='w-[600px]  flex justify-between items-center mt-2 h-96'>
      <div  data-aos="flip-left" className='h-[360px] bg-cover bg-[url("https://wallpapers.com/images/hd/sunset-in-dubai-t2x9l1xxgfp9zb0g.jpg")] w-[290px]'>

      </div>
      <div  data-aos="flip-right" className='h-[360px] bg-[url("https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww")] bg-cover w-[290px]'>


      </div>
    
     </div>

      </div>
    </div>
  )
}

export default Childtwo
