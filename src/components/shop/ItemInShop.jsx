import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BsCartPlusFill } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import styles from './ItemInShop.module.css';
import MainBtn from '../UI/MainBtn';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemInShop = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const detailClickHandler = () => {
		navigate(`/product/${props.id}`);
	};

	const addItemToCartHandler = () => {
		const itemToAdd = {
			id: props.id,
			title: props.title,
			price: props.price,
			image: props.image,
			amount: 1,
		};
		dispatch(addItemToCart(itemToAdd));
		toast.success('Thank You for adding Product To Cart');
	};

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ToastContainer
					position='top-right'
					autoClose={1500}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					limit={2}
				/>,
				document.getElementById('toast'),
			)}

			<Card className={`flex flex-col relative ${styles.item}`}>
				<div className='mx-auto'>
					<img
						className={`object-contain w-48 h-52 pb-6 ${styles.image}`}
						src={props.image}
						alt={props.title}
					/>
				</div>
				<div className='ml-4 mt-2'>
					<h2 className='text-red-400 text-2xl text-center border-b-2 mb-4'>
						{props.title}
					</h2>
					<p className='text-lg'>
						${' '}
						{props.price.toLocaleString(undefined, {
							minimumFractionDigits: 2,
						})}
					</p>
				</div>
				<div
					className={`flex mt-3 justify-around items-center rounded-md shadow-lg py-4 bg-main ${styles.btn}`}>
					<MainBtn onClick={detailClickHandler}>Detail</MainBtn>
					<BsCartPlusFill
						onClick={addItemToCartHandler}
						className='text-2xl text-red-400 hover:text-red-500 ml-5'
					/>
				</div>
			</Card>
		</Fragment>
	);
};

export default ItemInShop;
