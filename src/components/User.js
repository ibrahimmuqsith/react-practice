import React, { useEffect, useState } from "react"
import {
    ENDPOINT_USER_DATA
} from "../utils/constants"

const User = (props) => {
    const [count, setCount] = useState(0)
    const [userData, setUserData] = useState()

    /*
        1. LifeCycle in functinal comp is handled with useEffect.
        2. useEffect without a dependecy array will be called comtinuosly.
        3. useEffect with a empty dependecy array will be called once after comp mounting.
        4. useEffect with a return fn will be called b4 comp unmounting - for clean up.
    */
    useEffect(() => {
        fetchUserDetails()
        const timer = setInterval(() => {
            console.log("calling interval")
        }, 2000)
        return () => {
            clearInterval(timer)
        }
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