import React from "react"

const User = (props) => {
    return (
        <div className="userContainer">
            <h1> called from {props.componentType} Component </h1>
            <h1> User: </h1>
            <h2>userName: </h2>
        </div>
    )
}

export default User