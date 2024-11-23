import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL || "",
  process.env.REACT_APP_SUPABASE_ANON_KEY || ""
);

const ResetPassword = ({ accessToken }) => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: "",
      });

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        setMessage(`Error updating password: ${error.message}`);
      } else {
        setMessage("Password updated successfully!");
      }
    } catch (error) {
      setMessage(`Unexpected error: ${error.message}`);
    }
  };

  return (
    <main>
      <h1>Reset Your Password</h1>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p
        className={`${
          message === "Password updated successfully!" ? "success" : "error"
        }`}
      >
        {message}
      </p>
    </main>
  );
};

export default ResetPassword;
