import Category from './Category';
import FilterBySize from './FilterBySize';

const Filter = (props) => {
	return (
		<div
			className={`col-span-3 border-2 p-4 flex flex-col divide-y-2 min-h-full`}>
			<Category />
			<FilterBySize />
		</div>
	);
};

export default Filter;
