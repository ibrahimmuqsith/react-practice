import IMG_CDN_URL from '../utils/constants'

const RestaurantCard = (props) => {
    const { name, cuisines, rating, deliveryTime, imgCdn } = props
    return (
        <div className='restaurantCard'>
            <h3> {name} </h3>
            <img
                alt='restaurantImg'
                className='restaurantImg'
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgCdn}`}
            // src={`${IMG_CDN_URL}${imgCdn}`}
            />
            <div className='restaurantInfo'>
                {/* <h5> {cuisines.join(' | ')} </h5> */}
                <h5> {cuisines[0]} </h5>
                <h5> {rating} stars </h5>
            </div>
            <h6> Delivery Time: {deliveryTime} mins  </h6>
        </div>
    )
}

export default RestaurantCard