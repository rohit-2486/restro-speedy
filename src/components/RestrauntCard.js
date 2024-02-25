// import React, { useContext } from 'react';
 
import { CDN_URL } from "../utils/constant";
// import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const {resList}=props;

   // const {loggedInUser}= useContext(UserContext);

  const {
   cloudinaryImageId, 
   name,
   cuisines,
   avgRating,
   sla,
   costForTwo,
   areaName,
  } =  resList?.info;

//   console.log(sla)

   return (
      // <div className="res-card ml-6 mt-6 p-4 w-[335px] rounded-xl bg-gray-200 hover:bg-gray-300 shadow-md hover:shadow-lg" >
      <div className="res-card ml-6 mt-6 p-4 w-[335px] rounded-xl bg-gray-200 hover:bg-gray-300 shadow-lg">
         <img className="rounded-lg" 
         src={CDN_URL + cloudinaryImageId}
         alt="food-photo "/>
         <h3 className="font-medium text-lg truncate">{name}</h3>
         <div className="flex ">
         <h4 className="font-medium bg-red-500 w-14 h-6 mr-6 text-sm rounded-md">⭐{avgRating}  </h4>
         <h4 className="font-medium"> 🕒 {sla.slaString}</h4>
         </div>
         <h4 className="truncate">{cuisines.join(", ")}</h4>
         <h4>{costForTwo} </h4>
         <h4>📍{areaName}</h4>
         {/* <h4>user:{loggedInUser}</h4> */}

      </div>

   );
};

export default RestaurantCard;