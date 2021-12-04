import { Fragment, useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ProductImg from '../components/product/ProductImg';
import BreadCrumb from '../components/UI/BreadCrumb';
import ProductDescription from '../components/product/ProductDescription';
import BASE_URL from '../store/base-url';

const ProductPage = (props) => {
	const [productDetail, setProductDetail] = useState({});
	const params = useParams();
	const idProduct = params.id;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${BASE_URL}/shop/${idProduct}.json`);
				if (!response.ok)
					throw new Error('Something went error when trying to fetch data');
				const data = await response.json();
				return data;
			} catch (error) {
				return error.message;
			}
		};
		fetchData()
			.then(setProductDetail)
			.catch((error) => console.log(error));
	}, [idProduct]);

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
					<ProductImg image={productDetail.image} title={productDetail.title} />
				</div>
				<div className='col-span-2 p-2'>
					<ProductDescription
						id={idProduct}
						image={productDetail.image}
						title={productDetail.title}
						price={productDetail.price}
						description={productDetail.description}
					/>
				</div>
			</section>
		</Fragment>
	);
};

export default ProductPage;
