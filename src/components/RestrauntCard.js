import React from 'react';
 
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resList}=props;

  const {
   cloudinaryImageId, 
   name,
   cuisines,
   avgRating,
   sla,
   costForTwo,
   areaName,
  } =  resList?.info;

   return (
      <div className="res-card m-4 p-4 w-[250px] rounded-xl bg-gray-200 hover:bg-gray-300" >
         <img className="rounded-lg" 
         src={CDN_URL + cloudinaryImageId}
         alt="food-photo "/>
         <h3 className="font-medium text-lg truncate">{name}</h3>
         <h4 className="font-medium  text-sm">⭐{avgRating} . {sla.slaString} </h4>
         <h4 className="truncate">{cuisines.join(", ")}</h4>
         <h4>{costForTwo} </h4>
         <h4>📍{areaName}</h4>

      </div>

   );
};

export default RestaurantCard;