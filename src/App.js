import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./ResetPassword/ResetPassword";
import EmailChanged from "./EmailChanged/EmailChanged";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/email-changed" element={<EmailChanged />} />
      </Routes>
    </Router>
  );
}

export default App;
