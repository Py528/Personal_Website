import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import './App.css';
import Projects from './components/Projects';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './components/Footer';
import Intro from './components/Intro';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavBar />
		<Intro />
		<About />
		<Projects />
		<Contact />
		<Footer />
	</React.StrictMode>
);
