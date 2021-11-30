import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { BiSearchAlt, IoCartOutline, GiHamburgerMenu } from 'react-icons/all';
import Navigation from './Navigation';
import { useState } from 'react';
import OffCanvas from '../UI/OffCanvas';
import CartList from '../cart/CartList';
import { useSelector } from 'react-redux';

export const menuTitle = `Menu`;
export const cartTitle = `Your Cart`;

const Header = (props) => {
	const [isShowNavigation, setIsShowNavigation] = useState(false);
	const [isShowCart, setIsShowCart] = useState(false);
	const totalAmountInCart = useSelector((state) =>
		state.cartItem.reduce((total, item) => {
			return (total += item.amount);
		}, 0),
	);

	const showNavigationHandler = () => setIsShowNavigation(true);
	const closeNavigationHandler = () => setIsShowNavigation(false);
	const showCartHandler = () => setIsShowCart(true);
	const closeCartHandler = () => setIsShowCart(false);

	return (
		<header className='container mx-auto'>
			<nav className='grid gap-4 lg:grid-cols-3 sm:grid-cols-2 h-20 items-center'>
				<div className='flex justify-start'>
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
						<IoCartOutline
							onClick={showCartHandler}
							className='text-xl cursor-pointer mr-4'
						/>
						<span
							className={`absolute -top-2 right-2 bg-red-400 px-1.5 text-xs text-white rounded-full`}>
							{totalAmountInCart}
						</span>
					</div>
					<GiHamburgerMenu
						onClick={showNavigationHandler}
						className={`text-xl cursor-pointer text-gray500 
							sm:block lg:hidden hover:shadow-lg 
						hover:text-red-400 transition ease-in-out duration-300`}
					/>
					{ReactDOM.createPortal(
						<OffCanvas
							title={menuTitle}
							className='flex flex-col items-end mr-8 mt-5'
							show={isShowNavigation}
							close={closeNavigationHandler}>
							<Navigation />
						</OffCanvas>,
						document.getElementById('offcanvas'),
					)}
					{ReactDOM.createPortal(
						<OffCanvas
							title={cartTitle}
							className='mt-5'
							show={isShowCart}
							close={closeCartHandler}>
							<CartList />
						</OffCanvas>,
						document.getElementById('offcanvas'),
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
