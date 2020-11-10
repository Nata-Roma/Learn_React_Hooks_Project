import React, { useState } from "react";

const Register = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordRepeat, setRegisterPasswordRepeat] = useState("");

  const usernameChange = (e) => {
    setUserName(e.target.value);
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
        setUser(userName);
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
        id="login-password"
        value={registerPassword}
        onChange={passwordChange}
      />
      <label htmlFor="register-password-repeat">Repeat Password:</label>
      <input
        type="password"
        name="register-password-repeat"
        id="login-password-repeat"
        value={registerPasswordRepeat}
        onChange={passwordRepeatChange}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          userName.length === 0 ||
          registerPassword.length === 0 ||
          registerPassword !== registerPasswordRepeat
        }
      />
    </form>
  );
};

export default Register;
