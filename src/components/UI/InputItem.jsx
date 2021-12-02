import { Fragment } from 'react';
import { FaPlus, FaMinus } from 'react-icons/all';

const InputItem = (props) => {
	return (
		<Fragment>
			<button className='border-2 p-2 rounded-lg hover:bg-red-400 hover:text-white'>
				<FaMinus />
			</button>
			<input
				className='p-4 border-2 mx-4 w-12 h-12 focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 rounded-lg'
				type='text'
				placeholder='0'
			/>
			<button className='border-2 p-2 rounded-lg hover:bg-red-400 hover:text-white'>
				<FaPlus />
			</button>
		</Fragment>
	);
};

export default InputItem;
