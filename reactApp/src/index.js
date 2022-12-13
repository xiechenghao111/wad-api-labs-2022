import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "./pages";

import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./signUpPage";
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/public" element={ <PublicPage /> } />
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <LoginPage /> } />

          <Route element={<ProtectedRoutes />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/signup" element={ <SignUpPage /> } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));