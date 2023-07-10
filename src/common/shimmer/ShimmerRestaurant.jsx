import React from 'react'
import Layout from '../../Layout/Layout'
import ShimmerRestrantCard from '../card/ShimmerRestrantCard'

const ShimmerRestaurant = () => {
    return (
        <Layout>
            <div className='flex flex-wrap px-20'>
            {
                
                Array.from({ length: 5 }, (key, index) => (
                    <ShimmerRestrantCard key={index} />
                ))
            }
            </div>
        </Layout>
    )
}

export default ShimmerRestaurant