import React, { useEffect, useState } from "react";
import ResetPassword from "../ResetPassword/ResetPassword";
import EmailChanged from "../EmailChanged/EmailChanged";

const AuthRedirect = () => {
  const [type, setType] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const extractTypeAndToken = () => {
      const hash = window.location.hash;

      const tokenParams = new URLSearchParams(hash.slice(1));
      const accessToken = tokenParams.get("access_token");
      const type = tokenParams.get("type");

      setType(type);
      setAccessToken(accessToken);
    };

    extractTypeAndToken();
  }, []);

  if (!type) {
    return (
      <main>
        <h1 className="error">Error: Missing or invalid parameters</h1>
      </main>
    );
  }

  switch (type) {
    case "recovery":
      if (!accessToken) {
        return (
          <main>
            <h1 className="error">
              Error: Missing access token for password reset
            </h1>
          </main>
        );
      }
      return <ResetPassword accessToken={accessToken} />;
    case "email_change":
      return <EmailChanged />;
    default:
      return (
        <main>
          <h1 className="error">Error: Unknown type</h1>
        </main>
      );
  }
};

export default AuthRedirect;
