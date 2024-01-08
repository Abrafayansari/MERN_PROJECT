import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../components/Footer';
import { AiTwotoneSafetyCertificate } from "react-icons/ai"
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
    <div className='h-80 flex  flex-wrap items-start justify-start mt-4 ml-[7vw]  w-[60vw]'>
    <div className='h-1/2 w-1/2 flex flex-col  '>
      <div className=' h-1/3 w-full'><img className='bg-white h-16 w-20' src="./safety.PNG"  /></div>
    <div className=' h-1/3 w-full text-3xl font-bold text-[#415161]'><h1>Safety First</h1></div>
    <div className=' h-1/3 w-full text-[#415161]'><h1>hn bhai khus hai ya mood kaharb  huahuahsd</h1></div>
    </div>
      <div className='h-1/2 w-1/2 '>
        <div className=' h-1/3 w-full '><img className='bg-white h-16 w-14' src="./person.PNG"  /></div>
      <div className=' h-1/3 w-full text-3xl font-bold text-[#415161]'><h1>Best Guides</h1></div>
      <div className=' h-1/3 w-full text-[#415161]'><h1>hn bhai khus hai ya mood kaharb  huahuahsd</h1></div>
      </div>
      <div className='h-1/2 w-1/2 '>
        <div className=' h-1/3 w-full '><img className='bg-white h-16 w-20' src="./book.PNG"  /></div>
      <div className=' h-1/3 w-full text-3xl font-bold text-[#415161]'><h1>Experience</h1></div>
      <div className=' h-1/3 w-full text-[#415161]'><h1>hn bhai khus hai ya mood kaharb  huahuahsd</h1></div>
      </div>
      <div className='h-1/2 w-1/2 '>
        <div className=' h-1/3 w-full '><img className='bg-white h-14 w-20' src="./camera.PNG"  /></div>
      <div className=' h-1/3 w-full text-3xl font-bold text-[#415161]'><h1>Memories</h1></div>
      <div className=' h-1/3 w-full text-[#415161]'><h1>hn bhai khus hai ya mood kaharb  huahuahsd</h1></div>
      </div>
    </div></div>
        <h1 className='text-[#1c262f] ml-[8vw] mt-20 text-5xl font-bold'>
          Our mission 
        </h1>
        <p className='ml-[8vw]  mt-10 text-[#415161] text-xl w-[60vw]'>Our commitment extends beyond delivering exceptional travel experiences. We aim to promote sustainable and responsible tourism, respecting the environments and communities we encounter. Through innovation and collaboration, we aspire to be a catalyst for positive change within the global travel industry.</p>
        <div className='h-[50vh] w-[80vw] flex justify-start gap-9 mt-14  ml-[8vw] '>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='h-full w-[50vw] bg-cover bg-[url("https://cdn.sanity.io/images/6sugrgl1/production/9e5240303b393090493918509cf6aab4cda1c465-1440x961.jpg?rect=0,162,1440,639&w=1988&h=882&fit=crop")]'></div>
            <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1800" className='h-full flex w-[30vw] bg-cover bg-[url("https://wallpapercave.com/wp/wp3310001.jpg")]'>


      
     </div>
        </div>
        <div className='mt-5'><Footer/></div>
      </div>
  )
}
