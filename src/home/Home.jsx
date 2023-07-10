
import { Link } from "react-router-dom";
import SearchBar from "../common/SearchBar/SearchBar";
import { CLOUD_IMG } from "../config";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <>
 
        {/* <SearchBar /> */}
        <div className="flex justify-between h-full">

          <div className="w-full p-5 ">

            <Link to={"home"} className="p-3 font-bold transition-all">Home</Link>
            <Link to={"restaurant"} className="p-3 hover:font-bold transition-all" >Restaurant</Link>
            <Link to={"restaurant"} className="p-3 hover:font-bold transition-all" >About</Link>

              {/* <hr className="my-3 w-64"/> */}
            <img className="mt-24 h-40 m-auto" src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*v5SYqjYEdQMPIwNduRrnCw.png"/>
            <p className="mt-16 font-bold text-gray-600 text-xl">Hungry ? <br />
              Order food from favourite restaurants near you.</p>
            <div className="flex ">
              <input type="text" className="focus: border-2 border-orange-400 h-12 w-full p-2" placeholder="Recherche ..." />
              <button className="font-bold border-2 border-orange-400 h-12 w-32 bg-orange-400 text-white" >Yum</button>
            </div>
          </div>

          <img src={CLOUD_IMG + "Lunch1_vlksgq"} />
        </div>

    
    </>
  );
};

export default Home;
