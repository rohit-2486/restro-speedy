// import React from 'react';
// import User from './User';
// import UserClass from './UserClass';

// class About extends React.Component{
//   constructor (props){
//     super(props);
//   }

//   componentDidMount(){
   
//   }

//   render(){


//     return  (
//            <div>
//               <h1>this is about page</h1>
//               <h2>this is namaste react</h2>
//               {/* <User name={"Rohit kumar function()"}/> */}
//               <UserClass name ={"Rohit kumar class"} location= {"banglore"} />
//           </div>
//         )
      
//   }
// }
 
// export default About;


import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-12  ">
      <div className="w-3/5 bg-gradient-to-b from-teal-600 to-teal-900 mx-auto rounded-lg shadow-lg p-8">
        <h1 className="text-green-900 text-3xl font-semibold mb-8">About Us</h1>
        <p className="text-white text-base font-medium leading-relaxed">
        
Certainly! Here's a different version of the "About Us" page for your food delivery app:

About Our Food Delivery Service
Welcome to our Food Delivery Service - where convenience meets culinary excellence! We're on a mission to redefine the way you experience food delivery, making every meal an unforgettable delight.

At Food Delivery, we believe that great food should be accessible to everyone, no matter where you are. That's why we've curated a diverse selection of cuisines from top-rated restaurants in your area, ensuring there's something to tantalize every taste bud.

Our commitment to quality extends beyond the food itself. We've handpicked our partner restaurants based not only on their delicious offerings but also on their dedication to hygiene, safety, and exceptional customer service. With us, you can trust that every meal is prepared with the utmost care and attention to detail.

But we're more than just a food delivery service - we're a community. We're proud to support local businesses and give back to the neighborhoods we serve. By choosing Food Delivery, you're not just ordering a meal; you're supporting small businesses and contributing to the vibrancy of your community.

Transparency and trust are fundamental values for us. We believe in open communication and welcome your feedback with open arms. Your satisfaction is our top priority, and we're constantly striving to exceed your expectations.

As food enthusiasts ourselves, we're always on the lookout for exciting new flavors and dining experiences to bring to your doorstep. From exclusive discounts to special promotions, we're constantly innovating to make your food delivery experience even more delightful.

Join us on this culinary journey and discover a world of flavors at your fingertips. Whether you're craving comfort food or eager to explore new cuisines, we're here to make every meal memorable. Download our app today and let the culinary adventure begin!
        </p>
      </div>
    </div>
  );
};

export default About;


