import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/redux';
import './loginButton.css';


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