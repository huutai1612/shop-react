import { Fragment } from 'react';

const ProductImg = (props) => {
	return (
		<Fragment>
			<img src={props.image} alt={props.title} />
		</Fragment>
	);
};

export default ProductImg;
