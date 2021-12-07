import ReactDOM from 'react-dom';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
	BiSearchAlt,
	IoCartOutline,
	GiHamburgerMenu,
	AiOutlineUser,
} from 'react-icons/all';
import {
	openCart,
	closeCart,
	openNavigation,
	closeNavigation,
} from '../../store/offCanvasSlice';
import Navigation from './Navigation';
import OffCanvas from '../UI/OffCanvas';
import CartList from '../cart/CartList';
import { useSelector } from 'react-redux';
import MainBtn from '../UI/MainBtn';
import { useDispatch } from 'react-redux';
import { removeToken } from '../../store/tokenSlice';

export const menuTitle = `Menu`;
export const cartTitle = `Your Cart`;

const Header = (props) => {
	// const [isShowNavigation, setIsShowNavigation] = useState(false);
	// const [isShowCart, setIsShowCart] = useState(false);
	const isShowCart = useSelector((state) => state.offCanvas.isShowCart);
	const isShowNavigation = useSelector(
		(state) => state.offCanvas.isShowNavigation,
	);
	const totalAmountInCart = useSelector((state) =>
		state.cart.cartItem.reduce((total, item) => {
			return (total += item.amount);
		}, 0),
	);

	const dispatch = useDispatch();
	const showNavigationHandler = () => dispatch(openNavigation());
	const closeNavigationHandler = () => dispatch(closeNavigation());
	const showCartHandler = () => dispatch(openCart());
	const closeCartHandler = () => dispatch(closeCart());
	const token = useSelector((state) => state.token.token);
	const navigate = useNavigate();

	const loginHandler = () => {
		if (!token) {
			navigate('/login');
		} else {
			navigate('/profile');
		}
	};

	const signOutHandler = () => {
		dispatch(removeToken());
		navigate('/');
	};

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
				<div className='flex justify-end items-center'>
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
					<div className='flex items-center'>
						<AiOutlineUser
							onClick={loginHandler}
							className='text-xl cursor-pointer mr-4'
						/>
						{token && <MainBtn onClick={signOutHandler}>Sign out</MainBtn>}
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
							className='mt-5 overflow-auto'
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

export default React.memo(Header);
