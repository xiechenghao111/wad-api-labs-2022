import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";
import './login.css'
const LoginPage = props => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
    
  }

  return (
    <div className="App">
      <div className="auth-form-container">
    <>
    
      <h2 className="label">Login page</h2>
      <p className="label">You must log in to view the protected pages </p>
      <label htmlFor="username">User name</label>
      <input className="input" id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <label htmlFor="password">Password</label>
      <input className="input" id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button className="button" onClick={login}>Log in</button>
      <p className="link-btn">Not Registered? </p>
      <p> <Link to="/signup">Sign Up!</Link></p>
      
    </>
    </div>
    </div>
  );
};

export default LoginPage;