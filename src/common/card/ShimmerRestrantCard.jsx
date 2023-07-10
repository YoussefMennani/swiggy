import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CLOUD_IMG } from "../../config";

function ShimmerRestrantCard() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="m-3 w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow ">

      <Link to={"/restaurant"}>
        <div className="w-full h-52 bg-gray-300">
          
        </div>
      </Link>
      <div className="px-5 py-2">

        <div className="flex justify-between items-center ">
          <div className="bg-gray-200 p-2 w-20"></div>

          <div className="flex items-center">

            {/* {Array.from({ length: avgRating }, (_,index) => (
                 <svg
                 className="w-4 h-4 text-yellow-300 mr-1"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
                 viewBox="0 0 22 20"
                 key={index}
               >
                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
               </svg>
              ))} */}


            <svg
              className="w-4 h-4 text-gray-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"

            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <div className="bg-gray-200 p-2 w-20"></div>
          </div>
        </div>
        <div className="text-sm py-2 text-gray-800 ">
          <p className="flex flex-wrap ">
            
            { Array.from({ length: 2}, (key,index) => (
              <span className=" bg-gray-400 p-1 rounded-sm m-1 text-white text-xs py-3 px-7" key={index}>
                
              </span>
            ))}

          </p>
          <hr className="text-gray-200" />
          <div className="py-2">
            {
              Array.from({ length: 3}, (key,index) => (
                <div key={index} className="bg-gray-200 p-2 w-full mt-1"></div>
              ))
            }
         <div className="bg-gray-200 p-2 w-32 mt-1"></div>
          </div>
        </div>
        <div className="text-right">
          {/* <span className="text-xl font-bold text-gray-900 ">
            $599
          </span> */}
          <button
          to={"/restaurant"}
            className="transition-all w-100 text-white bg-gray-300 w-20 h-8 font-medium rounded-md text-[12px] p-2 text-center "
          >
          </button>
        </div>
      </div>
    </div >
  );
}

export default ShimmerRestrantCard;
