import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import PannelItem from "./PannelItem";

const Panel = () => {
  const dispatch = useDispatch();

  const panelDetails = useSelector((store) => store.cart.items);
  console.log(panelDetails);

  const handleClearPannel = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-3 bg-gray-200 absolute right-0 w-80 m-2 ">
      <div className="flex justify-between">
        <button
          className="bg-green-600 text-white px-3 py-1 text-xs my-2 mx-auto"
        >
          Valider
        </button>

        <button
          className="bg-sky-600 text-white px-3 py-1 text-xs my-2 mx-auto"
          onClick={() => handleClearPannel()}
        >
          Clear Pannel
        </button>
      </div>

      {panelDetails.length === 0 ? (
        <h1>Panel Vide ..</h1>
      ) : (
        panelDetails.map((item, index) => <PannelItem key={index} {...item} />)
      )}
    </div>
  );
};

export default Panel;
