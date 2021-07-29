import React, { useState } from "react";
import { Icon } from "../res/ResourceHelper";

const Account = () => {
  const [loged, setLoged] = useState(true);

  return (
    <div className="account">
      {loged ? (
        <div className="user">
          <Icon icon="user.png" alt="user" />
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
};

export default Account;
