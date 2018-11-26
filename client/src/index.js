import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/Home/LandingImage';

ReactDOM.render(<Navbar />, document.getElementById('navbar'));

ReactDOM.render(<LandingImage />, document.getElementById('landingimage'));

// Table Representation
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
