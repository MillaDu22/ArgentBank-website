/*import React from 'react';
import Logo from "../../../src/assets/img/argentBankLogo.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from "../../features/Token/token";
import { getLoginFetch } from "../../services/API";
import { getFirstName } from "../../features/User/firstName";

function Header() {
    // Use Selector
    const firstName = useSelector((state) => state.firstName.value);
    const token = useSelector((state) => state.token.value);

    // Use Effect
    const dispatch = useDispatch();
    useEffect(() => {
    if (token === localStorage.getItem('token')) {
        dispatch(getToken(localStorage.getItem('token')));
        const user = getLoginFetch(token);
        user.then((obj) => {
            dispatch(getFirstName(obj.firstName));
        });
    }
})

return (
<nav className="main-nav">
    <NavLink to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>*/
       // {/* Anonyme */}
        /*{token === 0 && (
        <>
            <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
        </>
        )}*/

        //{/* Connecté */}
       /* {token !== 0 && (
            <>
                <NavLink to="/account" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    {firstName}
                </NavLink>
                <NavLink to="/logout" className="main-nav-item">
                    <i className="fa fa-sign-out"></i>
                Sign Out
                </NavLink>
            </>
        )}
    </div>
</nav>
);
}
export default Header;*/

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png';
import LogoutLink from '../Logout/logout';
import './header.css';

/**
 * React component to create a header
 * @returns { React.ReactElement } Header component
 */
function Header() {
    const firstName = useSelector((state) => state.auth.firstName);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <header className="header">
        <Link className="header_link" to="/">
            <img className="header_logo" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isLoggedIn ? (
            <nav className="nav">
                <Link className="nav_item" to="/profile">
                    <i className="fa fa-user-circle"></i>
                    <p className="nav_item_text">{firstName}</p>
                </Link>
                <LogoutLink to="/" />
            </nav>
        ) : (
            <nav className="nav">
                <Link className="nav_item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    <p className="nav_item_text">Sign In</p>
                </Link>
            </nav>
        )}
        </header>
    );
}

export default Header;