import { NavLink } from 'react-router-dom';
import BreadCrumb from '../components/UI/BreadCrumb';

const Shop = (props) => {
	return (
		<section className='container mx-auto mt-4'>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<span> Shop</span>
			</BreadCrumb>
		</section>
	);
};

export default Shop;
