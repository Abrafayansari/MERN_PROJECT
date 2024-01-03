import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
export const Bookings = () => {
  const globalState=useSelector(state=>state)
  const [formData, setFormData] = useState({
    name: '',
    place:"",
    email:"",
    phone: '',
    price: '',
    checkin: '',
    checkout: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( {  
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:5003/bookplace",{
      user:globalState.User.loginuser._id, place:globalState.Place.currentplace._id,name:formData.name,phone:formData.phone,checkIn:formData.checkin,checkOut:formData.checkout,email:formData.email,price: globalState.Place.currentplace.price
    }).then(()=>toast.success("your tour will be booked")).catch((e)=>{ console.log(e); toast.error("something went wrong")})
   
  };
const bgpicture=globalState.Place.currentplace.photoone
  return (<div>
  <Navbar/>
  <div className='h-[100vh]'>
     <div style={{backgroundImage:`url(${globalState.Place.currentplace.photoone})`}} className="h-[90vh]  w-[100vw] bg-cover flex flex-col justify-center">
      <div className='h-[90vh] w-[100vw] bg-black bg-opacity-50 flex flex-col justify-center'>
     <h1 className='text-white text-7xl ml-[5vw]  font-medium '>{globalState.Place.currentplace.place}</h1>
      <h1 className='text-white text-5xl ml-[8vw]'>{globalState.Place.currentplace.tourname}</h1>
     </div></div>
     <div className='flex flex-col ml-[8vw] h-[30vh] justify-between mt-20'>

      <h1 className='text-4xl ml-[30vw] font-bold text-[#364452] underline'>Booking details </h1>
      <div className='text-2xl mt-20 text-[#364452]'><h1>{globalState.Place.currentplace.place}</h1><h1 className='text-[#ED1C24] mt-2 mb-2'>
        {globalState.Place.currentplace.price}$ <span className='text-sm'>/person</span> </h1></div>
      <div className='flex  gap-4 text-[#40505f] w-[50vw]'><h1>{globalState.Place.currentplace.description}</h1></div>
     </div>
     <div className="ml-[7vw] w-fit mt-28 ">
      <form onSubmit={handleSubmit} className=" mx-auto bg-white p-8  rounded-md">
       <div className='flex flex-col items-center justify-center w-[40vw]'>
        <div className="mb-4 flex items-center justify-start
        ">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-[25vw]  ml-2  border rounded-md"
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-start">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-[25vw] ml-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-start">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-[25vw] border ml-2 rounded-md"
            required
          />
          
        </div>
      
        <div className="mb-4 flex items-center justify-start">
          <label htmlFor="checkin" className="block text-sm mr-3 font-medium text-gray-600">
            Check-in:
          </label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            className="mt-1 p-2 w-[25vw] ml-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 flex items-center justify-start">
          <label htmlFor="checkout" className="block  text-sm font-medium text-gray-600">
            Check-out:
          </label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            className="mt-1 p-2 w-[25vw] ml-2 border rounded-md"
            required
          />
        </div>
        <div className="mt-4 flex items-center justify-start">
          <button
            type="submit"
            className="bg-[#ED1C24] text-white py-2 px-4 rounded-md  focus:outline-none focus:border-blue-300"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
     </div>
    </div>) 
}
