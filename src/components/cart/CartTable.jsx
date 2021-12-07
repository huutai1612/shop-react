import { useSelector } from 'react-redux';
import ItemTable from './ItemTable';

const CartTable = (props) => {
	const itemsInCart = useSelector((state) => state.cart.cartItem);
	const itemInTable = itemsInCart.map((product) => {
		return (
			<tr key={product.id} className='border-b-2'>
				<ItemTable
					id={product.id}
					image={product.image}
					title={product.title}
					amount={product.amount}
					price={product.price}
				/>
			</tr>
		);
	});

	return (
		<table className='table-fixed w-full text-center shadow-md'>
			<thead className='border-b-2 '>
				<tr>
					<th className='w-1/5 py-4'>Image</th>
					<th className='w-1/5 py-4'>Product</th>
					<th className='w-1/5 py-4'>Price</th>
					<th className='w-1/5 py-4'>Quantity</th>
					<th className='w-1/5 py-4'>Total</th>
				</tr>
			</thead>
			<tbody>{itemInTable}</tbody>
		</table>
	);
};

export default CartTable;
