import { Fragment } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/product/:id' element={<ProductPage />} />
			</Routes>
			<Footer />
		</Fragment>
	);
}

export default App;
