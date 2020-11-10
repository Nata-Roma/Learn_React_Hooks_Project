import React, { Fragment } from "react";

import LogIn from "./login";
import LogOut from "./logout";
import Register from "./register";

const UserBlock = ({ user, setUser }) => {
  return (
    <div>
      {user ? (
        <Fragment>
          <LogOut user={user} setUser={setUser} />
        </Fragment>
      ) : (
        <Fragment>
          <Register setUser={setUser} />
          <LogIn setUser={setUser} />
        </Fragment>
      )}
    </div>
  );
};

export default UserBlock;
