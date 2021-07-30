import { authReducer } from "../../components/reducer/authReducer";
import { types } from "../../components/types/types";

describe ('Pruebas de authReducer', () => {

    test('Debe de regresar un objeto con un UID y name', () => {
        const initial = {}

        const action = {
            type: types.login,
            payload: {
                uid: 'jnodind',
                displayName: 'Enel'
            }
        }

        const validate = authReducer(initial, action)

        expect(validate).toEqual({
            uid: 'jnodind',
            name: 'Enel'
        })
    });

    test('Debe de regresar un objeto vacio', () => {

        const initial = {
            uid: 'AONDOID',
            name: 'Teach N.'
        }

        const action = {
            type: types.logout
        }

        const validate = authReducer(initial, action)

        expect(validate).toEqual({})
    });

    test('Debe de regresar un objeto inicial', () => {

        const initial = {
            uid: 'AONDOID',
            name: 'Teach N.'
        }

        const action = {
            type: types.jdjd
        }

        const validate = authReducer(initial, action)

        expect(validate).toEqual(initial);
    });
 });