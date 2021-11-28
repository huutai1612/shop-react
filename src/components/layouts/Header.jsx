import { NavLink } from 'react-router-dom';
import { BiSearchAlt, IoCartOutline, GiHamburgerMenu } from 'react-icons/all';
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
					<BiSearchAlt className='text-xl cursor-pointer mr-4' />
					<div className='relative'>
						<IoCartOutline className='text-xl cursor-pointer mr-4' />
						<span
							className={`absolute -top-2 right-2 bg-red-400 px-1.5 text-xs text-white rounded-full`}>
							0
						</span>
					</div>
					<GiHamburgerMenu
						className={`text-xl cursor-pointer text-gray500 
							sm:block lg:hidden hover:shadow-lg 
						hover:text-red-400 transition ease-in-out duration-300`}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
