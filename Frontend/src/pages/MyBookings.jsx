import React from 'react'
import Footer from '../components/Footer'


export default function MyBookings() {
  return (
    <div className='h-[100vh] w-[100vw] '>
         < h1 className=" text-[#415161] font-bold ml-[9vw] text-4xl " >My Bookings</h1>
    <div className='flex gap-7 ml-[5vw]'>
      <div className='h-40 w-48 ml-[5vw] bg-cover bg-[url("https://images6.alphacoders.com/109/1092054.jpg")] mt-16 '>
        
      </div>
      <div className='h-40  flex flex-col  mt-16 gap-8'>
      <h1 className='text-[#415161] text-2xl font-bold'> destination: <span className='text-xl font-normal'>Tokyo</span></h1>
      <h1 className='text-[#415161] text-2xl font-bold'> From:<span className='text-lg font-normal'>5/1/2024</span></h1>
      <h1 className='text-[#415161] text-2xl font-bold'> to:<span className='text-lg font-normal'>27/1/2024</span></h1>
      </div>
    </div>
    
    </div>
  )
}
