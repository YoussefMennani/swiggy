
import { useEffect, useState } from "react";
import RestrantCard from "../common/card/RestrantCard";
import { SWIGGY_API_URL } from "../config";
import Layout from "../Layout/Layout";


const Restaurant = () => {

    const [restaurantList,setRestaurantList] = useState();
    const [error,setError] = useState();
    const t = ["1","2"]

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
            setRestaurantList(jsonData.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);
      
  return (
    <>
      <Layout>
        <div className="flex flex-wrap">
        {
             restaurantList?.map((card)=>{
                return(<RestrantCard key={card.info.id} {...card.info} />)
            })
        }
        </div>
      </Layout>
    </>
  );
};

export default Restaurant;
