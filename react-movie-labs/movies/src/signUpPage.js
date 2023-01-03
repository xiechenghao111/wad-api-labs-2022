
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './authContext';
import './login.css'

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const register = () => {
    let usernameRegEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    let passwordRegEx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const validUsername = usernameRegEX.test (userName);
    const validPassword = passwordRegEx.test(password);
    
    if ( validUsername && validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App">
    <div className="auth-form-container">
    <>
      <h2 className="label">SignUp page</h2>
      <p className="label">You must register a username and password to log in </p>
      <input className="input" value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><span>Not less than 4 digits, including letters and numbers</span> <br />

      <input className="input" value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input> <span>Not less than 8 digits, including upper and lower letters and numbers</span><br />
      <input className="input" value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><span>Must be consistent with password</span><br />
      {/* Login web form  */}
      <button className="button" onClick={register}>Register</button>
    </>
    </div>
    </div>
  );
};

export default SignUpPage