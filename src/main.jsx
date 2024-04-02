import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/SignIn-components/signup.jsx'
import Login from './pages/Login-components/login.jsx'
import UserContextProvider from './Context/UserContext/UserContextProvider.jsx'
import ProductPage from './pages/productpage-components/productpage.jsx'
import ProductDetails from './pages/productpage-components/productDetails.jsx'
import AuthContextProvider from './Context/authContext/AuthContextProvider.jsx'
import BuyContextProvider from './Context/myorders context/BuyContextProvider.jsx'
import MyOrders from './pages/MyOrders/myorders.jsx'
{
  // / The following line can be included in your src/index.js or App.js file /
}
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <UserContextProvider>
      <AuthContextProvider>
        <BuyContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path = '/' element = {<Signup/>}/>
              <Route path = '/signup' element = {<Signup/>}/>
              <Route path = '/login' element = {<Login/>}/>
              <Route path = '/productpage' element = {<ProductPage/>}/>
              <Route path = '/myorders' element = {<MyOrders/>}/>
              <Route path = '/productdetail/:idValue' element = {<ProductDetails/>} />
            </Routes>
          </BrowserRouter>
        </BuyContextProvider>
      </AuthContextProvider>
    </UserContextProvider>
  
)
