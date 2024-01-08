import React from 'react'
import Navbar from '../components/Navbar'
import Aboutone from './About/Aboutone'
import Abouttwo from './About/Abouttwo'
import Footer from '../components/Footer'
import Template from '../components/Template'

export default function About(){
  return (<>
  <Template>
   <div className= "flex flex-col  gap-y-44 h-[100vh] "></div>
   <div><Aboutone/></div>
   <div><Abouttwo/></div>


   </Template>
</>
 )
}
