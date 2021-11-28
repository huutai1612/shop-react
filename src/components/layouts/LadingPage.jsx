import { NavLink } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = (props) => {
	return (
		<div className={`${styles.page} grid grid-cols-2`}>
			<div className={`${styles.image} h-full`}></div>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-lg font-semibold uppercase'>
					#new summer collection 2019
				</p>
				<h1 className='text-7xl uppercase'>Arrivals Sales</h1>
				<NavLink
					className='text-2xl bg-gray-900 text-white mt-8 px-4 py-2 hover:bg-gray-700 transition-all ease-in-out duration-300'
					to='shop'>
					Shop Now
				</NavLink>
			</div>
		</div>
	);
};

export default LandingPage;
