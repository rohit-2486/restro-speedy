 
import React from 'react';
import RestaurantCard from "./RestrauntCard";
import { useState ,useEffect  } from "react";
// import resList from "../utils/mockData";
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';
import { Restaurant_API } from '../utils/constant';
import Shimmer from  './Shimmer';
// import UserContext from "../utils/UserContext";




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
      const filteredRestaurant = ListOfRestaurant.filter((res) => 
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurant(filteredRestaurant);
    }

   const handleKeyPress =  event=>{
      if(event.key === "Enter"){
        handleSearch();
      }
   }

    if(ListOfRestaurant.length===0)  { return <Shimmer/>}

    // const {setUserInfo, loggedInUser} =useContext(UserContext);

    
  return (
     <div className="body">
      

        {/* <div className="filter flex justify-between m-4 p-2  rounded-lg  border  shadow-inner bg-cover bg-center" style={{backgroundImage: "https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-food-delivery-meal-fashion-poster-background-yellow-back-image_158378.jpg"}}> */}
        <div className="filter flex justify-between m-4 p-2 rounded-lg border shadow-inner bg-cover bg-center" style={{backgroundImage: "url(https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-food-delivery-meal-fashion-poster-background-yellow-back-image_158378.jpg)"}}>

          <div className="search m-1 p-2">
         
           <input
             type="text" 
             className="border border-solid border-black rounded-md  p-2   w-96 ml-20"
             value={searchText}
             onInput={(e)=>{
             const value= e.target.value;
             setSearchText(value);
             if(value.trim()==="") { setFilteredRestaurant(ListOfRestaurant);}
             else{handleSearch(value)}
             }
           }
            onKeyPress={handleKeyPress}
           />
           <button
            className="px-8 py-2 bg-green-300 m-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button> 
        </div>

          <div className="p-2 ml-10 flex items-center">
          <button 
              className="filter-btn px-8 py-2 bg-blue-400 rounded-md shadow-inner"
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


