import React, { useState } from "react"
// import logo from '../../assets/logo.png'
import { CDN_LOGO } from '../utils/constants'

const Header = () => {
    const [loginStatus, setLoginStatus] = useState('Login')

    return (
        <div className='header'>
            <div className='logoContainer'>
                <img
                    alt='logo'
                    className='logo'
                    // src={logo}
                    src={CDN_LOGO}
                />
            </div>
            <div className='navBar'>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Profile </li>
                    <li> Cart </li>
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