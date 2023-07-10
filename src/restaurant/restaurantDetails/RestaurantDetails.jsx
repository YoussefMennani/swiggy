import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuItem from '../../common/card/MenuItem'
import RestaurantInfoCard from '../../common/card/RestaurantInfoCard'
import ShimmerRestaurant from '../../common/shimmer/ShimmerRestaurant'
import { MENU_API } from '../../config'
import Layout from '../../Layout/Layout'

const RestaurantDetails = () => {
  const param = useParams()
  const idRestaurant = param.id
  const [restaurantDetails, setRestaurantDetails] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState();
  const [error, setError] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + idRestaurant);
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        //jsonData.data.success.cards[1].gridElements.infoWithStyle.restaurants
        console.log(jsonData.data.cards[0].card.card.info)
        setRestaurantDetails(jsonData.data.cards[0].card.card.info)
        console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setRestaurantMenu(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  if (!restaurantDetails) return (<ShimmerRestaurant/>)
  return (

    <Layout>

      <div>RestaurantDetails</div>
      

      <div className='grid grid-cols-3 gap-4 px-32 '>
        {/* <RestaurantInfoCard {...restaurantDetails} /> */}
        <div className='col p-3 '>
          <RestaurantInfoCard {...restaurantDetails} />
        </div>

        <div className='col-span-2 '>
          {
            restaurantMenu?.map((menuItem) => {
              return (
                <MenuItem {...menuItem.card.info} key={menuItem.card.info.id} />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default RestaurantDetails