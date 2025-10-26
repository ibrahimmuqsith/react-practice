import React, { useState } from "react"
// import logo from '../../assets/logo.png'
import { CDN_LOGO } from '../utils/constants'
import { Link } from "react-router-dom"

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
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact"> Contact </Link> </li>
                    <li> Profile </li>
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