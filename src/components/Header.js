import React, { useState } from "react"
// import logo from '../../assets/logo.png'
import { URL_IMG_LOGO } from '../utils/constants'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [loginStatus, setLoginStatus] = useState('Login')

    const onlineStatus = useOnlineStatus()

    return (
        <div className='flex'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    // src={logo}
                    src={URL_IMG_LOGO}
                />
            </div>
            <div className='navBar'>
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                    <li> <Link to="/grocery"> Grocery </Link> </li>
                    <li> Profile {onlineStatus ? '🟢' : '🔴'} </li>
                    <li
                        className="login"
                        onClick={() => {
                            loginStatus === 'Login' ? setLoginStatus('Logout') : setLoginStatus('Login')
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