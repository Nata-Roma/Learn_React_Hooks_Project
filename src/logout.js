import React from "react";

const LogOut = ({ user, setUser }) => {
  return (
    <form onSubmit={(e) => {e.preventDefault(); setUser('') }}>
      <h3>
        Logged in as: <u>{user}</u>
      </h3>
      <input type="submit" value="Logout" />
    </form>
  );
};

export default LogOut;
