import React, { useContext, useState } from 'react';
import { StateContext } from './contexts';

const Register = () => {
  const [username, setUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordRepeat, setRegisterPasswordRepeat] = useState('');
  const { dispatch } = useContext(StateContext);

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const passwordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const passwordRepeatChange = (e) => {
    setRegisterPasswordRepeat(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'REGISTER', username });
      }}
    >
      <h3>Register new User</h3>
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        onChange={usernameChange}
      />
      <br />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        name="register-password"
        id="register-password"
        value={registerPassword}
        onChange={passwordChange}
      />
      <label htmlFor="register-password-repeat">Repeat Password:</label>
      <input
        type="password"
        name="register-password-repeat"
        id="register-password-repeat"
        value={registerPasswordRepeat}
        onChange={passwordRepeatChange}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          registerPassword.length === 0 ||
          registerPassword !== registerPasswordRepeat
        }
      />
    </form>
  );
};

export default Register;
