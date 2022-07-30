import React from 'react'
import axios from "axios"
import {Link,useNavigate } from 'react-router-dom'
import {useState,useContext} from 'react'
import {GlobalState} from "../../GlobalState"
import "./auth.scss"

const Register = () => {

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
      let dta = await  axios.post("http://localhost:5000/user/register", 
       {
        email,
        password
       }
       
      )

      console.log(dta);
      
      //window.location.href = "/login";
            
        } catch (err) {
           console.log(err);
            alert(err.response);
        }
    }
   
    console.log(data)
    
   return (
        <form >
            <div  className="login-box">
                <h1>Register</h1>
                <input type="text" placeholder="Email" onChange={onChangeEmail} />
                <input type="password" placeholder="Password" onChange={onChangePwd}/>
                <div>
                    <button type="submit" className="login-button" onClick={onSubmit}>Register</button>
                
                </div>
                <span>Already have an account? <Link style={{color:"#1A94F1"}} to="/login">Login</Link></span>
              
                
        </div>
        </form>
    )
}

export default Register