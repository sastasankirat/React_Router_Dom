import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isEmailTaken = existingUsers.some(u => u.email === user.email);

    if (isEmailTaken) {
      alert("Email is already registered.");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert(`Welcome, ${user.name}! Your account has been created.`);

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/"); // Redirect to Home
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <p>Join us by filling the form below.</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" required onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input name="email" type="email" required onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input name="password" type="password" required onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
      <div className="login-text">
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
};

export default Signup;
