import './App.css';
import React, { ReactDOM } from 'react';
import Navbar from './components/NavBar';
import Intro from './components/Intro';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
		</div>
	);
}

export default App;
