import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../Context/UserContext/UserContext";
import './signup.css'
import background from './image.png'
import NavBar2 from "../../Components/NavBar/navbar2";

function Signup () {
    
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [email , setEmail] = useState("")
    const Navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const {user} = useContext(UserContext)

    function signUpButtonOnClick (e) {
        
        if ( username == "" || password == "" || verifyPassword == "" || email =="" ) {
            alert("Please make sure all the fields are filled")
        }
        else if ( password==verifyPassword ){    
            const newUser = { username: username, password: password};
            const neoUserArr = [...user];
            neoUserArr.push(newUser);
            setUser(neoUserArr);
            Navigate ('/login');
        }
        else(
            alert("Passwords do not match")
        )
    }

    useEffect(() => {
        console.log("user",user)
    },[user])

    document.body.style = 'background: black;overflow:hidden;'
    
    return (
        <>
        <NavBar2/>
            <div className = "bgDiv" style = {{ backgroundImage: `url(${background})` }}>
                <div className = "signupDiv">
                    <div className = "invisDiv">
                        <label className = "labelDiv" htmlFor = "">Email:</label> <input 
                            type = "text" 
                            placeholder = "Enter Your Email"
                            value = {email}
                            className = "inputDiv1"
                            onChange={(e) => setEmail (e.target.value)} />
                        <br />
                        <label className = "labelDiv" htmlFor="">Username:</label> <input 
                            type = "text" 
                            value = {username}
                            placeholder = "Enter Your Username" 
                            className = "inputDiv2"
                            onChange = { (e) => setUsername (e.target.value) } />
                        <br />
                        <label className = "labelDiv" htmlFor="">Password:</label> <input 
                            type = "password" 
                            placeholder = "Enter Your Password"
                            value = {password} 
                            className = "inputDiv3"
                            onChange={(e) => setPassword (e.target.value) } />
                        <br />
                        <label className = "labelDiv" htmlFor="">Verify Password:</label> <input 
                            type = "password" 
                            placeholder = "Re-enter Your Password"
                            value = {verifyPassword}
                            className = "inputDiv4" 
                            onChange={(e) => setVerifyPassword (e.target.value) } />
                        <br />
                        <div className = "bottomSideDiv">
                            <button className = "signUpButtonClassDiv" onClick={signUpButtonOnClick}>Sign Up</button>
                            <p className = "pDiv" >Already have an account?</p>
                            <button className = "loginButtonClassDiv" onClick = { () => Navigate('/login') }>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;