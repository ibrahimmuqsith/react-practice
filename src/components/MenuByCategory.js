import React, { useState } from "react"
import ItemList from "./ItemList"

/*
    <MenuByCategory/> is a Controlled Component,
    since <Menu/> (the parent) is controlling its state & data
    The idea is to lift the state of comp to its parent. 
*/
const MenuByCategory = (props) => {
    const { menucategoryTitle, menuCategoryData, showContent, handleClick } = props

    return (
        <div className="accordian">
            <div className="flex-space-between accordianTitleContainer" onClick={(e) => { handleClick(e) }}>
                <h3 className="accordianTitle"> {menucategoryTitle} ({menuCategoryData.length}) </h3>
                <span> {showContent ? '🔼' : '🔽'}</span>
            </div>
            {showContent &&
                <div className="accordianContent">
                    <ItemList
                        items={menuCategoryData}
                    />
                </div>
            }
        </div>
    )
}

export default MenuByCategory