import { useState, useEffect } from 'react'

import RestaurantCard from './RestaurantCard'
import RESTAURANT_DATA from '../utils/mockData'
import { RESTAURANT_API } from '../utils/constants'

export const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_API)
        const data = await response.json()
        const { card: { card: { gridElements: { infoWithStyle: { restaurants = [] } } } } } = data?.data?.cards[4]
        setRestaurantList(restaurants)
    }

    const filterTopRestaurants = () => {
        const filteredRest = restaurantList.filter(item => {
            return item.info.avgRating > 4
        })
        setRestaurantList(filteredRest)
    }

    if (restaurantList.length === 0) {
        return <h1 className='loading'> Loading ....... </h1>
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
                    onClick={() => { setRestaurantList(RESTAURANT_DATA) }}
                >
                    RESET
                </button>
            </div>
            <div className='restContainer'>
                {restaurantList.map(rest => (
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