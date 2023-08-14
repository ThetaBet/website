import React from "react";
import ReactDOM from "react-dom";
import App from './App'

const rootId = document.querySelector('#root');

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    rootId
)

if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
            rootId
        )
    })
}