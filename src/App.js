import { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Homepage from './pages/Homepage';

function App() {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
