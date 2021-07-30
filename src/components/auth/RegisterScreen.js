import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import validator from 'validator'
import {useDispatch, useSelector} from 'react-redux';
import { removeError, setError } from '../actions/ui'; //estas son mis acciones
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    
    const {msgError} = useSelector(state => state.ui);

    const init = {
        name:'',
        email: 'fer@hotmail.com',
        password: '',
        password2:''
    };

    const [values, handleInputChange] = useForm(init);

    const {name, email, password, password2} = values;


    const isFormValid = () =>{

        if(name.trim().length === 0){
            dispatch(setError("Name is required"));
            return false;
        }else if(!validator.isEmail(email)){    
            dispatch(setError('Email is not valid'));
            return false;
        }else if ( password !== password2){
            dispatch(setError('Password should match each other'));
            return false;
        }else if(password.length < 5){
            dispatch(setError('Password should be at least 5 characters and'))
            return false;
        }

        dispatch(removeError())
        return true
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    };

    

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit = {handleRegister} className="animate__animated animate__fadeIn">

               { 
                msgError &&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
               }

                <input
                   type="text"
                   placeholder="name"
                   name="name"
                   className="auth__input"
                   onChange={handleInputChange}
                   autoComplete="off"
                />

                <input
                   type="text"
                   placeholder="email"
                   name="email"
                   className="auth__input"
                   onChange={handleInputChange}
                   autoComplete="off"
                />

                <input
                   type="password"
                   placeholder="password"
                   name="password"
                   className="auth__input"
                   onChange={handleInputChange}
                   autoComplete="off"
                />

                <input
                   type="password"
                   placeholder="password2"
                   name="password2"
                   className="auth__input"
                   onChange={handleInputChange}
                   autoComplete="off"
                />

                <button
                   className="btn btn-primary btn-block .mb-5"
                   type="submit"
                >
                    Register
                </button>

                
 
                <Link to="/auth/login" className="link">
                    Already register?
                </Link>
            </form>
        </div>
    )
}
