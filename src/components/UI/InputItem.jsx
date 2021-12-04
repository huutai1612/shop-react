import { Fragment, useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cartSlice';

const InputItem = (props) => {
	const [inputAmount, setInputAmount] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		if (props.getInput) {
			props.getInput(inputAmount);
		}
	}, [inputAmount, props]);

	const deCreaseAmountHandler = () => {
		if (props.id) {
			dispatch(
				removeItemFromCart({ id: props.id, amount: 1, price: props.price }),
			);
		} else {
			setInputAmount((prevState) =>
				prevState <= 1 ? (prevState = 0) : --prevState,
			);
		}
	};

	const changeAmountHandler = (event) => {
		setInputAmount(event.target.value);
	};

	const inCreaseAmountHandler = () => {
		if (props.id) {
			dispatch(addItemToCart({ id: props.id, amount: 1, price: props.price }));
		} else {
			setInputAmount((prevState) => ++prevState);
		}
	};

	return (
		<Fragment>
			<button
				onClick={deCreaseAmountHandler}
				className='border-2 border-red-300 p-2 rounded-lg hover:bg-red-400 hover:text-white'>
				<FaMinus />
			</button>
			<input
				className='text-center border-2 mx-4 w-12 h-12 focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 rounded-lg'
				type='text'
				onChange={changeAmountHandler}
				placeholder='0'
				// check if have props use props
				value={props.value ? props.value : inputAmount}
			/>
			<button
				onClick={inCreaseAmountHandler}
				className='border-2 border-red-300 p-2 rounded-lg hover:bg-red-400 hover:text-white'>
				<FaPlus />
			</button>
		</Fragment>
	);
};

export default InputItem;
