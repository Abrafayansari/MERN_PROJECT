import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import  react from "react"
import {Helmet} from "react-helmet"
import Template from "../../components/Template";
import Childone from "./Childone"
import Childtwo from "./Childtwo"
import Childthree from "./Childthree"
function Home() {

    

    return (<>
<Helmet>
      <style>

        {"body{background-image: url('')}"}
      </style>
    </Helmet>
   <Navbar/>
   <div id="parent" className= "flex flex-col gap-y-44 h-[100vh] ">
   <div><Childone/></div>
   <div><Childtwo/></div>
   <div><Childthree/></div>
<div><Footer/></div>



</div>



   </> );
  }
  
  export default Home;
  
