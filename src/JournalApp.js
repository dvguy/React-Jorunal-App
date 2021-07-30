import React from 'react'
import { AppRouter } from './components/routers/AppRouter'
import { Provider } from 'react-redux' //es como el context baja la info a los niveles inferiores
import { store } from './components/store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
