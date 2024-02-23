import { useState } from "react";
import ItemList from "./MenuItemList";

const MenuCategory= ({data , showItems , setShowIndex}) => {
    // console.log(data.itemCards);

    // const [showItems,setShowItems]=useState(false);

    // const handleClick = () => {
    //  setShowItems(!showItems);
    // }

     const handleClick = () => {
      setShowIndex();
    }
 
   return (  
     <div>
        {/* accordians header */}
       <div className="w-6/12 mx-auto my-6 bg-grey shadow-md rounded-lg  ">
       <div className="flex justify-between cursor-pointer" onClick={handleClick}>
         <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
         <span>🔽</span>
        </div>
       {showItems && <ItemList items={data.itemCards}/>}

       </div>

    </div>
    )
}
export default MenuCategory;