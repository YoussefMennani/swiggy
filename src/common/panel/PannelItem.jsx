import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";

const PannelItem = ({
    name,
    price,
    id


}) => {

    const dispatch = useDispatch()

    const handleQteChange = () =>{

    }


    const handleRemouveItem = (idItem) =>{
        dispatch(removeItem(idItem))
    }

  return (

      <div className="flex w-full bg-white  p-2 rounded-sm border-2 border-gray-300">
            <div className="w-24">
            <img
                className="w-full h-full object-cover rounded-sm"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
            />
            </div>

            <div className="ml-2 text-sm w-full">
            <p>
                <b>Name : </b> {name}
            </p>
            <p className="my-1">
                <b>Price : </b> {price}$
            </p>
            <p>
                <b>Qte : </b>
                <input type="number" className="w-14 px-2" min="1" value={1} onChange={()=>handleQteChange()}/>
            </p>
            <button className="float-right bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-sm text-xs" onClick={()=>handleRemouveItem(id)}>
                Remove
            </button>
            </div>
      </div>


 
  );
        {/* <button className="bg-sky-600 text-white px-3 py-1 text-xs my-2 mx-auto ">
        Show more
      </button> */}
};

export default PannelItem;
