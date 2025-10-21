import React from "react"
import { CDN_LOGO } from '../utils/constants'

const Header = () => {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    src={CDN_LOGO}
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