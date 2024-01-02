import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from "react-icons/hi";

const Childtwo = () => {
  useEffect(() => {
    AOS.init({duration: 2000,
    easing: 'ease-out-back', 
    offset: 120,});
  }, []);
  const navigate=useNavigate()
  
  return (
    <div className='h-[150vh] items-center justify-evenly ml-[4vw] bg-white flex '>
      <div className='bg-white  h-[900px] flex mt-6 flex-col items-center  w-[390px]'>
<div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=' mt-4 text-center w-[30vw]'>
  <h1 className='text-[#ED1C24] text-8xl font-bold mb-16 '>Know before you go</h1>
</div>
<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className=" text-left p-2   " >
  <p className='text-[#415161] text-[20px]'>Lorem ipsum dolor sit amet consectetu, a velit? Ut velit dicta recusandae aliquid consequatur dignissimos id molestias consectetu, a velit? Ut velit dicta recusandae aliquid consequaturquod.</p>
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
     <div data-aos="fade-down-left" className='bg-black h-96 w-[600px]'> 

     </div>
     <div className='w-[600px]  flex justify-between items-center mt-2 h-96'>
      <div  data-aos="flip-left" className='h-[360px] bg-black w-[290px]'>

      </div>
      <div  data-aos="flip-right" className='h-[360px] bg-black w-[290px]'>

      </div>
     </div>
      </div>
    </div>
  )
}

export default Childtwo
