import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Log from  './components/Log';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from  "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

const[userInfo,setUserInfo]= useState();

useEffect(()=>{
  // api calling or we having dummy data
  const data= {
    name: "",
    email: "rohit@gmail.com",
  }
  setUserInfo(data.name);
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userInfo , setUserInfo}}>
        
      <div className="app">
        <Header /> 
        <Outlet />
        <Footer/ >
      </ div>
      
    </UserContext.Provider>
    </Provider>  
  );
};

const appRouter=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
       {
        path: "/log",
        element: <Log/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },{
        path: "/cart",
        element: <Cart/>,
      },

    ],
    errorElement: <Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);