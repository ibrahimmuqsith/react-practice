import { useState, useEffect } from 'react'

import Shimmer from './Shimmer'
import RestaurantCard from './RestaurantCard'
import { RESTAURANT_DATA } from '../utils/mockData'
import { ENDPOINT_RESTAURANT } from '../utils/constants'
import { Link } from 'react-router-dom'

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([])
    const [restaurantList, setRestaurantList] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(ENDPOINT_RESTAURANT)
            const data = await response.json()
            const { card: { card: { gridElements: { infoWithStyle: { restaurants = [] } } } } } = data?.data?.data?.cards[1]
            setAllRestaurants(restaurants)
            setRestaurantList(restaurants)
        } catch (err) {
            console.log('something went Wrong', err)
        }
    }

    const filterTopRestaurants = () => {
        const filteredRest = restaurantList.filter(item => {
            return item.info.avgRating > 4.3
        })
        setRestaurantList(filteredRest)
    }

    const searchRestaurantList = () => {
        const filteredRest = allRestaurants.filter(item => {
            return (item?.info?.name).toLowerCase().includes(searchText.toLowerCase())
        })
        if (filteredRest.length) {
            setRestaurantList(filteredRest)
        } else {
            alert('Oops!! Data Not Found')
        }
    }

    const resetFilters = () => {
        setSearchText('')
        setRestaurantList(allRestaurants)
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
                        style={{ marginLeft: '10px' }}
                        onClick={() => { filterTopRestaurants() }}
                    >
                        Top Restaurants
                    </button>
                    <button
                        style={{ marginLeft: '10px' }}
                        onClick={() => { resetFilters() }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className='restContainer'>
                {restaurantList.map(rest => (
                    <Link
                        key={rest.info.id}
                        to={`/restaurants/${rest.info.id}`}
                    >
                        <RestaurantCard
                            name={rest.info.name}
                            cuisines={rest.info.cuisines}
                            rating={rest.info.avgRating}
                            imgCdn={rest.info.cloudinaryImageId}
                            deliveryTime={rest.info.sla.deliveryTime}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body