import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<NavBar />
			<Home />
			<About />
		</React.StrictMode>
);
