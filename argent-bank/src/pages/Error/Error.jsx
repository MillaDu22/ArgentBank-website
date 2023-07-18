import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './error.css';

class Error extends Component {
    render() {
        return (
            <div className="error_wrapper">
                <h1 className="error_number">404</h1>
                <p className= "error_description">Not found</p>
                <Link className = "error" to="/">Retour vers la page d'accueil</Link>
            </div>
        );
    }
}
export default Error;