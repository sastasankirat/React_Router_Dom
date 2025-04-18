import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert(`Welcome back, ${matchedUser.name}!`);
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Hello Again!</h1>
      <p>Welcome back! We missed you!</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Emailid@site.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="forgot">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <p className="register-text">
          Not a member? <a href="register.html">Register Now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
