import React from "react";

import ReactDOM
  from "react-dom/client";

import {

  Provider

} from "react-redux";

import App
  from "./App";

import {

  store

} from "./redux/store";

import {

  AuthProvider

} from "./context/AuthContext";

import {

  ThemeProvider

} from "./context/ThemeContext";

import "./App.css";


ReactDOM.createRoot(

  document.getElementById("root")

).render(

  <React.StrictMode>

    <Provider
      store={store}
    >

      <AuthProvider>

        <ThemeProvider>

          <App />

        </ThemeProvider>

      </AuthProvider>

    </Provider>

  </React.StrictMode>

);