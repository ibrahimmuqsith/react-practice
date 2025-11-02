import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    MENU_STATIC_IMG_ID,
    CDN_IMG_MENU,
    ENDPOINT_MENU
} from "../utils/constants"
import {
    MENU_DATA,
    SINGLE_RESTAURANT_DATA
} from "../utils/mockData"
import Shimmer from "./Shimmer"
import useFetchData from "../utils/usefetchData"

const Menu = () => {
    /* useParams hook helps fetch the dynamic vallues from url to use in comp */
    const { resId } = useParams()
    const data = useFetchData(ENDPOINT_MENU, resId)

    if (!data) {
        return <Shimmer
            cards={8}
            width={320}
            height={300}
        />
    }

    const { cards = [] } = data
    const { card: { card: { info: restaurantInfo = {} } } } = cards[2]
    const { groupedCard: { cardGroupMap: { REGULAR: { cards: menu = {} } } } } = cards[4]

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
                {menu.map((item) => {
                    return (
                        item?.card?.card?.itemCards?.map(innerItem => {
                            return (
                                <div
                                    key={innerItem.card.info.id}
                                    className="menuCard restaurantCard flex-space-between"
                                >
                                    <div className="">
                                        <h5>
                                            {innerItem.card.info.name}
                                        </h5>
                                        <h6>
                                            Rs. {innerItem.card.info.price / 100}
                                        </h6>
                                        <h6>
                                            serves {innerItem.card.info.id}
                                        </h6>
                                    </div>
                                    <div className="">
                                        <img
                                            // src={CDN_IMG_MENU + innerItem.card.info.imageId}
                                            src={CDN_IMG_MENU + MENU_STATIC_IMG_ID}
                                            alt="menuImg"
                                        />
                                    </div>
                                </div>
                            )
                        })
                    )
                })}
            </div>
        </div>
    )
}

export default Menu