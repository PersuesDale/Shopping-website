import { useContext } from "react";
import BuyContext from "../../Context/myorders context/BuyContext";
import NavBar from "../../Components/NavBar/navbar";
import './myorders.css'

function MyOrders () {

    const {cartList} = useContext(BuyContext)

    console.log("Cart LIst",cartList)

    document.body.style = 'background: black;'

    // most annoying part of this whole project
    return (
        <>
            <NavBar/>
            <div className="myOrderMainDiv">
                <h1 className="cartHead">My Orders</h1>
                    <ol className="olDiv">
                        {cartList.length > 0 ? cartList.map((element) => {
                        return(
                            <div key={element.id} className="daStuff">
                                <li>
                                    <img className="orderImage" src={element.image} alt={element.title}/>
                                    <h1 className="titleH">{element.title}</h1>
                                    <h1 className="categoryH">{element.category}</h1>
                                    <h1 className="priceH">${element.price}</h1>
                                </li>
                            </div>
                        )}):<p>Loading.....</p>}
                    </ol>
            </div>
        </>
    )
}

export default MyOrders;