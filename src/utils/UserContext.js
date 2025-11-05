import React, { createContext } from "react";

/*
    1. context is a state management tech inside react. (redux is external).
    2. createContext enables creation of a global state var.
    3. It can be assigned a def obj, with keys & its def values.
    4. userName & setUserName local state is lifted at the top level, i.e: App.js.
    5. loggedInUser (context val) & setUserName (local setState fn) is passed to <UserContext.Provider>
    6. as setUserName fn is accessible globally via context, it is used to set value to userName from anywhere.
    7. as the setUserName is done, the userName updates the value of loggedInUser at the top most level.
*/
const UserContext = createContext({
    loggedInUser: ''
})

export default UserContext 