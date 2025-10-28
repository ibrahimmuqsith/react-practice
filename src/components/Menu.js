import React, { useEffect, useState } from "react"
import { MENU_ENDPOINT } from "../utils/constants"
import { MENU_DATA } from "../utils/mockData"

const Menu = () => {
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            // const res = await fetch(MENU_ENDPOINT);
            // const data = await res.json();
            // console.log("data", data)
            setMenu(MENU_DATA)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="menucontainer">
            <h1>Hotel</h1>


        </div>
    )
}

export default Menu