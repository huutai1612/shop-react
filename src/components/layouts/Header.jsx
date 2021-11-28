import { NavLink } from 'react-router-dom';
import Navigation from '../UI/Navigation';

const Header = (props) => {
	return (
		<header className='container mx-auto'>
			<nav className='grid gap-4 lg:grid-cols-3 sm:grid-cols-2 h-20 items-center'>
				<div className='flex justify-center'>
					<NavLink
						className=' uppercase font-semibold border-2 px-4 py-1 text-xl text-gray-500 border-black'
						to='/'>
						ShopMax
					</NavLink>
				</div>
				<div className='justify-around sm:hidden lg:flex'>
					<Navigation />
				</div>
				<div className='flex justify-end'>
					<h1>test</h1>
				</div>
			</nav>
		</header>
	);
};

export default Header;
