import { useContext } from 'react'
import './App.css'
import UserContext from './Context/UserContext/UserContext'
import { useNavigate } from 'react-router-dom';

function App() {

  const { user } = useContext(UserContext);
  const Navigate = useNavigate();
  console.log("username: ",user.username , " password:",user.password)

  function logOutButtonOnClick () {
    console.log("User Name",user.username," Password",user.password)
    Navigate("/login")
  }

  return (
    <>

      <p>Hi</p>
      <button onClick = {logOutButtonOnClick}>To Login</button>
    </>
  )
}

export default App
