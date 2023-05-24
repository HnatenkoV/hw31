import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios";

import { store } from './store/store';
import { Provider } from 'react-redux'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'


axios.interceptors.request.use(function (config) {
    console.log('interceptor data', config);
    config.headers.MyCustomField = 'foobar'
    return config;
});


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!)


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);