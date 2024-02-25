import { useDispatch, useSelector } from "react-redux";
import ItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart= () =>{
    const cartItems= useSelector((store) => store.cart.items)

    const distpach= useDispatch();
    const handleClearCart = ()=>{
        distpach(clearCart());
    }
    return (
      <div className="text-center mt-4 p-4 ">
        <h1 className="text-xl font-bold">Your Shopping Cart</h1>
        <div className="w-6/12 m-auto">
           
            {cartItems.length ===0 && (
                <h1 className="text-3xl">Cart is empty. Add Items to the Cart</h1>
            )}
           <ItemList items={cartItems}/> 

           <button
            className="text-2xl p-2 m-2 bg-black text-white rounded-lg flex justify-end" 
             onClick={handleClearCart}
           >
                Clear Cart
            </button>
        </div>
    </div>
    )
}

export default Cart;