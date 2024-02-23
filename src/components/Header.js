// import Title from "./Title";

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import React from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"


const Header = () => {

// let btnName="Login";
const [btnName, setBtnName] =useState("Login");

const {loggedInUser}= useContext(UserContext)
// console.log(loggedInUser);

const onlineStatus= useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg" >
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}   />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            OnLine Status: {onlineStatus ? "✅": "❌"};
          </li>
          <li  className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li  className="px-4">
            <Link to="/about">About</Link>
         </li>
         
          <li  className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li  className="px-4">Cart</li>
          <button
           className="login" 
           onClick={() => {
            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            
           }}
           >
            <Link to="/log"> {btnName}</Link>
           
         </button>
         <li  className="px-4 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;