import React from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Log = () =>{

    const {setUserInfo, loggedInUser} =useContext(UserContext);

    return (
        <div className="flex">
          <div className="p-2 m-1 flex items-center" >
            <label className="font-bold">Enter UserName : </label>
           <input 
           className="border border-solid border-black rounded-md m-2 p-2"
           value={loggedInUser || " "}
           onChange={(e) => setUserInfo(e.target.value)}           
           />
        </div> 
        <div className="p-2 m-1 flex items-center" >

            <button className="px-4 py-2 bg-green-200  rounded-md">save</button>
        </div>

        </div>
    )
}
export default Log;
 
