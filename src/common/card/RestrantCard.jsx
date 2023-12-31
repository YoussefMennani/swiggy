import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CLOUD_IMG } from "../../config";

function RestrantCard({ cloudinaryImageId, name, cuisines, id, avgRating }) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="m-3 w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow ">

      <Link to={"/restaurant/" + id}>
        <div className="w-full h-52">
          <img
            src={CLOUD_IMG + cloudinaryImageId}
            alt="product image"
            className="rounded-t-lg  w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">

        <div className="flex justify-between items-center ">
          <h5 className=" text-lg font-semibold tracking-tight text-gray-900  text-left">
            {name}
          </h5>

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
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"

            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {avgRating}
            </span>
          </div>
        </div>
        <div className="text-sm py-2 text-gray-800 ">
          <p className="flex flex-wrap ">
            
            {cuisines?.slice(0, showAll ? cuisines.length : 3).map((cuisine, index) => (
              <span className=" bg-red-400 p-1 rounded-sm m-1 text-white text-xs" key={index}>
                {cuisine}
              </span>
            ))}

            { cuisines.length >=3 && !showAll && <button onClick={() => setShowAll(true)} className="bg-sky-200 p-1 rounded-sm m-1 text-md">...</button> }
          </p>
          <hr className="text-gray-200" />
          Description Here
        </div>
        <div className="text-right">
          {/* <span className="text-xl font-bold text-gray-900 ">
            $599
          </span> */}
          <Link
          to={"/restaurant/" + id}
            className="transition-all w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-[12px] p-2 text-center "
          >
            More...
          </Link>
        </div>
      </div>
    </div >
  );
}

export default RestrantCard;
