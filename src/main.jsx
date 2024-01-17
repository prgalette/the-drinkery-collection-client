import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";

import { AuthProvider } from "./context/auth.context.jsx";
import { CocktailProvider } from './context/cocktail.context.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CocktailProvider>
           <App />
        </CocktailProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
