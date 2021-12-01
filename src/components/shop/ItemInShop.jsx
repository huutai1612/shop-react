import { NavLink } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/all';
import Card from '../UI/Card';
import styles from './ItemInShop.module.css';
import MainBtn from '../UI/MainBtn';

const ItemInShop = (props) => {
	return (
		<Card className={`flex flex-col relative ${styles.item}`}>
			<div className='mx-auto border-b-2'>
				<img
					className={`object-contain w-48 h-52 pb-6 ${styles.image}`}
					src={props.image}
					alt={props.title}
				/>
			</div>
			<div className='ml-4 mt-2'>
				<h2 className='text-red-400 text-lg'>{props.title}</h2>
				<p>
					${' '}
					{props.price.toLocaleString(undefined, {
						minimumFractionDigits: 2,
					})}
				</p>
			</div>
			<div className={`${styles.btn} flex justify-end items-center mr-2`}>
				<MainBtn>Detail</MainBtn>
				<BsCartPlusFill className='text-2xl text-red-400 hover:text-red-500 ml-5' />
			</div>
		</Card>
	);
};

export default ItemInShop;
