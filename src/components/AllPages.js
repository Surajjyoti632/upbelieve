import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import "./allpages.scss";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";

//Landing page
import LandingPage from "./homepage/LandingPage";
import Home from "../pages/home/Home";
//auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Loading from "../utils/Loading";

//incident
import AllIncident from "./incident/AllIncident";
import CreateIncident from "./incident/CreateIncident";
import EditIncident from "./incident/EditIncident";
import MyIncident from "./incident/MyIncident";

//zone
import AllZones from "./zone/AllZones";
import CreateZone from "./zone/CreateZone";

//product-classification
import ProductClassification from "./productclassification/ProductClassification";

function AllPages() {
  const state = useContext(GlobalState);
  const [isLoggedIn] = state.isLoggedIn;
  const [role] = state.role;
  console.log(isLoggedIn);

  return (
    <>
      <div className="home">
        {isLoggedIn ? <Sidebar /> : <></>}
        <div className="homeContainer">
          {isLoggedIn ? <Navbar /> : <></>}
          <div>
            <Switch>
              <Route
                path="/"
                exact
                component={isLoggedIn ? Home : LandingPage}
              />
              <Route
                path="/login"
                exact
                component={isLoggedIn ? Home : Login}
              />
              <Route
                path="/register"
                exact
                component={isLoggedIn ? Home : Register}
              />
              <Route
                path="/dashboard"
                exact
                component={isLoggedIn ? Home : Loading}
              />

              <Route
                path="/create-incident"
                exact
                component={isLoggedIn ? CreateIncident : Loading}
              />
              <Route
                path="/all-incident"
                exact
                component={role === "admin" ? AllIncident : Loading}
              />
              <Route
                path="/edit-incident/:id/:pinCode"
                exact
                component={role === "admin" ? EditIncident : Loading}
              />
              <Route
                path="/my-incident"
                exact
                component={isLoggedIn ? MyIncident : LandingPage}
              />

              <Route
                path="/create-zone"
                exact
                component={role === "admin" ? CreateZone : Loading}
              />
              <Route
                path="/all-zone"
                exact
                component={role === "admin" ? AllZones : Loading}
              />

              <Route
                path="/product-classification"
                exact
                component={role === "admin" ? ProductClassification : Loading}
              />

              <Route path="*" exact component={Loading} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPages;
