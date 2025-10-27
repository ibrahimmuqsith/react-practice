import React, { useEffect } from "react"

const Menu = () => {
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const res = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.022211723133031&lng=77.6329953968525&restaurantId=855614&catalog_qa=undefined&submitAction=ENTER');
        // if(res.status)
        console.log("res.status", res.status)
        // const data = await res.json();
        // console.log("dara", data)
    }

    return (
        <div className="menucontainer">
            <h1>Hotel</h1>


        </div>
    )
}

export default Menu