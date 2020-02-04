import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mockServer} from './Server'


mockServer();

ReactDOM.render(<App />, document.getElementById('root'));
