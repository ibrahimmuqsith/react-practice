import RestaurantCard from './RestaurantCard'
import staticJson from '/src/data.json'

const Body = () => {
    return (
        <div className='bodyContainer'>
            <div className='searchBar'>
                Search
            </div>
            <div className='restContainer'>
                {staticJson.map(rest => (
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