import { useSelector } from 'react-redux';

const CartItem = (props) => {
	const cartItem = useSelector((state) => state.cartItem);
	return cartItem.map((itemInCart) => {
		return (
			<li
				key={itemInCart.id}
				className='flex justify-between mt-5 overflow-auto border-b-2 pb-2 border-gray-200'>
				<div className='ml-2'>
					<img
						className='object-contain w-28 h-28'
						src={itemInCart.img}
						alt={itemInCart.title}
					/>
				</div>
				<div className='flex flex-col justify-around mr-2'>
					<h2 className='text-xl text-red-400 text-center'>
						{itemInCart.title}
					</h2>
					<p>
						<span className='text-xl text-red-400'>{itemInCart.amount}</span> x{' '}
						$ {itemInCart.price.toLocaleString()}
					</p>
				</div>
			</li>
		);
	});
};

export default CartItem;
