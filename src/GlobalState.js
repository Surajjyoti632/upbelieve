import React, { createContext, useState, useEffect } from "react";
//import jwtDecode from "jwt-decode";

import axios from "axios";

export const Global = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      const settingToken = () => {
        const getToken = localStorage.getItem("jwtToken");
        setToken(getToken);
      };
      settingToken();
    }
  }, []);

  const state = {
    token: [token, setToken],
   
  };

  return <Global.Provider value={state}>{children}</Global.Provider>;
};