import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import './index.css';
import About from './components/About';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavBar />
		<Home />
		<About />
	</React.StrictMode>
);
