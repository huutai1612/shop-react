import { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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
