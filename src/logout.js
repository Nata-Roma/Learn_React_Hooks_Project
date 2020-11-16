import React, { useContext } from 'react';
import { StateContext } from './contexts';

const LogOut = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGOUT' });
      }}
    >
      <h3>
        Logged in as: <u>{user}</u>
      </h3>
      <input type="submit" value="Logout" />
    </form>
  );
};

export default LogOut;
