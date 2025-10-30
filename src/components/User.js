import React, { useEffect, useState } from "react"
import {
    ENDPOINT_USER_DATA
} from "../utils/constants"

const User = (props) => {
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState()

    useEffect(() => {
        fetchUserDetails()
    }, [])

    const fetchUserDetails = async () => {
        const data = await fetch(ENDPOINT_USER_DATA)
        const jsonData = await data.json()
        console.log(jsonData)
        setUserData(jsonData)
    }

    return (
        <div className="userContainer">
            <h1> called from {props.componentType} Component </h1>
            <h1> User: </h1>
            <h2> User Name: </h2>
            <button
                onClick={() => { setCount(prev => prev + 1) }}
            >
                Visitor No. {count}
            </button>
        </div>
    )
}

export default User