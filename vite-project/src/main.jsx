import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import './App.css';
import Projects from './components/Projects';
import '@fortawesome/fontawesome-svg-core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavBar />
		<Home />
		<About />
		<Projects />
		<Contact />
	</React.StrictMode>
);
