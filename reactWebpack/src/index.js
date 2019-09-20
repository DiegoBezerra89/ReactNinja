'use strict'

let React = require('react')
let ReactDOM = require('react-dom')
let Title = require('./app')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="App"]')
)