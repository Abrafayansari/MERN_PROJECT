import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PLACE } from '../../../redux/actions'
import axios from 'axios'
import Swal from 'sweetalert2'
import { FaLongArrowAltRight } from "react-icons/fa"

export default function All() {
  const navigate=useNavigate( )
  const [loading, setloading] = useState(true)
  const userstate = useSelector(state => state.User)
  const [upload, setupload] = useState([])
  const Fetch = async () => {
    await axios.get("http://localhost:5003/findupload")
      .then((res) => { setupload(res.data); setloading(false) }).catch((e) => console.log(e))
  }

  useEffect(() => {

    Fetch()


  }, [])



  const dispatch = useDispatch()
  return (
    <div className='flex flex-wrap justify-evenly gap-x-6 w-[87vw] ml-[6vw]'>

      {upload.map((item) => {
        return (

          <div key={item.id} className='h-[550px] rounded-2xl mt-9 w-[365px]  flex flex-col bg-white'>
            {userstate.loginuser?.Username ? <Link to={"/bookings"}
              onClick={() => {
                dispatch({
                  type: PLACE,
                  payload: { placeid: item._id, tourname: item.name, price: item.price, place: item.place, photoone: item.photoone, description: item.description }
                })
              }}
              className='h-64 rounded-t-2xl  bg-cover '>
              <img className='h-64 rounded-lg w-[45vw] content-center' src={item.photo} />
            </Link> : <Link to={"/signup"}
              onClick={() => {
                Swal.fire({
                  title: 'please Register first ',
                  text: 'Unauthorized access you are not Registered',
                  icon: 'error',
                })
              }}
              className='h-64 rounded-t-2xl  bg-cover '>
              <img className='h-64  w-[45vw] content-center' src={item.photo} />
            </Link>}

            <div className='flex flex-col w-[350px]'>
              <div className='flex text-[21.6px] font-bold mt-11 text-[#415161]'><h1>{item.name} in {"    "}{item.place}</h1></div>
              <div className='flex items-center  text-[#ED1C24] mt-5'> <span className='text-lg'>{item.price}$</span> <h1 className='text-xs mt-2' >/Person</h1> <h1 className='ml-[8vw] '>
                
                {userstate.loginuser?.Username ?<button onClick={()=>navigate("/bookings")} className='flex justify-center items-center bg-[#ED1C24] text-white rounded-sm  p-2'>Book now<FaLongArrowAltRight className='ml-3' /> </button>:<button onClick={()=>{Swal.fire({
                  title: 'please Register first ',
                  text: 'Unauthorized access you are not Registered',
                  icon: 'error',
                });navigate("/signup")}} className='flex justify-center items-center bg-[#ED1C24] text-white rounded-sm  p-2'>Book Now<FaLongArrowAltRight className='ml-3' /> </button>}</h1></div>
              <div className='mt-3'><p>{item.description}</p></div>
            </div>
          </div>


        )
      })}
    </div>
  )
}
