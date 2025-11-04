import React, { useState } from "react"
import { CDN_IMG_MENU, MENU_STATIC_IMG_ID } from "../utils/constants"

const MenuByCategory = (props) => {
    const [showContent, setShowContent] = useState(false)
    const { menucategoryTitle, menuCategoryData } = props

    const showHideContent = (e) => {
        setShowContent(!showContent)
    }

    return (
        <div className="accordian">
            <div className="flex-space-between accordianTitleContainer" onClick={(e) => { showHideContent(e) }}>
                <h3 className="accordianTitle"> {menucategoryTitle} ({menuCategoryData.length}) </h3>
                <span> {showContent ? '🔼' : '🔽'}</span>
            </div>
            {showContent &&
                <div className="accordianContent">
                    {menuCategoryData?.map(menuItem => (
                        <div className="flex-space-between" key={menuItem?.card?.info?.id}>
                            <div className="">
                                <h4> {menuItem?.card?.info?.name} </h4>
                                <p> ₹{menuItem?.card?.info?.price / 100} </p>
                                <p> Serves {menuItem?.card?.info?.id} </p>
                                <p> Description - {menuItem?.card?.info?.description} </p>
                            </div>
                            <div className="">
                                <img
                                    // src={CDN_IMG_MENU + menuItem.card.info.imageId}
                                    src={CDN_IMG_MENU + MENU_STATIC_IMG_ID}
                                    alt="menuImg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default MenuByCategory