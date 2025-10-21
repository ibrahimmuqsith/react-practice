import React from "react"
import { RestaurantCard } from "../App"
import staticJson from '/src/data.json'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    src='https://static.vecteezy.com/system/resources/previews/011/405/724/non_2x/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg'
                />
            </div>
            <div className='navBar'>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Profile </li>
                    <li> Cart </li>
                </ul>

            </div>
        </div>
    )
}

export default Header