import { useState, useEffect } from 'react'

import Shimmer from './Shimmer'
import RestaurantCard from './RestaurantCard'
import RESTAURANT_DATA from '../utils/mockData'
import { RESTAURANT_API } from '../utils/constants'

export const Body = () => {
    const [restaurantList, setRestaurantList] = useState([])
    const [searchText, setSearchText] = useState('')

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

    const searchRestaurantList = () => {
        console.log("searchText = ", searchText)
    }

    if (restaurantList.length === 0) {
        return (
            <Shimmer
                cards={8}
                width={300}
                height={250}
            />
        )
    }

    return (
        <div className='bodyContainer'>
            <div className='banner'>
                <div className='searchContainer'>
                    <input
                        name='search'
                        type='text'
                        placeholder='Search Cafe'
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                    >
                    </input>
                    <button
                        onClick={() => { searchRestaurantList() }}
                    >
                        Search
                    </button>
                </div>
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
                        Reset
                    </button>
                </div>
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