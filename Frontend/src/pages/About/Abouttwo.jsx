import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Abouttwo() {
  useEffect(() => {
    AOS.init({duration: 2000,
    easing: 'ease-out-back', 
    offset: 120,});
  }, []);
  return (
    <div className='h-[180vh]  w-[100vw] '>
      <div data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800">
      <h1 className='text-[#1c262f] text-6xl ml-[7vw] font-semibold'>Why tour with us</h1>
    <div className='h-80 bg-[url("./about2.png")] bg-contain ml-[7vw]  w-[60vw]'>

    </div></div>
        <h1 className='text-[#1c262f] ml-[8vw] mt-20 text-5xl font-bold'>
          Our mission 
        </h1>
        <p className='ml-[8vw]  mt-10 text-[#415161] text-xl w-[60vw]'>Our commitment extends beyond delivering exceptional travel experiences. We aim to promote sustainable and responsible tourism, respecting the environments and communities we encounter. Through innovation and collaboration, we aspire to be a catalyst for positive change within the global travel industry.</p>
        <div className='h-[50vh] w-[80vw] flex justify-start gap-9 mt-14  ml-[8vw] '>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='h-full w-[50%] bg-cover bg-[url("https://cdn.sanity.io/images/6sugrgl1/production/9e5240303b393090493918509cf6aab4cda1c465-1440x961.jpg?rect=0,162,1440,639&w=1988&h=882&fit=crop")]'></div>
            <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='h-full w-[30%] bg-cover bg-[url("https://wallpapercave.com/wp/wp3310001.jpg")]'></div>
        </div>
      </div>
  )
}
