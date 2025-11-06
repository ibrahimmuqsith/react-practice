import React from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/redux/cartSlice"
import { CDN_IMG_MENU, MENU_STATIC_IMG_ID } from "../utils/constants"

const ItemList = ({ items }) => {
    /*
        useDispatch hook is given by redux for creating a dispatch function.
    */
    const dispatch = useDispatch()

    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="itemList">
            {items?.map((items, id) => (
                <div className="flex-space-between" key={id}>
                    <div className="">
                        <h4> {items?.card?.info?.name} </h4>
                        <p> ₹{items?.card?.info?.price / 100} </p>
                        <p> Serves {items?.card?.info?.id} </p>
                        <p> Description - {items?.card?.info?.description} </p>
                    </div>
                    <div className="" style={{ position: 'relative' }}>
                        <img
                            // src={CDN_IMG_MENU + items.card.info.imageId}
                            src={CDN_IMG_MENU + MENU_STATIC_IMG_ID}
                            alt="menuImg"
                        />
                        <button
                            className="addBtn"
                            onClick={() => handleAddItems(items)}
                        >
                            Add +
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ItemList