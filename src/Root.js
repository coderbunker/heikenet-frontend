import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import HttpsRedirect from 'react-https-redirect';

const Root = () => {
    return(
        <HttpsRedirect>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HttpsRedirect>
    )
}

export default Root;