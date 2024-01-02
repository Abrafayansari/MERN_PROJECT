import React from 'react'
import App from '../../React-spring/main'


const Childone = () => {
  return (
    <div id="firstchild" className="flex  h-[100vh] bg-[url('https://wallpaperaccess.com/full/345330.jpg')] bg-cover  w-[100%] flex-col  ">
   <div  className="text-white h-[100vh]  w-[100vw] rounded-md bg-black flex flex-col bg-opacity-40  text-[50px] font-semibold   ">
     {/* <h1 className='mt-40 ml-[7vw]'>Adventure Awaits,</h1> <h1 className='ml-[14vw]'>Explore More</h1>  */}
   <div className=" flex flex-col w-[100vw] justify-center items-center" >
   <App/>
   </div>
    </div>
   
   </div>
  )
}
// #ED1C24
export default Childone
