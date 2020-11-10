import React, { useState } from "react";

const LogIn = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameChange = (e) => {
    setUserName(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUser(userName);
      }}
    >
      <h3>Log in</h3>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name={userName}
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
        disabled={userName.length === 0 || password.length === 0}
      />
    </form>
  );
};

export default LogIn;
