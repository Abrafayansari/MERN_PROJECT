// CustomDropdown.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/actions';

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const globalState=useSelector(state=>state)
  const dispatch=useDispatch()
const navigate=useNavigate()
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block cursor-pointer text-left">
      <div>
        <div
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white hover:text-[#ED1C24] items-center  focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
          id="options-menu"
          onClick={toggleDropdown}
        >
          {globalState.User.loginuser?.Username}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

        </div>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          onBlur={closeDropdown}
          tabIndex="0"
        >
          <div className="py-1">
            <NavLink
              to={"/account/profile"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Account 
            </NavLink>
            <button
              onClick={()=>{dispatch({type:LOGOUT});navigate("/")}}
              className="block px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Logout
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
