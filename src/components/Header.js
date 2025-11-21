import React, { useContext, useState } from "react"
import { URL_IMG_LOGO } from '../utils/constants'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/hooks/useOnlineStatus"
import UserContext from "../utils/context/UserContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [loginStatus, setLoginStatus] = useState('Login')
    const { loggedInUser, setUserName } = useContext(UserContext)
    const onlineStatus = useOnlineStatus()
    const machineName = navigator.platform

    /**
     * subscribe to the redux store using useSelector Hook
     */
    const cartItems = useSelector((store) => store.cart.items)
    console.log("added cart Items", cartItems)

    return (
        <div className='header flex-space-between'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    src={URL_IMG_LOGO}
                />
            </div>
            <div className='navBar'>
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                    <li> <Link to="/grocery"> Grocery </Link> </li>
                    <li> <Link to="/cart"> Cart ({cartItems?.length}) </Link> </li>
                    <li> {onlineStatus ? '🟢' : '🔴'} {loggedInUser} </li>
                    <li
                        className="login"
                        onClick={() => {
                            if (loginStatus === 'Login') {
                                setLoginStatus('Logout')
                                setUserName(machineName)
                            } else {
                                setLoginStatus('Login')
                                setUserName('')
                            }
                        }}
                    >
                        {loginStatus}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header