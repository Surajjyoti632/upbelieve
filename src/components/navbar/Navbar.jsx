import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";

const Navbar = () => {
  const state = useContext(GlobalState);
  const [isLoggedIn] = state.isLoggedIn;
  const { dispatch } = useContext(DarkModeContext);



  return (
    <div>
      {isLoggedIn === true ? (
        <div className="navbar">
        <div className="wrapper">
          <div className="search">
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
            
            
            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
      ): (
        <div></div>
      )}

    </div>
    
  );
};

export default Navbar;
