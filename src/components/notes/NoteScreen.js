import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, noteDeleted } from '../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset ] = useForm(note)
    const {body, title, id} = formValues;

    const activeId = useRef(note.id); //activeID es la antigua

    useEffect(() => {
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset]) ;



    useEffect(() => {

        dispatch( activeNote( formValues.id, {...formValues}) );
    }, [formValues, dispatch]);



    const handleDelte = () => {
        dispatch(noteDeleted(id))
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                   type="text"
                   placeholder="A new idea?"
                   className="notes__title-input"
                   onChange={handleInputChange}
                   name='title'
                   value={title}
                />

                <textarea
                   placeholder="What happened today"
                   className="notes__textarea"
                   onChange={handleInputChange}
                   name='body'
                   value={body}
                ></textarea>

                {
                    (note.url) && //Si la nota.url existe (o si el url existe) poner la foto
                    (
                        <div className="notes__image"> 
                            {console.log('imagen en la db')}
                            <img 
                                src={ note.url }
                                alt="imagen"
                            />
                        </div>
                    )
                }

            </div>
            <div className="btn btn-danger" onClick={handleDelte}>
                Delete
            </div>

        </div>
    )
}
