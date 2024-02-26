import React from 'react';
import { useSelector } from 'react-redux';
import LoginButton from '../../components/LoginButton/LoginButton';
import './login.css'

function Login() {
   const hasLoginFailed = useSelector((state) => state.hasLoginFailed);

   return (
      <main className="login_wrapper">
            <section className="login_content">
            <i className="fa fa-user-circle login_icon"></i>
            <h1 className="form-title">Sign In</h1>
            <form>
               <div className="input_login_wrapper">
                  <label className ="label-form" htmlFor="email">Email</label>
                  <input type="text" id="email" />
               </div>
               <div className="input_login_wrapper">
                  <label className ="label-form" htmlFor="password">Password</label>
                  <input type="password" id="password" autoComplete="off" />
               </div>
               <div className="remember_wrapper">
                  <input type="checkbox" id="remember" />
                  <label className ="label-form" htmlFor="remember">Remember me</label>
               </div>
               {hasLoginFailed ? (
                  <div className="error_message">
                     Error of email or password.
                  </div>
               ) : (
                  ''
               )}
               <LoginButton />
            </form>
         </section>
      </main>
   );
}
export default Login;