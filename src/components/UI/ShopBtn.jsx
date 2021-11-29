import { NavLink } from 'react-router-dom';

const ShopBtn = (props) => {
	return (
		<NavLink
			className='text-2xl bg-gray-700 text-white mt-8 px-4 py-2 hover:bg-gray-900 transition-all ease-in-out duration-300'
			to='shop'>
			{props.children}
		</NavLink>
	);
};

export default ShopBtn;
