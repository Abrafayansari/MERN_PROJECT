import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Success() {
  const navigate=useNavigate()
  useEffect(() => {
    Swal.fire({
         title: 'Payment Successful!',
           text: 'Thank you for booking your tour with us.',
           icon: 'success',
       })
  setTimeout(() => {
    navigate("/")
  }, 2000);
   
    
  },[])
  
  return (
    <div>
      
    </div>
  )
}
