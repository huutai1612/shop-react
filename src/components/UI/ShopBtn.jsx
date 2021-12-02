import { NavLink } from 'react-router-dom';

const ShopBtn = (props) => {
	return (
		<NavLink
			className={` rounded-md bg-gray-700 text-white 
				hover:bg-gray-900 transition-all ease-in-out duration-300 ${props.className}`}
			to='/shop'>
			{props.children}
		</NavLink>
	);
};

export default ShopBtn;
