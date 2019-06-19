import React from 'react';
import ReactDOM from 'react-dom';
import './counter.css';
import 'bootstrap/dist/css/bootstrap.css';
import SecondsCounter from './SecondsCounter.js';

let counter = 0;

setInterval(function(){
    ReactDOM.render(<SecondsCounter seconds={counter}/>, document.getElementById('root'));
    counter += 1;
},
1000);