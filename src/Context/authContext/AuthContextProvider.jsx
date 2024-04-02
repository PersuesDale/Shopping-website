import { useState } from "react"
import UserContext from './AuthContext'

// this useContext is created to be used for login authentication
function AuthContextProvider ( { children } ) {

    console.log("Children",children)
    const [authStatus , setAuthStatus ] = useState("False")

    return (
        <UserContext.Provider value = { { authStatus ,setAuthStatus } }>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContextProvider;