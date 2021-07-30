import React, { useEffect, useState } from 'react'
import { AuthRouter } from './AuthRouter'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { JournalScreen } from '../journal/JournalScreen';
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setisLoggedIn] = useState(false);


    useEffect(() =>{
       
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setisLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );

            } else {
                setisLoggedIn( false );
            }

            setChecking(false);

        });
    },[dispatch, setChecking, setisLoggedIn]);

    //EL CODIGO DE ARRIBA LOGRA QUE SI TENEMOS UN USUARIO YA REGISTRADO NO SE BORRE AL RECARGAR LA PAGINA

    if (checking){
        return(            
          <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter isAuthenticated={isLoggedIn} path="/auth" component= {AuthRouter}/>
                    <PrivateRouter isAuthenticated={isLoggedIn} exact path="/" component={JournalScreen}/>
                </Switch>
            </div>
        </Router>
            
        
    )
}
