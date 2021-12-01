import { NavLink } from 'react-router-dom';

const Category = (props) => {
	return (
		<div className={`py-2`}>
			<div className={`flex justify-center`}>
				<h2 className={`uppercase text-gray-500 text-sm`}>Categories</h2>
			</div>
			<div className='flex flex-col items-start ml-2'>
				<NavLink
					to='/shop?gender=man'
					className='text-sm text-center text-red-400'>
					Man
				</NavLink>
				<NavLink
					to='/shop?gender=woman'
					className='text-sm text-center text-red-400'>
					Woman
				</NavLink>
				<NavLink
					to='/shop?gender=children'
					className='text-sm text-center text-red-400'>
					Children
				</NavLink>
			</div>
		</div>
	);
};

export default Category;
