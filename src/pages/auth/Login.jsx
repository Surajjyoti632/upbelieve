import React from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {useState,useContext} from 'react'
import "./auth.scss"

const Login = () => {

   
    const [username,setUsername]= useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (e) => {
        setUsername(e.target.value)
    }
    const onChangePwd = (e) => {
        setPassword(e.target.value)
    }
   
    console.log({
        username, password
    })
   
    
    
   return (
        <form >
            <div  className="login-box">
                <h1 >Login</h1>
                <input type="text" placeholder="username" onChange={onChangeUserName} />
                <input type="password" placeholder="Password" onChange={onChangePwd}/>
                <div>
                    <button type="submit" className="login-button">Login</button>
                
                </div>
                <span>New to Upbelieve? <Link style={{color:"#1A94F1"}} to="/register">Register</Link></span>
              
                
        </div>
        </form>
    )
}

export default Login