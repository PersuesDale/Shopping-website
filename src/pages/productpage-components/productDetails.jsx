import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import AuthContext from "../../Context/authContext/AuthContext";
import './productDetail.css'
import NavBar from "../../Components/NavBar/navbar";
import BuyContext from "../../Context/myorders context/BuyContext";

function ProductDetails() {

    const [data, setData] = useState({});
    const { idValue } = useParams();
    const {authStatus} = useContext(AuthContext)
    const {setAuthStatus} = useContext(AuthContext)
    const Navigate = useNavigate();
    const {cartList} = useContext(BuyContext)
    const {setCartList} = useContext(BuyContext)

    console.log("idValue", idValue)

    const productObjects = async () => {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products/" + idValue
            )
            console.log("response from productdetails", response)
            
            const productData = {
                id: response.data.id,
                title: response.data.title,
                price: response.data.price,
                category: response.data.category,
                image: response.data.image,
            };
            
            setData({
                ...data,
                id: response.data.id,
                title: response.data.title,
                price: response.data.price,
                description: response.data.description,
                category: response.data.category,
                image: response.data.image,
                rating: response.data.rating,
            })

            console.log("productData", productData);
        }
        catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        productObjects();
    }, [])

    useEffect(() => {
        console.log("Data from productdetails", data)
    }, [data])

    document.body.style = 'background: black;'
    

    function logOutButtonOnClick() {
        Navigate("/login")
        setAuthStatus("False")
    }

    function buyClick () {
        if (confirm ('Are you sure you want to purchase this item?')) {
            setCartList([...cartList, data]);
            console.log("cartlist from product page", cartList);
            alert("Item has been purchased")
        } 
        else {
            console.log('item purchase denied');
        }
        
    }

    if (authStatus == "True") {
        return (
            <>
            <NavBar/>
                <div className = "prodDeatMainDiv">
                    <div>
                        {data.id ?(
                            <div className = "theStuffDiv">
                                <img className = "prodDeatImg" src = {data.image} alt = {data.title} />
                                <h1 className="pDivProd">{data.title}</h1>
                                <p className="pDivProd">{data.category}</p>
                                <p className="pDivProd">Ratings: {data.rating.rate}({data.rating.count})</p>
                                <p className="pDivProd">{data.description}</p>
                                <h1 className="pDivProd">Price: ${data.price}</h1>
                                <button onClick={buyClick} className="pDivProd" id="cartButton">Buy</button>
                            </div>
                            ): (<h1 className="loadingDiv">Loading....</h1>)}
                        </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div className = "productMainDiv2">
                <h1 className="errorHead">You have not logged in</h1>
                <button onClick={logOutButtonOnClick} className="loginButtonAlt">Login</button>
            </div>
        )
    }
}

export default ProductDetails;