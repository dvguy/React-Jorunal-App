import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./ui";
import Swal from 'sweetalert2';
import { noteLogout } from "./notes";

export const satartLoginPassword = (email, password) => {
    return (dispatch) =>{
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        }).catch(e =>{
            dispatch(finishLoading())
            Swal.fire('Error', e.message, 'error')
        })
    };
};

//La funcion de arriba lo que hace es que si no se recibe una accion que regrese un objeto como el de abajo
//va a retener la infromacion hasta que se lo indiquemos mediante el otro dispatch

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            
            await user.updateProfile({displayName: name})

            dispatch(
                login(user.uid, user.displayName)
            );
        });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}
export const login = (uid, displayName) =>{
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => { 
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(loggedOut());
        dispatch(noteLogout())
    }
}

export const loggedOut = () =>({
    type: types.logout
})