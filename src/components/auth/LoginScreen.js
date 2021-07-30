import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import { satartLoginPassword, startGoogleLogin } from '../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui);

    const [values, handleInputChange ] = useForm({
        email: 'inmenso@gmail.com',
        password: 'kurapika'
    });

    const {email, password} = values;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(satartLoginPassword(email, password)) //este dispatch pasa como parametro la func login que a su vez tiene como parametro el uid y el nombre
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }


    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin} className="animate__animated animate__fadeIn">
                <input
                   type="text"
                   placeholder="email"
                   name="email"
                   className="auth__input"
                   value = {email}
                   onChange = {handleInputChange} 

                />

                <input
                   className="auth__input"
                   type="password"
                   placeholder="password"
                   name="password"
                   value = {password}
                   onChange = {handleInputChange} 

                />

                <button
                   className="btn btn-primary btn-block"
                   type="submit"
                   disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
 
                <Link to="/auth/register" className="link">
                    Create New Account
                </Link>
            </form>
        </div>
    )
}
