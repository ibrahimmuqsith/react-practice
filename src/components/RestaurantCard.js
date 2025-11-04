import {
    CDN_IMG_RESTAURANT,
    URL_STATIC_IMG_RESTAURANT
} from '../utils/constants'

const RestaurantCard = (props) => {
    const { name, cuisines, rating, deliveryTime, imgCdn } = props.restaurantData
    return (
        <div className='restaurantCard'>
            <h3> {name} </h3>
            <img
                alt='restaurantImg'
                className='restaurantImg'
                // src={CDN_IMG_RESTAURANT + imgCdn}
                src={URL_STATIC_IMG_RESTAURANT}
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

/*
    1. withVegLabel function is a HOC or a Pure function.
    2. Pure fns Dont change the input, but enhance it to give output.
*/
export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className='withVegLabelContainer'>
                <label> Pure Veg </label>
                <RestaurantCard
                    {...props}
                />
            </div>
        )
    }
}

export default RestaurantCard