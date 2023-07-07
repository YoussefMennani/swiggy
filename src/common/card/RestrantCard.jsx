import React from "react";
import { CLOUD_IMG } from "../../config";

function RestrantCard({ cloudinaryImageId, name, cuisines }) {
  return (
    <div className="m-3 w-full max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={CLOUD_IMG + cloudinaryImageId}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <div className="flex justify-between ">
          <h5 className=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-left">
            {name}
          </h5>

          <div className="flex items-center mt-2.5 mb-5 ">
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
              5.0
            </span>
          </div>
        </div>
        <div className="text-sm py-2 tracking-tight text-gray-800 dark:text-white">
          <p className="flex flex-wrap ">
            {cuisines.map((cuisine,index) => (
              <span className=" bg-red-400 p-1 rounded-sm m-1 text-white text-xs" key={index}>
                {cuisine}
              </span>
            ))}
          </p>
          Description Here
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestrantCard;
