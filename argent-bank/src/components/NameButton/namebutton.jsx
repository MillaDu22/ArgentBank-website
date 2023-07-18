import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeNamesAction, editNamesAction } from '../../redux/redux';
import './nameButton.css';

/**
* Creation bouton modifName, state, redux
* @param { {title: String} } props – title:  texte
* @returns { React.ReactElement } NameButton composant
*/
function EditNamesButton(props) {
    const dispatch = useDispatch();

    return (
        <button className="edit_names_button" onClick={() => {
            if (props.title === 'Save') {
                dispatch(changeNamesAction());
            }
            dispatch(editNamesAction());
        }}>
        {props.title}
        </button>
    );
}

EditNamesButton.propTypes = {
    title: propTypes.string.isRequired,
};

export default EditNamesButton;