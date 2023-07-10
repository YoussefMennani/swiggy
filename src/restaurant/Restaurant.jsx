
import { useEffect, useState } from "react";
import RestrantCard from "../common/card/RestrantCard";
import ShimmerRestaurant from "../common/shimmer/ShimmerRestaurant";
import { SWIGGY_API_URL } from "../config";
import Layout from "../Layout/Layout";


const Restaurant = () => {

  const [restaurantList, setRestaurantList] = useState();
  const [restaurantListCopy, setRestaurantListCopy] = useState();

  const [searchInput,setSearchInput] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        //jsonData.data.success.cards[1].gridElements.infoWithStyle.restaurants
        console.log(jsonData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        //Used for displaying data
        setRestaurantList(jsonData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //Copy used for Search
        setRestaurantListCopy(jsonData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  const onChangeSearchInput = (e)=>{
    setSearchInput(e.target.value)
  }

  const onClickSubmit = ()=>{
    const newRestaurantList = restaurantListCopy.filter(restaurant => restaurant.info.name.includes(searchInput))
    setRestaurantList(newRestaurantList)
  }

  if (!restaurantList) return (<ShimmerRestaurant />)

  return (
    <>
      <Layout>



        <div className="flex px-24 py-4 bg-gray-100">
          <input   onChange={(e)=>onChangeSearchInput(e)} type="text" className="ml-auto focus: border-2 border-orange-400 h-12 w-96 p-2" placeholder="Recherche ..." />
          <button className="font-bold border-2 border-orange-400 h-12 w-32 bg-orange-400 text-white" onClick={()=>onClickSubmit()}>Yum</button>
        </div>
        

        <div className="flex flex-wrap px-20">

          {
            restaurantList?.map((restaurant) => {
              return (<RestrantCard key={restaurant.info.id} {...restaurant.info} />)
            })
          }
        </div>
      </Layout>
    </>
  );
};

export default Restaurant;
