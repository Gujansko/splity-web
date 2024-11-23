import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthRedirect from "./AuthRedirect/AuthRedirect";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AuthRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
