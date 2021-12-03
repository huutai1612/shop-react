import styles from './Card.module.css';

const Card = (props) => {
	return (
		<div
			className={`${props.className} ${styles.card} border-2 rounded-lg cursor-pointer shadow-md p-2`}>
			{props.children}
		</div>
	);
};

export default Card;
