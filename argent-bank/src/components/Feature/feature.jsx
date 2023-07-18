import React from 'react';
import propTypes from 'prop-types';
import './feature.css';

/**
* Creation feature
* @param { {icon: SVGElement, iconType: String, title: String, description: String} } props – icon: SVG element, iconType: icon description, title: feature title, description: text
* @returns { React.ReactElement } composant feature
*/
function Feature(props) {
    return (
        <div className="feature_wrapper">
            <img className="feature_icon" src={props.icon} alt={props.iconType} />
            <h3 className="feature_title">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

Feature.propTypes = {
    icon: propTypes.node.isRequired,
    iconType: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
};

export default Feature;