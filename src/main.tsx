import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import { TokenProvider } from "./contexts/Token.tsx";

import Login from "./pages/Login.tsx";
import CreateAccount from "./pages/CreateAccount.tsx";
import Home from "./pages/home/Home.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </TokenProvider>
  </React.StrictMode>
);
