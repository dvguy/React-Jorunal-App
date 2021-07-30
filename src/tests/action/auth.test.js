import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { loggedOut, login, satartLoginPassword, startLogout, startRegisterWithEmailPasswordName } from "../../components/actions/auth"
import { types } from "../../components/types/types"

import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {}

let store = mockStore(initState);


describe('Pruebas con las actinos de Auth', () => {

    beforeEach(() => {
        store = mockStore(initState)
    });

    test('Debe de crear la action login y logout', () => {

        const uid = 'AJS4'
        const displayName = 'Fernando'

        const loginAction = login(uid, displayName);
        const logoutAction = loggedOut()
        
        expect(loginAction).toEqual({
            type:types.login,
            payload: {
                uid,
                displayName
            }
        })

        expect(logoutAction).toEqual({
            type:types.logout
        })
    });

    // test('Debe realizar el startLogout ', async () => {
    //     await store.dispatch(startLogout)

    //     const action = store.getActions()

    //     expect(action[0]).toEqual({
    //         type: types.logout
    //     });

    //     expect(action[1]).toEqual({
    //         type: types.notesLogoutCleaning
    //     });
  

    // })

    // test('debe de inicial el startLoginEmailPassowrd', async () => {

    //     await store.dispatch(satartLoginPassword('test@testing.com','testing'))

    //     const actions = store.getActions()
        
    //     expect(actions[1]).toEqual({
    //         type:types.login,
    //         payload: {
    //             uid: '2OwIuaoiRRed8b8VC0xXJivZGKE2',
    //             displayName: null
    //         }
    //     })
    // })
    
    
    
})