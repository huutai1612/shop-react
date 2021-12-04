import { Fragment } from 'react';
import { AiTwotoneStar } from 'react-icons/all';
import InputItem from '../UI/InputItem';
import MainBtn from '../UI/MainBtn';
import ShopBtn from '../UI/ShopBtn';

const ProductDescription = (props) => {
	const price = props.price && props.price.toFixed(2).toLocaleString();
	return (
		<Fragment>
			<div className='flex my-2 ml-2 items-center'>
				<h1 className='text-red-400 text-4xl ml-2 mr-10'>{props.title}</h1>
				<AiTwotoneStar className='text-yellow-400' />
				<AiTwotoneStar className='text-yellow-400' />
				<AiTwotoneStar className='text-yellow-400' />
				<AiTwotoneStar className='text-yellow-400' />
				<AiTwotoneStar />
				<span>&nbsp; (156 reviews)</span>
			</div>
			<div className='bg-main my-2 py-2 flex justify-around items-center'>
				<p className='text-2xl'>Price :</p>
				<h2 className=' text-red-400 text-5xl'>$ {price}</h2>
			</div>
			<div className='my-2'>
				<p className='text-lg'>{props.description}</p>
			</div>
			<div className='my-2 flex justify-end mr-16'>
				<InputItem />
			</div>
			<div className='flex justify-around my-8'>
				<ShopBtn className='py-2 px-6 rounded-md text-xl mr-14'>
					Continue to Shopping
				</ShopBtn>
				<MainBtn className='ml-14'>Add to Cart</MainBtn>
			</div>
		</Fragment>
	);
};

export default ProductDescription;
