import { Fragment } from 'react';
import styles from './ProductImg.module.css';

const ProductImg = (props) => {
	return (
		<Fragment>
			<img className={styles.img} src={props.image} alt={props.title} />
		</Fragment>
	);
};

export default ProductImg;
