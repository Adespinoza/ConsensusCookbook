import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import Navbar from './components/Navbar/Navbar';
import LandingImage from './components/Home/LandingImage';
import RecipeBoxContainer from './components/RecipeBox/RecipeBoxContainer';

// NavBar representation 
ReactDOM.render(<Navbar />, document.getElementById('navbar'));

// Carousel Representation
ReactDOM.render(<LandingImage />, document.getElementById('landingimage'));

// Recipe Instance
ReactDOM.render(<RecipeBoxContainer />, document.getElementById('RecipeBoxContainer'));

// Table Representation
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
