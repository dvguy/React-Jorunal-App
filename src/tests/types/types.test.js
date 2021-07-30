import { types } from "../../components/types/types";

describe ('Pruebas de los tipos', () => {

    const pruebaTypos = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',

        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',

        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',

        notesAddNew: '[NOTES] New note',
        notesActive: '[NOTES] Set active note',
        notesLoad: '[NOTES] Load Notes',
        notesUpdated: '[NOTES] Updated note',
        notesFileUrl: '[NOTES] Updated imagen url',
        notesDelete: '[NOTES] Deleted note',
        notesLogoutCleaning: '[NOTES] Logout Cleaning'
    }

    test('Muestra el objeto correctamente', () => {
        
        expect(types).toEqual(pruebaTypos)
    });
});