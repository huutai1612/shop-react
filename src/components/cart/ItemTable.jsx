import { Fragment } from 'react';
import InputItem from '../UI/InputItem';

const ItemTable = (props) => {
	const total = props.amount * props.price;

	return (
		<Fragment>
			<td className='py-4 flex justify-center'>
				<img
					className='object-contain w-40 h-40'
					src={props.image}
					alt={props.title}
				/>
			</td>
			<td className='py-4'>
				<h2 className='font-semibold text-xl'>{props.title}</h2>
			</td>
			<td className='py-4'>
				<p>$ {props.price.toFixed(2).toLocaleString()}</p>
			</td>
			<td className='py-4'>
				<InputItem value={props.amount} />
			</td>
			<td className='py-4'>
				<p>$ {total.toFixed(2).toLocaleString()}</p>
			</td>
		</Fragment>
	);
};

export default ItemTable;
