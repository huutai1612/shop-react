const FilterByPrice = (props) => {
	return (
		<div className={`py-2`}>
			<div className={`flex justify-center`}>
				<h2 className={`uppercase text-gray-500 text-sm`}>Size</h2>
			</div>
			<div className='ml-2'>
				<div className='flex items-center'>
					<input type='checkbox' />
					<p className='text-sm ml-2'>Small</p>
					<span className='ml-2 text-xs'>(1963)</span>
				</div>
				<div className='flex items-center'>
					<input type='checkbox' />
					<p className='text-sm ml-2'>Medium</p>
					<span className='ml-2 text-xs'>(1963)</span>
				</div>
				<div className='flex items-center'>
					<input type='checkbox' />
					<p className='text-sm ml-2'>Large</p>
					<span className='ml-2 text-xs'>(1963)</span>
				</div>
			</div>
		</div>
	);
};

export default FilterByPrice;
