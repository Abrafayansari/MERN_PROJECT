import React from 'react'
import Navbar from '../components/Navbar'
import Aboutone from './About/Aboutone'
import Abouttwo from './About/Abouttwo'
import Footer from '../components/Footer'

export default function About(){
  return (<>
  <Navbar/>
   <div className= "flex flex-col  gap-y-44 h-[100vh] "></div>
   <div><Aboutone/></div>
   <div><Abouttwo/></div>



</>
 )
}
