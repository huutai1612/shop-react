import { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
