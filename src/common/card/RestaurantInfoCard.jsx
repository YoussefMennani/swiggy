import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CLOUD_IMG } from '../../config';

const RestaurantInfoCard = ({ cloudinaryImageId, name, cuisines, id, avgRating }) => {

  const [showAll, setShowAll] = useState(false);

  return (

    <div className='border border-gray-300 rounded-t-md '>
      <div className="w-full h-52 ">
        <img
          src={CLOUD_IMG + cloudinaryImageId}
          alt="product image"
          className=" h-full object-cover w-full rounded-t-md"
        />
      </div>
      <div className='p-2'> 
        <p>{name}</p>
        <p className='my-2'>
          {cuisines?.map((cuisine, index) => (
            <span className=" bg-red-400 p-1  rounded-sm m-1 text-white text-xs" key={index}>
              {cuisine}
            </span>
          ))}
        </p>

        <p className="flex items-center my-3">
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
        </p>
      </div>
    </div>


  );

}

export default RestaurantInfoCard