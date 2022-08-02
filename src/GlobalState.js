import React, { createContext, useState, useEffect } from "react";
//import jwtDecode from "jwt-decode";

import axios from "axios";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const loginStatus = localStorage.getItem("loginStatus");

    if (loginStatus) {
      const settingToken = () => {
        const getToken = localStorage.getItem("token");
        setToken(getToken);
        setLoggedIn(true);
        setRole(localStorage.getItem("role"));
      };
      settingToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
    isLoggedIn: [isLoggedIn, setLoggedIn],
    role: [role, setRole],
    userId: [userId, setUserId],
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
