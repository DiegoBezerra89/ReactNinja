'use strict'

import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.querySelector('[data-js="App"]')
)

if(module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.querySelector('[data-js="App"]')
        )
    })
}