import { useState } from 'react'

import RestaurantCard from './RestaurantCard'
import RESTAURANT_DATA from '../utils/mockData'

export const Body = () => {
    const [restList, setRestList] = useState(RESTAURANT_DATA)

    const filterTopRestaurants = () => {
        const filteredRest = restList.filter(item => {
            return item.info.avgRating > 4
        })
        setRestList(filteredRest)
    }

    return (
        <div className='bodyContainer'>
            <div className='filterContainer'>
                <button
                    className='filter-btn'
                    onClick={() => { filterTopRestaurants() }}
                >
                    Top Restaurants
                </button>
                <button
                    className='filter-btn'
                    onClick={() => { setRestList(RESTAURANT_DATA) }}
                >
                    RESET
                </button>
            </div>
            <div className='restContainer'>
                {restList.map(rest => (
                    <RestaurantCard
                        key={rest.info.id}
                        name={rest.info.name}
                        cuisines={rest.info.cuisines}
                        rating={rest.info.avgRating}
                        imgCdn={rest.info.cloudinaryImageId}
                        deliveryTime={rest.info.sla.deliveryTime}
                    />
                ))}
            </div>
        </div>
    )
}