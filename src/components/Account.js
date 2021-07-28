import React, { useState } from "react";

const Account = () => {

  const [loged, setLoged] = useState(true);

  return (
    <div className="account">
      {loged ? (
        <div className="user">
          <img src="../icons/user.png" alt="User" />
          <div className="badge">5</div>
        </div>
      ) : (
        <div className="btn-group">
          <div className="btn">Sign in</div>
          <div className="btn secondary">Sign up</div>
        </div>
      )}
    </div>
  );
}

export default Account;
