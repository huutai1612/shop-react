import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import MainBtn from '../UI/MainBtn';
import { useNavigate } from 'react-router';

const CartList = (props) => {
	console.log(props);
	const totalPrice = useSelector((state) => state.totalPrice);

	const navigate = useNavigate();

	const navigateToCartHandler = () => navigate('/cart');

	const navigateToCheckoutHandler = () => navigate('/checkout');

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
				<li className='flex justify-around mt-20'>
					{props.isCheckOut && (
						<div>
							<MainBtn onClick={navigateToCartHandler}>View Cart</MainBtn>
							<MainBtn onClick={navigateToCheckoutHandler}>CheckOut</MainBtn>
						</div>
					)}
				</li>
			</ul>
		</Fragment>
	);
};

export default CartList;
