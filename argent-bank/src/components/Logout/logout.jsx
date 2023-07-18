import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/redux';
import './logout.css';

/**
 * React component to create a logout link updating Redux state when clicked
 * @param { {to: String} } props - to: redirection page
 * @returns { React.ReactElement } LogoutLink component
 */
function LogoutLink(props) {
    const dispatch = useDispatch();
    return (
            <Link className="logout_link" to={props.to} onClick={() => {
                dispatch(logoutAction());
            }}>
            <i className="fa fa-sign-out"></i>
            <p className="logout_link_text">Sign Out</p>
            </Link>
    );   
}
LogoutLink.propTypes = {
    to: propTypes.string.isRequired,
};
export default LogoutLink;