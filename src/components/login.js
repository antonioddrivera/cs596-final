// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAccount }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginUsername === "Kolosafo" && password === "12345") {
      setAccount(loginUsername);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid Credentials");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="username" className="login-label">
        Username
      </label>
      <input
        type="text"
        name="username"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
        className="login-inp"
        placeholder="username"
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        className="login-inp"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
