 
import React from 'react';
import RestaurantCard from "./RestrauntCard";
import { useState ,useEffect } from "react";
// import resList from "../utils/mockData";
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import { Restaurant_API } from '../utils/constant';
import Shimmer from  './Shimmer';




const Body = () => {

  const [ListOfRestaurant , setListOfRestaurant] = useState([]);

  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText , setSearchText] = useState("");

  // console.log(ListOfRestaurant);

  useEffect( ()=>{
    fetchData();
  },[]
  );

  const fetchData = async() =>{
    const data = await fetch( Restaurant_API );
      const json = await data.json();
      // console.log(json);

//  optional chaining
      setListOfRestaurant(()=> json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(()=> json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    const onlineStatus= useOnlineStatus();
    if(onlineStatus=== false) {
      return (
        <h1>
          you are looking offline, please checks the internet connection
        </h1>
      )
    }

    const handleSearch = () => {
      const filteredRestaurant = ListOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredRestaurant(filteredRestaurant);
    }

   const handleKeyPress =  event=>{
      if(event.key === "Enter"){
        handleSearch();
      }
   }

    if(ListOfRestaurant===null)  { return <Shimmer/>}

  return (
     <div className="body">

        <div className="filter flex">

        <div className="search m-1 p-2">
         
          <input
           type="text" 
           className="border border-solid border-black rounded-md m-2 p-2"
           value={searchText}
           onChange={(e)=>setSearchText(e.target.value)}
           onKeyPress={handleKeyPress}
           />
           <button
            className="px-4 py-2 bg-green-200 m-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

          <div className="p-2 m-1 flex items-center">

          <button 
              className="filter-btn px-4 py-2 bg-gray-200 rounded-md"
            onClick={()=>{
            const filteredList= filteredRestaurant.filter(
            (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
           }}
           >
            top-rated Restaurant
           </button>
          </div>
         
        </div>

        <div className="flex flex-wrap">
                     
     
       {filteredRestaurant.map((restaurant)=>(
     
       <Link 
         key={restaurant.info.id} 
         to={"/restaurant/"+ restaurant.info.id }>
          <RestaurantCard resList={restaurant}/>
       </Link>
       ))}       

       </div>

     </div>
  );

};

export default Body;


