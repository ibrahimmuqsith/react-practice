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
import useFetchData from "../utils/hooks/useFetchData"
import MenuByCategory from "./MenuByCategory"

const Menu = () => {
    const [showIndex, setShowIndex] = useState(null)

    /* useParams hook helps fetch the dynamic values from url */
    const { resId } = useParams()
    const data = useFetchData(ENDPOINT_MENU, resId)

    const handleClick = (index) => {
        if (index === showIndex) {
            setShowIndex(null)
        } else {
            setShowIndex(index)
        }
    }

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
            <div className="menuInfo">
                {menu.map((item, index) => {
                    if (item?.card?.card?.itemCards) {
                        return (
                            <MenuByCategory
                                key={item?.card?.card?.title}
                                menucategoryTitle={item?.card?.card?.title}
                                menuCategoryData={item?.card?.card?.itemCards}
                                handleClick={() => { handleClick(index) }}
                                showContent={index === showIndex ? true : false}
                            />
                        )
                    }

                })}
            </div>
        </div>
    )
}

export default Menu