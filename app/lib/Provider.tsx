'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { store,persistor } from './store';
import {PersistGate} from "redux-persist/integration/react";

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
        )
};

export default Providers;
