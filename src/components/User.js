import React, { useState } from "react"

const User = (props) => {
    const [count, setCount] = useState(0)

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