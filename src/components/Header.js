// import Title from "./Title";

import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName="Login";
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const onlineStatus = useOnlineStatus();

  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);

  return (
    <div>

    <div className="  shadow-2xl">
      <div>
        <ul>
          <li className="px-4 bg-green-300 w-full">
           {onlineStatus ? "  you are online :✅" : "you are offline❌"};
          </li>
        </ul>
      </div>
      <div className="flex justify-between bg-black ">
        <div className="logo-container">
          <img className="w-24 h-24  ml-10 my-2 rounded-full" src={LOGO_URL} />
        </div>

        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-2 text-white text-2xl hover:text-red-400 ">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2 text-white text-2xl hover:text-red-400">
              <Link to="/about">About</Link>
            </li>

            <li className="px-2 text-white text-2xl hover:text-red-400">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 text-white text-2xl hover:text-red-400 font-bold">
              <Link to="/cart">Cart -( {cartItem.length} items)</Link>
            </li>
            <button
              className="login px-2 text-white text-2xl hover:text-red-400"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              <Link to="/log"> {btnName}</Link>
            </button>
            <li className=" font-bold px-2 text-white text-2xl hover:text-red-400  ">{loggedInUser}</li>
          </ul>
        </div>
      </div>     
    </div>
    <div className="bg-slate-600 flex justify-between p-2 w-screen h-90">
    <img className="w-63 h-72 mr-1 hover:filter hover:brightness-75" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"></img>
   <img className="w-63 h-72 mr-1 hover:filter hover:brightness-75" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"></img>  
    <img className="w-63 h-72 mr-1 hover:filter hover:brightness-75" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"></img>
    <img className="w-63 h-72 mr-1 hover:filter hover:brightness-75" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"></img>
</div>


    </div>
  );
};

export default Header;
