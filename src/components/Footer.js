// const Footer = () => {
//     return (
//       <>
//         <p className="footer">Footer</p>
//       </>
//     );
//   };
  
//   export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-black text-white p-4 mt-10">
      <h3 className="text-center pb-3">- Connected Cities -</h3>
      <div className="flex flex-wrap justify-between mx-auto" style={{ width: "50%" }}>
        <div className="w-1/4 pl-10">
          <ul className="list-disc">
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Ahmedabad</li>
          </ul>
        </div>
        <div className="w-1/4 pl-10">
          <ul className="list-disc">
            <li>Chennai</li>
            <li>Kolkata</li>
            <li>Surat</li>
            <li>Pune</li>
            <li>Jaipur</li>
          </ul>
        </div>
        <div className="w-1/4 pl-10">
          <ul className="list-disc">
            <li>Lucknow</li>
            <li>Kanpur</li>
            <li>Nagpur</li>
            <li>Indore</li>
            <li>Thane</li>
          </ul>
        </div>
        <div className="w-1/4 pl-10">
          <ul className="list-disc">
            <li>Bhopal</li>
            <li>Visakhapatnam</li>
            <li>Patna</li>
            <li>Noida</li>
            <li>Vadodara</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-6">
        <p>
          Created by <span className="font-bold text-blue-400">Rohit Yadav</span> in 2024.
        </p>
      </div>
    </div>
  );
};

export default Footer;
