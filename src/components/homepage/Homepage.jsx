import Grid from '@mui/material/Grid';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from 'react'
import {NavItems} from './nav-links.jsx'
import "./homepage.css";

function Navbar() {
  const [isActive,setActive]=useState(false);
 window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size;

    function handleResize() {
      if(window.innerWidth>600)
      setActive(false);
    }
  const [navId,setNavId]=useState(1);

  return (
    <>

    <div className ="main-class-nav">
     <div className="nav-bar">
      <div className="logo">LOGO</div>
      <div className={isActive?'items show-items':'items'}>
        {NavItems.map((item)=>{
           return <Link to={item.to} onClick={()=>{setNavId(item.id)}} className={"nav-items"+(navId==item.id?" active" : "")} >{item.text}</Link>
        })}
      </div>
      <div className="navbar-img">
          <MenuIcon onClick={()=>{setActive(!isActive)}} />
        </div>
    </div> 
    
      
    </div>
    <div className ="homepage-content">
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In vero voluptatibus harum, ipsam, porro consequuntur ullam quasi iusto consequatur culpa eius fugiat odit reiciendis alias non omnis est fugit ab?
         </p>
    </div>
     

    </>
  );
}

export default Navbar;