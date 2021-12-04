import { useEffect, useState } from 'react';
import ItemInShop from './ItemInShop';
import BASE_URL from '../../store/base-url';

const transformData = (data) => {
	const result = [];
	for (let key in data) {
		result.push({
			id: key,
			title: data[key].title,
			image: data[key].image,
			description: data[key].description,
			price: data[key].price,
		});
	}
	return result;
};

const ShopItem = (props) => {
	const [itemFetch, setItemFetch] = useState([]);
	const product = itemFetch.map((product) => (
		<ItemInShop
			key={product.id}
			id={product.id}
			title={product.title}
			price={product.price}
			image={product.image}
		/>
	));

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${BASE_URL}/shop.json`);
				if (!response.ok)
					throw new Error('Something went error when trying to fetch data');
				const data = await response.json();
				return data;
			} catch (error) {
				return error.message;
			}
		};
		fetchData()
			.then(transformData)
			.then(setItemFetch)
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='cols-start-4 col-span-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
			{product}
		</div>
	);
};

export default ShopItem;
