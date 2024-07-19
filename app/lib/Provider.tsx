'use client'
import React from 'react';
import { Provider } from 'react-redux';
import setupStore from "@/app/lib/store";



interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const store = setupStore();
    return(
        <Provider store={store}>
                {children}
        </Provider>
        )
};

export default Providers;
