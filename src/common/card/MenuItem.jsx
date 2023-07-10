import React from 'react'
import { CLOUD_IMG } from '../../config'

const MenuItem = ({
    imageId,
    name,
    description,
    price,
    ratings,//aggregatedRating
}) => {
    return (
        //hover:translate-x-1
        <div className='grid grid-cols-3 gap-4 p-2 my-3 border border-gray-300 hover:shadow-lg rounded-md transition delay-150  hover:bg-gray-100'>
            <div className="h-100 col-1">
                <img
                    src={CLOUD_IMG + imageId}
                    alt="product image"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div className='p-2 col-span-2'>
                <p>{name}</p>
                <p className='my-1'>{description}</p>
          
                <p className='flex my-2'>
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
                {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
                </span>
                </p>
                <p className='px-1'>
                    <span className='font-bold'>$ {price} </span>
                <button className='text-xs float-right  text-white font-medium py-2 px-3 rounded-3xl transition  delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300'>+ Add To Cart</button></p>
                
            </div>
        </div>
    )
}

export default MenuItem