import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import MainBtn from '../UI/MainBtn';

const CartList = (props) => {
	const totalPrice = useSelector((state) => state.totalPrice);

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
					<MainBtn>View Cart</MainBtn>
					<MainBtn>CheckOut</MainBtn>
				</li>
			</ul>
		</Fragment>
	);
};

export default CartList;
