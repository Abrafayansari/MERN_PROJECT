import React from 'react'
import { Link } from 'react-router-dom'

const Childtwo = () => {
  return (
    <div className='h-[150vh] items-center justify-center gap-3 bg-white flex '>
      <div className='bg-white  h-[900px] flex mt-6 flex-col items-center  w-96'>
<div className=' h-60 mt-4 text-center w-3/4'>
  <h1 className='text-red-700 text-7xl font-bold font-sans'>Know before you go</h1>
</div>
<div className=" text-left p-2 mt-9" >
  <p>Lorem ipsum dolor sit amet consectetu, a velit? Ut velit dicta recusandae aliquid consequatur dignissimos id molestias consectetu, a velit? Ut velit dicta recusandae aliquid consequaturquod.</p>
</div>
<div className='mt-16 flex-col gap-7'>
  <h1 className='mb-3'>Los Angeles</h1>
  <h1 className='mb-3'>San Francisco </h1>
  <h1 className='mb-3'>Mexico </h1>
  <h1 className='mb-3'>Thailand</h1>
  <h1 className='mb-3'>Paris</h1>
  <h1 className='mb-3'>NangaParbat</h1>
</div>
<Link className='mt-14 text-[#ED1C24]' to={"/tour"}> Explore more-- </Link>
      </div>
      <div className=' h-[800px] w-[750px] flex flex-col items-center '>
     <div className='bg-black h-96 w-[600px]'> 

     </div>
     <div className='w-[600px]  flex justify-between items-center mt-2 h-96'>
      <div className='h-[360px] bg-black w-[290px]'>

      </div>
      <div className='h-[360px] bg-black w-[290px]'>

      </div>
     </div>
      </div>
    </div>
  )
}

export default Childtwo
