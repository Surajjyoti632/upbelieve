import React from 'react'
import axios from "axios"
import {GlobalState} from "../../GlobalState"
import {Link,useNavigate } from 'react-router-dom'
import {useState,useContext} from 'react'
import "./auth.scss"

const Login = () => {

   
    const state = useContext(GlobalState);

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const onChangeEmail = (e) => {
        setData({
            ...data,
            email: e.target.value
        })
    }
    const onChangePwd = (e) => {
        setData({
            ...data,
            password: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let {email, password} = data;

        try {
            
            let res = await  axios.post("http://localhost:5000/user/login", {
                email,
                password
            })

            console.log(res);
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("role", res.data.role);
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("token", res.data.refreshtoken);
            //window.location.href = "/dashboard";         
        } catch (err) {
            console.log(err);
            //alert(err.response);
        }
    }
   
   return (
        <form >
            <div  className="login-box">
                <h1 >Login</h1>
                <input type="text" placeholder="username" onChange={onChangeEmail} />
                <input type="password" placeholder="Password" onChange={onChangePwd}/>
                <div>
                    <button type="submit" className="login-button" onClick={onSubmit}>Login</button>
                
                </div>
                <span>New to Upbelieve? <Link style={{color:"#1A94F1"}} to="/register">Register</Link></span>
              
                
        </div>
        </form>
    )
}

export default Login