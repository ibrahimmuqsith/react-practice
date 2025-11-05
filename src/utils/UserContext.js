import React, { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Jack Sparrow",
    userId: 0
})

export default UserContext 