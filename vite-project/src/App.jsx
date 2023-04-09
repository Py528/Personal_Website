import './App.css';
import React, { ReactDOM } from 'react';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';

function App() {
	return (
		<div className="App bg-neutral-50 h-screen">
			<Navbar />
			<Intro />
			<About />
		</div>
	);
}

export default App;
