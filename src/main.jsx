import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";

import { store } from "./redux/store.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <HashRouter>

      <Provider store={store}>

        <ThemeProvider>

          <AuthProvider>

            <App />

          </AuthProvider>

        </ThemeProvider>

      </Provider>

    </HashRouter>

  </React.StrictMode>

);