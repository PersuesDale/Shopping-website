import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../Context/UserContext/UserContext";
import AuthContext from "../../Context/authContext/AuthContext";
import background from './image.png'
import './login.css'
import NavBar2 from "../../Components/NavBar/navbar2";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const { user } = useContext (UserContext);
    const {setAuthStatus} = useContext(AuthContext)
    
    // checking the useContext user's array
    useEffect(() => {
        console.log("username",user.username)
    },[user.username] )
    
    // called when login button is clicked
    const loginButtonOnClick = () => {
        var userExist = user.find ((element) => {
            var myUserName = element.username == username
            var myPassword = element.password == password 
            return myUserName && myPassword
        })
        console.log("user",userExist);
        if(userExist == undefined){
            setAuthStatus("False")
            alert("Please check that the entered details are correct")
        }
        else{
            setAuthStatus("True")
            Navigate('/productpage')
        }
    }

    // called when signup button is clicked 
    function signUpButtonOnClick () {
        Navigate('/signup')
    }

    // just in case
    document.body.style = 'background: black;overflow:hidden;'

    return (
        <>
        <NavBar2/>
        <div className = "loginBG" style = {{ backgroundImage: `url(${background})` }}>
            <div className = "loginMainDiv">
                <label className = "label">Username:</label> <input
                    type = "text"
                    name = "uname"
                    id = "uname"
                    value = {username}
                    className = "inputField1"
                    placeholder = "Enter Username" 
                    onChange = { (e) => setUsername(e.target.value) } />
                <br />
                <label className = "label">Password:</label><input 
                    type = "password" 
                    name = "pword" 
                    id = "pword" 
                    value = {password}
                    className = "inputField2" 
                    placeholder = "Enter Password" 
                    onChange = { (e) => setPassword(e.target.value) } />
                <br />
                <div className = "bottomDiv">
                    <button onClick = {loginButtonOnClick} className = "loginButton">Login</button>
                    <p className = "paraDiv">Dont Have An Account?</p>
                    <button onClick = {signUpButtonOnClick} className = "signUpButton">Sign Up</button>
                </div>
            </div>
        </div>
        </>
    )

}

export default Login;