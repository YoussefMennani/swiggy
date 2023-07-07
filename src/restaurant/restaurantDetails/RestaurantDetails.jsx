import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../Layout/Layout'

const RestaurantDetails = () => {
    const param = useParams()
    const idRestaurant = param.id

    console.log(idRestaurant)
  return (

    <Layout>
        <div>RestaurantDetails</div>
  </Layout>
  )
}

export default RestaurantDetails