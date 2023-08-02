import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.webp';
import LogoutLink from '../Logout/logout';
import './header.css';


function Header() {
    const userName = useSelector((state) => state.auth.userName);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <header className="header">
        <Link className="header_link" to="/">
            <img className="header_logo" src={logo} alt="Argent Bank Logo" />
        </Link>
        {isLoggedIn ? (
            <nav className="nav">
                <Link className="nav_item" to="/account">
                    <i className="fa fa-user-circle"></i>
                    <p className="nav_item_text">{userName}</p>
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