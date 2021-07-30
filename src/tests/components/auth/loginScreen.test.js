import React from 'react';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const { LoginScreen } = require("../../../components/auth/LoginScreen");
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme';
import { startGoogleLogin } from '../../../components/actions/auth';

jest.mock('../../../components/actions/auth', () => ({
    startGoogleLogin: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {},
    ui: {
        login: false,
        msgError: null
    }
}

let store = mockStore(initState);

// const wrapper = mount(
//     <Provider store={store}>
//         <MemoryRouter>
//             <LoginScreen/>
//         </MemoryRouter>
//     </Provider>
// )

describe('Pruebas en LoginScreen', () => {

    beforeEach(() =>{
        store = mockStore(initState)
    })

    // test('Debe mostrarse correctamenete', () => {

    //     expect(wrapper).toMatchSnapshot()

    // })

    test('Debe disparar la accion de startLoginScreen', () => {

    })


});