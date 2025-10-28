import React, { useEffect, useState } from "react"
import {
    CDN_URL,
    MENU_ENDPOINT
} from "../utils/constants"
import {
    MENU_DATA,
    SINGLE_RESTAURANT_DATA
} from "../utils/mockData"
import Shimmer from "./Shimmer"

const Menu = () => {
    const [menu, setMenu] = useState(null)
    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            // const res = await fetch(MENU_ENDPOINT);
            // const data = await res.json();
            // console.log("data", data)
            setMenu(MENU_DATA)
            setRestaurantInfo(SINGLE_RESTAURANT_DATA)
        } catch (err) {
            console.log(err)
        }
    }

    if (!menu || !restaurantInfo) {
        return <Shimmer
            cards={8}
            width={320}
            height={300}
        />
    }

    return (
        <div className="menucontainer">
            <div className="restaurantInfo">
                <h1> {restaurantInfo?.name} </h1>
                <div className="flex-space-between">
                    <p> {restaurantInfo?.costForTwo} </p>
                    <p> {restaurantInfo?.avgRating} stars </p>
                </div>
                <div className="flex-space-between">
                    <p> {restaurantInfo?.cuisines.join(', ')} </p>
                    <p> {restaurantInfo?.totalRatingsString} </p>
                </div>


            </div>
            <div className="menuInfo restContainer">

                {menu.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="menuCard restaurantCard">
                        <h5>
                            {item.card.info.name}
                        </h5>
                        {/* <img
                            src={CDN_URL + item.card.info.imageId}
                            alt="menuImg"
                        /> */}
                        <h6>
                            {item.card.info.price}
                        </h6>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu