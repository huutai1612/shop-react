import { Fragment } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProductImg from '../components/product/ProductImg';
import BreadCrumb from '../components/UI/BreadCrumb';
import { DUMMY_ITEM } from '../components/shop/ShopItem';
import ProductDescription from '../components/product/ProductDescription';

const ProductPage = (props) => {
	const params = useParams();
	const idProduct = params.id;
	const product = DUMMY_ITEM.find((item) => item.id === idProduct);

	return (
		<Fragment>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<NavLink className='text-red-400' to='/shop'>
					Shop /{' '}
				</NavLink>
				<span> Product</span>
			</BreadCrumb>
			<section className='container mx-auto my-4 grid grid-cols-3 gap-2'>
				<div className='col-span-1 max-h-1/2 bg-main p-2'>
					<ProductImg image={product.image} title={product.title} />
				</div>
				<div className='col-span-2 p-2'>
					<ProductDescription
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				</div>
			</section>
		</Fragment>
	);
};

export default ProductPage;
