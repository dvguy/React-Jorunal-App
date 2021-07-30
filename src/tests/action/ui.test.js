import { act } from "react-dom/test-utils";
import { setError } from "../../components/actions/ui"
import { types } from "../../components/types/types";

describe('Purbeas de acciones UI', () => {
    
    test('Todas las acciones debe de funcionar ', () => {
        const action = setError('ERROR 404');

        expect(action).toEqual({
            type: types.uiSetError,
            payload:'ERROR 404'
        })
    })
    
})