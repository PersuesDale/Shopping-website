import { useState } from "react";
import UserContext from "./UserContext";

// this useContext was created to store the user's credentials
function UserContextProvider ( { children } ) {
    
    console.log("children",children);

    const [user , setUser] = useState([])

    return (
        <UserContext.Provider value = { { user,setUser } }>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;