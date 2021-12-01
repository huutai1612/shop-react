import { NavLink } from 'react-router-dom';
import Filter from '../components/filter/Filter';
import BreadCrumb from '../components/UI/BreadCrumb';
import LandingPage from '../components/layouts/LandingPage';
import ShopItem from '../components/shop/ShopItem';

const Shop = (props) => {
	return (
		<section className='container mx-auto my-4'>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<span> Shop</span>
			</BreadCrumb>
			<LandingPage className='h-96 mb-8' />
			<div className='grid grid-cols-12 md:gap-4 sm:gap-2'>
				<Filter />
				<ShopItem />
			</div>
		</section>
	);
};

export default Shop;
