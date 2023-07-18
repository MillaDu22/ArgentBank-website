import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/redux';
import './loginButton.css';


/**
 * creation bouton updating state redux quand il est clické
 * @returns { React.ReactElement } LoginButton composant
 */
function LoginButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <button
            className="login_button"
            onClick={(e) => {
                e.preventDefault();
                dispatch(loginAction(navigate));
            }}
        >
        Sign In
        </button>
    );
}

export default LoginButton;