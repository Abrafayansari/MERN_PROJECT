
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";


import   CustomDropdown from "./Dropdown";
import { ToastContainer } from "react-toastify";
 


function Navbar() {
  function Two(){ 
    return(<>
    <div className="flex justify-between gap-x-2 items-center"> <NavLink className={({ isActive }) => isActive ? acitvelink : normallink} to={"/login"}>Login</NavLink>

<NavLink className={({ isActive }) => isActive ? acitvelink : normallink} to={"/signup"} >Register</NavLink></div>
    
    </>)
  }


  const globalState = useSelector((state) => state)
  const dispatch = useDispatch()
  const acitvelink = "bg-[#ED1C24] text-white p-2 px-5 transition-all rounded-full    font-medium"
  const normallink = " text-white p-2 px-5 hover:text-[#ED1C24]  font-medium"
  return (

    <header  className=" z-10 shadow-lg bg-black bg-opacity-40 hover:shadow-xl flex fixed top-0 left-0 h-16 p-4 items-center justify-between   w-[100vw]">
      <div className="flex items-center ">

      <ToastContainer/>
        <Link
          className="text-2xl flex   items-center font-serif  text-white"
          to={"/home"}
        >
         <h1 className=""> tourimo</h1>
        </Link>

      </div>

      <div className=" flex   justify-between  gap-x-5 mr-10    md:flex   items-center   ">
        <NavLink to={"/"} className={({ isActive }) => isActive ? acitvelink : normallink}>
          Home
        </NavLink>
        
        <NavLink className={({ isActive }) => isActive ? acitvelink : normallink} to={"/about"}>
          About
        </NavLink>

      
        <NavLink to={"/tour/all"} className={({ isActive }) => isActive ? acitvelink : normallink}>
          Tour
        </NavLink>
        
        {globalState.User.loginuser?.Username?<CustomDropdown/>:<Two/> }
        <div>
          
        </div>
      </div>

      
        
    </header>

  );
}

export default Navbar;
