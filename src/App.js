import Home from "./pages/Home";
import React from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home";
import AuthComponent from "./pages/Auth";
import LoginProvider from "./context/auth/main";
import Api from "./components/Api";

// import {
//   Navbar,
//   Hero,
//   RequestTable,
//   ResponseTable,
//   Footer,
//   UrlInput,
// } from "./index";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="auth" element={<AuthComponent />} />
          <Route path="api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
