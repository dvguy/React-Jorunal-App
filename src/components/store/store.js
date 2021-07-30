import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import { authReducer } from '../reducer/authReducer';
import thunk from 'redux-thunk';
import { uiReducer } from '../reducer/uiReducer';
import { notesReducer } from '../reducer/notesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//Lo de arriba nos habilita las extesiones del dev tools y poder usar middelwares

const reducers = combineReducers({ //este objeto tendra la estructura que queramos que tenga nuestro store en general
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer
});


export const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunk))
);

//Esta configuración ayuda a hacer acciones asincronas- explicación en el video 236


