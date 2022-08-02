import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import {GlobalState} from "../../GlobalState"
import Button from '@mui/material/Button';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const state = useContext(GlobalState);
  const [role] = state.role;
  const [isLoggedIn] = state.isLoggedIn;
  console.log(isLoggedIn)

  const Logout =(e) => {
    console.log("working")
    localStorage.removeItem("loginStatus")
    localStorage.removeItem("role")    
    localStorage.removeItem("userId")
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <div>
      {
        isLoggedIn === false ? (
          <div></div>
        ) : (
          <div className="sidebar">
            <div className="top">
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">Upbelieve</span>
              </Link>
            </div>
            <hr />
            <div className="center">
              <ul>
            <p className="title">MAIN</p>
            {
              role === "admin" ? (
                  <>
                    <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            </Link>
                  </>
              ) : (
                <Link to="/my-incident" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            </Link>

              )
            }
            
            {
              role === "admin" ? (
                <>
                 <p className="title">Zone</p>
                <Link to="/all-zone" style={{ textDecoration: "none" }}>
                  <li>
                    <PersonOutlineIcon className="icon" />
                    <span>All zone</span>
                  </li>
                </Link>
                <Link to="/create-zone" style={{ textDecoration: "none" }}>
                  <li>
                    <StoreIcon className="icon" />
                    <span>Create Zone</span>
                  </li>
                </Link> 
                </>
              ) : (
                <></>
              )
            }
           

            <p className="title">Incident Management</p>
            <Link to="/create-incident" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Create Incident</span>
            </li>
            </Link>

            <Link to="/my-incident" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>My Incident</span>
            </li>
            </Link>
            {
              role === "admin" ? (
                <>
                  <Link to="/all-incident" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>View All Incidents</span>
            </li>
            </Link>
            <p className="title">Product Management</p>
            <Link to="/product-classification" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Classify Product</span>
            </li>
            </Link>
                </>

              ) : (
                  <></>
              )
            }
            
            
          </ul>

         

          <Button variant="contained" onClick={Logout} style={{marginLeft : "auto", marginRight : "auto", marginTop: "10px"}}>Logout</Button>
          
        </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
        )
      }
    </div>
    
  );
};

export default Sidebar;
