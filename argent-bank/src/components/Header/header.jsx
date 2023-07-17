import React from 'react';
import Logo from "../../../src/assets/img/argentBankLogo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
return (
    <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
        <NavLink to="/account" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
        Nom
        </NavLink>
        <NavLink to="/logout" className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
        </NavLink>
        </div>
    </nav>
    );
}
export default Header;