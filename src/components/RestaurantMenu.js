import React, { useState } from "react";
import Shimmer from "shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () =>{

  const {resId} = useParams();

  const [showIndex,setShowIndex]= useState(0);

   const resInfo = useRestaurantMenu(resId);
//    console.log(resInfo);

    if (resInfo===null) {   return <Shimmer />;   }

    const {name , cuisines , costForTwo} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

      const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       )
        // console.log(categories);

    return  (
        <div className="text-center">
            <h1 className="font-bold text-3xl mb-5 mt-3">{ name}</h1>
            <p className="font-bold text-lg ">{cuisines.join(" , ")} - {costForTwo}</p>
                 
           {
            categories.map((category , index) =>(
             <MenuCategory key={index}  data={category?.card?.card }
                showItems={ index === showIndex ? true : false}
                setShowIndex={()=> setShowIndex(index === showIndex ? -1 : index)}
           />
            ))}
        </div>
    )
}
export default  RestaurantMenu; 