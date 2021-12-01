import { NavLink } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/all';
import Card from '../UI/Card';
import styles from './ItemInShop.module.css';
import MainBtn from '../UI/MainBtn';

const ItemInShop = (props) => {
	return (
		<Card className={`flex flex-col items-center ${styles.item}`}>
			<img
				className={`object-contain w-48 h-52 ${styles.image}`}
				src={props.image}
				alt={props.title}
			/>
			<h2 className='text-red-400 text-lg'>{props.title}</h2>
			<p>
				${' '}
				{props.price.toLocaleString(undefined, {
					minimumFractionDigits: 2,
				})}
			</p>
			<div className={`${styles.btn} my-4 flex justify-center items-center`}>
				<MainBtn>Detail</MainBtn>
				<BsCartPlusFill className='text-2xl text-red-400 hover:text-yellow-400 ml-8' />
			</div>
		</Card>
	);
};

export default ItemInShop;
