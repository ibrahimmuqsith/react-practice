import React, { useContext } from "react"
import UserContext from "../utils/userContext"

const Footer = () => {
    const timestamp = new Date()


    return (
        <div className="appFooter flex-space-between">
            <div className="privacy">
                Privacy Policy
            </div>
            <div className="user">
                Last logged in
                at
                <strong> {timestamp.toLocaleDateString()} </strong>
                <strong> {timestamp.toLocaleTimeString()} </strong>
            </div>
            <div className="tc">
                T&C
            </div>

        </div>
    )
}

export default Footer