import { useState } from "react";
import BuyContext from "./BuyContext";

// this useContext was created as an array when the buy button is clicked in the product details page
function BuyContextProvider ( { children } ) {

    console.log("Children",children)

    const [cartList, setCartList] = useState ([])
    
    return (
        <BuyContext.Provider value = { { cartList,setCartList } }>
            {children}
        </BuyContext.Provider>
    )

}

export default BuyContextProvider