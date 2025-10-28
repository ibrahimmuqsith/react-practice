import React, { useEffect, useState } from "react"
import {
    URL_IMG_MENU,
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
                        className="menuCard restaurantCard flex-space-between"
                    >
                        <div className="">
                            <h5>
                                {item.card.info.name}
                            </h5>
                            <h6>
                                Rs. {item.card.info.price / 100}
                            </h6>
                            <h6>
                                serves {item.card.info.id}
                            </h6>
                        </div>
                        <div className="">
                            <img
                                src={URL_IMG_MENU + item.card.info.imageId}
                                alt="menuImg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu