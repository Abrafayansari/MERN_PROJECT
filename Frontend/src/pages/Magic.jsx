import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Magic() {
const [joke,setjoke]=useState([])
useEffect(()=>{
  axios.get("/api/create")
  .then((res)=>setjoke(res.data))

})
  return (<>
  {joke.map((item)=>{
    return <div>{item.title}
    {item.body}</div>
  })}
 
</>
   
  )
}




