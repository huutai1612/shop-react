import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import MainBtn from '../UI/MainBtn';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { closeCart } from '../../store/offCanvasSlice';

const CartList = (props) => {
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const navigateToCartHandler = () => {
		navigate('/cart');
		dispatch(closeCart());
	};

	const navigateToCheckoutHandler = () => {
		navigate('/checkout');
		dispatch(closeCart());
	};

	return (
		<Fragment>
			<ul>
				<CartItem />
				<li className='flex justify-around mt-20'>
					<h2 className='text-xl text-red-400'>Total :</h2>
					<p className='text-red-400'>
						{' '}
						$ {totalPrice.toFixed(2).toLocaleString()}
					</p>
				</li>
			</ul>
			<div className='flex justify-around mt-20'>
				{!props.isCheckout && (
					<MainBtn onClick={navigateToCartHandler}>View Cart</MainBtn>
				)}
				{!props.isCheckout && (
					<MainBtn onClick={navigateToCheckoutHandler}>CheckOut</MainBtn>
				)}
			</div>
		</Fragment>
	);
};

export default CartList;
