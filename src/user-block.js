import React, { Fragment, useContext } from 'react';
import { StateContext } from './contexts';

import LogIn from './login';
import LogOut from './logout';
import Register from './register';

const UserBlock = () => {
  const { state } = useContext(StateContext);
  const { user } = state;
  return (
    <div>
      {user ? (
        <Fragment>
          <LogOut />
        </Fragment>
      ) : (
        <Fragment>
          <Register />
          <LogIn />
        </Fragment>
      )}
    </div>
  );
};

export default UserBlock;
