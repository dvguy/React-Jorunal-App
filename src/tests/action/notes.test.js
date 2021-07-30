import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../components/actions/notes';
import { db } from '../../components/firebase/firebase-config';
import { fileUpload } from '../../components/helpers/fileUpload';
import { types } from '../../components/types/types';

jest.mock('../../components/helpers/fileUpload', () => ({
    fileUpload: jest.fn(()=>{
        return 'https://www.jw.org/jedeon.jpg'
    })
})); //Simulamos el arranque de una funcion

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: '3puRkcbl9aaCu3xi2wxy',
            title: 'One Punch',
            body: 'Man'
        }
    }
}

let store = mockStore(initState)
 

describe('Pruebas en Notes action', () => {

    beforeEach( ()=>{
        store = mockStore(initState)
    });

    test('Debe de crear una nueva nota startNewNote', async () => {

        await store.dispatch(startNewNote());

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type:types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;

        await db.collection('TESTING/journal/notes').doc(`${docId}`).delete()


    });

    // // test('Debe cargar las notas startLoadingNotes', async () => {
    // //     jest.setTimeout(20000)
    // //     await store.dispatch(startLoadingNotes('TESTING')); //TESTING es el UID

    // //     const actions = store.getActions()

    // //     expect(actions[0]).toEqual({
    // //         type: types.notesLoad,
    // //         payload: expect.any(Array)
    // //     })

    // // });

    // // test('StartSaveNote debe de actualizar la nota ', async () => {

    // //     const note = {
    // //         id: '3puRkcbl9aaCu3xi2wxy',
    // //         title: 'title',
    // //         body: 'body'
    // //     }

    // //     await store.dispatch(startSaveNote(note));
    // //     const actions = store.getActions()

    // //     expect(actions[0].type).toBe(types.notesUpdated)


    // // });

    // test('Pruebas de action startUploading', async () => {

    //     const file = new File([],'imagen.jpg')

    //     await store.dispatch( startUploading(file) );

    // })
    
    
    
    

});