import { Outlet } from "react-router-dom";
import useAuth from "../Hoooks/useAuth";
import React from "react";
import Notauthorized from "../pages/Notauthorized";
export default function Protected(){
const isauthorized=useAuth()
return isauthorized == true ? <Outlet/> : <Notauthorized/>
}