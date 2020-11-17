import React, { useContext, useState } from 'react';
import { StateContext } from './contexts';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(StateContext);

  const userNameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', userName });
      }}
    >
      <h3>Log in</h3>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name={username}
        id="login-username"
        onChange={userNameChange}
      />
      <label htmlFor="login-password">Password:</label>
      <input
        type="password"
        name="login-password"
        id="login-password"
        value={password}
        onChange={passwordChange}
      />
      <input
        type="submit"
        value="Login"
        disabled={username.length === 0 || password.length === 0}
      />
    </form>
  );
};

export default LogIn;
