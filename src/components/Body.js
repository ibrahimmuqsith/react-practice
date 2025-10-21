import RestaurantCard from './RestaurantCard'
import RESTAURANT_DATA from '../utils/mockData'

const Body = () => {
    return (
        <div className='bodyContainer'>
            <div className='searchBar'>
                Search
            </div>
            <div className='restContainer'>
                {RESTAURANT_DATA.map(rest => (
                    <RestaurantCard
                        // imgSrc={resImg}
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

export default Body