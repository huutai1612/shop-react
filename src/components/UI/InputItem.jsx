import { Fragment, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/all';

const InputItem = (props) => {
	const [inputAmount, setInputAmount] = useState(0);

	const deCreaseAmountHandler = () => {
		setInputAmount((prevState) =>
			prevState <= 1 ? (prevState = 0) : --prevState,
		);
	};

	const changeAmountHandler = (event) => setInputAmount(event.target.value);

	const inCreaseAmountHandler = () => {
		setInputAmount((prevState) => ++prevState);
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
