import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar/SearchBar";
import { CLOUD_IMG } from "../config";
import Layout from "../Layout/Layout";
import logo from "../assets/img/logo.png";

const Home = () => {
  const [displayText, setDisplayText] = useState("Hungry?");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval");
      setDisplayText((prevText) =>
        prevText === "Hungry?"
          ? "Order food from favourite restaurants near you."
          : "Hungry?"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <SearchBar /> */}
      <div className="flex justify-between h-full">
        <div className="w-1/2 p-5 ">
          <Link to={"home"} className="p-3 font-bold transition-all">
            Home
          </Link>
          <Link
            to={"restaurant"}
            className="p-3 hover:font-bold transition-all"
          >
            Restaurant
          </Link>
          <Link
            to={"restaurant"}
            className="p-3 hover:font-bold transition-all"
          >
            About
          </Link>

          {/* <hr className="my-3 w-64"/> */}
          <img className="mt-20 h-80 m-auto" src={logo} />
          <p className="font-bold text-gray-600 text-2xl transition-all text-center">
            MA39OUDA.com
          </p>
          <p className="mt-11 font-bold text-gray-600 text-2xl transition-all">
            {displayText}
          </p>
          <div className="flex ">
            <input
              type="text"
              className="focus: border-2 border-orange-400 h-12 w-full p-2"
              placeholder="Recherche ..."
            />
            <button className="font-bold border-2 border-orange-400 h-12 w-32 bg-orange-400 text-white">
              Yum
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={CLOUD_IMG + "Lunch1_vlksgq"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
