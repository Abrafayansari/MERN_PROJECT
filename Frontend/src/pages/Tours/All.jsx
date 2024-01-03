import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { PLACE } from '../../../redux/actions'
import axios from 'axios'

export default function All() {
  const [upload,setupload]=useState([])
useEffect(async() =>{
await axios.get("http://localhost:5003/findupload")
.then((res)=>setupload(res.data)).catch((e)=>console.log(e))

}, [])



  const dispatch=useDispatch()
  return (
    <div className='flex flex-wrap justify-start gap-x-6 w-[87vw] ml-[6vw]'>
      {JSON.stringify(upload)}
      {upload.map((item)=>{
    return(
        
<div className='h-[550px] rounded-2xl mt-9 w-[365px]  flex flex-col bg-white'>
  
  <Link to={"/bookings"} 
   onClick={()=>{
    dispatch({
      type:PLACE,
      payload:{ tourid:item.id, tourname:item.name,price:item.price,place:item.place,photoone:item.photoone}
    })
      }}
  className='h-64 rounded-t-2xl  bg-cover '>
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
    </div>
  )
}
