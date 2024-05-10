import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";
import Navigation from "./Navigation";

const Navbar = ({ isLogged }) => {
  return (
    <div className="sidebar">
      <Navigation />
      <div className="link-cont">
        <Link to={"/"}>Welcome</Link>
        <Link to={"/users"}>Friends</Link>
        <Link to={"/search"}>Search</Link>
        <Link to={"/authProfile"}>Profile</Link>
        <Link to={"/dappcord"}>Chat</Link>
        <Link to={"/payment"}>Pay</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

