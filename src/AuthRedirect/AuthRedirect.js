import React, { useEffect, useState } from "react";
import ResetPassword from "../ResetPassword/ResetPassword";
import EmailChanged from "../EmailChanged/EmailChanged";

const AuthRedirect = () => {
  const [type, setType] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const extractTypeAndToken = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash;
      const type = params.get("type");

      const tokenParams = new URLSearchParams(hash.slice(1));
      const accessToken = tokenParams.get("access_token");

      setType(type);
      setAccessToken(accessToken);
    };

    extractTypeAndToken();
  }, []);

  if (!type) {
    return <div>Error: Missing or invalid parameters</div>;
  }

  switch (type) {
    case "recovery":
      if (!accessToken) {
        return <div>Error: Missing access token for password reset</div>;
      }
      return <ResetPassword accessToken={accessToken} />;
    case "email_change":
      return <EmailChanged />;
    default:
      return <div>Error: Unknown type</div>;
  }
};

export default AuthRedirect;
