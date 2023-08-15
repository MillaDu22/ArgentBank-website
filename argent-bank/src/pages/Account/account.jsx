import React from 'react';
import { useSelector } from 'react-redux';
import EditNamesButton from '../../components/NameButton/namebutton';
import Account from '../../components/Account/account';
import { Link } from 'react-router-dom';
import './account.css';


function Profile() {
    const userName = useSelector ((state) => state.auth.userName);
    const firstName = useSelector((state) => state.auth.firstName);
    const lastName = useSelector((state) => state.auth.lastName);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const nameEditionForm = useSelector((state) => state.nameEditionForm);

    return (
        <main className="profile_wrapper">
            {isLoggedIn ? (
                <div className="center-box-profile">
                    <div className="welcome_wrapper">
                        <h1 className="welcome_text">Welcome back</h1>
                        {nameEditionForm ? (
                            <div className ="form-edit-name">
                                <div className="input_name_wrapper">
                                    <div>
                                        <label htmlFor='username' className="label-form">User name</label>
                                        <input className="input_name_user" type="text" id="username" defaultValue={userName} />
                                    </div>
                                    <div>
                                        <label htmlFor='firstname' className="label-form">First name</label>
                                        <input className="input_name" type="text" id="firstname" defaultValue={firstName} />
                                    </div>
                                    <div>
                                        <label htmlFor='lastName' className="label-form">Last name</label>
                                        <input className="input_name" type="text" id="lastname" defaultValue={lastName} />
                                    </div>
                                </div>
                                <div className="button_wrapper">
                                    <EditNamesButton title="Save" />
                                    <EditNamesButton title="Cancel" />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1 className="name_text">{userName + ' ' + lastName + '!'}</h1>
                                <EditNamesButton title="Edit Name" />
                            </div>
                        )}
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    <Account
                        title="Argent Bank Checking (x8349)"
                        amount="2,082.79"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Savings (x6712)"
                        amount="10,928.42"
                        description="Available Balance"
                    />
                    <Account
                        title="Argent Bank Credit Card (x8349)"
                        amount="184.30"
                        description="Current Balance"
                    />
                </div>
            ) : (
                <div className="redirection_wrapper">
                    <h1 className="redirection_text">
                        You are not logged in, <br /> Please identify yourself.
                    </h1>
                    <Link className="redirection_link" to="/login">
                        <h2 className="signin_text">Sign In</h2>
                    </Link>
                </div>
            )}
        </main>
    );
}

export default Profile;

