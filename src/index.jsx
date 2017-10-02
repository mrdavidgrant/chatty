// Application entrypoint.

// Load up the application styles
require('../styles/application.scss');

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './App.jsx';

ReactDOM.render(<Navbar />, document.getElementById('react-root'));
