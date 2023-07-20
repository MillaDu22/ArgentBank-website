import React from 'react';
import propTypes from 'prop-types';
import './account.css';

function Account(props) {
    return (
        <section className="account_wrapper">
            <div className="account_content">
                <h3 className="account_title">{props.title}</h3>
                <p className="account_amount">{'$' + props.amount}</p>
                <p className="account_description">{props.description}</p>
            </div>
            <div className="account_content cta">
                <button className="transaction_button">View transactions</button>
            </div>
        </section>
    );
}

Account.propTypes = {
    title: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
};

export default Account;

