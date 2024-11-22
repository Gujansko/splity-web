import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./ResetPassword/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
