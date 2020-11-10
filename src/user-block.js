import React, { Fragment } from 'react';

import LogIn from './login';
import LogOut from './logout';
import Register from './register';

const UserBlock = ({ user, dispatch }) => {
  return (
    <div>
      {user ? (
        <Fragment>
          <LogOut user={user} dispatch={dispatch} />
        </Fragment>
      ) : (
        <Fragment>
          <Register dispatch={dispatch} />
          <LogIn dispatch={dispatch} />
        </Fragment>
      )}
    </div>
  );
};

export default UserBlock;
