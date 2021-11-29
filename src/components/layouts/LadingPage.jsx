import ShopBtn from '../UI/ShopBtn';
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
				<ShopBtn />
			</div>
		</div>
	);
};

export default LandingPage;
