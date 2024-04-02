import { useContext, useEffect, useState } from "react";
import axios from "axios"
import './productpage.css'
import { Link,useNavigate } from "react-router-dom";
import AuthContext from "../../Context/authContext/AuthContext";
import './productpage.css'
import NavBar from "../../Components/NavBar/navbar";

function ProductPage () {

    const [ productElement , setProductElement ] = useState([]);
    const Navigate = useNavigate();
    const {authStatus} = useContext(AuthContext)
    const {setAuthStatus} = useContext(AuthContext)

    const arrayProductData = async () => {
        try {
            const response = await axios.get(
                "https://fakestoreapi.com/products/"
            )

            console.log("response from product page",response)
            setProductElement(response.data)
        }
        catch (error) {
            console.error("Error",error);
        }
    };

    useEffect( () => {
        arrayProductData();
    },[])

    function logOutButtonOnClick() {
        Navigate("/login")
        setAuthStatus("False")
    }

    document.body.style = 'background: black;'

    if (authStatus == "True") {
        return (
            <>
            <NavBar/>
            <div className = "productMainDiv">
                <div className = "productSubDiv">
                    {productElement.length > 0 ? productElement.map ( (element,index) => {
                        return(
                            <>
                                <div className = "aaFkDiv" key = {index}>
                                    <Link to = {`/productdetail/${element.id}`}><img className = "productImageClass" src={element.image} alt="product image" /></Link>
                                    <Link to = {`/productdetail/${element.id}`} className = "linkClass"><h1>{element.title}</h1></Link>
                                    <p className = "productCategory">{element.category}</p>
                                    <p className = "productRating">Ratings: {element.rating.rate}({element.rating.count})</p>
                                    <p className = "productCategory">Price: ${element.price}</p>
                                </div>
                            </>
                        )
                    } ):(<p className="loadingDiv">Loading.....</p>) }
                </div>
            </div>
            </>
        )
    }

    else {
        return (
            <div className = "productMainDiv2">
                <h1 className = "errorHead">You have not logged in</h1>
                <button className = "loginButtonAlt" onClick={logOutButtonOnClick}>Login</button>
            </div>
        )
    }
}

export default ProductPage;