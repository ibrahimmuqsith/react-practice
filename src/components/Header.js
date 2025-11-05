import React, { useContext, useState } from "react"
// import logo from '../../assets/logo.png'
import { URL_IMG_LOGO } from '../utils/constants'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const Header = () => {
    const [loginStatus, setLoginStatus] = useState('Login')
    const { loggedInUser, setUserName } = useContext(UserContext)
    const onlineStatus = useOnlineStatus()

    return (
        <div className='header flex-space-between'>
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
                    <li> User: {loggedInUser} </li>
                    <li
                        className="login"
                        onClick={() => {
                            if (loginStatus === 'Login') {
                                setLoginStatus('Logout')
                                setUserName('Muqsith')
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