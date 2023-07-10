import React from 'react'

const Panel = () => {
    return (
        <div className="p-3 bg-gray-200 absolute right-0 w-80 m-2 ">

            <div className='flex w-full bg-white  p-2 rounded-sm border-2 border-gray-300'>
                <div className='w-24'>
                    <img className='w-full h-full object-cover rounded-sm' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf' />
                </div>

                <div className='ml-2 text-sm w-full'>
                    <p><b>Name : </b>dddddddddd</p>
                    <p className='my-1'><b>Price : </b> 500$</p>
                    <p><b>Qte : </b><input type="number"  className='w-14 px-2' min="1"/></p>
                    <button className='float-right bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-sm text-xs'>Remove</button>
                </div>
            </div>

            

            <button className='bg-sky-600 text-white px-3 py-1 text-xs my-2 mx-auto '>Show more</button>

        </div>
    )
}

export default Panel