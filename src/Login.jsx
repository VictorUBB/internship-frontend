import React, { useState } from "react";
import api from "./api"; // Assuming 'api.js' is in the same directory as 'Login.jsx'
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import { useHistory } from "react-router-dom";
import { createSearchParams, Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/users/userByEmail", {
        params: { email: email },
      });
      if (response.status === 200) {
        const user = response.data;
        console.log("Logged in user:", user);

        // Update the state with the logged-in user data
        setLoggedInUser(user);

        // Redirect to the main page after successful login and pass the user data as state
        navigate("/mainPage", { state: { user } });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;